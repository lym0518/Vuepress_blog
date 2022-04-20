module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '言梦录',
    description: '一个普通的小博客',
    author: '言梦',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://cdn.jsdelivr.net/gh/lym0518/something@3.0/icon/站标.png',
        home: '/',
        navbar: [
            // NavbarItem
            {
              text: '首页',
              link: '/',
            },
            {
                text: '目录',
                link: '/all/',
            },
            // NavbarGroup
            {
              text: '文章',
                children: [
                    {
                        text: '笔记',
                        children: [
                            {
                                text: 'HTMLCSS随笔记录',
                                link: '/note/HTMLCSS/',
                            },
                            {
                                text: 'JAVA笔记',
                                link: '/note/JAVA/',
                            },
                            {
                                text: 'Pointer(指针)笔记',
                                link: '/note/Pointer/',
                            },
                        ],
                    },
                    {
                        text: '随笔',
                        children: [
                            {
                                text: '言梦诗歌录',
                                link: '/literature/DreamOne/',
                            }
                        ],
                    },
                    {
                        text: '问题总结',
                        children: [
                            {
                                text: '建站问题汇总',
                                link: '/question/Site/',
                            }
                        ],     
                    },
                ],
            },
            // 字符串 - 页面文件路径
            //'/bar/README.md',
          ],
      },
  }
  