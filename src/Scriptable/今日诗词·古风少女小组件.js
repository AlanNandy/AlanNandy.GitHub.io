// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: newspaper;
// 更多内容请关注公众号 @Nandelion
const loadImage = async _0x2ae107 => (await new Request(_0x2ae107))["\u006c\u006f\u0061\u0064\u0049\u006d\u0061\u0067\u0065"](); async function cropImageToRightQuarter(_0x4b263d) { const _0x5213c4 = _0x4b263d["\u0073\u0069\u007a\u0065"]["\u0077\u0069\u0064\u0074\u0068"]; const _0x4cd778 = _0x4b263d["\u0073\u0069\u007a\u0065"]["\u0068\u0065\u0069\u0067\u0068\u0074"]; let _0x1b29f9 = "FA1DEE#".split("").reverse().join(""); let _0x1ba315 = 0xc9c77 ^ 0xc9c74; let _0x2d5a9d = 0x97375 ^ 0x97376; if (config["\u0077\u0069\u0064\u0067\u0065\u0074\u0046\u0061\u006d\u0069\u006c\u0079"] == "\u0073\u006d\u0061\u006c\u006c") { _0x1ba315 = 0x7a01d ^ 0x7a01e; _0x2d5a9d = 0x6af4e ^ 0x6af4f; } else if (config["\u0077\u0069\u0064\u0067\u0065\u0074\u0046\u0061\u006d\u0069\u006c\u0079"] == "muidem".split("").reverse().join("")) { _0x1ba315 = 0xa10ff ^ 0xa10fc; _0x2d5a9d = 0x6a47d ^ 0x6a47e; } else if (config['widgetFamily'] == 'large') { _0x1ba315 = 0x78051 ^ 0x78055; _0x2d5a9d = 0xe35e6 ^ 0xe35e7; } const _0x9a3b2d = new DrawContext(); const _0x55b194 = Math["\u0066\u006c\u006f\u006f\u0072"](_0x5213c4 * (_0x2d5a9d + (0xcfe4c ^ 0xcfe4d))); _0x9a3b2d['size'] = new Size(_0x55b194, _0x4cd778); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0x1c38e ^ 0x1c38f)); _0x9a3b2d['fillRect'](new Rect(0x0, 0x0, _0x55b194, _0x4cd778)); _0x9a3b2d['drawImageInRect'](_0x4b263d, new Rect(_0x5213c4 * _0x2d5a9d, 0x0, _0x5213c4, _0x4cd778)); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0.1)); _0x9a3b2d['fillRect'](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * (0xdd2ec ^ 0xdd2e4), 0x0, _0x1ba315, _0x4cd778)); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0.2)); _0x9a3b2d['fillRect'](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * (0x4119f ^ 0x41198), 0x2b0c0 ^ 0x2b0c0, _0x1ba315, _0x4cd778)); _0x9a3b2d['setFillColor'](new Color(_0x1b29f9, 0.3)); _0x9a3b2d["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x6, 0x0, _0x1ba315, _0x4cd778)); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0.4)); _0x9a3b2d["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x5, 0x9e0b9 ^ 0x9e0b9, _0x1ba315, _0x4cd778)); _0x9a3b2d['setFillColor'](new Color(_0x1b29f9, 0.5)); _0x9a3b2d['fillRect'](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x4, 0x0, _0x1ba315, _0x4cd778)); _0x9a3b2d['setFillColor'](new Color(_0x1b29f9, 0.6)); _0x9a3b2d["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x3, 0x34aab ^ 0x34aab, _0x1ba315, _0x4cd778)); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0.7)); _0x9a3b2d["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x2, 0x0, _0x1ba315, _0x4cd778)); _0x9a3b2d["\u0073\u0065\u0074\u0046\u0069\u006c\u006c\u0043\u006f\u006c\u006f\u0072"](new Color(_0x1b29f9, 0.8)); _0x9a3b2d['fillRect'](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * (0x94ea9 ^ 0x94ea8), 0x0, _0x1ba315, _0x4cd778)); _0x9a3b2d['setFillColor'](new Color(_0x1b29f9, 0.9)); _0x9a3b2d["\u0066\u0069\u006c\u006c\u0052\u0065\u0063\u0074"](new Rect(_0x5213c4 * _0x2d5a9d + _0x1ba315 * 0x0, 0xe863b ^ 0xe863b, _0x1ba315, _0x4cd778)); const _0x3aa7ed = _0x9a3b2d['getImage'](); return _0x3aa7ed; } const loadVerse = async () => (await new Request("\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0076\u0031\u002e\u006a\u0069\u006e\u0072\u0069\u0073\u0068\u0069\u0063\u0069\u002e\u0063\u006f\u006d\u002f\u0061\u006c\u006c\u002e\u006a\u0073\u006f\u006e"))["\u006c\u006f\u0061\u0064\u004a\u0053\u004f\u004e"](); const { content: randomVerse, origin: title } = await loadVerse(); const widget = new ListWidget(); const loadRandomBg = async () => { const _0x56b9e5 = new Date(); const _0x88fa17 = _0x56b9e5['getDate'](); const _0x40065d = _0x88fa17 % (0x8a79c ^ 0x8a795); const _0x53fa95 = ['https://mmbiz.qpic.cn/mmbiz_png/iaxiaRSXgSg2vQfGyRFrbeeycJndtNGh8ibcjg4C1G2ZdKO43sSrP7Z4JYAbddUX23DFz2j0UxXoicaJUzoNtpO4xQ/640?wxfrom=12&tp=wxpic&usePicPrefetch=1&wx_fmt=png', "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u006d\u0062\u0069\u007a\u002e\u0071\u0070\u0069\u0063\u002e\u0063\u006e\u002f\u006d\u006d\u0062\u0069\u007a\u005f\u0070\u006e\u0067\u002f\u0069\u0061\u0078\u0069\u0061\u0052\u0053\u0058\u0067\u0053\u0067\u0032\u0076\u0051\u0066\u0047\u0079\u0052\u0046\u0072\u0062\u0065\u0065\u0079\u0063\u004a\u006e\u0064\u0074\u004e\u0047\u0068\u0038\u0069\u0062\u0075\u0065\u0048\u0067\u0037\u006e\u0074\u0053\u004d\u0069\u0063\u0077\u0068\u0049\u0072\u0069\u0063\u0069\u0061\u0073\u0034\u0077\u0042\u0053\u0054\u0049\u006a\u004c\u0047\u0046\u0062\u0034\u0067\u004f\u0042\u0049\u0039\u006b\u0041\u0074\u0059\u0033\u0047\u0031\u0079\u006b\u0042\u0079\u0054\u0031\u0048\u0079\u0039\u0067\u004d\u006e\u0067\u002f\u0036\u0034\u0030\u003f\u0077\u0078\u0066\u0072\u006f\u006d\u003d\u0031\u0032\u0026\u0074\u0070\u003d\u0077\u0078\u0070\u0069\u0063\u0026\u0077\u0078\u005f\u0066\u006d\u0074\u003d\u0070\u006e\u0067", "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u006d\u0062\u0069\u007a\u002e\u0071\u0070\u0069\u0063\u002e\u0063\u006e\u002f\u006d\u006d\u0062\u0069\u007a\u005f\u0070\u006e\u0067\u002f\u0069\u0061\u0078\u0069\u0061\u0052\u0053\u0058\u0067\u0053\u0067\u0032\u0076\u0051\u0066\u0047\u0079\u0052\u0046\u0072\u0062\u0065\u0065\u0079\u0063\u004a\u006e\u0064\u0074\u004e\u0047\u0068\u0038\u0069\u0062\u0049\u0062\u0073\u0045\u0053\u0053\u0067\u0043\u0077\u0068\u004f\u0033\u0074\u0075\u006c\u004f\u0054\u006a\u0053\u0038\u0061\u0056\u0046\u0059\u0058\u0038\u0054\u0037\u0064\u0072\u0066\u0066\u0058\u0050\u005a\u0068\u0068\u006a\u0065\u0043\u0067\u0035\u005a\u0057\u004c\u0059\u0058\u0077\u0046\u0077\u004d\u004d\u0052\u0067\u002f\u0036\u0034\u0030\u003f\u0077\u0078\u0066\u0072\u006f\u006d\u003d\u0031\u0032\u0026\u0074\u0070\u003d\u0077\u0078\u0070\u0069\u0063\u0026\u0077\u0078\u005f\u0066\u006d\u0074\u003d\u0070\u006e\u0067", "gnp=tmf_xw&cipxw=pt&21=morfxw?046/A7TyEmXbiEaivwRroleUVIDrp7ZAnm1djXRcci8aiRePv5tgjCzZouykhcbi8hGNtdnJcyeebrFRyGfQv2gSgXSRaixai/gnp_zibmm/nc.cipq.zibmm//:sptth".split("").reverse().join(""), "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u006d\u0062\u0069\u007a\u002e\u0071\u0070\u0069\u0063\u002e\u0063\u006e\u002f\u006d\u006d\u0062\u0069\u007a\u005f\u0070\u006e\u0067\u002f\u0069\u0061\u0078\u0069\u0061\u0052\u0053\u0058\u0067\u0053\u0067\u0032\u0076\u0051\u0066\u0047\u0079\u0052\u0046\u0072\u0062\u0065\u0065\u0079\u0063\u004a\u006e\u0064\u0074\u004e\u0047\u0068\u0038\u0069\u0062\u0041\u0058\u0048\u0050\u007a\u0078\u0043\u007a\u0070\u0079\u0033\u0068\u0037\u0064\u0065\u0065\u0030\u0039\u0037\u0075\u006b\u0069\u0063\u0034\u0037\u0046\u0045\u006f\u0048\u0050\u0076\u0054\u0032\u0053\u0078\u0075\u0069\u0062\u0071\u0036\u004b\u0054\u0059\u0062\u004e\u0033\u007a\u0078\u0038\u004b\u0041\u0069\u0063\u0032\u006e\u006d\u0051\u002f\u0036\u0034\u0030\u003f\u0077\u0078\u0066\u0072\u006f\u006d\u003d\u0031\u0032\u0026\u0074\u0070\u003d\u0077\u0078\u0070\u0069\u0063\u0026\u0077\u0078\u005f\u0066\u006d\u0074\u003d\u0070\u006e\u0067", 'https://mmbiz.qpic.cn/mmbiz_png/iaxiaRSXgSg2vQfGyRFrbeeycJndtNGh8ibbuPXTMm7XODT8BL4fiaE0NF50bBHqDvvVbby0g3w7VLTsr5g4xnG9Wg/640?wxfrom=12&tp=wxpic&wx_fmt=png', "gnp=tmf_xw&cipxw=pt&21=morfxw?046/wqEzOLolwIzk85TJNPlnMbiAP5JbCrYJPzcciNagpky89VBQaJ5TNJe7bi8hGNtdnJcyeebrFRyGfQv2gSgXSRaixai/gnp_zibmm/nc.cipq.zibmm//:sptth".split("").reverse().join(""), "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u006d\u0062\u0069\u007a\u002e\u0071\u0070\u0069\u0063\u002e\u0063\u006e\u002f\u006d\u006d\u0062\u0069\u007a\u005f\u0070\u006e\u0067\u002f\u0069\u0061\u0078\u0069\u0061\u0052\u0053\u0058\u0067\u0053\u0067\u0032\u0076\u0051\u0066\u0047\u0079\u0052\u0046\u0072\u0062\u0065\u0065\u0079\u0063\u004a\u006e\u0064\u0074\u004e\u0047\u0068\u0038\u0069\u0062\u0052\u006f\u004a\u0063\u0072\u0077\u006e\u004d\u004c\u0069\u0062\u004e\u0041\u005a\u0069\u0063\u0058\u0069\u0061\u0069\u0061\u0059\u0065\u004a\u0044\u006f\u004b\u0030\u0069\u0063\u006b\u0050\u004a\u0077\u0031\u006e\u0033\u0051\u0042\u007a\u0043\u0078\u0066\u0044\u0052\u0038\u0036\u0070\u0061\u0064\u0075\u0054\u0042\u0064\u005a\u0035\u0037\u0064\u0077\u002f\u0036\u0034\u0030\u003f\u0077\u0078\u0066\u0072\u006f\u006d\u003d\u0031\u0032\u0026\u0074\u0070\u003d\u0077\u0078\u0070\u0069\u0063\u0026\u0077\u0078\u005f\u0066\u006d\u0074\u003d\u0070\u006e\u0067", "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u006d\u006d\u0062\u0069\u007a\u002e\u0071\u0070\u0069\u0063\u002e\u0063\u006e\u002f\u006d\u006d\u0062\u0069\u007a\u005f\u0070\u006e\u0067\u002f\u0069\u0061\u0078\u0069\u0061\u0052\u0053\u0058\u0067\u0053\u0067\u0032\u0076\u0051\u0066\u0047\u0079\u0052\u0046\u0072\u0062\u0065\u0065\u0079\u0063\u004a\u006e\u0064\u0074\u004e\u0047\u0068\u0038\u0069\u0062\u0070\u0076\u006e\u004f\u0049\u0050\u004c\u0068\u006d\u0057\u0048\u005a\u0033\u0056\u0043\u0033\u0055\u0047\u0033\u0069\u0062\u0036\u006e\u006c\u0077\u0069\u0061\u004a\u0077\u0032\u004f\u0077\u0053\u0052\u0067\u0045\u0032\u0048\u0072\u0075\u006e\u0045\u0071\u0039\u0072\u0064\u0035\u0041\u0072\u0059\u0032\u0056\u004a\u0064\u0079\u0041\u002f\u0036\u0034\u0030\u003f\u0077\u0078\u0066\u0072\u006f\u006d\u003d\u0031\u0032\u0026\u0074\u0070\u003d\u0077\u0078\u0070\u0069\u0063\u0026\u0077\u0078\u005f\u0066\u006d\u0074\u003d\u0070\u006e\u0067"]; const _0xaf313f = _0x53fa95[_0x40065d]; const _0x4937e4 = await loadImage(_0xaf313f); const _0x1b5f63 = await cropImageToRightQuarter(_0x4937e4); return _0x1b5f63; }; const randomImg = await loadRandomBg(); widget['backgroundImage'] = randomImg; if (config["\u0077\u0069\u0064\u0067\u0065\u0074\u0046\u0061\u006d\u0069\u006c\u0079"] == "llams".split("").reverse().join("")) { const backgroundStack = widget['addStack'](); backgroundStack['layoutVertically'](); backgroundStack["\u0073\u0069\u007a\u0065"] = new Size(0xa0, 0xa0); backgroundStack["\u0073\u0065\u0074\u0050\u0061\u0064\u0064\u0069\u006e\u0067"](0x39e35 ^ 0x39e35, 0xca791 ^ 0xca781, 0x10, 0x0); backgroundStack['backgroundImage'] = randomImg; backgroundStack["\u0061\u0064\u0064\u0053\u0070\u0061\u0063\u0065\u0072"](); const content = backgroundStack["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"](); content['size'] = new Size(0x59417 ^ 0x59497, 0x40); const verseStack = content["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"](); verseStack['layoutVertically'](); verseStack["\u0073\u0069\u007a\u0065"] = new Size(0x4abde ^ 0x4ab5e, 0xd5ca5 ^ 0xd5ced); const verseTextStack = verseStack['addStack'](); const verseText = verseTextStack['addText'](randomVerse); verseText['lineLimit'] = 0x3012d ^ 0x3012f; verseText["\u0074\u0065\u0078\u0074\u0043\u006f\u006c\u006f\u0072"] = new Color("10F050#".split("").reverse().join("")); verseText["\u0066\u006f\u006e\u0074"] = new Font("uC-oaDgnehZneMgnaP".split("").reverse().join(""), 0x6aab6 ^ 0x6aab8); verseText["\u0073\u0068\u0061\u0064\u006f\u0077\u0043\u006f\u006c\u006f\u0072"] = new Color("CA5DFE#".split("").reverse().join("")); verseText["\u0073\u0068\u0061\u0064\u006f\u0077\u0043\u006f\u006c\u006f\u0072"] = new Color('#EFD5AC'); verseText["\u0073\u0068\u0061\u0064\u006f\u0077\u0052\u0061\u0064\u0069\u0075\u0073"] = 0.2; const titleTextStack = verseStack['addStack'](); const titleText = titleTextStack['addText']("\u2014\u2014".split("").reverse().join("") + title); titleText["\u006c\u0069\u006e\u0065\u004c\u0069\u006d\u0069\u0074"] = 0x64e90 ^ 0x64e91; titleText["\u0074\u0065\u0078\u0074\u0043\u006f\u006c\u006f\u0072"] = new Color('#050F01'); titleText['font'] = new Font("uC-oaDgnehZneMgnaP".split("").reverse().join(""), 0xe); } else { const dateStack = widget['addStack'](); dateStack["\u006c\u0061\u0079\u006f\u0075\u0074\u0056\u0065\u0072\u0074\u0069\u0063\u0061\u006c\u006c\u0079"](); dateStack["\u0073\u0069\u007a\u0065"] = new Size(0x12c, 0x95a15 ^ 0x95a55); const dateTextStack = dateStack['addStack'](); dateTextStack['size'] = new Size(0x5e1e2 ^ 0x5e1d2, 0x30); const date = new Date()['getDate'](); const dateText = dateTextStack["\u0061\u0064\u0064\u0054\u0065\u0078\u0074"]("" + date); dateText['textColor'] = new Color("10F050#".split("").reverse().join("")); dateText['font'] = new Font("uC-oaDgnehZneMgnaP".split("").reverse().join(""), 0x28); const weekdayTextStack = dateStack["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"](); weekdayTextStack['size'] = new Size(0x30, 0xd1d10 ^ 0xd1d1c); const weekday = new Date()["\u0074\u006f\u004c\u006f\u0063\u0061\u006c\u0065\u0053\u0074\u0072\u0069\u006e\u0067"]('zh-CN', { "\u0077\u0065\u0065\u006b\u0064\u0061\u0079": 'long' }); const weekdayText = weekdayTextStack['addText']("" + weekday); weekdayText["\u0074\u0065\u0078\u0074\u0043\u006f\u006c\u006f\u0072"] = new Color("\u0023\u0030\u0035\u0030\u0046\u0030\u0031"); weekdayText["\u0066\u006f\u006e\u0074"] = new Font("uC-oaDgnehZneMgnaP".split("").reverse().join(""), 0xa); widget['addSpacer'](); const verseStack = widget["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"](); verseStack['layoutVertically'](); verseStack["\u0075\u0073\u0065\u0044\u0065\u0066\u0061\u0075\u006c\u0074\u0050\u0061\u0064\u0064\u0069\u006e\u0067"](); verseStack["\u0073\u0069\u007a\u0065"] = new Size(0x104, 0x4a); const titleTextStack = verseStack['addStack'](); const titleText = titleTextStack["\u0061\u0064\u0064\u0054\u0065\u0078\u0074"]('《' + title + "\u300b"); titleText['lineLimit'] = 0x1; titleText['textColor'] = new Color("10F050#".split("").reverse().join("")); titleText["\u0066\u006f\u006e\u0074"] = new Font('PangMenZhengDao-Cu', 0xb71f2 ^ 0xb71fc); const verseTextStack = verseStack["\u0061\u0064\u0064\u0053\u0074\u0061\u0063\u006b"](); const verseText = verseTextStack["\u0061\u0064\u0064\u0054\u0065\u0078\u0074"](randomVerse); verseText["\u006c\u0069\u006e\u0065\u004c\u0069\u006d\u0069\u0074"] = 0x1bdec ^ 0x1bdee; verseText['textColor'] = new Color("\u0023\u0030\u0035\u0030\u0046\u0030\u0031"); verseText['font'] = new Font("uC-oaDgnehZneMgnaP".split("").reverse().join(""), 0xe); verseText['shadowColor'] = new Color('#EFD5AC'); verseText["\u0073\u0068\u0061\u0064\u006f\u0077\u0052\u0061\u0064\u0069\u0075\u0073"] = 0.2; } const refreshtime = new Date(); refreshtime['setDate'](refreshtime['getDate']() + (0x72ae8 ^ 0x72ae9)); refreshtime['setHours'](0x0); refreshtime['setMinutes'](0x0); refreshtime["\u0073\u0065\u0074\u0053\u0065\u0063\u006f\u006e\u0064\u0073"](0x1d80c ^ 0x1d809); widget['refreshAfterDate'] = new Date(refreshtime); Script['setWidget'](widget); Script['complete']();