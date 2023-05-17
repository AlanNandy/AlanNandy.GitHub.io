import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "帖子",
    icon: "note",
    prefix: "/帖子/",
    children: [
      {
        text: "应用集",
        icon: "note",
        prefix: "应用集/",
        children: [
          { text: "Android端应用", icon: "edit", link: "Android端应用" },
          { text: "Android端Xposed模块", icon: "edit", link: "Android端Xposed模块" },
          { text: "iOS端应用", icon: "edit", link: "iOS端应用" },
          { text: "Windows端程序", icon: "edit", link: "Windows端程序" },
          { text: "Mac端程序", icon: "edit", link: "Mac端程序" },
        ],
      },
    ],
  },
]);
