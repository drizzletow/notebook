import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {text: "Java", icon: "java", link: "/java/"},
  {text: "Python", icon: "python", link: "/python/"},
  {
    text: "Theme",
    icon: "book",
    link: "https://theme-hope.vuejs.press/",
  },
]);
