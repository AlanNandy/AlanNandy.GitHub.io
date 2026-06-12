// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: film;
// 更多玩机技巧可关注@Nandelion

const fileManager = FileManager.local()
const cacheDir = fileManager.documentsDirectory()
const imageCachePath = fileManager.joinPath(cacheDir, "movie_wallpaper_image")
const infoCachePath = fileManager.joinPath(cacheDir, "movie_wallpaper_info")

// 获取今天的日期
const today = new Date()
const beijingTime = today.toLocaleString("zh", {
	month: "short",
	day: "numeric",
	weekday: "short"
})
const day = today.getDate()
const weekday = today.toLocaleDateString("zh", { weekday: "long" })

// 检查缓存的日期和信息
let cachedInfo = fileManager.fileExists(infoCachePath)
	? JSON.parse(fileManager.readString(infoCachePath))
	: null

let Img, title, link, quotes, ImgURL

// 定义 getGreyImg 函数
const getGreyImg = async (img, light = 0.1) => {
	const ctx = new DrawContext()
	ctx.size = img.size
	ctx.drawImageInRect(img, new Rect(0, 0, img.size['width'], img.size['height']))
	ctx.setFillColor(new Color("#000000", light))
	ctx.fillRect(new Rect(0, 0, img.size['width'], img.size['height']))
	return await ctx.getImage()
}

if (cachedInfo && cachedInfo.date === beijingTime && fileManager.fileExists(imageCachePath)) {
	// 如果缓存日期是今天且图片存在，直接使用缓存
	Img = fileManager.readImage(imageCachePath)
	title = cachedInfo.title
	link = cachedInfo.link
	quotes = cachedInfo.quotes
	ImgURL = cachedInfo.ImgURL
	Script.setShortcutOutput(`${ImgURL}`)
} else {
	// 如果缓存过期或不存在，进行网络请求
	const response = await getData()

	// 使用正确的字段名进行赋值，并添加默认值
	title = response.name || "电影日历"
	link = response.link || "#"
	quotes = response.quotes || ""
	ImgURL = response.randomImgURL || "#"
	Script.setShortcutOutput(`${ImgURL}`)
	const ImgURLw1280 = response.randomImgURLw1280 || ""

	// 下载图片并缓存
	Img = await loadImage(ImgURLw1280)
	fileManager.writeImage(imageCachePath, Img)

	// 更新缓存的信息
	const infoToCache = {
		date: beijingTime,
		title: title,
		link: link,
		quotes: quotes,
		ImgURL: ImgURL,
	}
	fileManager.writeString(infoCachePath, JSON.stringify(infoToCache))
}

// 创建小组件
const basewidget = new ListWidget()
basewidget.setPadding(0, 0, 0, 0)
const widget = basewidget.addStack()
widget.setPadding(16, 0, 0, 16)
widget.layoutVertically()
const greyImg = await getGreyImg(Img)
widget.backgroundImage = greyImg

// 添加图标
const iconStack = widget.addStack()
const iconSymbol = SFSymbol.named("paperplane.fill")
const headerIcon = iconStack.addImage(iconSymbol.image)
headerIcon.imageSize = new Size(18, 18)
headerIcon.tintColor = Color.white()
headerIcon.url = link
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
	dayText.textColor = Color.white()
	dayText.font = Font.boldRoundedSystemFont(42)
	dayStack.addSpacer()
	const weekdayStack = dateStack.addStack()
	weekdayStack.addSpacer()
	const weekdayText = weekdayStack.addText(`${weekday}`)
	weekdayText.textColor = Color.white()
	weekdayText.font = Font.boldRoundedSystemFont(12)
	weekdayStack.addSpacer()

	// 显示内容
	const quotesStack = bottomStack.addStack()
	quotesStack.layoutVertically()
	quotesStack.addSpacer()
	const titleText = quotesStack.addText(`《${title}》`)
	titleText.lineLimit = 1
	titleText.textColor = Color.white()
	titleText.font = Font.boldRoundedSystemFont(16)
	const quotesText = quotesStack.addText(quotes)
	quotesText.lineLimit = 2
	quotesText.textColor = Color.white()
	quotesText.font = Font.boldRoundedSystemFont(16)
	quotesStack.addSpacer()
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
	titleText.textColor = Color.white()
	titleText.font = Font.boldRoundedSystemFont(16)
	const quotesText = bottomStack.addText(quotes)
	quotesText.lineLimit = 2
	quotesText.textColor = Color.white()
	quotesText.font = Font.boldRoundedSystemFont(16)
}

// 设置刷新时间
basewidget.refreshAfterDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1)

Script.setWidget(basewidget)
Script.complete()

// 获取数据函数
async function getData() {
	const target = 'https://howdz.deno.dev/movieLines'
	const { img1, img2, img3, img4, link, name, quotes } = await (new Request(target)).loadJSON()
	const randomImgArr = [img1, img2, img3, img4].filter(Boolean)
	const randomImgIdx = ~~(Math.random() * randomImgArr.length)
	const randomImgURL = randomImgArr[randomImgIdx]
	const randomImgURLw1280 = randomImgURL.replace('original', 'w1280')
	return { name, link, quotes, randomImgURL, randomImgURLw1280 }
}

// 加载图片函数
async function loadImage(url) {
	return await new Request(url).loadImage()
}