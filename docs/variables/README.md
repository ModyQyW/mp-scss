# 变量

## 使用

引入`variables`后即可使用所有内置变量。

```scss
@import "~@modyqyw/mp-scss/variables";
```

你也可以[配置`sass-loader`](https://github.com/webpack-contrib/sass-loader#additionaldata)让它默认注入这一行代码，这样就不必在每个`scss`部分都手动引入一次也能使用所有变量了。

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/app.scss
$unit: px;
$scale: 1;
@import "~@modyqyw/mp-scss/variables";
```

你也可以配置`sass-loader`让它默认注入这一个文件，这样就不必在每个`scss`部分都手动引入一次也能使用所有变量了。

## 初始变量 initial

[源码](https://github.com/MillCloud/mp-scss/blob/main/variables/initial.scss)

### 使用初始变量

引入`variables/initial`后即可使用内置初始变量。

```scss
@import "~@modyqyw/mp-scss/variables/initial";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$unit: px;
$scale: 1;
@import "~@modyqyw/mp-scss/variables/initial";
```

### 初始变量里的通用变量 initial/common colors

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$unit`|`rpx`|√||尺寸单位|
|`$scale`|`2`|√||缩放倍数，参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)|
|`$gray`|`#8c8c8c`|√||色板颜色跟随 Ant Design，可直接查看[明亮模式色板](https://ant-design.gitee.io/docs/spec/colors-cn)和[暗黑模式色板](https://ant-design.gitee.io/docs/spec/dark-cn)|
|`$gray-1`|`#fff`|√|||
|`$gray-2`|`#fafafa`|√|||
|`$gray-3`|`#f5f5f5`|√|||
|`$gray-4`|`#f0f0f0`|√|||
|`$gray-5`|`#d9d9d9`|√|||
|`$gray-6`|`#bfbfbf`|√|||
|`$gray-7`|`#8c8c8c`|√|||
|`$gray-8`|`#595959`|√|||
|`$gray-9`|`#434343`|√|||
|`$gray-10`|`#262626`|√|||
|`$gray-11`|`#1f1f1f`|√|||
|`$gray-12`|`#141414`|√|||
|`$gray-13`|`#000`|√|||
|`$white`|`#fff`|√|||
|`$black`|`#000`|√|||
|`$red`|`#f5222d`|√||明亮模式使用|
|`$volcano`|`#fa541c`|√||明亮模式使用|
|`$orange`|`#fa8c16`|√||明亮模式使用|
|`$gold`|`#faad14`|√||明亮模式使用|
|`$yellow`|`#fadb14`|√||明亮模式使用|
|`$lime`|`#a0d911`|√||明亮模式使用|
|`$green`|`#52c41a`|√||明亮模式使用|
|`$cyan`|`#13c2c2`|√||明亮模式使用|
|`$blue`|`#1890ff`|√||明亮模式使用|
|`$geek-blue`|`#2f54eb`|√||明亮模式使用|
|`$purple`|`#722ed1`|√||明亮模式使用|
|`$magenta`|`#eb2f96`|√||明亮模式使用|

### 初始变量里的定位变量 initial/positioning

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-position`|`("relative": relative, "absolute": absolute, "fixed": fixed, "static": static, "sticky": sticky)`|√||用于生成`position`相关的类|
|`$m-position-value`|`("-0": 0, "-auto": auto)`|√|使用`$length-min`，`$length-max`和`$length-step`循环添加键值对|用于生成`top`，`right`，`bottom`，`left`相关的类|
|`$z-index-default`|`auto`|√||用于生成`$m-z-index`|
|`$z-index-min`|`0`|√||用于生成`$m-z-index`|
|`$z-index-max`|`120`|√||用于生成`$m-z-index`|
|`$z-index-step`|`10`|√||用于生成`$m-z-index`|
|`$m-box-sizing`|`("-content": content-box, "border": border-box)`|√||用于生成`box-sizing`相关的类|

### 初始变量里的盒模型变量 initial/box-model

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-display`|`("-block": block, "-inline-block": inline-block, "-inline": inline, "-flex": flex, "-inline-flex": inline-flex, "-none": none)`|√||用于生成`display`相关的类|
|`$m-flex`|`("": 0 1 auto, "-auto": 1 1 auto, "-none": 0 0 auto)`|√||用于生成`flex`相关的类|
|`$m-flex-direction`|`("-row": row, "-row-reverse": row-reverse, "-col": column, "-col-reverse": column-reverse)`|√||用于生成`flex-direction`相关的类|
|`$m-flex-wrap`|`("-nowrap": nowrap, "-wrap": wrap, "-wrap-reverse": wrap-reverse)`|√||用于生成`flex-wrap`相关的类|
|`$flex-shrink-default`|`1`|√||用于生成`$m-flex-shrink`|
|`$flex-shrink-min`|`0`|√||用于生成`$m-flex-shrink`|
|`$flex-shrink-max`|`8`|√||用于生成`$m-flex-shrink`|
|`$flex-shrink-step`|`1`|√||用于生成`$m-flex-shrink`|
|`$flex-grow-default`|`0`|√||用于生成`$m-flex-grow`|
|`$flex-grow-min`|`0`|√||用于生成`$m-flex-grow`|
|`$flex-grow-max`|`8`|√||用于生成`$m-flex-grow`|
|`$flex-grow-step`|`1`|√||用于生成`$m-flex-grow`|
|`$m-align-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||用于生成`align-content`相关的类|
|`$m-align-items`|`("-start": flex-start, "-end": flex-end, "-center": center, "-baseline": baseline, "-stretch": stretch)`|√||用于生成`align-items`相关的类|
|`$m-align-self`|`("-auto": auto, "-start": flex-start, "-end": flex-end, "-center": center, "-stretch": stretch)`|√||用于生成`align-self`相关的类|
|`$m-justify-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||用于生成`justify-content`相关的类|
|`$order-first`|`-9999`|√||用于生成`$m-order`|
|`$order-last`|`9999`|√||用于生成`$m-order`|
|`$order-default`|`0`|√||用于生成`$m-order`|
|`$order-min`|`-8`|√||用于生成`$m-order`|
|`$order-max`|`8`|√||用于生成`$m-order`|
|`$order-step`|`1`|√||用于生成`$m-order`|
|`$length-default`|`auto`|√||用于生成`$m-length`|
|`$length-min`|`0`|√||用于生成`$m-length`|
|`$length-max`|`128`|√||用于生成`$m-length`|
|`$length-step`|`1`|√||用于生成`$m-length`|
|`$spacing-base`|`12`|√||用于生成`$m-spacing`|
|`$spacing-min`|`0`|√||用于生成`$m-spacing`|
|`$spacing-max`|`64`|√||用于生成`$m-spacing`|
|`$spacing-step`|`1`|√||用于生成`$m-spacing`|
|`$l-denominator`|`3, 4, 5, 6, 8, 10, 12, 16, 24, 100`|√||用于生成`$m-ratio`|
|`$m-overflow`|`("-auto": auto, "-hidden": hidden, "-visible": visible, "-scroll": scroll)`|√||用于生成`overflow`相关的类|

### 初始变量里的排版变量 initial/typography

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$font-family-default`|`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`|√||用于生成`$m-font-family`|
|`$font-family-sans`|`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`|√||用于生成`$m-font-family`|
|`$font-family-serif`|`Georgia, Cambria, "Times New Roman", Times, serif`|√||用于生成`$m-font-family`|
|`$font-family-mono`|`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`|√||用于生成`$m-font-family`|
|`$font-size-base`|`14`|√||用于生成`$m-font-size`|
|`$font-size-min`|`10`|√||用于生成`$m-font-size`|
|`$font-size-max`|`64`|√||用于生成`$m-font-size`|
|`$font-size-step`|`1`|√||用于生成`$m-font-size`|
|`$m-font-style`|`("-italic": italic, "-oblique": oblique)`|√||用于生成`font-style`相关的类|
|`$m-font-weight`|`("-thin": 100, "-extra-light": 200, "-ultra-light": 200, "-light": 300, "-default": 400, "-normal": 400, "-regular": 400, "-medium": 500, "-semi-bold": 600, "-bold": 700, "-extra-bold": 800, "-ultra-bold": 800, "-heavy": 900)`|√||用于生成`font-weight`相关的类|
|`$font-variant-tabular-nums`|`tabular-nums`|√||用于生成`$m-font-variant`|
|`$line-height-default`|`1.5715`|√||用于生成`$m-line-height`|
|`$line-height-none`|`1.15`|√||用于生成`$m-line-height`|
|`$line-height-tight`|`1.3`|√||用于生成`$m-line-height`|
|`$line-height-snug`|`1.45`|√||用于生成`$m-line-height`|
|`$line-height-relaxed`|`1.65`|√||用于生成`$m-line-height`|
|`$line-height-loose`|`2`|√||用于生成`$m-line-height`|
|`$line-height-min`|`18`|√||用于生成`$m-line-height`|
|`$line-height-max`|`72`|√||用于生成`$m-line-height`|
|`$line-height-step`|`1`|√||用于生成`$m-line-height`|
|`$m-text-align`|`("-left": left, "-right": right, "-center": center, "-justify": justify)`|√||用于生成`text-align`相关的类|
|`$m-text-decoration`|`("-none": none, "-overline": overline, "-underline": underline, "-line-through": line-through)`|√||用于生成`text-decoration`相关的类|
|`$m-text-transform`|`("-capitalize": capitalize, "-uppercase": uppercase, "-lowercase": lowercase)`|√||用于生成`text-transform`相关的类|
|`$m-resize`|`("-none": none, "": both, "-both": both, "-y": vertical, "-x": horizontal)`|√||用于生成`resize`相关的类|

### 初始变量里的视觉变量 initial/visual

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-background-repeat`|`("-repeat": repeat, "-repeat-y": repeat-y, "-repeat-x": repeat-x, "-repeat-space": space, "-repeat-round": round, "-no-repeat": no-repeat)`|√||用于生成`background-repeat`相关的类|
|`$m-background-attachment`|`("-fixed": fixed, "-local": local, "-scroll": scroll)`|√||用于生成`background-attachment`相关的类|
|`$m-background-position`|`("-top": top, "-right": right, "-bottom": bottom, "-left": left, "-right-top": right top, "-right-bottom": right bottom, "-left-top": left top, "-left-bottom": left bottom, "-center": center)`|√||用于生成`background-position`相关的类|
|`$m-background-size`|`("-contain": contain, "-cover": cover, "-auto": auto, "-full": 100% 100%)`|√||用于生成`background-size`相关的类|
|`$m-border-style`|`("-solid": solid, "-dashed": dashed, "-dotted": dotted, "-none": none)`|√||用于生成`border-style`相关的类|
|`$border-width-base`|`1`|√||用于生成`$m-border-width`|
|`$border-width-min`|`0`|√||用于生成`$m-border-width`|
|`$border-width-max`|`4`|√||用于生成`$m-border-width`|
|`$border-width-step`|`1`|√||用于生成`$m-border-width`|
|`$border-radius-base`|`2`|√||用于生成`$m-border-radius`|
|`$border-radius-min`|`0`|√||用于生成`$m-border-radius`|
|`$border-radius-max`|`8`|√||用于生成`$m-border-radius`|
|`$border-radius-step`|`1`|√||用于生成`$m-border-radius`|
|`$box-shadow-umbra`|`rgba(0, 0, 0, .2)`|√||用于生成`m-box-shadow-umbra`|
|`$box-shadow-penumbra`|`rgba(0, 0, 0, .14)`|√||用于生成`m-box-shadow-penumbra`|
|`$box-shadow-ambient`|`rgba(0, 0, 0, .12)`|√||用于生成`m-box-shadow-ambient`|

### 初始变量里的杂项变量 initial/misc

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-opacity`|`("-0": 0, "-25": .25, "-50": .5, "-75": .75, "-100": 1)`|√||用于生成`opacity`相关的类|
|`$transition-delay-default`|`.48s`|√||用于生成`$m-transition`|
|`$transition-timing-function-default`|`cubic-bezier(.25, .8, .5, 1)`|√||用于生成`$m-transition`|

## 衍生变量 derived

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)

### 使用衍生变量

衍生变量必须搭配初始变量使用，进行相应的引入后即可使用内置衍生变量。

```scss
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
```

### 衍生变量里的预设变量 derived/preset

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$page-background-color`|`$gray-1`|√||明亮模式下小程序根节点的默认背景色，修改`$gray-1`也会改变初始值|
|`$page-background-color-reverse`|`$gray-13`|√||暗黑模式下小程序根节点的默认背景色，修改`$gray-13`也会改变初始值|
|`$container-background-color`|`$gray-1`|√||明亮模式下顶级布局元素的默认背景色，修改`$gray-1`也会改变初始值|
|`$container-background-color-reverse`|`$gray-12`|√||暗黑模式下顶级布局元素的默认背景色，修改`$gray-12`也会改变初始值|

### 衍生变量里的通用变量 derived/common

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$red-1`|`#fff1f0`|×||明亮模式使用，使用`f-get-color`和`$red`生成，可以修改`$red`以修改初始值|
|`$red-2`|`#ffccc7`|×||同上|
|`$red-3`|`#ffa39e`|×||同上|
|`$red-4`|`#ff7875`|×||同上|
|`$red-5`|`#ff4d4f`|×||同上|
|`$red-6`|`#f5222d`|×||同上|
|`$red-7`|`#cf1322`|×||同上|
|`$red-8`|`#a8071a`|×||同上|
|`$red-9`|`#820014`|×||同上|
|`$red-10`|`#5c0011`|×||同上|
|`$red-reverse`|`#d32029`|×||暗黑模式使用，使用`scss`的`mix`函数，`$red`和`$container-background-color-reverse`生成，可以修改`$red`和`$container-background-color-reverse`以修改初始值|
|`$red-1-reverse`|`#2a1215`|×||同上|
|`$red-2-reverse`|`#431418`|×||同上|
|`$red-3-reverse`|`#58181c`|×||同上|
|`$red-4-reverse`|`#791a1f`|×||同上|
|`$red-5-reverse`|`#a61d24`|×||同上|
|`$red-6-reverse`|`#d32029`|×||同上|
|`$red-7-reverse`|`#e84749`|×||同上|
|`$red-8-reverse`|`#f37370`|×||同上|
|`$red-9-reverse`|`#f89f9a`|×||同上|
|`$red-10-reverse`|`#fac8c3`|×||同上|
|`$volcano-1`|`#fff2e8`|×||明亮模式使用，使用`f-get-color`和`$volcano`生成，可以修改`$volcano`以修改初始值|
|`$volcano-2`|`#ffd8bf`|×||同上|
|`$volcano-3`|`#ffbb96`|×||同上|
|`$volcano-4`|`#ff9c6e`|×||同上|
|`$volcano-5`|`#ff7a45`|×||同上|
|`$volcano-6`|`#fa541c`|×||同上|
|`$volcano-7`|`#d4380d`|×||同上|
|`$volcano-8`|`#ad2102`|×||同上|
|`$volcano-9`|`#871400`|×||同上|
|`$volcano-10`|`#610b00`|×||同上|
|`$volcano-reverse`|`#d84a1b`|×||暗黑模式使用，使用`scss`的`mix`函数，`$volcano`和`$container-background-color-reverse`生成，可以修改`$volcano`和`$container-background-color-reverse`以修改初始值|
|`$volcano-1-reverse`|`#2b1611`|×||同上|
|`$volcano-2-reverse`|`#441d12`|×||同上|
|`$volcano-3-reverse`|`#592716`|×||同上|
|`$volcano-4-reverse`|`#7c3118`|×||同上|
|`$volcano-5-reverse`|`#aa3e19`|×||同上|
|`$volcano-6-reverse`|`#d84a1b`|×||同上|
|`$volcano-7-reverse`|`#e87040`|×||同上|
|`$volcano-8-reverse`|`#f3956a`|×||同上|
|`$volcano-9-reverse`|`#f8b692`|×||同上|
|`$volcano-10-reverse`|`#fad4bc`|×||同上|
|`$orange-1`|`#fff7e6`|×||明亮模式使用，使用`f-get-color`和`$orange`生成，可以修改`$orange`以修改初始值|
|`$orange-2`|`#ffe7ba`|×||同上|
|`$orange-3`|`#ffd591`|×||同上|
|`$orange-4`|`#ffc069`|×||同上|
|`$orange-5`|`#ffa940`|×||同上|
|`$orange-6`|`#fa8c16`|×||同上|
|`$orange-7`|`#d46b08`|×||同上|
|`$orange-8`|`#ad4e00`|×||同上|
|`$orange-9`|`#873800`|×||同上|
|`$orange-10`|`#612500`|×||同上|
|`$orange-reverse`|`#d87a16`|×||暗黑模式使用，使用`scss`的`mix`函数，`$orange`和`$container-background-color-reverse`生成，可以修改`$orange`和`$container-background-color-reverse`以修改初始值|
|`$orange-1-reverse`|`#2b1d11`|×||同上|
|`$orange-2-reverse`|`#442a11`|×||同上|
|`$orange-3-reverse`|`#593815`|×||同上|
|`$orange-4-reverse`|`#7c4a15`|×||同上|
|`$orange-5-reverse`|`#aa6215`|×||同上|
|`$orange-6-reverse`|`#d87a16`|×||同上|
|`$orange-7-reverse`|`#e89a3c`|×||同上|
|`$orange-8-reverse`|`#f3b765`|×||同上|
|`$orange-9-reverse`|`#f8cf8d`|×||同上|
|`$orange-10-reverse`|`#fae3b7`|×||同上|
|`$gold-1`|`#fffbe6`|×||明亮模式使用，使用`f-get-color`和`$gold`生成，可以修改`$gold`以修改初始值|
|`$gold-2`|`#fff1b8`|×||同上|
|`$gold-3`|`#ffe58f`|×||同上|
|`$gold-4`|`#ffd666`|×||同上|
|`$gold-5`|`#ffc53d`|×||同上|
|`$gold-6`|`#faad14`|×||同上|
|`$gold-7`|`#d48806`|×||同上|
|`$gold-8`|`#ad6800`|×||同上|
|`$gold-9`|`#874d00`|×||同上|
|`$gold-10`|`#613400`|×||同上|
|`$gold-reverse`|`#d89614`|×||暗黑模式使用，使用`scss`的`mix`函数，`$gold`和`$container-background-color-reverse`生成，可以修改`$gold`和`$container-background-color-reverse`以修改初始值|
|`$gold-1-reverse`|`#2b2111`|×||同上|
|`$gold-2-reverse`|`#443111`|×||同上|
|`$gold-3-reverse`|`#594214`|×||同上|
|`$gold-4-reverse`|`#7c5914`|×||同上|
|`$gold-5-reverse`|`#aa7714`|×||同上|
|`$gold-6-reverse`|`#d89614`|×||同上|
|`$gold-7-reverse`|`#e8b339`|×||同上|
|`$gold-8-reverse`|`#f3cc62`|×||同上|
|`$gold-9-reverse`|`#f8df8b`|×||同上|
|`$gold-10-reverse`|`#faedb5`|×||同上|
|`$yellow-1`|`#feffe6`|×||明亮模式使用，使用`f-get-color`和`$yellow`生成，可以修改`$yellow`以修改初始值|
|`$yellow-2`|`#ffffb8`|×||同上|
|`$yellow-3`|`#fffb8f`|×||同上|
|`$yellow-4`|`#fff566`|×||同上|
|`$yellow-5`|`#ffec3d`|×||同上|
|`$yellow-6`|`#fadb14`|×||同上|
|`$yellow-7`|`#d4b106`|×||同上|
|`$yellow-8`|`#ad8b00`|×||同上|
|`$yellow-9`|`#876800`|×||同上|
|`$yellow-10`|`#614700`|×||同上|
|`$yellow-reverse`|`#d8bd14`|×||暗黑模式使用，使用`scss`的`mix`函数，`$yellow`和`$container-background-color-reverse`生成，可以修改`$yellow`和`$container-background-color-reverse`以修改初始值|
|`$yellow-1-reverse`|`#2b2611`|×||同上|
|`$yellow-2-reverse`|`#443b11`|×||同上|
|`$yellow-3-reverse`|`#595014`|×||同上|
|`$yellow-4-reverse`|`#7c6e14`|×||同上|
|`$yellow-5-reverse`|`#aa9514`|×||同上|
|`$yellow-6-reverse`|`#d8bd14`|×||同上|
|`$yellow-7-reverse`|`#e8d639`|×||同上|
|`$yellow-8-reverse`|`#f3ea62`|×||同上|
|`$yellow-9-reverse`|`#f8f48b`|×||同上|
|`$yellow-10-reverse`|`#fafab5`|×||同上|
|`$lime-1`|`#fcffe6`|×||明亮模式使用，使用`f-get-color`和`$lime`生成，可以修改`$lime`以修改初始值|
|`$lime-2`|`#f4ffb8`|×||同上|
|`$lime-3`|`#eaff8f`|×||同上|
|`$lime-4`|`#d3f261`|×||同上|
|`$lime-5`|`#bae637`|×||同上|
|`$lime-6`|`#a0d911`|×||同上|
|`$lime-7`|`#7cb305`|×||同上|
|`$lime-8`|`#5b8c00`|×||同上|
|`$lime-9`|`#3f6600`|×||同上|
|`$lime-10`|`#254000`|×||同上|
|`$lime-reverse`|`#8bbb11`|×||暗黑模式使用，使用`scss`的`mix`函数，`$lime`和`$container-background-color-reverse`生成，可以修改`$lime`和`$container-background-color-reverse`以修改初始值|
|`$lime-1-reverse`|`#1f2611`|×||同上|
|`$lime-2-reverse`|`#2e3c10`|×||同上|
|`$lime-3-reverse`|`#3e4f13`|×||同上|
|`$lime-4-reverse`|`#536d13`|×||同上|
|`$lime-5-reverse`|`#6f9412`|×||同上|
|`$lime-6-reverse`|`#8bbb11`|×||同上|
|`$lime-7-reverse`|`#a9d134`|×||同上|
|`$lime-8-reverse`|`#c9e75d`|×||同上|
|`$lime-9-reverse`|`#e4f88b`|×||同上|
|`$lime-10-reverse`|`#f0fab5`|×||同上|
|`$green-1`|`#f6ffed`|×||明亮模式使用，使用`f-get-color`和`$green`生成，可以修改`$green`以修改初始值|
|`$green-2`|`#d9f7be`|×||同上|
|`$green-3`|`#b7eb8f`|×||同上|
|`$green-4`|`#95de64`|×||同上|
|`$green-5`|`#73d13d`|×||同上|
|`$green-6`|`#52c41a`|×||同上|
|`$green-7`|`#389e0d`|×||同上|
|`$green-8`|`#237804`|×||同上|
|`$green-9`|`#135200`|×||同上|
|`$green-10`|`#092b00`|×||同上|
|`$green-reverse`|`#49aa19`|×||暗黑模式使用，使用`scss`的`mix`函数，`$green`和`$container-background-color-reverse`生成，可以修改`$green`和`$container-background-color-reverse`以修改初始值|
|`$green-1-reverse`|`#162312`|×||同上|
|`$green-2-reverse`|`#1d3712`|×||同上|
|`$green-3-reverse`|`#274916`|×||同上|
|`$green-4-reverse`|`#306317`|×||同上|
|`$green-5-reverse`|`#3c8618`|×||同上|
|`$green-6-reverse`|`#49aa19`|×||同上|
|`$green-7-reverse`|`#6abe39`|×||同上|
|`$green-8-reverse`|`#8fd460`|×||同上|
|`$green-9-reverse`|`#b2e58b`|×||同上|
|`$green-10-reverse`|`#d5f2bb`|×||同上|
|`$cyan-1`|`#e6fffb`|×||明亮模式使用，使用`f-get-color`和`$cyan`生成，可以修改`$cyan`以修改初始值|
|`$cyan-2`|`#b5f5ec`|×||同上|
|`$cyan-3`|`#87e8de`|×||同上|
|`$cyan-4`|`#5cdbd3`|×||同上|
|`$cyan-5`|`#36cfc9`|×||同上|
|`$cyan-6`|`#13c2c2`|×||同上|
|`$cyan-7`|`#08979c`|×||同上|
|`$cyan-8`|`#006d75`|×||同上|
|`$cyan-9`|`#00474f`|×||同上|
|`$cyan-10`|`#002329`|×||同上|
|`$cyan-reverse`|`#13a8a8`|×||暗黑模式使用，使用`scss`的`mix`函数，`$cyan`和`$container-background-color-reverse`生成，可以修改`$cyan`和`$container-background-color-reverse`以修改初始值|
|`$cyan-1-reverse`|`#112123`|×||同上|
|`$cyan-2-reverse`|`#113536`|×||同上|
|`$cyan-3-reverse`|`#144848`|×||同上|
|`$cyan-4-reverse`|`#146262`|×||同上|
|`$cyan-5-reverse`|`#138585`|×||同上|
|`$cyan-6-reverse`|`#13a8a8`|×||同上|
|`$cyan-7-reverse`|`#33bcb7`|×||同上|
|`$cyan-8-reverse`|`#58d1c9`|×||同上|
|`$cyan-9-reverse`|`#84e2d8`|×||同上|
|`$cyan-10-reverse`|`#b2f1e8`|×||同上|
|`$blue-1`|`#e6f7ff`|×||明亮模式使用，使用`f-get-color`和`$blue`生成，可以修改`$blue`以修改初始值|
|`$blue-2`|`#bae7ff`|×||同上|
|`$blue-3`|`#91d5ff`|×||同上|
|`$blue-4`|`#69c0ff`|×||同上|
|`$blue-5`|`#40a9ff`|×||同上|
|`$blue-6`|`#1890ff`|×||同上|
|`$blue-7`|`#096dd9`|×||同上|
|`$blue-8`|`#0050b3`|×||同上|
|`$blue-9`|`#003a8c`|×||同上|
|`$blue-10`|`#002766`|×||同上|
|`$blue-reverse`|`#177ddc`|×||暗黑模式使用，使用`scss`的`mix`函数，`$blue`和`$container-background-color-reverse`生成，可以修改`$blue`和`$container-background-color-reverse`以修改初始值|
|`$blue-1-reverse`|`#111d2c`|×||同上|
|`$blue-2-reverse`|`#112a45`|×||同上|
|`$blue-3-reverse`|`#15395b`|×||同上|
|`$blue-4-reverse`|`#164c7e`|×||同上|
|`$blue-5-reverse`|`#1765ad`|×||同上|
|`$blue-6-reverse`|`#177ddc`|×||同上|
|`$blue-7-reverse`|`#3c9ae8`|×||同上|
|`$blue-8-reverse`|`#65b7f3`|×||同上|
|`$blue-9-reverse`|`#8dcff8`|×||同上|
|`$blue-10-reverse`|`#b7e3fa`|×||同上|
|`$geek-blue-1`|`#f0f5ff`|×||明亮模式使用，使用`f-get-color`和`$geek-blue`生成，可以修改`$geek-blue`以修改初始值|
|`$geek-blue-2`|`#d6e4ff`|×||同上|
|`$geek-blue-3`|`#adc6ff`|×||同上|
|`$geek-blue-4`|`#85a5ff`|×||同上|
|`$geek-blue-5`|`#597ef7`|×||同上|
|`$geek-blue-6`|`#2f54eb`|×||同上|
|`$geek-blue-7`|`#1d39c4`|×||同上|
|`$geek-blue-8`|`#10239e`|×||同上|
|`$geek-blue-9`|`#061178`|×||同上|
|`$geek-blue-10`|`#030852`|×||同上|
|`$geek-blue-reverse`|`#2b4acb`|×||暗黑模式使用，使用`scss`的`mix`函数，`$geek-blue`和`$container-background-color-reverse`生成，可以修改`$geek-blue`和`$container-background-color-reverse`以修改初始值|
|`$geek-blue-1-reverse`|`#131629`|×||同上|
|`$geek-blue-2-reverse`|`#161d40`|×||同上|
|`$geek-blue-3-reverse`|`#1c2755`|×||同上|
|`$geek-blue-4-reverse`|`#203175`|×||同上|
|`$geek-blue-5-reverse`|`#263ea0`|×||同上|
|`$geek-blue-6-reverse`|`#2b4acb`|×||同上|
|`$geek-blue-7-reverse`|`#5273e0`|×||同上|
|`$geek-blue-8-reverse`|`#7f9ef3`|×||同上|
|`$geek-blue-9-reverse`|`#a8c1f8`|×||同上|
|`$geek-blue-10-reverse`|`#d2e0fa`|×||同上|
|`$purple-1`|`#f9f0ff`|×||明亮模式使用，使用`f-get-color`和`$purple`生成，可以修改`$purple`以修改初始值|
|`$purple-2`|`#efdbff`|×||同上|
|`$purple-3`|`#d3adf7`|×||同上|
|`$purple-4`|`#b37feb`|×||同上|
|`$purple-5`|`#9254de`|×||同上|
|`$purple-6`|`#722ed1`|×||同上|
|`$purple-7`|`#531dab`|×||同上|
|`$purple-8`|`#391085`|×||同上|
|`$purple-9`|`#22075e`|×||同上|
|`$purple-10`|`#120338`|×||同上|
|`$purple-reverse`|`#642ab5`|×||暗黑模式使用，使用`scss`的`mix`函数，`$purple`和`$container-background-color-reverse`生成，可以修改`$purple`和`$container-background-color-reverse`以修改初始值|
|`$purple-1-reverse`|`#1a1325`|×||同上|
|`$purple-2-reverse`|`#24163a`|×||同上|
|`$purple-3-reverse`|`#301c4d`|×||同上|
|`$purple-4-reverse`|`#3e2069`|×||同上|
|`$purple-5-reverse`|`#51258f`|×||同上|
|`$purple-6-reverse`|`#642ab5`|×||同上|
|`$purple-7-reverse`|`#854eca`|×||同上|
|`$purple-8-reverse`|`#ab7ae0`|×||同上|
|`$purple-9-reverse`|`#cda8f0`|×||同上|
|`$purple-10-reverse`|`#ebd7fa`|×||同上|
|`$magenta-1`|`#fff0f6`|×||明亮模式使用，使用`f-get-color`和`$magenta`生成，可以修改`$magenta`以修改初始值|
|`$magenta-2`|`#ffd6e7`|×||同上|
|`$magenta-3`|`#ffadd2`|×||同上|
|`$magenta-4`|`#ff85c0`|×||同上|
|`$magenta-5`|`#f759ab`|×||同上|
|`$magenta-6`|`#eb2f96`|×||同上|
|`$magenta-7`|`#c41d7f`|×||同上|
|`$magenta-8`|`#9e1068`|×||同上|
|`$magenta-9`|`#780650`|×||同上|
|`$magenta-10`|`#520339`|×||同上|
|`$magenta-reverse`|`#cb2b83`|×||暗黑模式使用，使用`scss`的`mix`函数，`$magenta`和`$container-background-color-reverse`生成，可以修改`$magenta`和`$container-background-color-reverse`以修改初始值|
|`$magenta-1-reverse`|`#291321`|×||同上|
|`$magenta-2-reverse`|`#40162f`|×||同上|
|`$magenta-3-reverse`|`#551c3b`|×||同上|
|`$magenta-4-reverse`|`#75204f`|×||同上|
|`$magenta-5-reverse`|`#a02669`|×||同上|
|`$magenta-6-reverse`|`#cb2b83`|×||同上|
|`$magenta-7-reverse`|`#e0529c`|×||同上|
|`$magenta-8-reverse`|`#f37fb7`|×||同上|
|`$magenta-9-reverse`|`#f8a8cc`|×||同上|
|`$magenta-10-reverse`|`#fad2e3`|×||同上|
|`$primary`|`$blue`|√||主要颜色，明亮模式使用，修改`$blue`也会改变初始值|
|`$primary-1`|`#e6f7ff`|×||明亮模式使用，使用`f-get-color`和`$primary`生成，可以修改`$primary`以修改初始值|
|`$primary-2`|`#bae7ff`|×||同上|
|`$primary-3`|`#91d5ff`|×||同上|
|`$primary-4`|`#69c0ff`|×||同上|
|`$primary-5`|`#40a9ff`|×||同上|
|`$primary-6`|`#1890ff`|×||同上|
|`$primary-7`|`#096dd9`|×||同上|
|`$primary-8`|`#0050b3`|×||同上|
|`$primary-9`|`#003a8c`|×||同上|
|`$primary-10`|`#002766`|×||同上|
|`$primary-reverse`|`#177ddc`|×||暗黑模式使用，使用`scss`的`mix`函数，`$primary`和`$container-background-color-reverse`生成，可以修改`$primary`和`$container-background-color-reverse`以修改初始值|
|`$primary-1-reverse`|`#111d2c`|×||同上|
|`$primary-2-reverse`|`#112a45`|×||同上|
|`$primary-3-reverse`|`#15395b`|×||同上|
|`$primary-4-reverse`|`#164c7e`|×||同上|
|`$primary-5-reverse`|`#1765ad`|×||同上|
|`$primary-6-reverse`|`#177ddc`|×||同上|
|`$primary-7-reverse`|`#3c9ae8`|×||同上|
|`$primary-8-reverse`|`#65b7f3`|×||同上|
|`$primary-9-reverse`|`#8dcff8`|×||同上|
|`$primary-10-reverse`|`#b7e3fa`|×||同上|
|`$success`|`$green`|√||成功颜色，明亮模式使用，修改`$green`也会改变初始值|
|`$success-1`|`#f6ffed`|×||明亮模式使用，使用`f-get-color`和`$success`生成，可以修改`$success`以修改初始值|
|`$success-2`|`#d9f7be`|×||同上|
|`$success-3`|`#b7eb8f`|×||同上|
|`$success-4`|`#95de64`|×||同上|
|`$success-5`|`#73d13d`|×||同上|
|`$success-6`|`#52c41a`|×||同上|
|`$success-7`|`#389e0d`|×||同上|
|`$success-8`|`#237804`|×||同上|
|`$success-9`|`#135200`|×||同上|
|`$success-10`|`#092b00`|×||同上|
|`$success-reverse`|`#49aa19`|×||暗黑模式使用，使用`scss`的`mix`函数，`$success`和`$container-background-color-reverse`生成，可以修改`$success`和`$container-background-color-reverse`以修改初始值|
|`$success-1-reverse`|`#162312`|×||同上|
|`$success-2-reverse`|`#1d3712`|×||同上|
|`$success-3-reverse`|`#274916`|×||同上|
|`$success-4-reverse`|`#306317`|×||同上|
|`$success-5-reverse`|`#3c8618`|×||同上|
|`$success-6-reverse`|`#49aa19`|×||同上|
|`$success-7-reverse`|`#6abe39`|×||同上|
|`$success-8-reverse`|`#8fd460`|×||同上|
|`$success-9-reverse`|`#b2e58b`|×||同上|
|`$success-10-reverse`|`#d5f2bb`|×||同上|
|`$warning`|`$gold`|√||警告颜色，明亮模式使用，修改`$gold`也会改变初始值|
|`$warning-1`|`#fffbe6`|×||明亮模式使用，使用`f-get-color`和`$warning`生成，可以修改`$warning`以修改初始值|
|`$warning-2`|`#fff1b8`|×||同上|
|`$warning-3`|`#ffe58f`|×||同上|
|`$warning-4`|`#ffd666`|×||同上|
|`$warning-5`|`#ffc53d`|×||同上|
|`$warning-6`|`#faad14`|×||同上|
|`$warning-7`|`#d48806`|×||同上|
|`$warning-8`|`#ad6800`|×||同上|
|`$warning-9`|`#874d00`|×||同上|
|`$warning-10`|`#613400`|×||同上|
|`$warning-reverse`|`#d89614`|×||暗黑模式使用，使用`scss`的`mix`函数，`$warning`和`$container-background-color-reverse`生成，可以修改`$warning`和`$container-background-color-reverse`以修改初始值|
|`$warning-1-reverse`|`#2b2111`|×||同上|
|`$warning-2-reverse`|`#443111`|×||同上|
|`$warning-3-reverse`|`#594214`|×||同上|
|`$warning-4-reverse`|`#7c5914`|×||同上|
|`$warning-5-reverse`|`#aa7714`|×||同上|
|`$warning-6-reverse`|`#d89614`|×||同上|
|`$warning-7-reverse`|`#e8b339`|×||同上|
|`$warning-8-reverse`|`#f3cc62`|×||同上|
|`$warning-9-reverse`|`#f8df8b`|×||同上|
|`$warning-10-reverse`|`#faedb5`|×||同上|
|`$error`|`$red`|√||错误颜色，明亮模式使用，修改`$red`也会改变初始值|
|`$error-1`|`#fff1f0`|×||明亮模式使用，使用`f-get-color`和`$error`生成，可以修改`$error`以修改初始值|
|`$error-2`|`#ffccc7`|×||同上|
|`$error-3`|`#ffa39e`|×||同上|
|`$error-4`|`#ff7875`|×||同上|
|`$error-5`|`#ff4d4f`|×||同上|
|`$error-6`|`#f5222d`|×||同上|
|`$error-7`|`#cf1322`|×||同上|
|`$error-8`|`#a8071a`|×||同上|
|`$error-9`|`#820014`|×||同上|
|`$error-10`|`#5c0011`|×||同上|
|`$error-reverse`|`#d32029`|×||暗黑模式使用，使用`scss`的`mix`函数，`$error`和`$container-background-color-reverse`生成，可以修改`$error`和`$container-background-color-reverse`以修改初始值|
|`$error-1-reverse`|`#2a1215`|×||同上|
|`$error-2-reverse`|`#431418`|×||同上|
|`$error-3-reverse`|`#58181c`|×||同上|
|`$error-4-reverse`|`#791a1f`|×||同上|
|`$error-5-reverse`|`#a61d24`|×||同上|
|`$error-6-reverse`|`#d32029`|×||同上|
|`$error-7-reverse`|`#e84749`|×||同上|
|`$error-8-reverse`|`#f37370`|×||同上|
|`$error-9-reverse`|`#f89f9a`|×||同上|
|`$error-10-reverse`|`#fac8c3`|×||同上|
|`$info`|`$blue`|√||信息颜色，明亮模式使用，修改`$blue`也会改变初始值|
|`$info-1`|`#e6f7ff`|×||明亮模式使用，使用`f-get-color`和`$info`生成，可以修改`$info`以修改初始值|
|`$info-2`|`#bae7ff`|×||同上|
|`$info-3`|`#91d5ff`|×||同上|
|`$info-4`|`#69c0ff`|×||同上|
|`$info-5`|`#40a9ff`|×||同上|
|`$info-6`|`#1890ff`|×||同上|
|`$info-7`|`#096dd9`|×||同上|
|`$info-8`|`#0050b3`|×||同上|
|`$info-9`|`#003a8c`|×||同上|
|`$info-10`|`#002766`|×||同上|
|`$info-reverse`|`#177ddc`|×||暗黑模式使用，使用`scss`的`mix`函数，`$info`和`$container-background-color-reverse`生成，可以修改`$info`和`$container-background-color-reverse`以修改初始值|
|`$info-1-reverse`|`#111d2c`|×||同上|
|`$info-2-reverse`|`#112a45`|×||同上|
|`$info-3-reverse`|`#15395b`|×||同上|
|`$info-4-reverse`|`#164c7e`|×||同上|
|`$info-5-reverse`|`#1765ad`|×||同上|
|`$info-6-reverse`|`#177ddc`|×||同上|
|`$info-7-reverse`|`#3c9ae8`|×||同上|
|`$info-8-reverse`|`#65b7f3`|×||同上|
|`$info-9-reverse`|`#8dcff8`|×||同上|
|`$info-10-reverse`|`#b7e3fa`|×||同上|

为了方便起见，另外提供了两个映射`$m-colors`和`$m-colors-reverse`。`$m-colors`包含了明亮模式的所有通用颜色，`$m-colors-reverse`包含了暗黑模式的所有通用颜色，初始变量里的未注明什么模式使用的通用颜色（如`$gray`）将会被包含在`$m-colors`中。

### 衍生变量里的定位变量 derived/positioning

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-z-index`|`("": $z-index-default, "-auto": auto)`|√|使用`$z-index-min`，`$z-index-max`和`$z-index-step`循环添加键值对|用于生成`z-index`相关的类，修改`$z-index-default`也会改变初始值|

### 衍生变量里的盒模型变量 derived/box-model

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-flex-shrink`|`("": $flex-shrink-default)`|√|使用`$flex-shrink-min`，`$flex-shrink-max`和`$flex-shrink-step`循环添加键值对|用于生成`flex-shrink`相关的类，修改`$flex-shrink-default`也会改变初始值|
|`$m-flex-grow`|`("": $flex-grow-default)`|√|使用`$flex-grow-min`，`$flex-grow-max`和`$flex-grow-step`循环添加键值对|用于生成`flex-grow`相关的类，修改`$flex-grow-default`也会改变初始值|
|`$m-order`|`("": $order-default, "-first": $order-first, "-last": $order-last)`|√|使用`$order-min`，`$order-max`和`$order-step`循环添加键值对|用于生成`order`相关的类，修改`$order-default`，`$order-first`，`$order-last`也会改变初始值|
|`$m-length`|`("": $length-default, "-auto": auto)`|√|使用`$length-min`，`$length-max`和`$length-step`循环添加键值对，如果`$scale`不为 1 还会添加键值对`"-1-real": 1 + $unit`|用于生成`width`，`length`相关的类，修改`$length-default`也会改变初始值|
|`$m-spacing`|`("-auto": auto, "": $spacing-base * $scale + $unit, "-xs": ($spacing-base - 8) * $scale + $unit, "-sm": ($spacing-base - 4) * $scale + $unit, "-md": $spacing-base * $scale + $unit, "-lg": ($spacing-base + 4) * $scale + $unit,  "-xl": ($spacing-base + 8) * $scale + $unit)`|√|使用`$spacing-min`，`$spacing-max`和`$spacing-step`循环添加键值对如果`$scale`不为 1 还会添加键值对`"-1-real": 1 + $unit`和`"-n1-real": -1 + $unit`|用于生成`padding`，`margin`相关的类，修改`$spacing-base`，`$scale`，`$unit`也会改变初始值|
|`$m-ratio`|`("-full": 100%, "-half": 50%, "-0": 0)`|√|使用`$l-denominator`循环添加键值对|用于生成`width`，`height`，`padding`，`margin`相关的类|

### 衍生变量里的排版变量 derived/typography

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-font-family`|`("": $font-family-default, "-sans": $font-family-sans, "-serif": $font-family-serif, "-mono": $font-family-mono)`|√||用于生成`font-family`相关的类，修改`$font-family-default`，`$font-family-sans`，`$font-family-serif`，`$font-family-mono`也会改变初始值|
|`$m-font-size`|`("": $font-size-base * $scale + $unit, "-xs": ($font-size-base - 4) * $scale + $unit, "-sm": ($font-size-base - 2) * $scale + $unit, "-md": $font-size-base * $scale + $unit, "-lg": ($font-size-base + 2) * $scale + $unit, "-xl": ($font-size-base + 4) * $scale + $unit, "-2xl": round(($font-size-base + 4) * 1.33333333) * $scale + $unit, "-3xl": round(($font-size-base + 4) * 1.33333333 * 1.16666667) * $scale + $unit, "-4xl": round(($font-size-base + 4) * 1.33333333 * 1.16666667 * 1.14285714) * $scale + $unit, "-5xl": round(($font-size-base + 4) * 1.33333333 * 1.16666667 * 1.14285714 * 1.125) * $scale + $unit, "-6xl": round(($font-size-base + 4) * 1.33333333 * 1.16666667 * 1.14285714 * 1.125 * 1.11111111) * $scale + $unit)`|√|使用`$font-size-min`，`$font-size-max`和`$font-size-step`循环添加键值对|用于生成`font-size`相关的类，修改`$font-size-base`，`$scale`，`$unit`也会改变初始值|
|`$m-font-variant`|`("tabular-nums": $font-variant-tabular-nums)`|√||用于生成`font-variant`相关的类，修改`font-variant-tabular-nums`也会改变初始值|
|`$m-line-height`|`("": $line-height-default, "-normal": $line-height-default, "-none": $line-height-none, "-tight": $line-height-tight, "-snug": $line-height-snug, "-relaxed": $line-height-relaxed, "-loose": $line-height-loose)`|√|使用`$line-height-min`，`$line-height-max`和`$line-height-step`循环添加键值对|用于生成`lie-height`相关的类，修改`line-height-default`，`$line-height-none`，`$line-height-tight`，`$line-height-snug`，`$line-height-relaxed`，`$line-height-loose`也会改变初始值|
|`$color-title`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，用于生成修改`$black`也会改变初始值|
|`$color-title-small`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，修改`$black`也会改变初始值|
|`$color-main`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，修改`$black`也会改变初始值|
|`$color-main-small`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，修改`$black`也会改变初始值|
|`$color-secondary`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，修改`$black`也会改变初始值|
|`$color-title`|`fade-out($black, .15)`|√||明亮模式使用，用于生成`$m-color`，修改`$black`也会改变初始值|
|`$color-title-reverse`|`fade-out($white, .15)`|√||暗黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$color-title-small-reverse`|`fade-out($white, .15)`|√||暗黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$color-main-reverse`|`fade-out($white, .15)`|√||暗黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$color-main-small-reverse`|`fade-out($white, .15)`|√||黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$color-secondary-reverse`|`fade-out($white, .15)`|√||暗黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$color-disabled-reverse`|`fade-out($white, .15)`|√||暗黑模式使用，用于生成`$m-color-reverse`，修改`$white`也会改变初始值|
|`$m-color`|`("-title": $color-title, "-title-small": $color-title-small, "-main": $color-main, "-main-small": $color-main-small, "-secondary": $color-secondary, "-disabled": $color-disabled)`|×||用于生成`color`相关的类|
|`$m-color-reverse`|`("-title": $color-title-reverse, "-title-small": $color-title-small-reverse, "-main": $color-main-reverse, "-main-small": $color-main-small-reverse, "-secondary": $color-secondary-reverse, "-disabled": $color-disabled-reverse)`|×||用于生成`color`相关的类|

### 衍生变量里的视觉变量 derived/visual

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$background-color`|`fade-out($black, .96)`|√||用于生成`$m-background-color`|
|`$background-color-reverse`|`fade-out($white, .92)`|√||用于生成`$m-background-color-reverse`|
|`$m-background-color`|`("": $background-color)`|√||用于生成`background-color`相关的类|
|`$m-background-color-reverse`|`("": $background-color-reverse)`|√||用于生成`background-color`相关的类|
|`$border-color`|`fade-out($black, .85)`|√||用于生成`$m-border-color`|
|`$border-color-reverse`|`fade-out($white, .8)`|√||用于生成`$m-border-color-reverse`|
|`$m-border-color`|`("": $border-color)`|√||用于生成`border-color`相关的类|
|`$m-border-color-reverse`|`("": $border-color-reverse)`|√||用于生成`border-color`相关的类|
|`$m-border-width`|`("": $border-width-base * $scale + $unit)`|√|使用`$border-width-min`，`$border-width-max`和`$border-width-step`循环添加键值对，如果`$scale`不为 1 还会添加键值对`"-1-real": 1 + $unit`|用于生成`border-width`相关的类|
|`$m-border-radius`|`("": $border-radius-base * $scale + $unit, "-xs": ($border-radius-base - 2) * $scale + $unit, "-sm": ($border-radius-base - 1) * $scale + $unit, "-md": $border-radius-base * $scale + $unit, "-lg": ($border-radius-base + 2) * $scale + $unit, "-xl": ($border-radius-base + 4) * $scale + $unit, "-half": 50%, "-full": 100%)`|√||用于生成`border-radius`相关的类|
|`$m-box-shadow-umbra`|一个键为0-24的映射|×||用于生成`box-shadow`相关的类|
|`$m-box-shadow-penumbra`|一个键为0-24的映射|×||用于生成`box-shadow`相关的类|
|`$m-box-shadow-ambient`|一个键为0-24的映射|×||用于生成`box-shadow`相关的类|

### 衍生变量里的杂项变量 derived/misc

|变量名|初始值|初始值可否修改|后续操作|说明|
|---|---|:-:|---|---|
|`$m-transition`|`("": $transition-delay-default $transition-timing-function-default)`|×||可直接修改初始值，用于生成`transition`相关的类|

## 元素变量 elements

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/elements.scss)

## 布局变量 layout

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/layout.scss)

## 组件变量 components

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/components.scss)
