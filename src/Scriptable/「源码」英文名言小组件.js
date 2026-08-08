// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-purple; icon-glyph: newspaper;
// 更多内容请关注公众号 @Nandelion
const fm = FileManager.local()
const cacheDir = fm.documentsDirectory()
const quoteCachePath = fm.joinPath(cacheDir, 'today_quote_cache.json')
const imgCacheDir = fm.joinPath(cacheDir, 'Unsplash随机壁纸')
const imgCachePath = fm.joinPath(imgCacheDir, 'Unsplash随机壁纸.jpeg')

const parameters = args.plainTexts[0] || ''
const previewMode = config.runsInApp
if (config.runsInApp && parameters !== '快捷指令') {
    const accessToken = Keychain.get('accessToken') || ''
    const tag = Keychain.get('tag') || 'Wallpapers,Nature'
    const alert = new Alert()
    alert.title = '请填写参数'
    alert.message = '① Access Key 密钥请前往 https://unsplash.com/oauth/applications 注册开发者获取；\n② Tag 英文关键词会决定背景图片的内容，默认为 Wallpapers,Nature，可以用英文逗号分隔多个关键词；'
    alert.addTextField('Access Key', accessToken)
    alert.addTextField('Tag', tag)
    alert.addAction('确定')
    await alert.presentAlert()
    Keychain.set('accessToken', alert.textFieldValue(0).trim())
    Keychain.set('tag', alert.textFieldValue(1).trim())
}

const widget = await createWidget()
if (previewMode) {
    await widget.presentLarge()
    Script.complete()
} else {
    Script.setWidget(widget)
    Script.complete()
}

async function createWidget() {
    if (!fm.fileExists(imgCacheDir)) fm.createDirectory(imgCacheDir)

    const basewidget = new ListWidget()
    basewidget.setPadding(0, 0, 0, 0)
    const widget = basewidget.addStack()
    widget.setPadding(16, 0, 0, 16)
    widget.layoutVertically()
    widget.backgroundColor = new Color('#1c0e27')

    const bgImg = await loadBgImage()
    if (bgImg) widget.backgroundImage = await getGreyImg(bgImg)

    const imgUrl = Keychain.get('url') || ''
    if (imgUrl) {
        const iconStack = widget.addStack()
        iconStack.setPadding(0, 16, 0, 0)
        const iconSymbol = SFSymbol.named('paperplane.fill')
        const headerIcon = iconStack.addImage(iconSymbol.image)
        headerIcon.imageSize = new Size(18, 18)
        headerIcon.tintColor = Color.white()
        headerIcon.url = imgUrl
        iconStack.addSpacer()
    } 

    widget.addSpacer()

    const quote = await loadQuote()
    const text = sanitizeText(quote.text)

    if (config.widgetFamily == 'small') {
        const content = widget.addStack()
        content.layoutVertically()
        content.setPadding(0, 16, 0, 0)
        content.addSpacer()
        const quoteText = content.addText(text)
        quoteText.lineLimit = 3
        quoteText.textColor = Color.white()
        quoteText.font = new Font('', 16)
        quoteText.textOpacity = 0.95
        content.addSpacer()
    } else {
        const bottomStack = widget.addStack()
        bottomStack.size = new Size(0, 88)

        const dateStack = bottomStack.addStack()
        dateStack.size = new Size(72, 80)
        dateStack.layoutVertically()

        const dayStack = dateStack.addStack()
        dayStack.addSpacer()
        const dayText = dayStack.addText(`${new Date().getDate()}`)
        dayText.textColor = Color.white()
        dayText.font = new Font('', 42)
        dayStack.addSpacer()

        const weekdayStack = dateStack.addStack()
        weekdayStack.addSpacer()
        const weekdayText = weekdayStack.addText(new Date().toLocaleString('en', { weekday: 'long' }))
        weekdayText.textColor = Color.white()
        weekdayText.font = new Font('', 12)
        weekdayStack.addSpacer()

        const quoteStack = bottomStack.addStack()
        quoteStack.layoutVertically()
        quoteStack.addSpacer()
        const quoteTitle = quoteStack.addText(text)
        quoteTitle.lineLimit = config.widgetFamily == 'large' ? 4 : 3
        quoteTitle.textColor = Color.white()
        quoteTitle.font = new Font('', 16)
        quoteTitle.textOpacity = 0.95
        quoteStack.addSpacer()
    }

    basewidget.refreshAfterDate = new Date(Date.now() + 1000 * 60 * 60)
    return basewidget
}

async function loadQuote() {
    let cached = null
    if (fm.fileExists(quoteCachePath)) {
        try {
            cached = JSON.parse(fm.readString(quoteCachePath))
        } catch {}
    }

    try {
        const response = await new Request('https://favqs.com/api/qotd').loadJSON()
        const quote = response?.quote
        if (quote?.body && quote.body !== 'test') {
            const result = { text: quote.body }
            fm.writeString(quoteCachePath, JSON.stringify(result))
            return result
        }
    } catch {}

    return cached ?? { text: '加载失败，请检查网络' }
}

function sanitizeText(value) {
    return String(value || '').replaceAll('\r', '').replaceAll('<br>', '').trim()
}

async function loadBgImage() {
    const item = await fetchImgData()
    if (item?.urls?.regular) {
        try {
            const img = await new Request(item.urls.regular).loadImage()
            if (img) {
                fm.writeImage(img, imgCachePath)
                if (item.urls.raw) {
                    Keychain.set('url', item.urls.raw)
                    Script.setShortcutOutput(item.urls.raw)
                }
                return img
            }
        } catch (error) {
            console.log(error)
        }
    }
    if (fm.fileExists(imgCachePath)) return fm.readImage(imgCachePath)
    return null
}

async function fetchImgData() {
    const accessToken = Keychain.get('accessToken') || ''
    if (!accessToken) return null
    const tag = Keychain.get('tag') || 'Wallpapers,Nature'
    const labels = tag.split(',').map(t => t.trim()).filter(Boolean)
    const query = encodeURIComponent(labels[Math.floor(Math.random() * labels.length)] || 'Wallpapers')
    const url = `https://api.unsplash.com/search/photos/?client_id=${accessToken}&query=${query}&page=1&per_page=24&orientation=squarish&order_by=relevant`

    try {
        const data = await new Request(url).loadJSON()
        const results = data.results || []
        return results[Math.floor(Math.random() * results.length)] || null
    } catch (error) {
        console.log(error)
        return null
    }
}

async function getGreyImg(img, light = 0.1) {
    const ctx = new DrawContext()
    ctx.size = img.size
    ctx.drawImageInRect(img, new Rect(0, 0, img.size.width, img.size.height))
    ctx.setFillColor(new Color('#000000', light))
    ctx.fillRect(new Rect(0, 0, img.size.width, img.size.height))
    return await ctx.getImage()
}
