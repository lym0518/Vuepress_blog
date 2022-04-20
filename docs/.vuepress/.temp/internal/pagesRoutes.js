import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-74448927","/all/",{"title":"目录"},["/all/index.html","/00.目录/","/00.%E7%9B%AE%E5%BD%95/","/00.目录/index.md","/00.%E7%9B%AE%E5%BD%95/index.md"]],
  ["v-5279d3fb","/note/HTMLCSS/",{"title":"HTMLCSS随笔记录"},["/note/HTMLCSS/index.html","/01.笔记/01.HTMLCSS笔记.html","/01.%E7%AC%94%E8%AE%B0/01.HTMLCSS%E7%AC%94%E8%AE%B0.html","/01.笔记/01.HTMLCSS笔记.md","/01.%E7%AC%94%E8%AE%B0/01.HTMLCSS%E7%AC%94%E8%AE%B0.md"]],
  ["v-569429a9","/note/JAVA/",{"title":"JAVA笔记"},["/note/JAVA/index.html","/01.笔记/02.JAVA笔记.html","/01.%E7%AC%94%E8%AE%B0/02.JAVA%E7%AC%94%E8%AE%B0.html","/01.笔记/02.JAVA笔记.md","/01.%E7%AC%94%E8%AE%B0/02.JAVA%E7%AC%94%E8%AE%B0.md"]],
  ["v-5788d8d6","/note/Pointer/",{"title":"Pointer(指针)笔记"},["/note/Pointer/index.html","/01.笔记/03.Pointer(指针)笔记.html","/01.%E7%AC%94%E8%AE%B0/03.Pointer(%E6%8C%87%E9%92%88)%E7%AC%94%E8%AE%B0.html","/01.笔记/03.Pointer(指针)笔记.md","/01.%E7%AC%94%E8%AE%B0/03.Pointer(%E6%8C%87%E9%92%88)%E7%AC%94%E8%AE%B0.md"]],
  ["v-5e8c2647","/literature/DreamOne/",{"title":"言梦诗歌录"},["/literature/DreamOne/index.html","/02.随笔/01.言梦诗歌录.html","/02.%E9%9A%8F%E7%AC%94/01.%E8%A8%80%E6%A2%A6%E8%AF%97%E6%AD%8C%E5%BD%95.html","/02.随笔/01.言梦诗歌录.md","/02.%E9%9A%8F%E7%AC%94/01.%E8%A8%80%E6%A2%A6%E8%AF%97%E6%AD%8C%E5%BD%95.md"]],
  ["v-74ffe178","/question/Site/",{"title":"建站问题汇总"},["/question/Site/index.html","/03.问题总结/01.建站经历及问题总结.html","/03.%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93/01.%E5%BB%BA%E7%AB%99%E7%BB%8F%E5%8E%86%E5%8F%8A%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.html","/03.问题总结/01.建站经历及问题总结.md","/03.%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93/01.%E5%BB%BA%E7%AB%99%E7%BB%8F%E5%8E%86%E5%8F%8A%E9%97%AE%E9%A2%98%E6%80%BB%E7%BB%93.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
