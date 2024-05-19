import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "帖子",
    icon: "folder",
    prefix: "/帖子/",
    children: [
      {
        text: "玩机技巧",
        icon: "folder",
        link: "玩机技巧/"
      },
      {
        text: "超级应用集",
        icon: "folder",
        link: "超级应用集/"
      },
      {
        text: "手机美化",
        icon: "folder",
        link: "手机美化/"
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
