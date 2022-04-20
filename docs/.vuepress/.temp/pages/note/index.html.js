export const data = {
  "key": "v-15054f24",
  "path": "/note/",
  "title": "笔记",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "笔记",
    "permalink": "/note/",
    "contributors": true,
    "author": {
      "name": "言梦"
    }
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "00.目录/01.笔记.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
