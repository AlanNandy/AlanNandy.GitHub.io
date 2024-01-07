import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Post",
    icon: "folder",
    prefix: "/en/帖子/",
    children: [
      {
        text: "Super Applications",
        icon: "folder",
        prefix: "超级应用集/",
        children: [
          { text: "Kill EMO Store", icon: "mini-app", link: "解忧工具铺" },
          { text: "Android Applications", icon: "android", link: "Android端应用" },
          { text: "Android Xposed Modules", icon: "android", link: "Android端Xposed模块" },
          { text: "iOS Applications", icon: "mobile", link: "iOS端应用" },
          { text: "Windows Applications", icon: "windows", link: "Windows端程序" },
          { text: "MacOS Applications", icon: "computer", link: "MacOS端程序" },
        ],
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
]);
