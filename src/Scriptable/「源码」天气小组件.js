// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: sun;
// 更多内容请关注公众号 @Nandelion

// 判断是否为App内运行，是则提示输入参数
// 自用Unsplash的Access Key：cuJ08l4aW1Dyl37io2g0-zWjw_Bth62s1wHxXQF5CI8
// 自用百度地图的Access Key：ySxhz4dcfFpbqsbCg3VFqPWbB47CVicj
// 自用和风天气的Access Key：8c2b4b1b5a124221ae883fedaecc091b
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
	let accessTokenbaiduMap
	try {
		accessTokenbaiduMap = Keychain.get("accessTokenbaiduMap")
		if (accessTokenbaiduMap === null || accessTokenbaiduMap === undefined) {
			accessTokenbaiduMap = ""
		}
	} catch (error) {
		console.log(error)
		accessTokenbaiduMap = ""
	}
	let accessTokenqweather
	try {
		accessTokenqweather = Keychain.get("accessTokenqweather")
		if (accessTokenqweather === null || accessTokenqweather === undefined) {
			accessTokenqweather = ""
		}
	} catch (error) {
		console.log(error)
		accessTokenqweather = ""
	}
	let tag
	try {
		tag = Keychain.get("tag")
		if (tag === null || tag === undefined) {
			tag = ""
		}
	} catch (error) {
		console.log(error)
		tag = "Weather"
	}
	// 声明弹窗
	let alert = new Alert()
	alert.title = "请填写参数"
	alert.message = "① 获取Unsplash密钥请前往：\n https://unsplash.com/oauth/applications \n② 获取百度地图密钥请前往：\n https://lbsyun.baidu.com/ \n③ 获取和风天气密钥请前往：\n https://qweather.com/ \n④ 以上密钥均为必填项。"
	alert.addTextField("Unsplash的Access Key", accessToken || "")
	alert.addTextField("百度地图的Access Key", accessTokenbaiduMap || "")
	alert.addTextField("和风天气的Access Key", accessTokenqweather || "")
	alert.addAction("确定")
	let response = await alert.presentAlert()
	// 获取输入的参数
	let userInput1 = alert.textFieldValue(0).trim()
	let userInput2 = alert.textFieldValue(1).trim()
	let userInput3 = alert.textFieldValue(2).trim()
	// 更新缓存值
	Keychain.set("accessToken", userInput1)
	Keychain.set("accessTokenbaiduMap", userInput2)
	Keychain.set("accessTokenqweather", userInput3)
	Keychain.set("tag", "Weather")
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
		weekday: 'short',
		hour: 'numeric'
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
		// 获取天气与地点
		const locationFromDevice = await Location.current()
		const locationArr = [locationFromDevice.longitude, locationFromDevice.latitude]
		const qweatherApiKey = Keychain.get("accessTokenqweather") || ""
		const totalWeatherData = await getWeatherData(locationArr, qweatherApiKey)
		const weatherData = totalWeatherData.chinese
		const baiduMapApiKey = Keychain.get("accessTokenbaiduMap") || ""
		const realLocationText = await getRealLocation(locationArr, baiduMapApiKey)
		const weatherText = weatherData.now.text + ' ' + weatherData.now.temp.toString() + '° 风力' + weatherData.now.windScale.toString() + '级'
		// 更新图片标签
		const weatherDataEN = totalWeatherData.english
		const weatherPictureTag = weatherDataEN.now.text.toString()
		Keychain.set("tag", weatherPictureTag)
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
		// 显示文本
		widget.addSpacer()
		const Text1 = widget.addText(new Date().toLocaleString('zh', {
			month: 'short',
			day: 'numeric',
			weekday: 'short'
		}))
		Text1.font = Font.boldRoundedSystemFont(16)
		Text1.textColor = Color.white()
		Text1.leftAlignText()
		const Text2 = widget.addText(realLocationText + ' ' + weatherText)
		Text2.font = Font.boldRoundedSystemFont(16)
		Text2.textColor = Color.white()
		Text2.leftAlignText()
		// 更新文本
		Keychain.set("Text2", realLocationText + ' ' + weatherText)
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
		// 显示文本
		widget.addSpacer()
		const Text1 = widget.addText(new Date().toLocaleString('zh', {
			month: 'short',
			day: 'numeric',
			weekday: 'short'
		}))
		Text1.font = Font.boldRoundedSystemFont(16)
		Text1.textColor = Color.white()
		Text1.leftAlignText()
		let text2Value
		try {
			text2Value = Keychain.get("Text2")
			if (text2Value === null || text2Value === undefined) {
				text2Value = ""
			}
		} catch (error) {
			console.log("Error reading Keychain value:", error)
			text2Value = ""
		}
		const Text2 = widget.addText(text2Value)
		Text2.font = Font.boldRoundedSystemFont(16)
		Text2.textColor = Color.white()
		Text2.leftAlignText()
	}
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
	const tag = Keychain.get("tag") || "Weather"
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

async function getWeatherData(locationArr, key) {
	const baseUrl = `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${locationArr.join(',')}`

	try {
		const chineseRes = new Request(`${baseUrl}&lang=zh-hans`)
		const chineseData = await chineseRes.loadJSON()

		const englishRes = new Request(`${baseUrl}&lang=en`)
		const englishData = await englishRes.loadJSON()

		return {
			chinese: chineseData,
			english: englishData
		}
	} catch (error) {
		console.log('获取天气数据失败:', error)
		throw error
	}
}

async function getRealLocation(locationArr, ak) {
	const location = locationArr.reverse().join(',')
	const url = `http://api.map.baidu.com/reverse_geocoding/v3/?output=json&coordtype=wgs84ll&ak=${ak}&location=${location}`
	const res = new Request(url)
	const json = await res.loadJSON()
	const realLocation = [
		json.result.addressComponent.district
	]
	return realLocation
}