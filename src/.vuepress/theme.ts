import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";
import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({

  hostname: "https://alannandy.github.io",

  author: {
    name: "Alan Nandy",
    url: "https://alannandy.github.io",
    email: "hope1996liu@gmail.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  editLink: true,

  docsRepo: 'https://github.com/AlanNandy/AlanNandy.GitHub.io',

  docsBranch: 'repository',

  docsDir: '/src/',

  blog: {
    medias: {
      Gmail: "mailto:hope1996liu@gmail.com",
    },
  },

  locales: {
    "/": {
      navbar: zhNavbar,

      sidebar: zhSidebar,

      footer: "欢迎通过公众号 @Nandelion 反馈建议",

      displayFooter: true,

      blog: {
        description: "All is well.",
        intro: "/intro.html",
      },
    },
    "/en/": {
      navbar: enNavbar,

      sidebar: enSidebar,

      footer: "Welcome to provide feedback through the official account @Nandelion",

      displayFooter: true,

      blog: {
        description: "All is well.",
        intro: "/en/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/帖子/超级应用集/Android端Xposed模块.html": "bageling",
      "/en/帖子/超级应用集/Android端Xposed模块.html": "bageling",
    },
  },

  plugins: {
    autoCatalog: {
      index: false,
    },

    blog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "AlanNandy/giscus-discussions",
      repoId: "R_kgDOKGibRw",
      category: "Announcements",
      categoryId: "DIC_kwDOKGibR84CYkn8",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Alan Nandy's Blog",
            short_name: "Alan",
            url: "https://alannandy.github.io",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});