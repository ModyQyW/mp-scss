# 初始 initial

[源码](https://github.com/MillCloud/mp-scss/blob/main/variables/initial.scss)

## 使用

引入初始变量文件后即可使用内置初始变量。

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

## 通用变量 common

色板颜色跟随 Ant Design，可直接查看[明亮模式色板](https://ant-design.gitee.io/docs/spec/colors-cn)和[暗黑模式色板](https://ant-design.gitee.io/docs/spec/dark-cn)。

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$unit`|`rpx`|√|默认尺寸单位|
|`$scale`|`2`|√|默认缩放倍数，参考[说明](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)|
|`$gray`|`#8c8c8c`|√||
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

## 定位变量 positioning

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-position`|`("relative": relative, "absolute": absolute, "fixed": fixed, "static": static, "sticky": sticky)`|√||
|`$m-position-value`|`("-0": 0, "-auto": auto)`|√||
|`$z-index-default`|`auto`|√||
|`$z-index-min`|`0`|√||
|`$z-index-max`|`120`|√||
|`$z-index-step`|`10`|√||
|`$m-box-sizing`|`("-content": content-box, "border": border-box)`|√||

## 盒模型变量 box-model

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-display`|`("-block": block, "-inline-block": inline-block, "-inline": inline, "-flex": flex, "-inline-flex": inline-flex, "-none": none)`|√||
|`$m-flex`|`("": 0 1 auto, "-auto": 1 1 auto, "-none": 0 0 auto)`|√||
|`$m-flex-direction`|`("-row": row, "-row-reverse": row-reverse, "-col": column, "-col-reverse": column-reverse)`|√||
|`$m-flex-wrap`|`("-nowrap": nowrap, "-wrap": wrap, "-wrap-reverse": wrap-reverse)`|√||
|`$flex-shrink-default`|`1`|√||
|`$flex-shrink-min`|`0`|√||
|`$flex-shrink-max`|`8`|√||
|`$flex-shrink-step`|`1`|√||
|`$flex-grow-default`|`0`|√||
|`$flex-grow-min`|`0`|√||
|`$flex-grow-max`|`8`|√||
|`$flex-grow-step`|`1`|√||
|`$m-align-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||
|`$m-align-items`|`("-start": flex-start, "-end": flex-end, "-center": center, "-baseline": baseline, "-stretch": stretch)`|√||
|`$m-align-self`|`("-auto": auto, "-start": flex-start, "-end": flex-end, "-center": center, "-stretch": stretch)`|√||
|`$m-justify-content`|`("-start": flex-start, "-end": flex-end, "-center": center, "-between": space-between, "-around": space-around, "-evenly": space-evenly, "-stretch": stretch)`|√||
|`$order-first`|`-9999`|√||
|`$order-last`|`9999`|√||
|`$order-default`|`0`|√||
|`$order-min`|`-8`|√||
|`$order-max`|`8`|√||
|`$order-step`|`1`|√||
|`$length-default`|`auto`|√||
|`$length-min`|`0`|√||
|`$length-max`|`128`|√||
|`$length-step`|`1`|√||
|`$spacing-base`|`12`|√||
|`$spacing-diff`|`4`|√||
|`$spacing-min`|`0`|√||
|`$spacing-max`|`64`|√||
|`$spacing-step`|`1`|√||
|`$l-denominator`|`3, 4, 5, 6, 8, 10, 12, 16, 24, 100`|√||
|`$m-overflow`|`("-auto": auto, "-hidden": hidden, "-visible": visible, "-scroll": scroll)`|√||

## 排版变量 typography

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$font-family-default`|`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`|√||
|`$font-family-sans`|`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`|√||
|`$font-family-serif`|`Georgia, Cambria, "Times New Roman", Times, serif`|√||
|`$font-family-mono`|`Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`|√||
|`$font-size-base`|`14`|√||
|`$font-size-diff`|`2`|√||
|`$font-size-min`|`10`|√||
|`$font-size-max`|`64`|√||
|`$font-size-step`|`1`|√||
|`$m-font-style`|`("-italic": italic, "-oblique": oblique)`|√||
|`$m-font-weight`|`("-thin": 100, "-extra-light": 200, "-ultra-light": 200, "-light": 300, "-default": 400, "-normal": 400, "-regular": 400, "-medium": 500, "-semi-bold": 600, "-bold": 700, "-extra-bold": 800, "-ultra-bold": 800, "-heavy": 900)`|√||
|`$line-height-default`|`1.5715`|√||
|`$line-height-none`|`1.15`|√||
|`$line-height-tight`|`1.3`|√||
|`$line-height-snug`|`1.45`|√||
|`$line-height-relaxed`|`1.65`|√||
|`$line-height-loose`|`2`|√||
|`$line-height-min`|`18`|√||
|`$line-height-max`|`72`|√||
|`$line-height-step`|`1`|√||
|`$m-text-align`|`("-left": left, "-right": right, "-center": center, "-justify": justify)`|√||
|`$m-text-decoration`|`("-none": none, "-overline": overline, "-underline": underline, "-line-through": line-through)`|√||
|`$m-text-transform`|`("-capitalize": capitalize, "-uppercase": uppercase, "-lowercase": lowercase)`|√||
|`$m-resize`|`("-none": none, "": both, "-both": both, "-y": vertical, "-x": horizontal)`|√||

## 视觉变量 visual

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-background-repeat`|`("-repeat": repeat, "-repeat-y": repeat-y, "-repeat-x": repeat-x, "-repeat-space": space, "-repeat-round": round, "-no-repeat": no-repeat)`|√||
|`$m-background-attachment`|`("-fixed": fixed, "-local": local, "-scroll": scroll)`|√||
|`$m-background-position`|`("-top": top, "-right": right, "-bottom": bottom, "-left": left, "-right-top": right top, "-right-bottom": right bottom, "-left-top": left top, "-left-bottom": left bottom, "-center": center)`|√||
|`$m-background-size`|`("-contain": contain, "-cover": cover, "-auto": auto, "-full": 100% 100%)`|√||
|`$m-border-style`|`("-solid": solid, "-dashed": dashed, "-dotted": dotted, "-none": none)`|√||
|`$border-width-base`|`1`|√||
|`$border-width-min`|`0`|√||
|`$border-width-max`|`4`|√||
|`$border-width-step`|`1`|√||
|`$border-radius-base`|`2`|√||
|`$border-radius-diff`|`1`|√||
|`$border-radius-min`|`0`|√||
|`$border-radius-max`|`8`|√||
|`$border-radius-step`|`1`|√||
|`$box-shadow-umbra`|`rgba(0, 0, 0, .2)`|√||
|`$box-shadow-penumbra`|`rgba(0, 0, 0, .14)`|√||
|`$box-shadow-ambient`|`rgba(0, 0, 0, .12)`|√||

## 杂项变量 misc

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-opacity`|`("-0": 0, "-25": .25, "-50": .5, "-75": .75, "-100": 1)`|√||
|`$transition-delay-default`|`.48s`|√||
|`$transition-timing-function-default`|`cubic-bezier(.25, .8, .5, 1)`|√||
