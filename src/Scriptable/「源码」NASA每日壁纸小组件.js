// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: star-and-crescent;
// 更多玩机技巧可关注@Nandelion
// 脚本运行需要NASA API的Access Key密钥，请前往 https://api.nasa.gov/ 获取

// 判断是否为App内运行，是则提示输入参数，自用Access Key：4eO1QhjcEK6HFqo7uHdKjGeLSZGMsTPhGyx04mll
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
	// 声明弹窗
	let alert = new Alert()
	alert.title = "请填写参数"
	alert.message = "Access Key密钥请前往 https://api.nasa.gov/ 获取"
	alert.addTextField("Access Key", accessToken || "")
	alert.addAction("确定")
	let response = await alert.presentAlert()
	// 获取输入的参数
	let userInput1 = alert.textFieldValue(0).trim()
	// 更新缓存值
	Keychain.set("accessToken", userInput1)
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
	let dirPath = fm.joinPath(fm.documentsDirectory(), "NASA每日壁纸")
	if (!fm.fileExists(dirPath)) {
		fm.createDirectory(dirPath)
	}
	let filePathImage = fm.joinPath(dirPath, "NASA每日壁纸.jpeg")
	// 判断当前日期与缓存日期是否一致，不一致则更新图像
	let bgImg, Title
	if (time !== cachedTime || !fm.fileExists(filePathImage)) {
		// 获取图像
		const imgData = await getImgUrl()
		try {
			bgImg = await getPic(imgData)
			Title = imgData[0] || "NASA每日壁纸"
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
		headerIcon.url = `${imgData[1]}`
		iconStack.useDefaultPadding()
		iconStack.addSpacer()
		// 更新链接
		Script.setShortcutOutput(`${headerIcon.url}`)
		Keychain.set("url", `${headerIcon.url}`)
		Keychain.set("Title", `${Title}`)
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
		Title = Keychain.get("Title") || "NASA每日壁纸"
		iconStack.useDefaultPadding()
		iconStack.addSpacer() 
	}
	widget.addSpacer()
	// 显示日期
	const timeText = widget.addText(time)
	timeText.font = Font.boldRoundedSystemFont(16)
	timeText.textColor = Color.white()
	// 显示标题
	const titleText = widget.addText(`${Title}`)
	titleText.font = Font.boldRoundedSystemFont(16)
	titleText.textColor = Color.white()
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
	const endpoint = 'https://api.nasa.gov/planetary/apod'
	let queryString = ''
	const params = {
		api_key: accessToken,
	}
	for (const [key, value] of Object.entries(params)) {
		queryString += `${key}=${value}&`
	}
	const imgObjectUrl = `${endpoint}?${queryString.slice(0, -1)}`

	try {
		const imgObjectRequest = new Request(imgObjectUrl)
		const imgObjectData = await imgObjectRequest.loadJSON()
		
		const copyright = await imgObjectData.copyright
		res.push(copyright)
		
		const imgUrl = await imgObjectData.url
		res.push(imgUrl)

		return res
	} catch (err) {
        console.log("getImgUrl Error:", err)
		return null
	}
}

async function getPic(imgData) {
	try {
		const imgUrl = imgData[1]
		const imgRequest = new Request(imgUrl)
		const img = await imgRequest.loadImage()
		return img
	} catch (err) {
		console.log("getPic Error:", err)
		return null
	}
}