import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Post",
      icon: "folder",
      prefix: "Post/",
      children: [
        {
          text: "Applications",
          icon: "folder",
          prefix: "Applications/",
          children: [
            { text: "Android Applications", icon: "android", link: "Android Applications" },
            { text: "Android Xposed Modules", icon: "android", link: "Android Xposed Modules" },
            { text: "iOS Applications", icon: "note", link: "iOS Applications" },
            { text: "Windows Applications", icon: "windows", link: "Windows Applications" },
            { text: "MacOS Applications", icon: "note", link: "MacOS Applications" },
          ],
        },
        {
          text: "Good Commodities",
          icon: "folder",
          prefix: "Good Commodities/",
          children: [
            { text: "Good Commodities", icon: "note", link: "Good Commodities" },
            { text: "Red envelope", icon: "note", link: "Red envelope" },
          ],
        },
      ],
    },
    "intro",
  ],
});
