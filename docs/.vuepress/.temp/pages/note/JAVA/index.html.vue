<template><h2 id="基础语法" tabindex="-1"><a class="header-anchor" href="#基础语法" aria-hidden="true">#</a> 基础语法</h2>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3>
<ol>
<li>单行注释：只能注释一行文字。用法:// + 注释</li>
<li>多行注释：能注释一段文字。用法:/<em>+ 内容 +</em>/</li>
<li>文档注释：javaDoc.用法:/** + 内容 + */</li>
</ol>
<h3 id="标识符和关键字" tabindex="-1"><a class="header-anchor" href="#标识符和关键字" aria-hidden="true">#</a> 标识符和关键字</h3>
<p><img src="https://img-blog.csdnimg.cn/20210211160730699.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dwOTIzMDMzMzc0,size_16,color_FFFFFF,t_70" alt="截图">
<strong>标识符是大小写敏感的。</strong></p>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p><img src="https://img-blog.csdnimg.cn/20210211163106702.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dwOTIzMDMzMzc0,size_16,color_FFFFFF,t_70" alt="截图">
定义字符串用String，它是一个类。</p>
<h3 id="数据类型扩展" tabindex="-1"><a class="header-anchor" href="#数据类型扩展" aria-hidden="true">#</a> 数据类型扩展</h3>
<h3 id="整数拓展" tabindex="-1"><a class="header-anchor" href="#整数拓展" aria-hidden="true">#</a> 整数拓展</h3>
<p><strong>进制</strong>
二进制0b 十进制0 八进制 十六进制0x</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">010</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> i2 <span class="token operator">=</span> <span class="token number">0x10</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="https://img-blog.csdnimg.cn/20210212123649444.png#pic_center" alt="截图"></p>
<h3 id="浮点数拓展" tabindex="-1"><a class="header-anchor" href="#浮点数拓展" aria-hidden="true">#</a> 浮点数拓展</h3>
<p>flout double
少用浮点数进行比较
浮点数有舍入误差
结果为大约数
<img src="https://img-blog.csdnimg.cn/20210212125602165.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dwOTIzMDMzMzc0,size_16,color_FFFFFF,t_70" alt="截图">
<img src="https://img-blog.csdnimg.cn/20210212125616778.png" alt="截图"></p>
<h3 id="字符拓展" tabindex="-1"><a class="header-anchor" href="#字符拓展" aria-hidden="true">#</a> 字符拓展</h3>
<p>涉及编码问题
Unicode编码 占两个字节
97=a 65=A
表示范围
U0000-UFFFF
<img src="https://img-blog.csdnimg.cn/20210212130324711.png" alt="截图">
<img src="https://img-blog.csdnimg.cn/20210212130339804.png" alt="截图"></p>
<h3 id="转义字符" tabindex="-1"><a class="header-anchor" href="#转义字符" aria-hidden="true">#</a> 转义字符</h3>
<ol>
<li>\t 制表符</li>
<li>\n 换行
<img src="https://img-blog.csdnimg.cn/20210212130601735.png" alt="截图">
<img src="https://img-blog.csdnimg.cn/2021021213061740.png" alt="截图"></li>
</ol>
<h3 id="布尔值扩展" tabindex="-1"><a class="header-anchor" href="#布尔值扩展" aria-hidden="true">#</a> 布尔值扩展</h3>
<p>刚开始用第一种
熟悉了用第二种</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> home <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>home<span class="token operator">==</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"======================================"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token comment">//第一种</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>home<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"======================================"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token comment">//第二种</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>代码要精简易读。</strong></p>
<h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3>
<p>低————————高
byte-&gt;short-&gt;char-&gt;int-&gt;long-&gt;float-&gt;double</p>
<ol>
<li>值的大小超出数据类型所规定的范围会数据溢出。</li>
<li>强制转换 （类型）变量名 高————低</li>
<li>自动转换  变量名 低————高</li>
</ol>
<h4 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h4>
<ol>
<li>不能对布尔值进行转换</li>
<li>不能把类型转换为不相干的类型</li>
<li>在把高容量转向低容量的时候强制转换</li>
<li>转换时可能存在内存溢出或精度问题
jdk7新特性，数字间可加下划线</li>
</ol>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p>定义：可以变化的量
三要素：变量名，变量类型，作用域。</p>
<h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4>
<ol>
<li>每个变量都有类型，类型可以是基本类型，也可以是引用类型。</li>
<li>变量名必须是合法标识符。</li>
<li>变量声明必须是完整的语句，每个声明结尾要以分号结束。</li>
</ol>
<h4 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h4>
<p>关键词：static</p>
<ol>
<li>
<p>类变量
<img src="https://img-blog.csdnimg.cn/20210213122552591.png" alt="截图"></p>
</li>
<li>
<p>实例变量（在类里面，方法外面。变量类型，变量名字）<img src="https://img-blog.csdnimg.cn/20210213122431899.png" alt="截图"></p>
</li>
<li>
<p>局部变量（在方法里面，必须声明和初始化值）<img src="https://img-blog.csdnimg.cn/20210213122644967.png" alt="截图"></p>
</li>
<li>
<p>变量初始值为0，0.0，0000
布尔值初始值为false
除了基本类型，其余值都为null</p>
</li>
</ol>
<h4 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h4>
<p>final 常量+值</p>
<h4 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范" aria-hidden="true">#</a> 命名规范</h4>
<ol>
<li>所有变量，方法，类名，见名知意</li>
<li>类成员变量：首字母小写，驼峰原则。除了第一个单词意外，后面的单词首字母大写</li>
<li>局部变量：同类成员变量</li>
<li>常量：大写字母和下划线</li>
<li>类名：首字母大写，驼峰原则</li>
<li>方法名：同类成员变量。</li>
</ol>
<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h3>
<p>算术：+  -   <em>/  ++ --
赋值：=
关系：&gt; &lt; == &gt;= &lt;= != instanceof
逻辑运算符：&amp;&amp; || ！
位运算符：&amp; | ^ ~ &gt;&gt; &lt;&lt; &gt;&gt;&gt; (了解)
条件：？  ：
扩展运算：+=  -=</em>=  /=
ctrl+d:复制当前行到下一行。
计算时有long型，结果为long型
没有其余为int类型。
cast：转换
取余，也叫模运算。
a++:先输出a，再自增1
++a:先加一再输出a</p>
<h3 id="java-doc" tabindex="-1"><a class="header-anchor" href="#java-doc" aria-hidden="true">#</a> Java doc</h3>
<ol>
<li>@author 作者名</li>
<li>@version 版本号</li>
<li>@since 指明需要最早使用的jdk版本</li>
<li>@param 参数名</li>
<li>@return 返回值情况</li>
<li>@throws 异常抛出情况</li>
</ol>
<h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> <a href="https://github.com/lym0518/java/tree/main/ceshi%201/src/com/Java/LiuChengKongZhi" target="_blank" rel="noopener noreferrer">流程控制<ExternalLinkIcon/></a></h2>
<h3 id="用户交互scanner" tabindex="-1"><a class="header-anchor" href="#用户交互scanner" aria-hidden="true">#</a> 用户交互Scanner</h3>
<p>类名 java.util.Scanner</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>next()
nextLine()
//获取输入字符串
hasNext()
hasNextLine()
//判断是否还有输入数据
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<ol>
<li>声明一个数组<br>
例：int[] nums;</li>
<li>创建一个数组<br>
例：nums = new int[10]; （中括号里是数组的大小数量）</li>
<li>获取数组的长度<br>
例：nums.length</li>
</ol>
<h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存" aria-hidden="true">#</a> 内存</h2>
<h3 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h3>
<ol>
<li>存放new的对象和数组</li>
<li>可以被所有线程共享，不会存放别的对象引用</li>
</ol>
<h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3>
<ol>
<li>存放基本变量类型（也包含这个基本类型的数值）</li>
<li>引用对象的变量（会存放这个引用在堆里面的具体地址）</li>
</ol>
<h3 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h3>
<ol>
<li>可以被所有线程共享</li>
<li>包含了所有的class和static变量</li>
</ol>
<h3 id="错误" tabindex="-1"><a class="header-anchor" href="#错误" aria-hidden="true">#</a> 错误</h3>
<ol>
<li>ArrayIndexOutOfBoundsException：（数组下标越界异常）</li>
</ol>
<h3 id="数组三种初始化状态" tabindex="-1"><a class="header-anchor" href="#数组三种初始化状态" aria-hidden="true">#</a> 数组三种初始化状态</h3>
<ol>
<li>静态初始化
int[] a={1,5,2,4,6,3};
一旦创建长度跟括号内元素个数有关，且确定。</li>
<li>动态初始化
int[] a=new int[10];
a[1]=8;
a[2]=2;</li>
<li>数组的默认初始化
初始化值为0；</li>
</ol>
<h3 id="数组四个基本特点" tabindex="-1"><a class="header-anchor" href="#数组四个基本特点" aria-hidden="true">#</a> 数组四个基本特点</h3>
<p><img src="https://img-blog.csdnimg.cn/2021041813403010.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dwOTIzMDMzMzc0,size_16,color_FFFFFF,t_70" alt="基本特点"></p>
<ol>
<li>其长度是确定的。数组一旦被创建，它的大小就不可以被改变。</li>
<li>其元素必须是相同类型，不允许出现混合类型。</li>
<li>数组中的元素可以是任意数据类型，包括基本类型和引用类型。</li>
<li>数组变量属引用类型，数组也可以看成是对象，数组中的每个元素相当于该对象的成员变量。数组本身就是对象，Java中对象是在堆中的，因此数组无论保存原始类型还是其他对象类型,<strong>数组对象本身是在堆中的。</strong></li>
</ol>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3>
<ol>
<li>数组是相同数据类型（数据类型可以为任意类型）的有序集合。</li>
<li>数组也是对象，数组元素相当于对象的成员变量</li>
<li>数组长度是确定的，是不可改变的。如果越界，则报错：ArrayIndexOutOfBoundsException：(数组下标越界异常 )。</li>
</ol>
<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2>
<h3 id="初识面向对象" tabindex="-1"><a class="header-anchor" href="#初识面向对象" aria-hidden="true">#</a> 初识面向对象</h3>
<ol>
<li>物以类聚，分类的思维模式</li>
<li>属性+方法=类
<strong>对于描述复杂的事物，为了从宏观上把握，从整体上合理分析，我们需要使用面向对象的思路来分析整个系统。但是，具体到微观操作，仍然需要面向过程的思路去处理。</strong></li>
</ol>
<h4 id="什么是面向对象" tabindex="-1"><a class="header-anchor" href="#什么是面向对象" aria-hidden="true">#</a> 什么是面向对象</h4>
<ol>
<li>面向对象编程（oop）</li>
<li><strong>本质:以类的方式组织代码，以对象的组织(封装)数据</strong></li>
<li>抽象（类似提取）</li>
<li>三大特性
<ol>
<li>封装</li>
<li>继承</li>
<li>多态</li>
</ol>
</li>
<li>从认识来考虑，先有对象后有类</li>
<li>从代码运行考虑，先有类后有对象</li>
</ol>
<h3 id="类与对象的关系" tabindex="-1"><a class="header-anchor" href="#类与对象的关系" aria-hidden="true">#</a> 类与对象的关系</h3>
<p><strong>  类是一种抽象的数据类型，它是对某一类事物整体描述或定义，但是并不能代表某一个具体的事物
  对象是抽象概念的具体实例</strong></p>
<h4 id="创建与初始化" tabindex="-1"><a class="header-anchor" href="#创建与初始化" aria-hidden="true">#</a> 创建与初始化</h4>
<ol>
<li>使用new关键字船创建对象的时候，除了分配内存空间，还会给创建好的对象进行默认的初始化以及对类中构造器的调用</li>
<li>构造器特点:
<ol>
<li>必须和类名字相同</li>
<li>必须没有返回类型，也不能写void</li>
</ol>
</li>
<li>构造器的两个作用
<ol>
<li>使用new关键字，本质是在调用构造器</li>
<li>有参构造：一旦定义有参构造，无参就必须显示定义</li>
</ol>
</li>
</ol>
<p><strong>定义了有参构造，如果想使用无参构造，显示的定义一个无参的构造。</strong></p>
<h3 id="创建对象内存分析" tabindex="-1"><a class="header-anchor" href="#创建对象内存分析" aria-hidden="true">#</a> 创建对象内存分析</h3>
<p>内存图：
<img src="https://img-blog.csdnimg.cn/20210604203435862.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dwOTIzMDMzMzc0,size_16,color_FFFFFF,t_70#pic_center" alt="内存"></p>
<h2 id="小结-类与对象" tabindex="-1"><a class="header-anchor" href="#小结-类与对象" aria-hidden="true">#</a> 小结：类与对象</h2>
<ol>
<li>类是一个模板，抽象，对象是一个具体的实例。</li>
<li>方法，定义，调用</li>
<li>对应的引用：
<ul>
<li>引用类型：基本类型（8）</li>
<li>对象是通过引用来操作的：栈----》堆</li>
</ul>
</li>
<li>属性：字段，成员变量。
<ul>
<li>默认初始化：</li>
<li>数字：0</li>
<li>char：u0000</li>
<li>boolean:false</li>
<li>引用：null</li>
<li>赋值：</li>
<li>修饰符 属性类型 属性名=属性值</li>
</ul>
</li>
<li>对象的创建和使用
<ul>
<li>必须使用new关键字创造对象 构造器</li>
<li>对象的属性</li>
<li>对象的方法</li>
</ul>
</li>
<li>类
<ul>
<li>静态的属性 属性</li>
<li>动态的行为 方法</li>
</ul>
</li>
</ol>
<h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h2>
<ol>
<li>该露的露该藏的藏<br>
程序设计要求“高内聚，低耦合”。高内聚指类的内部数据操作细节自己完成，不允许外部干涉；低耦合指尽暴露少量的方法给外部使用。</li>
<li>封装（数据的隐藏）<br>
通常，应禁止直接访问一个对象中数据的直接表示，而应通过操作接口来访问，这称为信息隐藏<br>
相关关键字：private（私有）<br>
set（赋值）
get（获得）</li>
</ol>
<h3 id="封装的作用" tabindex="-1"><a class="header-anchor" href="#封装的作用" aria-hidden="true">#</a> 封装的作用</h3>
<ol>
<li>提高程序安全性，保护数据。</li>
<li>隐藏代码的实现细节</li>
<li>统一接口</li>
<li>增加系统可维护</li>
</ol>
<p>一句话：属性私有 get/set</p>
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p>super注意点：</p>
<ol>
<li>super调用父类的构造方法，必须在构造方法的第一个</li>
<li>super必须只能出现在子类的方法或者构造方法中</li>
<li>super和this不能同时调用构造方法</li>
</ol>
<p>与this的区别：<br>
  代表的对象不同 ：<br>
    this：本身调用这个对象<br>
    super：代表父类对象的运用<br>
  前提<br>
    this：没有继承也可以使用<br>
    super：只能在继承条件下使用<br>
  构造方法<br>
    this（）：本类的构造<br>
    super（）：父类的构造</p>
</template>
