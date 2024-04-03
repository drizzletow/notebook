import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
  ],
  "/java/": [
    {
      text: "Java Programming",
      icon: "java",
      link: "BasicSyntax/",
      children: "structure",
    },
  ],
  "/python/": [
    {
      text: "Python And AI",
      icon: "python",
      link: "BasicSyntax/",
      children: "structure",
    },
  ]
});
