if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let f={};const r=e=>a(e,d),b={module:{uri:d},exports:f,require:r};s[d]=Promise.all(i.map((e=>b[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-3542d6b7.js",revision:"c373bab742a72f56714ed63054bf8f6d"},{url:"assets/404.html-64bc9175.js",revision:"e3a059349e981dc954f068fe1468e445"},{url:"assets/Android端Xposed模块.html-26b1909f.js",revision:"f495dc600e1b612004e00f430fdec841"},{url:"assets/Android端Xposed模块.html-3d86bc75.js",revision:"7f11a9e753f13e5248a40481414b3938"},{url:"assets/Android端Xposed模块.html-a4cef227.js",revision:"b9bcc3c3989c152464b99c9ec9d5e16c"},{url:"assets/Android端Xposed模块.html-adba51f5.js",revision:"9181cd575b36370c004017d2cc73ba43"},{url:"assets/Android端应用.html-4e43a534.js",revision:"41eef4959d0622304c7a0d76a9157c53"},{url:"assets/Android端应用.html-601472c4.js",revision:"d5809c92809114b10f45c9812863d28f"},{url:"assets/Android端应用.html-a9280752.js",revision:"c360d52ae425eb451afa6a4a7cd86545"},{url:"assets/Android端应用.html-dde98c33.js",revision:"cb0a01250053e1876f5b56ec51b2f074"},{url:"assets/app-aa4f69c5.js",revision:"4ad6925c41c5555855ba3fabb83baa55"},{url:"assets/arc-a12966e1.js",revision:"fa40d5774f2e16c319ded8616d64ae63"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-712ff3ee.js",revision:"c5a4b40bb678e130f36e32a47f626d31"},{url:"assets/c4Diagram-4de0d805-1e490b56.js",revision:"1e76dfa57aeddc779f35a884f0bf96da"},{url:"assets/classDiagram-0da88708-abf3e083.js",revision:"025996af9a4cd30515d2141ae89589fd"},{url:"assets/classDiagram-v2-2f4ae322-a4581497.js",revision:"495b8e49050329c72da1e65fe124ff4f"},{url:"assets/codemirror-editor-1d9e8c36.js",revision:"090eeb8e0fb4db36fd9cad5e96f89cf0"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-b670c180-f465b12f.js",revision:"8c80c80d395f509bb12ca1f378eabbcd"},{url:"assets/edges-c959041a-65e43bb8.js",revision:"78294c143abe560921a5694dba139039"},{url:"assets/erDiagram-105a1cb2-c6117ab1.js",revision:"765d726bd29c7509be69ec2ebd2fab84"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-8136f426-6bf16648.js",revision:"5336a9051867afe6e9d787cb86a410ec"},{url:"assets/flowDb-01624e90-8c570c67.js",revision:"2a9236fdcac6289b4c1380c0b8b2feb0"},{url:"assets/flowDiagram-42ba8acc-c02b5844.js",revision:"3dc3862b8323cacaae81b81d19fa2f9a"},{url:"assets/flowDiagram-v2-e4ef3cbe-368fbb32.js",revision:"1a93b2e6cb2d962e0c5e58424729de4c"},{url:"assets/ganttDiagram-33119f0c-97258fbc.js",revision:"b2d144ab4c30484dd719f6b200776793"},{url:"assets/giscus-0b7adcf8.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/gitGraphDiagram-1dcba3c4-1ffed65c.js",revision:"e38f02ee82bfaafd4708915817ef521c"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-892ad7fb-a45b1f83.js",revision:"02a0ec9fc4f719e10df104e6a887e2b9"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-005b63e9.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-026c39b6.js",revision:"e28830f73810079d97201bff5ea4b2c9"},{url:"assets/index.html-039536fb.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-05b84d74.js",revision:"5f13cb93b7e1eae29357d6b098013595"},{url:"assets/index.html-0ad33176.js",revision:"a349d9c60596e8f3ce5262beefc3e71d"},{url:"assets/index.html-0b23a295.js",revision:"734cae9513d8731aa88903de221551c7"},{url:"assets/index.html-0f61acfa.js",revision:"bce608cbb4595734ec51d69f7c7e0dca"},{url:"assets/index.html-10414a67.js",revision:"01603129b33beafdfb614865d464c970"},{url:"assets/index.html-1187a039.js",revision:"f3b97ac771f86477362c8e4c7e8b2c82"},{url:"assets/index.html-125f0293.js",revision:"014690e784eb518eafb3291c78787428"},{url:"assets/index.html-1697556a.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-1ca6ba8d.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-2a43f6cf.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-31cc6d2e.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-33522133.js",revision:"f772c9f9a7103f194090e010be92cbb0"},{url:"assets/index.html-34ffaa43.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-36a3755b.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-37ba653d.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-37d6f635.js",revision:"f434d406e2cda55e53dd35c6d2e5cea4"},{url:"assets/index.html-3d1bc457.js",revision:"0ddc1d1d554c36433bf684c0a1d39bcd"},{url:"assets/index.html-4493fdd2.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-45a3c826.js",revision:"43654162acc1d87a5eb2ee2298df3e38"},{url:"assets/index.html-4a3279e0.js",revision:"b0dd350cb2438eb94ff681483197779b"},{url:"assets/index.html-4cfeacb6.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-4f94ef5f.js",revision:"08975063b70034b96fbe19c18084b875"},{url:"assets/index.html-5b3a0a2a.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-5fc71ee9.js",revision:"06133063279053b1d65f3faaaf52f3c9"},{url:"assets/index.html-61365083.js",revision:"261463ac41be97ef475da86463a93d24"},{url:"assets/index.html-6297a4e3.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-637cf7c4.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-63d06a86.js",revision:"505d988b99593380c3f156797c3f20a4"},{url:"assets/index.html-717ce76b.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-74e5eb79.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-74fe7b4b.js",revision:"b2d6b022a6a2a20535d701978244bbba"},{url:"assets/index.html-75618fa0.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-76d1daa5.js",revision:"265c0c1174edd77177fd56f73f73bc4d"},{url:"assets/index.html-7adb68ad.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-7fa2585c.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-82cd231f.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-8a443e0b.js",revision:"17eca7a2d57ebc20c2270b1a0ba835ce"},{url:"assets/index.html-8ab191d2.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-8d737bbe.js",revision:"4dac557edb1d182d6cb30e6229453d09"},{url:"assets/index.html-8e5e6be0.js",revision:"b3c5d836d5ff1c783d276ad8b5857fc9"},{url:"assets/index.html-8ef6742e.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-8fc7e09a.js",revision:"cbc9ab20c16aef63fefac2528aaa4b8a"},{url:"assets/index.html-9038322e.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-989b188c.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-a01a6166.js",revision:"08b45c05f5c47b10bc339d1e563e6cd9"},{url:"assets/index.html-a2a87d76.js",revision:"5ef9b16ce52844f4a35686e828192fc6"},{url:"assets/index.html-a385dfa2.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-a4c4a49f.js",revision:"aea55df584c2002e4e02b945aa1b727a"},{url:"assets/index.html-ad3b9642.js",revision:"450faab4e20ebdf3c911be09542d954c"},{url:"assets/index.html-af7c466a.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-b8654493.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-bf2143e7.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-c15dd5af.js",revision:"656edf93d30e22490affe6b1b1081c2b"},{url:"assets/index.html-c1f9fa98.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-c4e82980.js",revision:"a7694805adcc0958717b5155bb8bf6ee"},{url:"assets/index.html-c50147af.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-c5cec2db.js",revision:"103247d5bb95d5809f765903e804ce85"},{url:"assets/index.html-c81c38c7.js",revision:"ea56d933d9c792a2f2c86e5e79a140fb"},{url:"assets/index.html-cc10eb87.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-ce25b9b1.js",revision:"7c95cbcf82229d195633a3226e8f1146"},{url:"assets/index.html-d0f7110e.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-d292c120.js",revision:"97135ef103863c91761485530d7d955e"},{url:"assets/index.html-d5969421.js",revision:"cb87f020c1be3b0b6f4864f2ab34ca36"},{url:"assets/index.html-d8579dfe.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-e22f9077.js",revision:"1cb440b5a73fc81f1cc1d16c8d596543"},{url:"assets/index.html-e5a116db.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-e67f58be.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-e6c394e9.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-e78f5432.js",revision:"e2b5e65820c16ed1d31df1ebb8e16f6e"},{url:"assets/index.html-e908116d.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-e992f6b0.js",revision:"c217c69662f0d6a0b314ce3cb9521e1c"},{url:"assets/index.html-ea2fe468.js",revision:"dc5f26ff77cf2615fdaf72b27b0e756b"},{url:"assets/index.html-eb5e11e4.js",revision:"832f3b092e56a7c04f3fac43b9dfc8da"},{url:"assets/index.html-ec114975.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-ee73e43a.js",revision:"93ba217e968836c0c90a118f1199cd4d"},{url:"assets/index.html-ef49f470.js",revision:"83dd1b5680ab1e8485dde846ddbf5f75"},{url:"assets/index.html-fd9b72ac.js",revision:"094bc4545cb4036b45865deaf509627a"},{url:"assets/infoDiagram-99aec0e9-aa68131f.js",revision:"d467020dd2b9adb602434ffa695e1b7a"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-4b4849e4.js",revision:"252ba6cf4e702499784ee084aeeecd79"},{url:"assets/intro.html-63715f1a.js",revision:"298d4a5385d5c6f8eb70866910db2b01"},{url:"assets/intro.html-9487ce43.js",revision:"afc07524a6c480079527e5e140218dc6"},{url:"assets/intro.html-ecc5ff44.js",revision:"66aa92094373afcf4a5f1ac1e72ee510"},{url:"assets/iOS手机美化.html-2bb69046.js",revision:"f97aa45d4e62c40648e3cde59205b8c2"},{url:"assets/iOS手机美化.html-7338297a.js",revision:"173386fac8cbddf95c8445954510aeb5"},{url:"assets/iOS手机美化.html-abf70d1d.js",revision:"9cff31b4aa3a52e768dba210c0ac0e95"},{url:"assets/iOS手机美化.html-cbcbab77.js",revision:"a15c262b2496155174cae164feeb330e"},{url:"assets/iOS玩机技巧.html-0581f6d8.js",revision:"20a8b3f66679f57955d0acfa0636d9f7"},{url:"assets/iOS玩机技巧.html-30c149c5.js",revision:"4f7aa9643579968d2b484f602286c762"},{url:"assets/iOS玩机技巧.html-53dc4892.js",revision:"08f94b6aae0aceb266c0346bd3d7d183"},{url:"assets/iOS玩机技巧.html-c1712263.js",revision:"9e1901f5ca1103d88b951081edecea83"},{url:"assets/iOS端应用.html-183b6125.js",revision:"11d927a5c9f95a92181f07a5f0071e5f"},{url:"assets/iOS端应用.html-1b630590.js",revision:"04a4c834efdc11a8db67ca15a9a20d7b"},{url:"assets/iOS端应用.html-625747be.js",revision:"65509dde702cd86f47b44ffca3e50f97"},{url:"assets/iOS端应用.html-f7fba736.js",revision:"3cca24a71ca7383b4b8bf33e1643964e"},{url:"assets/journeyDiagram-50e783bb-ff5ec95f.js",revision:"754a6b0510fd923ca7d75eed497c62f8"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-91daf72b.js",revision:"c30e7459ab4e66f14936975fc4452fe4"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-2037d32c.js",revision:"12347eaf0ab1075cb8e8bfe6fbffdf6d"},{url:"assets/linear-0e88168c.js",revision:"2aa7fe14b909d31eea4c9d5420333312"},{url:"assets/MacOS端程序.html-38526eb1.js",revision:"cf823b37547d1656aae3272fbb93dd07"},{url:"assets/MacOS端程序.html-3df4c99b.js",revision:"0d46bf47f0d67743c42b6a785b5b69cf"},{url:"assets/MacOS端程序.html-69528f42.js",revision:"67934ba09a6a4a1853fab11987b69789"},{url:"assets/MacOS端程序.html-f412625d.js",revision:"49e1c1efd077b0317aa7c30da31761c7"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-8be92ca1.js",revision:"b0642c79a651309a5f2429827603d7b3"},{url:"assets/mindmap-definition-5f036dbb-c5fef8bc.js",revision:"edecdf20c80aa08e4f327fa5fc734041"},{url:"assets/Nandelion-74f5a92b.js",revision:"6fdc516ff4b2122bde477fbc6269cac6"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-b06a513b-02ee795e.js",revision:"f5a50ea0219ed51f026cfafae9c4078f"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-42727e21-c62ade9c.js",revision:"f1db8986c52d2d0e9d17b94d00001c9c"},{url:"assets/requirementDiagram-96e78f61-08f91713.js",revision:"20c8d2e1e9574cc84a003e3ed31fd6a3"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-91977475-769385a7.js",revision:"1a11ea38d507be5b534b8d11c11f4e62"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-342ef5c4-948fd321.js",revision:"e29ddafe5d87ec43fe28fb55ccae9b0c"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-3ac8af33-e7c0c143.js",revision:"0d3a3ff928d46ba176a14770c540e8a2"},{url:"assets/stateDiagram-v2-ca22f0dc-153c5fe2.js",revision:"cad66f3317e214bfb6413b9a63be9b3e"},{url:"assets/style-106aa934.css",revision:"91105ea7455f04789605cf9e7093df0b"},{url:"assets/styles-1e36f090-bfc68684.js",revision:"663440b46e11fa893b8ceceee634a194"},{url:"assets/styles-4fcf332f-e0945126.js",revision:"49f0ade0b94201c0404530593c0eec49"},{url:"assets/styles-d0b2ab71-4ea77689.js",revision:"1b8cbcde6e526465cbda167d26a1173d"},{url:"assets/svgDraw-b48a99d5-a00acca6.js",revision:"fc49f5cb1a5b7d0dffbf51395bd2cad2"},{url:"assets/svgDrawCommon-f26cad39-8ae0d180.js",revision:"2c840b1d5447bb9d999b489814b74b57"},{url:"assets/timeline-definition-cbf43e70-3a7eb4b1.js",revision:"b507aaa97a235a1cf0f35a8e1cbf73d4"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-fc747a25.js",revision:"dba1af82c47bcf24713f948893de11c2"},{url:"assets/VuePlayground-a6cbe737.js",revision:"f993addc8f5d4ba63b28c358d77a775f"},{url:"assets/Windows端程序.html-4d8dc654.js",revision:"0f76a77564809274af59cc53b20477e4"},{url:"assets/Windows端程序.html-83a1aa59.js",revision:"dcf160dc05ae105d41beb9b7dfb435e3"},{url:"assets/Windows端程序.html-cdd6d0ad.js",revision:"ced565a21d79d477223e41a0cfb5bf1a"},{url:"assets/Windows端程序.html-e6c1faab.js",revision:"cb8bc74f6031dbc7ba536e9657e13378"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/今日诗词·古风少女主题_2-fb8af338.js",revision:"b6b82a0cc37585e40faff5c9e54f0c85"},{url:"assets/利是.html-1d88f64c.js",revision:"511d263a9866dc8be1b9996b257019fe"},{url:"assets/利是.html-9786b8e5.js",revision:"361db176a62915407ce42ad6e56c5ebd"},{url:"assets/利是.html-ebd17978.js",revision:"a2ca78fcc4d7f09b497ed3c5039b9b5b"},{url:"assets/利是.html-f57fdf45.js",revision:"744be9e0326d68b5fb219ca4a8c9a841"},{url:"assets/好物安利.html-6fc6e15f.js",revision:"835a64162d7a92e87d7efd0745f16177"},{url:"assets/好物安利.html-9c26406c.js",revision:"bc764bbc5fc7820f47855f643ebbd020"},{url:"assets/好物安利.html-b08827ee.js",revision:"6dcf97210ba1f3a0536cec01bea3e287"},{url:"assets/好物安利.html-d171da66.js",revision:"1db8e354654c3d8de98c96f5bb795a63"},{url:"assets/支付宝-c23b8364.js",revision:"e3aa20f5f2d51ffe2ee582d068bcd2a0"},{url:"assets/法定工作日闹钟_4-5a227644.js",revision:"1e31a0defd0fd5eb539778784d03d51f"},{url:"assets/解忧工具铺-c1715f5b.js",revision:"9ec79dc44fd0df037f9eb82506c8a8cb"},{url:"assets/解忧工具铺.html-40a38743.js",revision:"6756e132e82626d1efba076e8bf96d85"},{url:"assets/解忧工具铺.html-bf9c672b.js",revision:"188db464a12b2bb19cd2723333c83ed2"},{url:"assets/解忧工具铺.html-c0833efe.js",revision:"402aa9b4b7cfeaaba5af8bfafa8d4249"},{url:"assets/解忧工具铺.html-fa32a739.js",revision:"d0676ac427ef7cfc9c450084b5392d19"},{url:"logo.svg",revision:"152dba349e6313f41ee2faaaf2becc0b"},{url:"404.html",revision:"138bae67b513e80c01a06678caa7e8f8"},{url:"article/index.html",revision:"c6a61292ce239e44c47f5cee42e256e9"},{url:"category/index.html",revision:"2e98f5a5cabcad0de5c31b0633d3f3e2"},{url:"category/利是/index.html",revision:"f3a48768317f430dcf4e94631f4d903a"},{url:"category/好物安利/index.html",revision:"bd1b0f2180ec1f7172c9679a681e42ea"},{url:"category/手机美化/index.html",revision:"3adb989d40d998004ef963acc2abf9c7"},{url:"category/玩机技巧/index.html",revision:"62d3aa98e2a894726f87e6c793718173"},{url:"category/超级应用集/index.html",revision:"3d7e086361487220e60b23d29314808b"},{url:"en/article/index.html",revision:"79dec5663ed9515698267ecd63aa4e22"},{url:"en/category/good-commodities/index.html",revision:"074a3f9fc8835bd0bf56ad13bb95a8bb"},{url:"en/category/index.html",revision:"f43a31b130d005a53b9cc43841932218"},{url:"en/category/mobile-theme/index.html",revision:"a833b724dac48272f8a136ce475fe8ac"},{url:"en/category/red-envelope/index.html",revision:"33dd6cbd8be43af59b1bbf20c22ec523"},{url:"en/category/super-applications/index.html",revision:"462210e3b72837c9641fe40ab4847e95"},{url:"en/category/technical-tips/index.html",revision:"a0eddcafb3a6b0b764c319335ef4e23a"},{url:"en/index.html",revision:"e18a8bd004f70f925e0b07f33b7f9757"},{url:"en/intro.html",revision:"a44106b9a4f6f29782b0692e16179575"},{url:"en/star/index.html",revision:"5bb5c1857b46c3de9d1cd543ea4033ef"},{url:"en/tag/android/index.html",revision:"8ea189a7d320891460ea3cbe035488ac"},{url:"en/tag/index.html",revision:"ff63a2efb292d2b20e9c3b1a4b0b6417"},{url:"en/tag/ios/index.html",revision:"ae8ceaebc438bf0568d6ba80a01d180e"},{url:"en/tag/macos/index.html",revision:"9246c9ac7daa3dfede46d4dd6baca8c5"},{url:"en/tag/mini-app/index.html",revision:"d00f58ff7c39306fca57cd14f0f556df"},{url:"en/tag/windows/index.html",revision:"d7a2910859d20bbd22782eb2ccbd06d3"},{url:"en/timeline/index.html",revision:"715f853fc0bbbc1e083e467c45f5e91c"},{url:"en/帖子/index.html",revision:"f17f5899f7af0604c74a196edacf7a95"},{url:"en/帖子/利是.html",revision:"14a357a679153e5e79e852ce87d6cac2"},{url:"en/帖子/好物安利.html",revision:"e3e6b35dea3c654a6b3b79679aa1f47d"},{url:"en/帖子/手机美化/index.html",revision:"ecff37d1af4981c005e8fd1b37460ffa"},{url:"en/帖子/手机美化/iOS手机美化.html",revision:"220645af904e29998504da4d387a28d4"},{url:"en/帖子/玩机技巧/index.html",revision:"672f070c29a9df7c0a751215a90ac732"},{url:"en/帖子/玩机技巧/iOS玩机技巧.html",revision:"7eca87981b2d3edd4d1d1c81c7262a13"},{url:"en/帖子/超级应用集/Android端Xposed模块.html",revision:"55e16a5068b2f9da69a7bd9eeb9a7a7e"},{url:"en/帖子/超级应用集/Android端应用.html",revision:"71fdad24fae9e353803322f2a50f3248"},{url:"en/帖子/超级应用集/index.html",revision:"5868e0dccf2f8806729293e91a77fb7b"},{url:"en/帖子/超级应用集/iOS端应用.html",revision:"ac500d900f483ad42aa7f17ad95236bf"},{url:"en/帖子/超级应用集/MacOS端程序.html",revision:"ff212d4a43f9dfa4be3fcd4405c9c4cd"},{url:"en/帖子/超级应用集/Windows端程序.html",revision:"f2b3fb5c15ad87969fe1003bdd6b60c1"},{url:"en/帖子/超级应用集/解忧工具铺.html",revision:"a57cd466d90baa72516a34bd14d3c33a"},{url:"index.html",revision:"820c70e2ed0f6c074701226d5353ee3b"},{url:"intro.html",revision:"6fedf47d1949372157aaa863713e49a6"},{url:"star/index.html",revision:"a481563400b943ac8bb5f747a0181afc"},{url:"tag/android/index.html",revision:"8f5eff8e8e6a75ec477cbbb33a181619"},{url:"tag/index.html",revision:"555ee97994b17875e2abdfbf74ae0598"},{url:"tag/ios/index.html",revision:"8c69c97e23187e2b6cf61d65b4aa7502"},{url:"tag/macos/index.html",revision:"789669761ae4aa92b104a261c938ea34"},{url:"tag/mini-app/index.html",revision:"9097ad89f594ab57ac5975ba6939bda2"},{url:"tag/windows/index.html",revision:"1cd4a9934a43dcbf95a5b3d97ce21253"},{url:"timeline/index.html",revision:"7d971edb3195ed8d30876f6dc28a19e0"},{url:"帖子/index.html",revision:"f8297d1062100b285a6847576c3dbf2a"},{url:"帖子/利是.html",revision:"089a26ccc42077a82710278cc8276aec"},{url:"帖子/好物安利.html",revision:"3d8cb528c2a012fe7405ba2f081232b9"},{url:"帖子/手机美化/index.html",revision:"4890690fa5fd595f0c440e9b66f88980"},{url:"帖子/手机美化/iOS手机美化.html",revision:"45ca67c5a59c41de38b09347d9554820"},{url:"帖子/玩机技巧/index.html",revision:"a5e207f4dc4407f2180536bb090b61d7"},{url:"帖子/玩机技巧/iOS玩机技巧.html",revision:"b35a93261dc6ba2278ca115873c7b260"},{url:"帖子/超级应用集/Android端Xposed模块.html",revision:"6cd05a63d86b7728e4e7a534fc4a451c"},{url:"帖子/超级应用集/Android端应用.html",revision:"8e8425a380229f859125be63f94a99a2"},{url:"帖子/超级应用集/index.html",revision:"74a40705b480ceae35cb084f69dd2f59"},{url:"帖子/超级应用集/iOS端应用.html",revision:"13ae9883439f1ab554a0e47e3cf79b02"},{url:"帖子/超级应用集/MacOS端程序.html",revision:"a6ac2e62097a73c24285464f0be1a5bf"},{url:"帖子/超级应用集/Windows端程序.html",revision:"6ebc66ce7e2bba7f4f03f944690119fb"},{url:"帖子/超级应用集/解忧工具铺.html",revision:"00ba894553b770d0989ceb80cbd3f2b0"},{url:"assets/Bing必应每日壁纸主题_1-9328e77f.jpg",revision:"7946f55f590f9e3296506b560057dafb"},{url:"assets/Bing必应每日壁纸主题_2-8f21d193.jpg",revision:"8dd180caf38815ca837af2f7afd308c4"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"ec22e5f1b256d8a2d6e8cd82fd22b0db"},{url:"assets/icon/chrome-192.png",revision:"24c886406d74d973320767aaa2005f46"},{url:"assets/icon/chrome-512.png",revision:"223d7361a6abb443023130030d6b6b4f"},{url:"assets/icon/chrome-mask-192.png",revision:"35c063d4e39c53a53f2f8d077cd14706"},{url:"assets/icon/chrome-mask-512.png",revision:"656b1554ac7f8e8efb46d54ce2bf786f"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"e2643848a3a5fd71f7a1a8e1b611dde6"},{url:"assets/iFont添加字体教程_1-e0aef431.png",revision:"8673f7c2f3b17dc2231caa8d58b417c6"},{url:"assets/iFont添加字体教程_2-30226097.png",revision:"7f9ea1094eb3b50ea649433fa7b3b7ec"},{url:"assets/iFont添加字体教程_3-318c6606.png",revision:"5afd37ba007694fc233671197a34d9ab"},{url:"assets/iFont添加字体教程_4-ca8c2b0e.png",revision:"736923ce349c450771276b0fa365c389"},{url:"assets/iFont添加字体教程_5-63f377d7.png",revision:"b40d321ba5529e502090b614c0241334"},{url:"assets/iFont添加字体教程_6-3c8c5bd0.png",revision:"646f2074e1002259e304fb353bbef832"},{url:"assets/Nandelion-0da2c4be.jpg",revision:"85fdf5ff7f57d655f94fd3bf82e78c3c"},{url:"assets/Scriptable添加桌面小组件教程_1-ccdfe234.png",revision:"64d701f43838f0908960464a9fc27700"},{url:"assets/Scriptable添加桌面小组件教程_2-5ba3cc65.png",revision:"57478d81d3dd9318f67ceeade88d71f1"},{url:"assets/Scriptable添加桌面小组件教程_3-5fc6ddf7.png",revision:"7f39a4379ea8a8aa0098c75f9bb4f39d"},{url:"assets/Scriptable添加桌面小组件教程_4-29d5fab8.png",revision:"4b768ce560b0d57beee89e224db11b65"},{url:"assets/Scriptable添加桌面小组件教程_5-9e58502c.png",revision:"303d8d8cff3c65a4ffd8aade7535670a"},{url:"assets/今日诗词·古风少女主题_1-872c1a5b.jpg",revision:"cfae526f86eaf9185eaca3295503c29a"},{url:"assets/今日诗词·古风少女主题_2-0a76c046.jpg",revision:"1061af6baff4f66a05d81ceb50137228"},{url:"assets/天气播报-446e5e4c.jpg",revision:"cbc6b1c4f623870adcb7ac4f4aa47fe8"},{url:"assets/支付宝-5e75433c.jpg",revision:"0b450dbad5f817565fe12cae2ebfbb2c"},{url:"assets/法定工作日闹钟_1-fdaa4de5.jpg",revision:"68750a6401cdb356e1f59d531e401d08"},{url:"assets/法定工作日闹钟_2-5424e4ff.jpg",revision:"2e23d3bcf3dafa7086546cc80ba22b7a"},{url:"assets/法定工作日闹钟_3-aa97648b.jpg",revision:"339cfff3d117472b41a49052a6a90bf9"},{url:"assets/法定工作日闹钟_4-92a7966a.jpg",revision:"bcfa7992a10504d8ce25fb314188173e"},{url:"assets/美团外卖-11dc08fc.jpg",revision:"a55f23e3c9093fe43fe978269f2a454f"},{url:"assets/解忧工具铺-c8fce286.jpg",revision:"d5838c62ad3ea2236cc2b03994f4c106"},{url:"assets/饿了么-b907cede.jpg",revision:"10a2642e57809385f505eaa104b55328"},{url:"logo.png",revision:"42672f439936e3b4cb35f2e78bd6c105"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
