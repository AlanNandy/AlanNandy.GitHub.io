import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Post",
    icon: "folder",
    prefix: "/en/帖子/",
    children: [
      {
        text: "Applications",
        icon: "folder",
        prefix: "应用集/",
        children: [
          { text: "Android Applications", icon: "android", link: "Android端应用" },
          { text: "Android Xposed Modules", icon: "android", link: "Android端Xposed模块" },
          { text: "iOS Applications", icon: "note", link: "iOS端应用" },
          { text: "Windows Applications", icon: "windows", link: "Windows端程序" },
          { text: "MacOS Applications", icon: "note", link: "MacOS端程序" },
        ],
      },
      {
        text: "Good Commodities",
        icon: "folder",
        prefix: "好物安利/",
        children: [
          { text: "Good Commodities", icon: "note", link: "好物安利" },
          { text: "Red envelope", icon: "note", link: "利是" },
        ],
      },
    ],
  },
]);
