// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: image;
// 更多内容请关注公众号 @Nandelion
const basewidget=new ListWidget();basewidget["\u0073\u0065\u0074\u0050\u0061\u0064\u0064\u0069\u006e\u0067"](0x28a3c^0x28a3c,0xe0aa2^0xe0aa2,0x74d3a^0x74d3a,0x524b6^0x524b6);const widget=basewidget["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"]();widget["\u0073\u0065\u0074\u0050\u0061\u0064\u0064\u0069\u006e\u0067"](0x83460^0x83470,0x3bf6e^0x3bf7e,0x1cecf^0x1cedf,0xb3a7e^0xb3a6e);widget["\u006c\u0061\u0079\u006f\u0075\u0074\u0056\u0065\u0072\u0074\u0069\u0063\u0061\u006c\u006c\u0079"]();const bingUrl="\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0062\u0069\u006e\u0067\u002e\u0063\u006f\u006d\u002f\u0048\u0050\u0049\u006d\u0061\u0067\u0065\u0041\u0072\u0063\u0068\u0069\u0076\u0065\u002e\u0061\u0073\u0070\u0078\u003f\u0066\u006f\u0072\u006d\u0061\u0074\u003d\u006a\u0073\u0026\u0069\u0064\u0078\u003d\u0030\u0026\u006e\u003d\u0031\u0026\u006d\u006b\u0074\u003d\u007a\u0068\u002d\u0043\u004e";const response=await new Request(bingUrl)["\u006c\u006f\u0061\u0064\u004a\u0053\u004f\u004e"]();const imageUrlBase=response["\u0069\u006d\u0061\u0067\u0065\u0073"][0xc066d^0xc066d]["\u0075\u0072\u006c\u0062\u0061\u0073\u0065"];const title=response["\u0069\u006d\u0061\u0067\u0065\u0073"][0xb93b0^0xb93b0]["\u0074\u0069\u0074\u006c\u0065"];var randomImgURL="moc.gnib//:sptth".split("").reverse().join("")+imageUrlBase+"gpj.DHU_".split("").reverse().join("");const loadImage=async _0x45faa4=>(await new Request(_0x45faa4))['loadImage']();const getGreyImg=async(_0x1644ca,_0x55de71=0.19)=>{const _0x3b2f5a=new DrawContext();_0x3b2f5a['size']=_0x1644ca["\u0073\u0069\u007a\u0065"];_0x3b2f5a["\u0064\u0072\u0061\u0077\u0049\u006d\u0061\u0067\u0065\u0049\u006e\u0052\u0065\u0063\u0074"](_0x1644ca,new Rect(0x0,0x19146^0x19146,_0x1644ca["\u0073\u0069\u007a\u0065"]["\u0077\u0069\u0064\u0074\u0068"],_0x1644ca['size']['height']));_0x3b2f5a["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color("000000#".split("").reverse().join(""),_0x55de71));_0x3b2f5a["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(0x0,0x0,_0x1644ca['size']["\u0077\u0069\u0064\u0074\u0068"],_0x1644ca["\u0073\u0069\u007a\u0065"]["\u0068\u0065\u0069\u0067\u0068\u0074"]));return await _0x3b2f5a["\u0067\u0065\u0074\u0049\u006d\u0061\u0067\u0065"]();};const loadRandomBg=async()=>{const _0x5a7a4a=await loadImage(randomImgURL);const _0x479a25=await getGreyImg(_0x5a7a4a);return _0x479a25;};const randomImg=await loadRandomBg();widget['backgroundImage']=randomImg;const iconStack=widget['addStack']();const iconSymbol=SFSymbol['named']("llif.enalprepap".split("").reverse().join(""));const headerIcon=iconStack['addImage'](iconSymbol['image']);headerIcon['imageSize']=new Size(0x12,0x5bfc9^0x5bfdb);headerIcon['tintColor']=Color["\u0077\u0068\u0069\u0074\u0065"]();headerIcon['url']="".split("").reverse().join("")+randomImgURL;iconStack["\u0075\u0073\u0065\u0044\u0065\u0066\u0061\u0075\u006c\u0074\u0050\u0061\u0064\u0064\u0069\u006e\u0067"]();iconStack["\u0061\u0064\u0064\u0053\u0070\u0061\u0063\u0065\u0072"]();widget['addSpacer']();const time=new Date()['toLocaleString']("hz".split("").reverse().join(""),{'month':"\u0073\u0068\u006f\u0072\u0074","\u0064\u0061\u0079":"\u006e\u0075\u006d\u0065\u0072\u0069\u0063",'weekday':"\u0073\u0068\u006f\u0072\u0074"});const timeText=widget["\u0061\u0064\u0064\u0054\u0065\u0078\u0074"](time);timeText['font']=Font["\u0062\u006f\u006c\u0064\u0052\u006f\u0075\u006e\u0064\u0065\u0064\u0053\u0079\u0073\u0074\u0065\u006d\u0046\u006f\u006e\u0074"](0x10);timeText["\u0074\u0065\u0078\u0074\u0043\u006f\u006c\u006f\u0072"]=Color["\u0077\u0068\u0069\u0074\u0065"]();timeText["\u006c\u0065\u0066\u0074\u0041\u006c\u0069\u0067\u006e\u0054\u0065\u0078\u0074"]();const titleText=widget['addText'](title);titleText["\u0066\u006f\u006e\u0074"]=Font['boldRoundedSystemFont'](0x10);titleText["\u0074\u0065\u0078\u0074\u0043\u006f\u006c\u006f\u0072"]=Color["\u0077\u0068\u0069\u0074\u0065"]();titleText['leftAlignText']();const now=new Date();const hour=now["\u0067\u0065\u0074\u0048\u006f\u0075\u0072\u0073"]();basewidget["\u0072\u0065\u0066\u0072\u0065\u0073\u0068\u0041\u0066\u0074\u0065\u0072\u0044\u0061\u0074\u0065"]=new Date(now['getFullYear'](),now['getMonth'](),now["\u0067\u0065\u0074\u0044\u0061\u0074\u0065"](),hour+0x1,0x7096c^0x7096c,0x0);Script["\u0073\u0065\u0074\u0057\u0069\u0064\u0067\u0065\u0074"](basewidget);Script['complete']();