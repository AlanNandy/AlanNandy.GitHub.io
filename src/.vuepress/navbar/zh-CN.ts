import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "帖子",
    icon: "folder",
    prefix: "/帖子/",
    children: [
      {
        text: "超级应用集",
        icon: "folder",
        prefix: "超级应用集/",
        children: [
          { text: "解忧工具铺", icon: "mini-app", link: "解忧工具铺" },
          { text: "Android端应用", icon: "android", link: "Android端应用" },
          { text: "Android端Xposed模块", icon: "android", link: "Android端Xposed模块" },
          { text: "iOS端应用", icon: "mobile", link: "iOS端应用" },
          { text: "Windows端程序", icon: "windows", link: "Windows端程序" },
          { text: "MacOS端程序", icon: "computer", link: "MacOS端程序" },
        ],
      },
      {
        text: "好物安利",
        icon: "note",
        link: "好物安利"
      },
      {
        text: "利是",
        icon: "note",
        link: "利是"
      },
    ],
  },
]);
