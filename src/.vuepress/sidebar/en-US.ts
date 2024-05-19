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
          link: "玩机技巧/",
        },
        {
          text: "Super Applications",
          icon: "folder",
          link: "超级应用集/",
        },
        {
          text: "Mobile Theme",
          icon: "folder",
          link: "手机美化/"
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
