<template><h2 id="序" tabindex="-1"><a class="header-anchor" href="#序" aria-hidden="true">#</a> 序</h2>
<ol>
<li>&lt;h1&gt;&lt;/h1&gt;~&lt;h6&gt;&lt;/h6&gt;为标题标签，数字1-6是字体大小，最多是6。</li>
<li>&lt;hgrout&gt;标题组（标题标签都是块元素）</li>
<li>&lt;i&gt;&lt;/i&gt;是斜体。&lt;hr&gt;是分割线。</li>
<li>&lt;p&gt;&lt;/p&gt;是段落标签，标签内的文字在一行，不会另起一段。&lt;br&gt;是单个标签，另起一段。</li>
<li>&lt;html&gt;&lt;/html&gt; 根标签<br>
&lt;head&gt; &lt;/head&gt;&lt;body&gt; &lt;/body&gt; 子标签。<br>
&lt;title&gt;是&lt;head&gt;的子标签</li>
<li>&lt;img src=&quot;&quot;&gt;引入图片。</li>
<li>&lt;a herf=&quot;&quot;&gt;&lt;/a&gt;超链接地址。&lt;herf&gt;后添加地址，两个&lt;a&gt;中间填名字。</li>
<li>&lt;&amp;nbsp&gt;为空格</li>
<li>&lt;ul&gt;是加项目符号，&lt;ol&gt;是加序号。&lt;ul&gt;与&lt;ol&gt;标签里的话每段要用&lt;li&gt;包住。</li>
<li>引入图片的标签里添加 &lt;width=“”&gt;&lt;hight=“”&gt;，一个是调宽度，一个是调高度。里面数字的单位px（像素）%（百分比）。</li>
<li>HTML的注释：&lt;!-- --&gt;</li>
<li>&lt;em&gt;,em标签表示语调的一个加重</li>
<li><strong>独占一行的元素叫做块元素，不独占一行的元素叫做行内元素</strong></li>
<li>&lt;strong&gt;表示强调，重要内容</li>
<li>&lt;blockquate&gt;用来表示一个长引用，&lt;q&gt;表示一个短3引用</li>
</ol>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>
<p>在标签中（开始标签和自结束标签）才可以设置属性，属性是一个名值对。<br>
属性用来设置标签中的内容如何显示。<br>
属性和标签名或其他属性要用空格隔开。属性名，属性值不能瞎写。根据文档中的规定写。<br>
有些属性有属性值，有些没有。如果有属性值，属性值应该用引号引起来。</p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>文档声明：&lt;!DOCTYPE html&gt;</p>
<h3 id="进制" tabindex="-1"><a class="header-anchor" href="#进制" aria-hidden="true">#</a> 进制</h3>
<p>  十进制(日常使用)<br>
    特点：满10进1。<br>
    单位数字：10个。<br>
  二进制（计算机底层进制）<br>
    特点：满2进1<br>
    单位数字：2个（0-1）<br>
    扩展：<br>
       所有数据在计算机底层都是以二进制的形式保存<br>
       可以将内存想象为一个有多个小格子组成的容器，每个小格子中可以存储一个1或者0<br>
         这一个小格子在内存中被称为1位（bit）</p>
<p>         8bit=1byte（字节）<br>
         1024byte=1kb（千字节）<br>
         1024kb=1mb（兆字节）<br>
         1024mb=1gb（吉字节）<br>
         1024gb=1tb（特字节）<br>
         1024tb=1pb</p>
<p>  八进制（很少用）<br>
    特点:满8进1<br>
    单位数字:8个(0-8)</p>
<p>  十六进制(一般显示一个二进制数字时都会转换为十六进制)<br>
    特点:满16进1<br>
    单位数字:16个(0-f)</p>
<h2 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h2>
<p>所有的数据在计算机中存储时都是以二进制的形式存储的，文字也不例外。<br>
所以一段文字再存储到内存中时都需要转换成二进制编码<br>
当我们读取这段文字时，计算机会将编码转换为文字供我们阅读。</p>
<h3 id="编码" tabindex="-1"><a class="header-anchor" href="#编码" aria-hidden="true">#</a> 编码</h3>
<p>   将字符转换为二进制码称为编码。</p>
<h3 id="解码" tabindex="-1"><a class="header-anchor" href="#解码" aria-hidden="true">#</a> 解码</h3>
<p>   将二进制转换为字符称为解码。</p>
<h3 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h3>
<p>   编码和解码所采用的规则称为字符集。</p>
<h3 id="乱码问题" tabindex="-1"><a class="header-anchor" href="#乱码问题" aria-hidden="true">#</a> 乱码问题</h3>
<p>   编码与解码所用字符集不同会导致乱码。</p>
<h3 id="常见的字符集" tabindex="-1"><a class="header-anchor" href="#常见的字符集" aria-hidden="true">#</a> 常见的字符集</h3>
<p>   ASCII<br>
   ISO88591<br>
   GB2312<br>
   GBK<br>
   UTF-8<br>
在开发时我们使用的字符集都是UTF-8<br>
在head元素里添加 &lt;meta charset=&quot;utf-8&quot;&gt; 告知浏览器所用字符集</p>
<h2 id="实体" tabindex="-1"><a class="header-anchor" href="#实体" aria-hidden="true">#</a> 实体</h2>
<p>在网页中编写的多个空格会自动被浏览器解析为一个空格</p>
<p>在HTML的有些时候，我们不能直接书写某些特殊符号<br>
如果我们需要在网页中书写这些特殊的符号，则需要用到HTML中的实体（转义字符）<br>
实体的语法：<br>
 &amp;+实体的名字+;<br>
 &amp; nbsp;空格
 &amp; gt;大于号<br>
 &amp; lt;小于号<br>
 &amp; copy;版权符号</p>
<p>可以上W3School查</p>
<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2>
<p>  meta主要用于设置网页中的一些元数据，元数据不给用户看</p>
<ul>
<li>charset 指定网页字符集</li>
<li>name 指定数据的名称</li>
<li>content 指定的数据的内容</li>
</ul>
<p>  keywords 表示网站关键字，可以同时指定多个关键字，关键字间使用逗号隔开。
description 表示网站的描述。
网站的描述会显示在搜索引擎的搜素结果中
title 标签的内容会作为搜索结果的超链接上的文字显示</p>
<h2 id="语义化标签" tabindex="-1"><a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a> 语义化标签</h2>
<p>  在网页中，HTML专门用来负责网页的结构<br>
  所以在使用HTML标签时，应关注标签的语义，而不是他的样式。</p>
<ul>
<li>header 表示网页头部</li>
<li>main 表示网页的主体部分</li>
<li>footer 表示网页的底部</li>
<li>nav 表示网页中的导航</li>
<li>aside 和主体相关内容的其他内容（侧边栏）</li>
<li>article 表示一个独立的文章</li>
<li>section 表示一个独立的区块，上边的标签不能表示时使用</li>
<li>div 没有语义，只用来表示一个区块，主要布局元素</li>
<li>spam 行内元素，没有任何语义，一般用于网页中选中文字</li>
</ul>
<h2 id="列表-list" tabindex="-1"><a class="header-anchor" href="#列表-list" aria-hidden="true">#</a> 列表（list）</h2>
<p>在html中也可以创建列表，html列表一共有三种，</p>
<ol>
<li>有序列表</li>
<li>无序列表</li>
<li>定义列表</li>
</ol>
<p>无序列表，使用ul标签来创建无序列表<br>
  使用li表示列表项
有序列表，使用ol标签来创建有序列表<br>
  使用li表示列表项
定义列表，使用dl标签来创建一个定义列表<br>
  使用dt来表示定义的内容
  使用dd来对内容进行解释说明</p>
<p>列表之间可以互相嵌套</p>
<h2 id="超链接" tabindex="-1"><a class="header-anchor" href="#超链接" aria-hidden="true">#</a> 超链接</h2>
<p>超链接可以让我们从一个页面跳转到其他页面，或者是当前页面的其他位置<br>
  使用 a 标签来定义超链接<br>
    属性：<br>
       href 指定跳转的目标的路径<br>
       值可以是一个外部网站的地址，也可以是一个内部页面的地址</p>
<p>超链接也是一个行内元素，在a标签中可以嵌套除他以外的任何元素
当我们需要跳转一个服务器内部的页面的时候，一般我们都会使用相对路径</p>
<ul>
<li>./</li>
<li>../</li>
</ul>
<p>./表示当前文件所在目录<br>
../表示当前文件所在的上一级目录</p>
<p>target属性：用来指定超链接打开的位置<br>
  可选值;
   self：默认值 在当前页中打开超链接<br>
   blank：在一个新的标签页中打开超链接可以直接把href的值设定为#<br>
      这样点击该超链接，会回到页面顶部。<br>
  id属性（唯一不重复）</p>
<ul>
<li>每一个标签都可以添加id属性
<ul>
<li>id属性是元素的唯一标识，同一个页面不能出现重复的id属性</li>
</ul>
</li>
</ul>
<p>我们也可以跳转到页面的指定位置，只需要将href属性设置为#+目标元素的id属性值</p>
<p>在开发中可以将#作为超链接的路径的占位符使用</p>
<p>可以使用javascript:;还作为href的属性此时点击这个超链接什么都不会发生。</p>
<h2 id="图片" tabindex="-1"><a class="header-anchor" href="#图片" aria-hidden="true">#</a> 图片</h2>
<p>图片标签用于向当前页面引入一个外部图片<br>
  使用img标签来引入外部图片：img标签是一个自结束标签<br>
  img这种元素属于替换元素（块和行内元素之间，具有两种元素的特点）<br>
  属性：</p>
<ul>
<li>
<p>src 属性指定的是外部图片的路径（路径规则和超链接是一样的）</p>
</li>
<li>
<p>alt 图片的描述，这个描述默认情况下不会显示，有些浏览器会在图片无法加载时显示<br>
 搜索引擎会根据alt中的内容来识别图片，如果不写alt属性则图片不会被搜索引擎所收录</p>
</li>
<li>
<p>width 图片的宽度（单位是像素）</p>
</li>
<li>
<p>height 图片的高度<br>
 宽度和高度如果只修改了一个，则另一个会等比例缩放</p>
<p>注意：<br>
一般情况下在pc端，不建议修改图片的大小，需要多大的图片就裁多大<br>
但是在移动端，经常需要对图片进行缩放（大图缩小）</p>
</li>
</ul>
<p>图片的格式：</p>
<ol>
<li>
<p>jpeg（jpg）</p>
<ul>
<li>支持的颜色比较丰富，不支持透明效果，不支持动图</li>
<li>一般用来显示照片</li>
</ul>
</li>
<li>
<p>gif</p>
<ul>
<li>支持的颜色比较少，支持简单透明，支持动图</li>
<li>颜色单一的图片，动图</li>
</ul>
</li>
<li>
<p>png</p>
<ul>
<li>支持的颜色丰富，支持复杂透明，不支持动图</li>
<li>颜色丰富，复杂透明的图片（专为网页而生）</li>
</ul>
</li>
<li>
<p>webp</p>
<ul>
<li>这种格式是谷歌推出的专门用来表示网页中的图片的一种格式</li>
<li>它具备其他图片格式的所有优点，而且文件还特别小</li>
<li>缺点：兼容性不好</li>
</ul>
</li>
<li>
<p>base64</p>
<ul>
<li>将图片使用base64编码，这样可以将图片转换为字符，通过字符形式来引入图片</li>
<li>一般都是一些需要和网页一起加载的图片才会使用base64</li>
</ul>
</li>
<li>
<p>原则：</p>
<ul>
<li>效果一样，用小的</li>
<li>效果不一样，用效果好的</li>
</ul>
</li>
</ol>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="内联框架" tabindex="-1"><a class="header-anchor" href="#内联框架" aria-hidden="true">#</a> 内联框架</h3>
<p>内联框架，用于向当前页面引入一个其他页面</p>
<ul>
<li>src：指定要引入页面的路径</li>
<li>frameborder：指定内联框架的边框</li>
</ul>
<h3 id="音视频播放" tabindex="-1"><a class="header-anchor" href="#音视频播放" aria-hidden="true">#</a> 音视频播放</h3>
<p>audio 标签用来引入一个外部的音频文件</p>
<ul>
<li>音视频文件引入时，默认情况下不允许用户控制播放停止</li>
</ul>
<p>属性：</p>
<ul>
<li>controls 是否允许用户控制播放</li>
<li>autoplay 音频文件是否自动播放
<ul>
<li>如果设置了autoplay，则音乐在打开页时会自动播放</li>
<li>但是目前大部分不支持</li>
<li>loop 循环播放</li>
</ul>
</li>
</ul>
<p>除了通过src来指定外部文件的路径以外，还可以通过source来指定文件。</p>
<ul>
<li>
<p>embed 使用该标签Ie8以下浏览器也能播放音频和视频，需要指定宽跟高，否则几乎没有界面，会无法控制，type指定文件格式，该标签会自动播放，无法修改。
折中方案：audio标签中套用embed标签。</p>
</li>
<li>
<p>使用video标签引入视频文件</p>
<ul>
<li>使用方式跟audio基本一样</li>
</ul>
</li>
</ul>
<h2 id="css简介" tabindex="-1"><a class="header-anchor" href="#css简介" aria-hidden="true">#</a> CSS简介</h2>
<p>网页分成三个部分</p>
<ul>
<li>结构（HTML）</li>
<li>表现（CSS）</li>
<li>行为（JS）</li>
</ul>
<p>CSS</p>
<ul>
<li>层叠样式表</li>
<li>网页实际上是一个多层的结构，通过css可以分别为网页的每一层来设置样式，而最终我们能看见的只是网页的最上面的一层</li>
<li>css用来设置元素的样式</li>
</ul>
<p>使用css修改元素样式</p>
<p>第一种方式（内联样式/行内样式）</p>
<ul>
<li>
<p>在标签内部通过style属性来设置元素样式</p>
</li>
<li>
<p>问题：</p>
<ul>
<li>内联样式只能对一个标签生效，如果希望影响到多个元素，需要都复制一遍</li>
<li>并且当样式发生变化时，我们需要一个一个的修改，很麻烦。</li>
</ul>
</li>
<li>
<p>注意：开发时绝对不要使用内联样式</p>
</li>
</ul>
<p>第二种方式(内部样式表)</p>
<ul>
<li>将样式编写到head的sytle标签里</li>
<li>然后通过CSS的选择器来选中元素并为其设置各种样式</li>
<li>可以同时为多个标签设置样式，并且修改时只需修改一处即可全部应用。</li>
<li>内部样式表更加方便对样式进行复用</li>
</ul>
<p>问题：</p>
<ul>
<li>我们的内部样式表只能对一个网页起作用</li>
<li>它里面的样式不能跨页面进行复用</li>
</ul>
<p>第三种方式（外部样式表）最佳使用方式</p>
<ul>
<li>可以将CSS样式编写到一个外部的CSS文件中，
<ul>
<li>然后通过link标签来引入外部的CSS文件</li>
</ul>
</li>
<li>外部样式表需要通过link标签引入，
<ul>
<li>意味着只要是想使用这些样式的网页都可以对其进行引用，</li>
<li>使样式可以在不同页面之间复用</li>
</ul>
</li>
<li>将样式编写到外部的CSS文件中，可以使用到浏览器的缓存机制，
<ul>
<li>从而加快网页的加载速度，提高用户体验。</li>
</ul>
</li>
</ul>
<h2 id="css的基本语法" tabindex="-1"><a class="header-anchor" href="#css的基本语法" aria-hidden="true">#</a> CSS的基本语法</h2>
<h3 id="选择器-声明块" tabindex="-1"><a class="header-anchor" href="#选择器-声明块" aria-hidden="true">#</a> 选择器 声明块</h3>
<p>选择器：通过选择器可以选中页面中的指定元素</p>
<ul>
<li>比如p的作用就是选中页面中所有的p元素</li>
</ul>
<p>声明块：通过声明块来指定要为元素设置的样式</p>
<ul>
<li>声明块由一个个声明组成</li>
<li>声明是一个名值对结构
<ul>
<li>一个样式名对应一个样式值.名和值之间以：连接，以；结尾。</li>
</ul>
</li>
</ul>
<h3 id="常用选择器" tabindex="-1"><a class="header-anchor" href="#常用选择器" aria-hidden="true">#</a> 常用选择器</h3>
<p>元素选择器</p>
<ul>
<li>作用：根据标签名来选中制定元素</li>
<li>语法：标签名（）</li>
<li>例子：p{} h1{}</li>
</ul>
<p>id选择器</p>
<ul>
<li>作用：根据元素的id属性值选中一个元素</li>
<li>语法：#id属性值{}</li>
<li>例子：#red{} #box{}</li>
</ul>
<p>类选择器</p>
<ul>
<li>作用：根据元素的class属性值选中一组元素</li>
<li>语法：.class属性值</li>
<li>class是一个标签属性，它和id类似，不同的是class可以重复使用</li>
<li>可以通过class属性来为元素分组</li>
<li>可以同时为一个元素指定多个class属性
<ul>
<li>通配选择器
<ul>
<li>作用：选中页面中的所有元素</li>
<li>语法：*</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器" aria-hidden="true">#</a> 复合选择器</h3>
<p>交集选择器</p>
<ul>
<li>作用：选中同时符合多个条件的元素</li>
<li>语法：选择器1选择器2选择器3选择器n{}</li>
<li>注意：
<ul>
<li>交集选择器中如果有元素选择器，必须使用元素选择器开头</li>
</ul>
</li>
</ul>
<p>选择器分组（并集选择器）</p>
<ul>
<li>作用：同时选择多个选择器的元素</li>
<li>语法：选择器1，选择器2，选择器3，选择器n{}</li>
</ul>
<h3 id="关系选择器" tabindex="-1"><a class="header-anchor" href="#关系选择器" aria-hidden="true">#</a> 关系选择器</h3>
<p>父元素</p>
<ul>
<li>直接包含子元素的叫做父元素</li>
</ul>
<p>子元素</p>
<ul>
<li>直接被父元素包含的元素是子元素</li>
</ul>
<p>祖先元素</p>
<ul>
<li>直接或间接包含后代元素的元素叫做祖先元素</li>
<li>一个元素的父元素也是他的祖先元素</li>
</ul>
<p>后代元素</p>
<ul>
<li>直接或间接被祖先元素包含的元素叫做后代元素</li>
<li>子元素也是后代元素</li>
</ul>
<p>兄弟元素</p>
<ul>
<li>拥有相同父元素的元素是兄弟元素</li>
</ul>
<p>子元素选择器</p>
<ul>
<li>作用：选中指定父元素的指定子元素</li>
<li>语法：父元素&gt;子元素</li>
</ul>
<p>后代元素选择器</p>
<ul>
<li>作用：选中指定元素内的指定后代元素</li>
<li>语法：祖先 后代</li>
</ul>
<p>选择下一个</p>
<ul>
<li>语法：前一个+下一个</li>
</ul>
<p>选择下边所有</p>
<ul>
<li>语法：兄~弟</li>
</ul>
<h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3>
<ul>
<li>[属性名] 选择含有指定属性的元素</li>
<li>[属性名=属性值] 选择含有指定属性名和属性值的元素</li>
<li>[属性名^=属性值] 选择属性值以指定值开头的元素</li>
<li>[属性名$=属性值] 选择属性值以指定值结尾的元素</li>
<li>[属性名*=属性值] 选择属性值中含有某值的元素</li>
</ul>
<h3 id="伪类-不存在的类-特殊的类" tabindex="-1"><a class="header-anchor" href="#伪类-不存在的类-特殊的类" aria-hidden="true">#</a> 伪类（不存在的类,特殊的类）</h3>
<p>用来描述一个元素的特殊状态
例：第一个元素，鼠标点击的元素
伪类一般情况下都用冒号开头</p>
<ol>
<li>:first-child 第一个子元素</li>
<li>:last-child 最后一个子元素</li>
<li>:nth-child(n) 选中第n个子元素</li>
<li>特殊值:
(1). n 第n个 n的范围0到正无穷
(2). 2n或even 选中偶数位的元素
(3). 2n+1或odd 选中奇数位的元素</li>
</ol>
<p>以上伪类都是根据所有子元素进行排序的</p>
<ol>
<li>:first-of-type</li>
<li>:last-of-type</li>
<li>:nth-last-of-type()</li>
</ol>
<p>这几个伪类和上述功能类似，不同点是他们在同类型元素中排序</p>
<ul>
<li>:not() 否定伪类:</li>
<li>将符合条件的元素从选择器中去除</li>
</ul>
<h3 id="a元素的伪类" tabindex="-1"><a class="header-anchor" href="#a元素的伪类" aria-hidden="true">#</a> a元素的伪类</h3>
<ol>
<li>:link 用来表示没访问过的链接（正常的链接）。</li>
<li>:visited 用来表示访问过的链接，由于隐私原因只能生效color属性。</li>
<li>:hover 用来表示鼠标移入的状态。</li>
<li>:active 用来表示鼠标点击</li>
</ol>
<h3 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素" aria-hidden="true">#</a> 伪元素</h3>
<p>伪元素，表示页面中一些特殊的并不真实存在的元素</p>
<ul>
<li>伪元素的使用 :: 开头
<ul>
<li>::first letter 表示第一个字母</li>
<li>::first line 表示第一行</li>
<li>::selection 表示选中的内容</li>
<li>::before 元素的开始</li>
<li>::after 元素的最后
<strong>before 和 after 必须结合content属性使用</strong></li>
</ul>
</li>
</ul>
<p>（未完待续）</p>
</template>
