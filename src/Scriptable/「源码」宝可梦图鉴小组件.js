// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: paw;
// 更多内容请关注公众号 @Nandelion
const param = args.widgetParameter
const paramArray = param ? param.split(";") : [""]
const pokemonId = paramArray[0]

class PokemonOfTheDayWidget{
  constructor(){
    this.pokemonSelector = new PokemonSelector()
    this.pokemonDataService = new PokemonDataService()

    this.widget = new ListWidget()
    this.widget.setPadding( 0, 0, 0, 0 )

    this.defaultPokemonId = 132
    this.initData()

    this.widgetHeight = 338
    this.widgetWidth = 338
    this.largeWidget = config.runsInApp || config.runsWithSiri || config.widgetFamily == "large"
    this.mediumWidget = config.widgetFamily == "medium"
    this.imageScaleFactor =  this.largeWidget ? 0.8 : this.mediumWidget ? 0.35 : 0.3
    this.titleFontSize = this.largeWidget ? 18 : 11
    this.infoFontSize = this.largeWidget ? 14: 10
    this.weblinkFontSize = 10

    this.bulbapediaUrl = (name) => {
      const n = (name || "").toString()
      return encodeURI(`https://m.bulbapedia.bulbagarden.net/wiki/${n.replace(" ","_").replace(".","")}`)
    }

  }

  async initData() {
    let defaultData = await this.pokemonDataService.getData(this.defaultPokemonId)
    this.defaultImage = await this.pokemonDataService.getImage(this.defaultPokemonId, defaultData.imageUrl)
  }

  async createWidget(paramId) {
    const id = this.pokemonSelector.getPokemonIdOfToday(paramId)
    const data = await this.pokemonDataService.getData(id)
    if (!data) {
      this.fillErrorWidget()
      return this.widget
    }
    const image = await this.pokemonDataService.getImage(id, data.imageUrl)
    if (!image) {
      this.fillErrorWidget()
      return this.widget
    }
    this.fillPokemonWidget(data, image)
    return this.widget
  }

  fillErrorWidget(){
    this.addTitle(`哦不！未找到宝可梦`)
    if (this.defaultImage instanceof Image){
      this.addImage(this.defaultImage)
    } else {
      this.widget.addSpacer(18)
    }
    this.addInfo(`出现错误，请稍后再试`)
    this.widget.backgroundGradient = this.getBackgroundForType("normal")
  }

  fillPokemonWidget(data,image){
    const displayName = (data && data.name && data.name.zh) || ""
    const wTitle = this.addTitle(displayName)
    const wImage = this.addImage(image)
    const generalInfoText = `#${ data.id } | ${ data.types.map(type => this.capitalizeFirstLetter(this.getLocaleOfType(type))).join(" • ") }`
    const appearanceInfoText = `${ data.height * 10}cm • ${ Number((data.weight * 0.1).toFixed(1))}kg`
    const infoSeparatorText = this.largeWidget || this.mediumWidget ? " | " : "\n"
    const wInfo = this.addInfo(generalInfoText + infoSeparatorText + appearanceInfoText)
    if (config.runsInApp) {
      this.addWebLink(displayName, data.name, [wTitle, wImage, wInfo])
    }
    this.widget.backgroundGradient = this.getBackgroundForType(data.types[0])
  }

  addTitle(str){
    const wTitle = this.widget.addText(str)
    wTitle.textColor = new Color("#131313")
    wTitle.font = Font.boldSystemFont(this.titleFontSize)
    wTitle.centerAlignText()
    return wTitle
  }

  addImage(image){
    const wSprite = this.widget.addImage( image )
    wSprite.imageSize = new Size(this.widgetWidth * this.imageScaleFactor, this.widgetHeight * this.imageScaleFactor)
    wSprite.centerAlignImage()
    return wSprite
  }

  addInfo(str){
    const wInfo = this.widget.addText(str)
    wInfo.textColor = new Color("#383838")
    wInfo.font = Font.lightRoundedSystemFont(this.infoFontSize)
    wInfo.centerAlignText()
    return wInfo
  }

  addWebLink(pokemonName, nameObj, elementsToLink){
    const wLinkHint = this.widget.addText("点击访问宝可梦百科")
    wLinkHint.textColor = new Color("#383838")
    wLinkHint.font = Font.lightRoundedSystemFont(this.weblinkFontSize)
    wLinkHint.centerAlignText()
    let link = this.bulbapediaUrl(pokemonName)
    try {
      const zhName = nameObj && nameObj.zh
      if (zhName && zhName.length > 0) {
        const encoded = encodeURI(zhName.replace(/ /g, '_').replace(/\./g, ''))
        link = `https://wiki.52poke.com/wiki/${encoded}`
      }
    } catch (e) {
    }
    elementsToLink.forEach(e => e.url = link)
    wLinkHint.url = link
  }

  getBackgroundForType(type){
    const typeColorMap = {
      "poison": "#E0C2ED",
      "steel": "#E1E1E1",
      "fighting": "#DDBCAB",
      "dragon": "#D6EEF4",
      "normal": "#D9CECF",
      "dark": "#F4F4F4",
      "bug": "#BDF9B2",
      "electric": "#FDFB95",
      "fire": "#F5B3B3",
      "water": "#B0E5F3",
      "grass": "#C7FC89",
      "ice": "#C1E9F4",
      "fairy": "#F5CDF4",
      "ground": "#DDBCAB",
      "psychic": "#D6B9F7",
      "rock": "#E0E0E0",
      "ghost": "#E5CDFF",
      "flying": "#CDEFFF"
    }
    let baseColorHex = typeColorMap.hasOwnProperty(type) ? typeColorMap[type] : "#ffffff"
    let startColor = new Color(this.lightenDarkenColor(baseColorHex, 20))
    let endColor = new Color(this.lightenDarkenColor(baseColorHex, -20))
    let gradient = new LinearGradient()
    gradient.colors = [startColor, endColor]
    gradient.locations = [0.0, 1]
    return gradient
  }

  getLocaleOfType(type){
    const typeTranslateMap = {
      "poison": "毒",
      "steel": "钢",
      "fighting": "格斗",
      "dragon": "龙",
      "normal": "一般",
      "dark": "恶",
      "bug": "虫",
      "electric": "电",
      "fire": "火",
      "water": "水",
      "grass": "草",
      "ice": "冰",
      "fairy": "妖精",
      "ground": "地面",
      "psychic": "超能",
      "rock": "岩石",
      "ghost": "幽灵",
      "flying": "飞行"
    }
    return typeTranslateMap[type] || type
  }

  lightenDarkenColor(col, amt) {
    col = col.replace(/^#/, '')
    if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]
    let [r, g, b] = col.match(/.{2}/g);
    ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])
    r = Math.max(Math.min(255, r), 0).toString(16)
    g = Math.max(Math.min(255, g), 0).toString(16)
    b = Math.max(Math.min(255, b), 0).toString(16)
    const rr = (r.length < 2 ? '0' : '') + r
    const gg = (g.length < 2 ? '0' : '') + g
    const bb = (b.length < 2 ? '0' : '') + b
    return `#${rr}${gg}${bb}`
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

class PokemonSelector {
  constructor(){
    this.randomDataCache = new RandomDataCache()
    this.maxPokemonId = 898
    this.singlePokemonIdPrefix = "#"
  }

  getPokemonIdOfToday(paramId){
    // 支持以 "#<id>" 指定固定宝可梦
    if (paramId && paramId.startsWith && paramId.startsWith(this.singlePokemonIdPrefix)) {
      let pid = parseInt(paramId.slice(1))
      if (Number.isInteger(pid)) return pid
    }
    // 解析上限，默认为 this.maxPokemonId
    let max = parseInt(paramId)
    max = Number.isNaN(max) ? this.maxPokemonId : max
    if (max > 0 && max <= this.maxPokemonId) {
      return Math.ceil(Math.random() * max)
    }
    return Math.ceil(Math.random() * this.maxPokemonId)
  }
}

class PokemonDataService {
  constructor(){
    this.pokeApi = new PokeApi()
    this.pokemonDataCache = new PokemonDataCache()
  }

  async getData(id) {
    let data = this.pokemonDataCache.getData(id)
    if ( data == null || !data.name || !data.name.zh ) {
      const freshData = await this.pokeApi.getData(id)
      if ( freshData != null ) {
        data = freshData
        this.pokemonDataCache.setData(data, id)
      }
    }
    return data
  }

  async getImage(id, imageUrl) {
    let image = this.pokemonDataCache.getImage(id)
    if ( image == null ) {
      image = await this.pokeApi.getImage(imageUrl)
      if ( image != null) {
        this.pokemonDataCache.setImage(image, id)
      }
    }
    return image
  }
}

class PokeApi {
  constructor() {
    this.pokeApiUrl = (path,id) => `https://pokeapi.co/api/v2/${path}/${id}`
  }

  async getData(id) {
    try {
      let pokemonRequest = new Request( this.pokeApiUrl( "pokemon", id ) )
      pokemonRequest.headers = { "Accept-Language": "zh-hans" }
      let pokemonData = await pokemonRequest.loadJSON()
      let speciesRequest = new Request( this.pokeApiUrl( "pokemon-species", id ) )
      speciesRequest.headers = { "Accept-Language": "zh-hans" }
      let pokemonSpeciesData = await speciesRequest.loadJSON()
      const zhEntry = pokemonSpeciesData.names.find(n => n.language.name.toLowerCase() === "zh-hans")
      const nameZh = zhEntry ? zhEntry.name : null
      const imageUrl = pokemonData.sprites.other['official-artwork'].front_default || pokemonData.sprites.front_default
      return {
        id,
        name: { "zh": nameZh },
        types: pokemonData.types.map(type => type.type.name),
        weight: pokemonData.weight,
        height: pokemonData.height,
        imageUrl
      }
    } catch (e) {
      console.error(e)
    }
    return null
  }

  async getImage(imageUrl) {
    try {
      let imgRequest = new Request(imageUrl)
      return await imgRequest.loadImage()
    } catch (e) {
      return null
    }
  }
}

class WidgetDataCache {
  constructor() {
    this.fm = FileManager.iCloud()
    this.widgetDirectory = this.getWidgetDirectory()
  }

  getWidgetDirectory() {
    let directory = this.fm.joinPath( this.fm.documentsDirectory(), '宝可梦图鉴缓存' )
    if ( ! this.fm.isDirectory(directory) ) {
      this.fm.createDirectory(directory)
    }
    return directory
  }
  
  deleteCacheOlderThan(days){
    const oneday = (24 * 60 * 60 * 1000)
    const xDaysAgo = ( Date.now() - (days * oneday) )
    this.fm.listContents(this.widgetDirectory)
    .map(path => this.fm.joinPath(this.widgetDirectory, path))
    .filter(path => this.fm.isDirectory(path))
    .filter(dir => ( this.fm.modificationDate(dir).getTime() < xDaysAgo ))
    .forEach(dir => {
      this.fm.remove(dir) 
    })
  }
}

class RandomDataCache extends WidgetDataCache {
  constructor(){
    super()
    this.randomSeedFile = this.getRandomSeedFile()
  }

  getRandomSeedFile() {
    return this.fm.joinPath( this.widgetDirectory, 'randomseed.json' )
  }
  
  generateRandomSeedData(todayInDays) {
    let seedData = {}
    seedData[todayInDays] = {}
    for (let i=0; i<=23; i++) {
      seedData[todayInDays][i] = Math.random()
    }
    return seedData
  }

  saveRandomSeed (seedData) {
    this.fm.writeString( this.randomSeedFile, JSON.stringify(seedData) )
  }

  getRandomSeed(todayInDays) {
    if ( this.fm.fileExists(this.randomSeedFile) ) {
      try {
      let data = JSON.parse( this.fm.readString( this.randomSeedFile ) )
        if (data.hasOwnProperty(todayInDays)){
          return data
        }
      } catch (e) {
        console.error(e)
      }
    }
    return this.generateRandomSeedData(todayInDays)
  }
}

class PokemonDataCache extends WidgetDataCache {
  constructor() {
    super()
    this.pokemonDataFileName = (id) => `${id}-pokemon.json`
    this.pokemonImageFileName = (id) => `${id}-image.png`
  }

  getPokemonIdDirectory(id) {
    let directory = this.fm.joinPath(this.widgetDirectory, `${id}`)
    if ( ! this.fm.isDirectory(directory) ) {
      this.fm.createDirectory(directory)
    }
    return directory
  }

  getData(id) {
    try {
      let directory = this.getPokemonIdDirectory(id)
      let dataFilepath = this.fm.joinPath(directory, this.pokemonDataFileName(id))
      let data = JSON.parse( this.fm.readString( dataFilepath ) )
      return data
    } catch (e) {
      console.error(e)
    }
    return null
  }

  getImage(id) {
    try {
      let directory = this.getPokemonIdDirectory(id)
      let imageFilepath = this.fm.joinPath(directory, this.pokemonImageFileName(id))
      let image = this.fm.readImage(imageFilepath)
      return image
    } catch (e) {
      console.error(e)
    }
    return null
  }

  setData(data,id) {
    let directory = this.getPokemonIdDirectory(id)
    let dataFilepath = this.fm.joinPath( directory, this.pokemonDataFileName(id))
    this.fm.writeString( dataFilepath, JSON.stringify(data))
  }

  setImage(image,id) {
    let directory = this.getPokemonIdDirectory(id)
    let imageFilepath = this.fm.joinPath( directory, this.pokemonImageFileName(id))
    this.fm.writeImage(imageFilepath, image)
  }
}

// Widget
// 如果参数以 test: 开头，执行临时的 API 测试并保存结果到 iCloud
if (pokemonId && pokemonId.startsWith && pokemonId.startsWith("test:")) {
  const testId = parseInt(pokemonId.split(":")[1]) || 1
  try {
    const api = new PokeApi()
    const testData = await api.getData(testId)
    console.log(JSON.stringify(testData, null, 2))
    try {
      const fm = FileManager.iCloud()
      const dir = fm.joinPath(fm.documentsDirectory(), '宝可梦图鉴缓存')
      if (!fm.isDirectory(dir)) fm.createDirectory(dir)
      const filepath = fm.joinPath(dir, `poke_test_${testId}.json`)
      fm.writeString(filepath, JSON.stringify(testData, null, 2))
      const w = new ListWidget()
      w.addText(`API 测试已保存: poke_test_${testId}.json`)
      await w.presentLarge()
    } catch (e) {
      console.log('保存测试文件失败: ' + e)
      const w = new ListWidget()
      w.addText(`API 测试完成，控制台有输出`)
      await w.presentLarge()
    }
  } catch (e) {
    console.log('API 请求失败: ' + e)
    const w = new ListWidget()
    w.addText(`API 请求失败: ${e}`)
    await w.presentLarge()
  }
  Script.complete()
} else {
  let widget = await new PokemonOfTheDayWidget().createWidget(pokemonId)
  await widget.presentLarge()
  Script.setWidget( widget )
  Script.complete()
  new WidgetDataCache().deleteCacheOlderThan(30)
}
