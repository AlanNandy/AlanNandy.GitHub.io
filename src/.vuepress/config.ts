import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Alan Nandy",
    },
    "/en/": {
      lang: "en-US",
      title: "Alan Nandy",
    },
  },

  theme,

  shouldPrefetch: false,
});