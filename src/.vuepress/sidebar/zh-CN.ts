import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "帖子",
      icon: "folder",
      prefix: "帖子/",
      children: [
        {
          text: "应用集",
          icon: "folder",
          prefix: "应用集/",
          children: [
            { text: "Android端应用", icon: "android", link: "Android端应用" },
            { text: "Android端Xposed模块", icon: "android", link: "Android端Xposed模块" },
            { text: "iOS端应用", icon: "note", link: "iOS端应用" },
            { text: "Windows端程序", icon: "windows", link: "Windows端程序" },
            { text: "MacOS端程序", icon: "note", link: "MacOS端程序" },
          ],
        },
        {
          text: "好物安利",
          icon: "folder",
          prefix: "好物安利/",
          children: [
            { text: "好物安利", icon: "note", link: "好物安利" },
            { text: "利是", icon: "note", link: "利是" },
          ],
        },
      ],
    },
    "intro",
  ],
});
