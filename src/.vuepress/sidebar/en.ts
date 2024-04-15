import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
  ],
  "/java/": [
    {
      text: "Java Programming",
      icon: "code",
      link: "syntax/",
      children: "structure",
    },
  ],
  "/python/": [
    {
      text: "Python And AI",
      icon: "python",
      link: "syntax/",
      children: "structure",
    },
  ],
  "/tool/": [
    {
      text: "常用开发工具和环境搭建",
      icon: "application",
      link: "tool/",
      children: "structure",
    },
  ],
  "/web/": [
    {
      text: "前端开发知识体系",
      icon: "application",
      link: "web/",
      children: "structure",
    },
  ]
});
