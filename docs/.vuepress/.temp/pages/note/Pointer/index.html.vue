<template><h2 id="声明指针" tabindex="-1"><a class="header-anchor" href="#声明指针" aria-hidden="true">#</a> 声明指针</h2>
<ul>
<li>要声明指向特定类型的指针，使用下面的格式：</li>
<li>ypename* poiterName</li>
</ul>
<h2 id="给指针赋值" tabindex="-1"><a class="header-anchor" href="#给指针赋值" aria-hidden="true">#</a> 给指针赋值</h2>
<ul>
<li>应将内存地址赋给指针。可以对变量名用&amp;操作符，来获得被命名的内存的地址，new操作符返回未命名的地址。</li>
</ul>
<h2 id="解除指针引用" tabindex="-1"><a class="header-anchor" href="#解除指针引用" aria-hidden="true">#</a> 解除指针引用</h2>
<ul>
<li>对指针解除引用意味着获得指针指向的值。对指针应用解除引用或间接操作符（*）来解除引用。</li>
<li>另一种解除指针引用的方法是使用数组表示法。绝不要对未被初始化为适当地址的指针解除引用。</li>
</ul>
<h2 id="区分指针和指针所指向的值" tabindex="-1"><a class="header-anchor" href="#区分指针和指针所指向的值" aria-hidden="true">#</a> 区分指针和指针所指向的值</h2>
<ul>
<li>如果pt是指向int的指针，则*pt不是指向int的指针，而是完全等同于一个int类型的变量。pt才是指针。</li>
</ul>
<h2 id="数组名" tabindex="-1"><a class="header-anchor" href="#数组名" aria-hidden="true">#</a> 数组名</h2>
<ul>
<li>在多数情况下，c++将数组名视为数组的第一个元素的地址。</li>
<li>将sizeof操作符用于数组名时，此时将返回整个数组的长度。（单位为字节）</li>
</ul>
<h2 id="指针算术" tabindex="-1"><a class="header-anchor" href="#指针算术" aria-hidden="true">#</a> 指针算术</h2>
<ul>
<li>c++允许将指针和整数相加。加1的结果等于原来的地址值加上指向的对象占用的总字节数。还可以将一个指针减去另一个指针获得两个指针的差。后一种运算将得到一个整数，仅当两个指针指向同一个数组（也可以指向超出结尾的一个位置）时，这种运算才有意义；这将得到两个元素的间隔。</li>
</ul>
<h2 id="数组的动态联编和静态联编" tabindex="-1"><a class="header-anchor" href="#数组的动态联编和静态联编" aria-hidden="true">#</a> 数组的动态联编和静态联编</h2>
<ul>
<li>使用数组声明来创建数组时，将采用静态联编，即数组的长度在编译时设置。</li>
<li>使用new[]操作符创建数组时将采用动态联编（动态数组），其将在运行时为数组分配空间，长度也将在运行时设置。使用完这种数组后应使用delete[]释放其占用的内存</li>
</ul>
<h2 id="数组表示法和指针表示法" tabindex="-1"><a class="header-anchor" href="#数组表示法和指针表示法" aria-hidden="true">#</a> 数组表示法和指针表示法</h2>
<ul>
<li>使用方括号数组表示法等同于对指针解除引用</li>
<li>数组名和指针变量都是如此，因此对于指针和数组名，既可以使用指针表示法也可以使用数组表示法。</li>
</ul>
</template>
