// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: newspaper;
// 更多内容请关注公众号 @Nandelion
// 故宫博物院壁纸栏目：https://www.dpm.org.cn/lights/royal.html

// 使用本地缓存路径
const fileManager = FileManager.local()
const cacheDir = fileManager.documentsDirectory()

// 定义文本缓存路径
const verseCacheKey = "today_poem_verse"
const verseCachePath = fileManager.joinPath(cacheDir, verseCacheKey)

// 定义图片缓存路径
const imageCacheKey = "today_poem_bg_image"
const imageCachePath = fileManager.joinPath(cacheDir, imageCacheKey)

// 下载文本
const loadVerse = async () => {
	let verseData = null

	// 先尝试从网络加载
	try {
		verseData = await (await new Request('https://v1.jinrishici.com/all.json')).loadJSON()

		// 保存到缓存
		fileManager.writeString(verseCachePath, JSON.stringify(verseData))
	} catch (error) {
		// 网络加载失败，尝试从缓存加载
		if (fileManager.fileExists(verseCachePath)) {
			try {
				verseData = JSON.parse(fileManager.readString(verseCachePath))
			} catch (e) {
				verseData = null // 缓存解析失败，置为 null
			}
		} else {
			verseData = null // 没有缓存，置为 null
		}
	}

	// 如果最终没有加载到数据，则返回默认值
	return verseData ?? { content: "加载失败", origin: "加载失败" }
}

const { content: randomVerse, origin: title } = await loadVerse()

// 下载图片
const loadRandomBg = async () => {
	const links = [
		'https://www.dpm.org.cn/download/lights_image/id/236928/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237632/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/236940/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/236947/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237419/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237423/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237430/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237676/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237440/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237585/img_size/8',
		'https://www.dpm.org.cn/download/lights_image/id/237583/img_size/8'
	]
	const index = new Date().getDate() % 11
	const randomImgURL = links[index]

	// 转换图片链接为网页链接
	const getUrl = (Url) => {
		// 从URL中提取ID
		const idMatch = Url.match(/id\/(\d+)\//)
		if (!idMatch) return Url
		const id = idMatch[1]
		// 构造新的URL
		return `https://www.dpm.org.cn/light/${id}.html`
	}
	const Url = getUrl(randomImgURL)

	// 检查缓存
	if (fileManager.fileExists(imageCachePath)) {
		const cacheDate = fileManager.creationDate(imageCachePath)
		const today = new Date()
		// 判断是否是同一天
		if (cacheDate.getFullYear() === today.getFullYear() &&
			cacheDate.getMonth() === today.getMonth() &&
			cacheDate.getDate() === today.getDate()) {
			// 缓存未过期，直接加载
			return [Image.fromFile(imageCachePath), Url]
		} else {
			// 缓存已过期，删除
			fileManager.remove(imageCachePath)
		}
	}

	// 从网络加载
	try {
		const image = await new Request(randomImgURL).loadImage()

		// 保存到缓存
		fileManager.writeImage(imageCachePath, image)

		return [image, Url]
	} catch (error) {
		// 网络加载失败，尝试从缓存加载
		if (fileManager.fileExists(imageCachePath)) {
			return [Image.fromFile(imageCachePath), Url]
		} else {
			return [null, Url] // 返回 null 表示没有可用的图片
		}
	}
}

// 获取当前日期
const today = new Date()
const day = today.getDate()
const weekday = today.toLocaleString('zh-CN', { weekday: 'long' })

// 声明小组件
const basewidget = new ListWidget()
basewidget.setPadding(0, 0, 0, 0)
const widget = basewidget.addStack()
widget.setPadding(16, 0, 0, 16)
widget.layoutVertically()
const [bgImage, bgUrl] = await loadRandomBg()
widget.backgroundImage = bgImage

// 添加图标
const iconStack = widget.addStack()
const iconSymbol = SFSymbol.named("paperplane.fill")
const headerIcon = iconStack.addImage(iconSymbol.image)
headerIcon.imageSize = new Size(18, 18)
headerIcon.tintColor = new Color("#050F01")
headerIcon.url = bgUrl
iconStack.setPadding(0, 16, 0, 0)
iconStack.addSpacer()
widget.addSpacer()

// 根据尺寸显示不同内容
if (config.widgetFamily == 'large') {
	const bottomStack = widget.addStack()
	bottomStack.size = new Size(0, 88)

	// 显示时间
	const dateStack = bottomStack.addStack()
	dateStack.size = new Size(72, 80)
	dateStack.layoutVertically()
	const dayStack = dateStack.addStack()
	dayStack.addSpacer()
	const dayText = dayStack.addText(`${day}`)
	dayText.textColor = new Color("#050F01")
	dayText.font = new Font('PangMenZhengDao-Cu', 42)
	dayStack.addSpacer()
	const weekdayStack = dateStack.addStack()
	weekdayStack.addSpacer()
	const weekdayText = weekdayStack.addText(`${weekday}`)
	weekdayText.textColor = new Color("#050F01")
	weekdayText.font = new Font('PangMenZhengDao-Cu', 12)
	weekdayStack.addSpacer()

	// 显示内容
	const verseStack = bottomStack.addStack()
	verseStack.layoutVertically()
	verseStack.addSpacer()
	const titleText = verseStack.addText(`《${title}》`)
	titleText.lineLimit = 1
	titleText.textColor = new Color("#050F01")
	titleText.font = new Font('PangMenZhengDao-Cu', 16)
	const verseText = verseStack.addText(randomVerse)
	verseText.lineLimit = 2
	verseText.textColor = new Color("#050F01")
	verseText.font = new Font('PangMenZhengDao-Cu', 16)
	verseStack.addSpacer()
}
else {
	const bottomStack = widget.addStack()
	bottomStack.size = new Size(0, 88)
	bottomStack.layoutVertically()
	bottomStack.setPadding(0, 16, 16, 0)
	bottomStack.addSpacer()

	// 显示内容
	const titleText = bottomStack.addText(`《${title}》`)
	titleText.lineLimit = 1
	titleText.textColor = new Color("#050F01")
	titleText.font = new Font('PangMenZhengDao-Cu', 16)
	const verseText = bottomStack.addText(randomVerse)
	verseText.lineLimit = 2
	verseText.textColor = new Color("#050F01")
	verseText.font = new Font('PangMenZhengDao-Cu', 16)
}

// 设置刷新时间
basewidget.refreshAfterDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1)

Script.setWidget(basewidget)
Script.complete()