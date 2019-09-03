# flex-demos

再次深入学习flex布局，为开发webapp和个人博客打好基础。<!-- more -->

> 示例Demo来自[前端网--老姚](https://www.qdfuns.com/article/17398/142325bb05237cb5b9459e557557ee8e.html)

## flex布局

传统的布局方式是基于盒模型的，依靠postion、float、display等属性来实现。

2009年， W3C提出了新的布局实现方案，flex布局可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了基本所有现代浏览器的支持，这意味着，现在就能很安全地使用这项功能。

浏览器支持：[IE10+](http://caniuse.com/#search=flex)

### 简介

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以定义为flex布局。

```
.box {
    display: flex;
}
```

行内元素也可以使用flex布局。

```
.line {
    display: inline-flex;
}
```

webkit内核的浏览器，需要加上-webkit-前缀

```
.box {
    display: -webkit-flex;
    display: flex;
}
```

**注意，设置为flex布局后，子元素的float  clear vertical-align属性会失效**

## 基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 属性

### 容器属性

即flex container所支持的属性，以下6个属性设置在容器上：

1. flex-direction 主轴方向

> 决定主轴的方向(容器里面flex item的排列方向)

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
    }
```

  - row（默认值）：主轴为水平方向，项目从左向右排列。
  - row-reverse：主轴为水平方向，项目从右向左排列。
  - column：主轴为垂直方向，项目从上向下排列。
  - column-reverse：主轴为垂直方向，项目从下向上排列。

2. flex-wrap 换行方式

> 定义如果一条轴线无法排列 如何换行

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

  - no-wrap  默认值，不换行
  - wrap  换行，多出的项目在已经排列的一行下边或者一列右边
  - wrap-reverse 换行，多出的项目在已经排列的一行上边或者一列左边

3. flex-flow 复合属性

> flex-direction和flex-wrap的复合属性简写 默认为row no-wrap

```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

4. justify-content 主轴对齐方式

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

  - flex-start 默认值 全部左对齐
  - flex-end 全部右对齐
  - center 全部居中
  - space-between 两端对齐，项目之间的间隔相等
  - space-round 每个项目两侧间隔相等，项目之间的间隔比边框间隔要大

5. align-items 义交叉轴线的对齐方式

```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

  - flex-start：交叉轴的起点对齐。
  - flex-end：交叉轴的终点对齐。
  - center：交叉轴的中点对齐。
  - baseline: 项目的**第一行文字的基线对齐**。
  - stretch（**默认值**）：如果**项目未设置高度或设为auto**，将占满整个容器的高度。

6. align-content 多根轴线的对齐方式

> 定义了多根轴线的对齐方式。如果**项目只有一根轴线，该属性不起作用**

```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

  - flex-start：与交叉轴的起点对齐。
  - flex-end：与交叉轴的终点对齐。
  - center：与交叉轴的中点对齐。
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  - stretch（默认值）：轴线占满整个交叉轴

### 项目属性

容器内的项目也有6种属性：

1. order 项目的排列顺序

>  **数值越小，排列越靠前**，**默认为0**

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

2. flex-grow 项目放大比例

> **默认为0**，即如果存在剩余空间，也不放大

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

  - 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
  - 如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

**即，如果有剩余空间，项目会根据设置的flex-grow的权重来分配剩余空间

3. flox-shrink 项目缩小比例

> **默认为1**，即如果空间不足，该项目将缩小

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```

  - 如果所有项目的flex-shrink属性都为1，当空间不足时，都**将等比例缩小**。
  - 如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

4. flex-basis 分配多余空间前，项目占据主轴空间

> 浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟width或height属性一样的值（比如350px），则**项目将占据固定空间**。

5. flex 复合属性

> flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

常用的输入框布局会采用输入框flex: 1; 让输入框的宽度自适应。

6. align-self 单个项目设置对齐方式

**可覆盖容器的align-items属性** 默认值为auto，表示继承父元素的align-items属性**，如果没有父元素，则等同于stretch**

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```



## 参考资料

[Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[flex布局系列文章导航](http://www.qdfuns.com/notes/17398/142325bb05237cb5b9459e557557ee8e.html)



