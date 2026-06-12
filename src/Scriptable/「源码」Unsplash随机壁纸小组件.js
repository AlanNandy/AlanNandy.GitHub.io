// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: image;
// 更多内容请关注公众号 @Nandelion
// 脚本运行需要Unsplash API的Access Key密钥，请前往 https://unsplash.com/oauth/applications 注册开发者获取

// 判断是否为App内运行，是则提示输入参数，自用Access Key：cuJ08l4aW1Dyl37io2g0-zWjw_Bth62s1wHxXQF5CI8
// 获取传入的 Parameters，默认值为空字符串
const parameters = args.plainTexts[0] || ""
if (parameters !== "快捷指令" && config.runsInApp) {
	// 获取缓存值
	let accessToken
	try {
		accessToken = Keychain.get("accessToken")
		if (accessToken === null || accessToken === undefined) {
			accessToken = ""
		}
	} catch (error) {
		console.log(error)
		accessToken = ""
	}
	let tag
	try {
		tag = Keychain.get("tag")
		if (tag === null || tag === undefined) {
			tag = ""
		}
	} catch (error) {
		console.log(error)
		tag = "Wallpapers,Nature"
	}
	// 声明弹窗
	let alert = new Alert()
	alert.title = "请填写参数"
	alert.message = "① Access Key密钥请前往 https://unsplash.com/oauth/applications 注册开发者获取；\n② Tag英文关键词会决定背景图片的内容，默认为Wallpapers,Nature，可以用,英文逗号来分隔关键词；"
	alert.addTextField("Access Key", accessToken || "")
	alert.addTextField("Tag", tag || "Wallpapers,Nature")
	alert.addAction("确定")
	let response = await alert.presentAlert()
	// 获取输入的参数
	let userInput1 = alert.textFieldValue(0).trim()
	let userInput2 = alert.textFieldValue(1).trim()
	// 更新缓存值
	Keychain.set("accessToken", userInput1)
	Keychain.set("tag", userInput2)
}

// 脚本执行
const widget = await createWidget()
Script.setWidget(widget)

// 创建组件
async function createWidget() {
	// 声明小组件
	const basewidget = new ListWidget()
	basewidget.setPadding(0, 0, 0, 0)
	const widget = basewidget.addStack()
	widget.setPadding(16, 16, 16, 16)
	widget.layoutVertically()
	// 获取当前日期与缓存日期
	const time = new Date().toLocaleString('zh', {
		month: 'short',
		day: 'numeric',
		weekday: 'short'
	})
	let cachedTime
	try {
		cachedTime = Keychain.get("cachedTime")
		if (cachedTime === null || cachedTime === undefined) {
			cachedTime = "defaultTime"
		}
	} catch (error) {
		console.log(error)
		cachedTime = "defaultTime"
	}
	let fm = FileManager.local()
	let dirPath = fm.joinPath(fm.documentsDirectory(), "Unsplash随机壁纸")
	if (!fm.fileExists(dirPath)) {
		fm.createDirectory(dirPath)
	}
	let filePathImage = fm.joinPath(dirPath, "Unsplash随机壁纸.jpeg")
	// 判断当前日期与缓存日期是否一致，不一致则更新图像
	let bgImg
	if (time !== cachedTime || !fm.fileExists(filePathImage)) {
		// 获取图像
		const imgData = await getImgUrl()
		try {
			bgImg = await getRandomPic(imgData)
		} catch (error) {
			console.log(error)
		}
		// 更新图像
		fm.writeImage(filePathImage, bgImg)
		if (fm.fileExists(filePathImage)) {
			console.log("壁纸保存成功!")
		} else {
			console.log("壁纸保存失败。")
		}
		// Safari跳转到原尺寸图片链接地址,以便浏览细节或者执行保存等操作
		const iconStack = widget.addStack()
		const iconSymbol = SFSymbol.named('paperplane.fill')
		const headerIcon = iconStack.addImage(iconSymbol.image)
		headerIcon.imageSize = new Size(18, 18)
		headerIcon.tintColor = Color.white()
		headerIcon.url = `${imgData[0].raw}`
		iconStack.useDefaultPadding()
		iconStack.addSpacer()
		// 更新链接
		Script.setShortcutOutput(`${imgData[0].raw}`)
		Keychain.set("url", `${imgData[0].raw}`)
		// 更新日期
		Keychain.set("cachedTime", time)
	} else {
		// 读取图像
		bgImg = fm.readImage(filePathImage)
		// 获取链接
		const iconStack = widget.addStack()
		const iconSymbol = SFSymbol.named('paperplane.fill')
		const headerIcon = iconStack.addImage(iconSymbol.image)
		headerIcon.imageSize = new Size(18, 18)
		headerIcon.tintColor = Color.white()
		headerIcon.url = Keychain.get("url")
		Script.setShortcutOutput(`${headerIcon.url}`)
		iconStack.useDefaultPadding()
		iconStack.addSpacer()
	}
	widget.addSpacer()
	// 显示日期
	const timeText = widget.addText(time)
	timeText.font = Font.boldRoundedSystemFont(16)
	timeText.textColor = Color.white()
	timeText.leftAlignText()
	// 使背景图像变灰
	const getGreyImg = async (img, light = 0.1) => {
		const ctx = new DrawContext()
		ctx.size = img.size
		ctx.drawImageInRect(img, new Rect(0, 0, img.size['width'], img.size['height']))
		ctx.setFillColor(new Color("#000000", light))
		ctx.fillRect(new Rect(0, 0, img.size['width'], img.size['height']))
		return await ctx.getImage()
	}
	let greyBgImg = await getGreyImg(bgImg)
	// 将处理后的图像设置为widget的背景
	widget.backgroundImage = greyBgImg
	// 设置刷新时间
	const today = new Date()
	basewidget.refreshAfterDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1)
	return basewidget
}

// 请求图像数据
async function getImgUrl() {
	const res = []
	const accessToken = Keychain.get("accessToken") || ""
	const label = await randomLabel()
	const selectedItem = await randomNumber()
	const endpoint = 'https://api.unsplash.com/search/photos/'
	let queryString = ''
	const params = {
		client_id: accessToken,
		query: label,
		page: 1,
		per_page: 24,
		// 竖屏portrait, 横屏landscape, 方形squarish, 不指定时显示全部
		orientation: 'squarish',
		order_by: 'relevant'
	}
	for (const [key, value] of Object.entries(params)) {
		queryString += `${key}=${value}&`
	}
	const imgObjectUrl = `${endpoint}?${queryString.slice(0, -1)}`
	try {
		const imgObjectRequest = new Request(imgObjectUrl)
		const imgObjectData = await imgObjectRequest.loadJSON()
		const imgUrl = await imgObjectData.results[selectedItem].urls
		res.push(imgUrl)
		return res
	} catch (error) {
		console.log(error)
		return null
	}
}

// 随机获取图片tag（将想要显示的图片tag加入数组label）
async function randomLabel() {
	const tag = Keychain.get("tag") || "Wallpapers,Nature"
	const tagArray = tag.split(",")
	const label = tagArray
	const len = label.length
	return label[Math.floor(Math.random() * len)]
}

// 随机选取页面中的一项
async function randomNumber() {
	const selectedItem = Math.floor(Math.random() * 24)
	return selectedItem
}

// 根据label从Unsplash随机获取一张图片
async function getRandomPic(imgData) {
	try {
		const imgUrl = imgData[0].regular
		const imgRequest = new Request(imgUrl)
		const img = await imgRequest.loadImage()
		return img
	} catch (error) {
		console.log('未获取到Unsplash随机壁纸，请检查参数及格式，尤其是Access Key是否填写正确。')
		console.log(error)
		return null
	}
}