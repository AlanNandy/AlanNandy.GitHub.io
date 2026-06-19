// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: mobile-alt;
// 更多内容请关注公众号 @Nandelion
// 判断是否为App内运行，是则提示输入参数
// 自用百度地图的Access Key：ySxhz4dcfFpbqsbCg3VFqPWbB47CVicj
// 自用和风天气的Access Key：8c2b4b1b5a124221ae883fedaecc091b
// 获取传入的 Parameters，默认值为空字符串
const parameters = args.plainTexts[0] || "";
if (parameters !== "快捷指令" && config.runsInApp) {
	// 获取缓存值
    let accessTokenbaiduMap;
    try {
        accessTokenbaiduMap = Keychain.get("accessTokenbaiduMap") || "";
    } catch (error) {
        console.log(error);
        accessTokenbaiduMap = "";
    }
    let accessTokenqweather;
    try {
        accessTokenqweather = Keychain.get("accessTokenqweather") || "";
    } catch (error) {
        console.log(error);
        accessTokenqweather = "";
    }
    let alert = new Alert();
    alert.title = "请填写参数";
    alert.message = "① 获取百度地图密钥请前往：\n https://lbsyun.baidu.com/ \n② 获取和风天气密钥请前往：\n https://qweather.com/ \n③ 密钥为必填项，否则无法获取定位/天气";
    alert.addTextField("百度地图的Access Key", accessTokenbaiduMap || "");
    alert.addTextField("和风天气的Access Key", accessTokenqweather || "");
    alert.addAction("确定");
    await alert.presentAlert();
    // 更新缓存值
    Keychain.set("accessTokenbaiduMap", alert.textFieldValue(0).trim());
    Keychain.set("accessTokenqweather", alert.textFieldValue(1).trim());
}
// 脚本执行
const widget = await createWidget();
Script.setWidget(widget);
Script.complete();
// 创建组件
async function createWidget() {
    // 获取小组件自定义参数，去空格并做空值兜底
    const customHitokoto = (args.widgetParameter || "").trim();
    
    // 声明根小组件
    const basewidget = new ListWidget();
    basewidget.setPadding(0, 0, 0, 0);
	basewidget.backgroundColor = new Color('#303030');
    
    // 外层stack
    const borderStack = basewidget.addStack();
    borderStack.backgroundColor = new Color('#303030');
    borderStack.setPadding(16, 16, 16, 16); // 边框宽度
    borderStack.layoutVertically();
    
    // 内层stack
    const contentStack = borderStack.addStack();
    contentStack.backgroundColor = new Color('#6d7836');
    contentStack.setPadding(8, 8, 8, 8);
    contentStack.layoutVertically();
    contentStack.size = new Size(0, -1); // 自适应宽度
    contentStack.cornerRadius = 16; // 内层圆角
    // 获取当前时间
    const time = new Date().toLocaleString('zh', {
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric'
    });
    let cachedTime = Keychain.get("cachedTime") || "defaultTime";
    let text2Value = Keychain.get("Text2") || "暂无天气数据";
    // 时间不一致则尝试重新请求天气，请求成功才更新缓存，失败保留原有数据
    if (time !== cachedTime) {
        try {
            const locationFromDevice = await Location.current();
            const locationArr = [locationFromDevice.longitude, locationFromDevice.latitude];
            const qweatherApiKey = Keychain.get("accessTokenqweather") || "";
            
            const totalWeatherData = await getWeatherData(locationArr, qweatherApiKey);
            const weatherData = totalWeatherData.chinese;
            
            const weatherText = `${weatherData.now.text} ${weatherData.now.temp}℃`;
            // 只有请求成功，才更新text2Value和缓存
            text2Value = weatherText;
            Keychain.set("cachedTime", time);
            Keychain.set("Text2", text2Value);
        } catch (error) {
            console.log("天气请求失败：", error);
        }
    }
    // 顶部：日期左、天气右分栏
    const mainRowStack = contentStack.addStack();
    mainRowStack.layoutHorizontally();
    mainRowStack.size = new Size(0, -1); // 自适应宽度
    // 左侧stack：放日期，左上角对齐
    const leftStack = mainRowStack.addStack();
    leftStack.layoutVertically();
    const Text1 = leftStack.addText(new Date().toLocaleString('zh', {
        month: 'numeric',
        day: 'numeric'
    }));
    Text1.font = Font.systemFont(16);
    Text1.textColor = new Color('#303030');
    Text1.leftAlignText();
    Text1.lineLimit = 1;
    // 中间填充空白，强制右侧内容靠右上角
    mainRowStack.addSpacer();
    // 右侧stack：放天气+定位，右上角对齐
    const rightStack = mainRowStack.addStack();
    rightStack.layoutVertically();
    const Text2 = rightStack.addText(text2Value);
    Text2.font = Font.systemFont(16);
    Text2.textColor = new Color('#303030');
    Text2.rightAlignText();
    Text2.lineLimit = 1; // 限制天气文字换行，避免布局错乱
    // 中间一言内容
    contentStack.addSpacer();
    // 一言内容容器
    const hitokotoStack = contentStack.addStack();
    hitokotoStack.layoutVertically();
    hitokotoStack.size = new Size(0, -1);
    
    // 判断自定义参数是否存在，存在则用自定义，否则请求接口
    let fromWho, hitokoto;
    if (customHitokoto) {
        // 有自定义内容时，来源标注为「讯息：」，内容为参数值
        fromWho = "讯息：";
        hitokoto = customHitokoto;
    } else {
        // 无自定义内容时，继续调用原一言接口
        ({fromWho, hitokoto} = await getHitokoto());
    }
    // 第一行：from_who
    const fromWhoLine = hitokotoStack.addText(fromWho);
    fromWhoLine.font = new Font('Silver', 36);
    fromWhoLine.textColor = new Color('#303030');
    fromWhoLine.leftAlignText();
    // 第二行：语录内容
    const hitokotoLine = hitokotoStack.addText(hitokoto);
    hitokotoLine.font = new Font('Silver', 36);
    hitokotoLine.textColor = new Color('#303030');
    hitokotoLine.leftAlignText();
    contentStack.addSpacer();
    // 1小时后自动刷新
    const today = new Date();
    basewidget.refreshAfterDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + 1);
    return basewidget;
}
// 获取一言数据
async function getHitokoto() {
    try {
        const req = new Request("https://v1.hitokoto.cn/");
        req.headers = { "Content-Type": "application/json" };
        const res = await req.loadJSON();
        // 兜底处理：from_who为null/undefined/空时，显示「讯息」，否则显示原内容
        const fromWho = res.from_who ?? "讯息";
        // 拼接冒号，保持原有显示格式
        const fromWhoText = `${fromWho}：`;
        // 语录内容兜底不变
        const hitokoto = res.hitokoto || "有内鬼终止交易";
        return {fromWho: fromWhoText, hitokoto};
    } catch (error) {
        console.log("一言接口请求失败：", error);
        // 接口失败时的兜底：讯息+默认语录
        return {fromWho: "讯息：", hitokoto: "有内鬼终止交易"};
    }
}
// 获取和风天气数据
async function getWeatherData(locationArr, key) {
    const baseUrl = `https://devapi.qweather.com/v7/weather/now?key=${key}&location=${locationArr.join(',')}`;
    try {
        const chineseRes = new Request(`${baseUrl}&lang=zh-hans`);
        const chineseData = await chineseRes.loadJSON();
        const englishRes = new Request(`${baseUrl}&lang=en`);
        const englishData = await englishRes.loadJSON();
        return { chinese: chineseData, english: englishData };
    } catch (error) {
        console.log('获取天气数据失败:', error);
        throw error;
    }
}