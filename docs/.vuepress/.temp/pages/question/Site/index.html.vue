<template><h2 id="hexo篇" tabindex="-1"><a class="header-anchor" href="#hexo篇" aria-hidden="true">#</a> hexo篇</h2>
<h3 id="一-关于主题配置文件的合并相关问题" tabindex="-1"><a class="header-anchor" href="#一-关于主题配置文件的合并相关问题" aria-hidden="true">#</a> 一：关于主题配置文件的合并相关问题</h3>
<p><a href="https://hexo.io/zh-cn/docs/configuration" target="_blank" rel="noopener noreferrer">HEXO文档<ExternalLinkIcon/></a>:<br>
在一个配置文件前加上</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>foo:
    bar'a' 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>另一个前加上同样的，bar内的内容为b。<br>
如果有更多想合并的配置文件，按英文字母表的顺序依次往下更改<br>
以上特性自 HEXO 2.8.2开始提供</p>
<hr>
<p>若主题配置文件内容太多，可在根目录新建yml文件，命名为 _config.[theme].yml<br>
并将config.yml文件主题配置为该主题，以供 Hexo 寻找该文件。</p>
<p>该文件在HEXO执行生成时会与原主题配置文件合并，替换原文件不同的部分，因此更改写在该文件里方便管理，更防止出现不可改变的错误。</p>
<p>Hexo 在合并主题配置时，Hexo 配置文件中的 theme_config 的优先级最高，其次是 _config.[theme].yml 文件，最后是位于主题目录下的_config.yml 文件。<br>
以上特性自 Hexo 5.0.0 起提供</p>
<h3 id="二-关于volantis黑暗模式失效的问题" tabindex="-1"><a class="header-anchor" href="#二-关于volantis黑暗模式失效的问题" aria-hidden="true">#</a> 二，关于volantis黑暗模式失效的问题</h3>
<p>  今天发现博客暗黑模式失效，在该开的开关都打开的情况下。<br>
  经过分主题配置文件和主题本体文件的比对，发现问题在上次更新主题后，主题主题配置文件更新了，而我的分主题配置文件还是老版本，部分设置不一样。<br>
  在Rightmenu设置栏暗黑模式有提示需要开启 plugins.darkmodejs，顺藤摸瓜发现在required plugins栏多了全局引入 jquery的开关，默认是关闭的。我的分主题配置文件没有这个开关，导致两个配置文件合并时jquery还是关闭着的，因此暗黑模式无法使用。</p>
<h2 id="vuepress篇" tabindex="-1"><a class="header-anchor" href="#vuepress篇" aria-hidden="true">#</a> Vuepress篇</h2>
<ul>
<li>hexo在我发现部署生成渲染文章不会渲染类似&amp;emsp；的HTML符号，而是直接显示出来。在多方查找解决无果后，决定重新选择一个生成器才有了Vuepress的站点。</li>
</ul>
<h3 id="一-初接触-建站初始化" tabindex="-1"><a class="header-anchor" href="#一-初接触-建站初始化" aria-hidden="true">#</a> 一：初接触，建站初始化</h3>
<ul>
<li>选定一个包管理器，如果是yarn2的话需要在初始化后的.yarnrc.yml文件中添加 nodeLinker: 'node-modules'。以便将来能找到路径。其他的不用这样。这是因为yarn2采用了新的方式，在.yarn文件夹里的cache文件夹可以看到它把依赖压缩成了压缩包，这也是直接安装运行不通过的原因。(该原因让我找了一天多，浪费了大量的时间。)</li>
<li>其余参照<a href="https://v2.vuepress.vuejs.org/zh/guide/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>一步一步来，这里我选用的是Vuepress2，虽然是BETA版本，但是未来会支持。</li>
<li>上传部署尤其要注意base的设置，如果不正确，会造成打包后样式丢失，本人试了好久，无论是'/'还是'/&lt;仓库名&gt;/'都有不对的地方，最后干脆不设置，让它默认后，即使是加网址也不会丢失样式。</li>
</ul>
</template>
