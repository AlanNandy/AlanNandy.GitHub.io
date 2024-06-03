import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Post",
      icon: "folder",
      prefix: "帖子/",
      children: [
        {
          text: "Technical Tips",
          icon: "folder",
          prefix: "玩机技巧/",
          children: ["iOS玩机技巧.md"]
        },
        {
          text: "Super Applications",
          icon: "folder",
          prefix: "超级应用集/",
          children: ["解忧工具铺.md","Android端应用.md","Android端Xposed模块.md","iOS端应用.md","Windows端程序.md","MacOS端程序.md"]
        },
        {
          text: "Mobile Theme",
          icon: "folder",
          prefix: "手机美化/",
          children: ["iOS手机美化.md"]
        },
        {
          text: "Good Commodities",
          icon: "note",
          link: "好物安利"
        },
        {
          text: "Red Envelope",
          icon: "note",
          link: "利是"
        },
      ],
    },
    "intro",
  ],
});
