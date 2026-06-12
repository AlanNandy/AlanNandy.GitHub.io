// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: image;
// 更多内容请关注公众号 @Nandelion

const fileManager = FileManager.local()
const cacheDir = fileManager.documentsDirectory()
const imageCachePath = fileManager.joinPath(cacheDir, "bing_wallpaper_image")
const infoCachePath = fileManager.joinPath(cacheDir, "bing_wallpaper_info")

// 获取今天的日期
const today = new Date()
const beijingTime = today.toLocaleString("zh", {
    month: "short",
    day: "numeric",
    weekday: "short"
})

// 检查缓存的日期和信息
let cachedInfo = fileManager.fileExists(infoCachePath)
    ? JSON.parse(fileManager.readString(infoCachePath))
    : null

let Img, title, ImgURL

if (cachedInfo && cachedInfo.date === beijingTime && fileManager.fileExists(imageCachePath)) {
    // 如果缓存日期是今天且图片存在，直接使用缓存
    Img = fileManager.readImage(imageCachePath)
    title = cachedInfo.title
	ImgURL = cachedInfo.ImgURL
} else {
    // 如果缓存过期或不存在，进行网络请求
    const bingUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN"
    const response = await new Request(bingUrl).loadJSON()
    const imageUrlBase = response.images[0].urlbase
    title = response.images[0].title
    ImgURL = `https://bing.com${imageUrlBase}_UHD.jpg`

    // 下载图片并缓存
    Img = await loadImage(ImgURL)
    fileManager.writeImage(imageCachePath, Img)

    // 更新缓存的信息
    const infoToCache = {
        date: beijingTime,
        title: title,
		ImgURL: ImgURL
    }
    fileManager.writeString(infoCachePath, JSON.stringify(infoToCache))
}

// 创建小组件
const basewidget = new ListWidget()
basewidget.setPadding(0, 0, 0, 0)
const widget = basewidget.addStack()
widget.setPadding(16, 16, 16, 16)
widget.layoutVertically()
const getGreyImg = async (img, light = 0.1) => {
	const ctx = new DrawContext()
	ctx.size = img.size
	ctx.drawImageInRect(img, new Rect(0, 0, img.size['width'], img.size['height']))
	ctx.setFillColor(new Color("#000000", light))
	ctx.fillRect(new Rect(0, 0, img.size['width'], img.size['height']))
	return await ctx.getImage()
}
const greyImg = await getGreyImg(Img)
widget.backgroundImage = greyImg

// 添加图标
const iconStack = widget.addStack()
const iconSymbol = SFSymbol.named("paperplane.fill")
const headerIcon = iconStack.addImage(iconSymbol.image)
headerIcon.imageSize = new Size(18, 18)
headerIcon.tintColor = Color.white()
headerIcon.url = `${ImgURL}`
iconStack.useDefaultPadding()
iconStack.addSpacer()
widget.addSpacer()

// 显示时间
const timeText = widget.addText(beijingTime)
timeText.font = Font.boldRoundedSystemFont(16)
timeText.textColor = Color.white()
timeText.leftAlignText()

// 显示标题
const titleText = widget.addText(title)
titleText.font = Font.boldRoundedSystemFont(16)
titleText.textColor = Color.white()
titleText.leftAlignText()

// 设置刷新时间
basewidget.refreshAfterDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1)

Script.setWidget(basewidget)
Script.complete()

// 加载图片函数
async function loadImage(url) {
    return await new Request(url).loadImage()
}