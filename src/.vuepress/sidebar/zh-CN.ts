import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "帖子",
      icon: "note",
      prefix: "帖子/",
      children: "structure",
    },
    "intro",
  ],
});
