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

### 单独使用初始变量

引入`utils/function`后即可使用内置初始变量。

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

### 初始变量里的通用变量 initial/common

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$unit`|`rpx`|√×|尺寸单位|
|`$scale`|`2`|√|缩放倍数，参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)|
|`$gray`|`#8c8c8c`|√|色板颜色跟随 Ant Design，可直接查看[明亮模式色板](https://ant-design.gitee.io/docs/spec/colors-cn)和[暗黑模式色板](https://ant-design.gitee.io/docs/spec/dark-cn)|
|`$gray-1`|`#fff`|√||
|`$gray-2`|`#fafafa`|√||
|`$gray-3`|`#f5f5f5`|√||
|`$gray-4`|`#f0f0f0`|√||
|`$gray-5`|`#d9d9d9`|√||
|`$gray-6`|`#bfbfbf`|√||
|`$gray-7`|`#8c8c8c`|√||
|`$gray-8`|`#595959`|√||
|`$gray-9`|`#434343`|√||
|`$gray-10`|`#262626`|√||
|`$gray-11`|`#1f1f1f`|√||
|`$gray-12`|`#141414`|√||
|`$gray-13`|`#000`|√||
|`$white`|`#fff`|√||
|`$black`|`#000`|√||
|`$red`|`#f5222d`|√||
|`$volcano`|`#fa541c`|√||
|`$orange`|`#fa8c16`|√||
|`$gold`|`#faad14`|√||
|`$yellow`|`#fadb14`|√||
|`$lime`|`#a0d911`|√||
|`$green`|`#52c41a`|√||
|`$cyan`|`#13c2c2`|√||
|`$blue`|`#1890ff`|√||
|`$geek-blue`|`#2f54eb`|√||
|`$purple`|`#722ed1`|√||
|`$magenta`|`#eb2f96`|√||
|`$l-denominator`|`3, 4, 5, 6, 8, 10, 12, 16, 24, 100`|√|用于生成`$m-ratio`|

### 初始变量里的定位变量 initial/positioning

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$m-position`|`("relative": relative, "absolute": absolute, "fixed": fixed, "static": static, "sticky": sticky)`|√||
|`$m-position-value`|`("-0": 0, "-auto": auto)`|√||
|`$z-index-default`|`auto`|√|用于生成`$m-z-index`|
|`$z-index-min`|`0`|√|用于生成`$m-z-index`|
|`$z-index-max`|`120`|√|用于生成`$m-z-index`|
|`$z-index-step`|`10`|√|用于生成`$m-z-index`|
|`$m-box-sizing`|`("-content": content-box, "border": border-box)`|√||

### 初始变量里的盒模型变量 initial/box-model

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$m-display`|`("-block": block, "-inline-block": inline-block, "-inline": inline, "-flex": flex, "-inline-flex": inline-flex, "-none": none)`|√||
|`$m-flex`|`("-init": 0 1 auto, "-auto": 1 1 auto, "-none": 0 0 auto)`|√||
|`$m-flex-direction`|`("-row": row, "-row-reverse": row-reverse, "-col": column, "-col-reverse": column-reverse)`|√||
|`$m-flex-wrap`|`("-nowrap": nowrap, "-wrap": wrap, "-wrap-reverse": wrap-reverse)`|√||
|`$flex-shrink-default`|`1`|√|用于生成`$m-flex-shrink`|
|`$flex-shrink-min`|`0`|√|用于生成`$m-flex-shrink`|
|`$flex-shrink-max`|`8`|√|用于生成`$m-flex-shrink`|
|`$flex-shrink-step`|`1`|√|用于生成`$m-flex-shrink`|
|`$flex-grow-default`|`0`|√|用于生成`$m-flex-grow`|
|`$flex-grow-min`|`0`|√|用于生成`$m-flex-grow`|
|`$flex-grow-max`|`8`|√|用于生成`$m-flex-grow`|
|`$flex-grow-step`|`1`|√|用于生成`$m-flex-grow`|
|`$m-align-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||
|`$m-align-items`|`("-start": flex-start, "-end": flex-end, "-center": center, "-baseline": baseline, "-stretch": stretch)`|√||
|`$m-align-self`|`("-auto": auto, "-start": flex-start, "-end": flex-end, "-center": center, "-stretch": stretch)`|√||
|`$m-justify-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||
|`$order-first`|`-9999`|√|用于生成`$m-order`|
|`$order-last`|`9999`|√|用于生成`$m-order`|
|`$order-default`|`0`|√|用于生成`$m-order`|
|`$order-min`|`-8`|√|用于生成`$m-order`|
|`$order-max`|`8`|√|用于生成`$m-order`|
|`$order-step`|`1`|√|用于生成`$m-order`|
|`$length-default`|`auto`|√|用于生成`$m-length`|
|`$length-min`|`0`|√|用于生成`$m-length`|
|`$length-max`|`128`|√|用于生成`$m-length`|
|`$length-step`|`1`|√|用于生成`$m-length`|
|`$spacing-base`|`12`|√|用于生成`$m-spacing`|
|`$spacing-min`|`0`|√|用于生成`$m-spacing`|
|`$spacing-max`|`64`|√|用于生成`$m-spacing`|
|`$spacing-step`|`1`|√|用于生成`$m-spacing`|
|`$m-overflow`|`("-auto": auto, "-hidden": hidden, "-visible": visible, "-scroll": scroll)`|√||

### 初始变量里的排版变量 initial/typography

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$font-family-default`|`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`|√|用于生成`$m-font-family`|
|`$font-family-sans`|`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`|√|用于生成`$m-font-family`|
|`$font-family-serif`|`Georgia, Cambria, "Times New Roman", Times, serif`|√|用于生成`$m-font-family`|
|`$font-family-mono`|`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`|√|用于生成`$m-font-family`|
|`$font-size-base`|`14`|√|用于生成`$m-font-size`|
|`$font-size-min`|`10`|√|用于生成`$m-font-size`|
|`$font-size-max`|`64`|√|用于生成`$m-font-size`|
|`$font-size-step`|`1`|√|用于生成`$m-font-size`|
|`$m-font-style`|`("-italic": italic, "-oblique": oblique)`|√||
|`$m-font-weight`|`("-thin": 100, "-extra-light": 200, "-ultra-light": 200, "-light": 300, "-default": 400, "-normal": 400, "-regular": 400, "-medium": 500, "-semi-bold": 600, "-bold": 700, "-extra-bold": 800, "-ultra-bold": 800, "-heavy": 900)`|√||
|`$font-variant-tabular-nums`|`tabular-nums`|√|用于生成`$m-font-variant`|
|`$line-height-default`|`1.5715`|√|用于生成`$m-line-height`|
|`$line-height-min`|`18`|√|用于生成`$m-line-height`|
|`$line-height-max`|`72`|√|用于生成`$m-line-height`|
|`$line-height-step`|`1`|√|用于生成`$m-line-height`|
|`$m-text-align`|`("-left": left, "-right": right, "-center": center, "-justify": justify)`|√||
|`$m-text-decoration`|`("-none": none, "-overline": overline, "-underline": underline, "-line-through": line-through)`|√||
|`$m-text-transform`|`("-capitalize": capitalize, "-uppercase": uppercase, "-lowercase": lowercase)`|√||
|`$m-resize`|`("-none": none, "": both, "-both": both, "-y": vertical, "-x": horizontal)`|√||

### 初始变量里的视觉变量 initial/visual

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$m-background-repeat`|`("-repeat": repeat, "-repeat-y": repeat-y, "-repeat-x": repeat-x, "-repeat-space": space, "-repeat-round": round, "-no-repeat": no-repeat)`|√||
|`$m-background-attachment`|`("-fixed": fixed, "-local": local, "-scroll": scroll)`|√||
|`$m-background-position`|`("-top": top, "-right": right, "-bottom": bottom, "-left": left, "-right-top": right top, "-right-bottom": right bottom, "-left-top": left top, "-left-bottom": left bottom, "-center": center)`|√||
|`$m-background-size`|`("-contain": contain, "-cover": cover, "-auto": auto, "-full": 100% 100%)`|√||
|`$m-border-style`|`("-solid": solid, "-dashed": dashed, "-dotted": dotted, "-none": none)`|√||
|`$border-width-base`|`1`|√|用于生成`$m-border-width`|
|`$border-width-min`|`0`|√|用于生成`$m-border-width`|
|`$border-width-max`|`4`|√|用于生成`$m-border-width`|
|`$border-width-step`|`1`|√|用于生成`$m-border-width`|
|`$border-radius-base`|`2`|√|用于生成`$m-border-radius`|
|`$border-radius-min`|`0`|√|用于生成`$m-border-radius`|
|`$border-radius-max`|`8`|√|用于生成`$m-border-radius`|
|`$border-radius-step`|`1`|√|用于生成`$m-border-radius`|
|`$box-shadow-umbra`|`rgba(0, 0, 0, .2)`|√|用于生成`m-box-shadow-umbra`|
|`$box-shadow-penumbra`|`rgba(0, 0, 0, .14)`|√|用于生成`m-box-shadow-penumbra`|
|`$box-shadow-ambient`|`rgba(0, 0, 0, .12)`|√|用于生成`m-box-shadow-ambient`|

### 初始变量里的杂项变量 initial/misc

|变量名|变量值|可否直接修改|说明|
|---|---|:-:|---|
|`$m-opacity`|`("-0": 0, "-25": .25, "-50": .5, "-75": .75, "-100": 1)`|√||
|`$transition-delay-default`|`.48s`|√|用于生成`$m-transition`|
|`$transition-timing-function-default`|`cubic-bezier(.25, .8, .5, 1)`|√|用于生成`$m-transition`|

## 衍生变量 derived

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)

## 元素变量 elements

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/elements.scss)

## 布局变量 layout

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/layout.scss)

## 组件变量 components

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/components.scss)
