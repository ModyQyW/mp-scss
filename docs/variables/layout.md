# 布局 layout

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/layout.scss)

## 使用

布局变量必须搭配初始变量和衍生变量使用，进行相应的引入后即可使用内置布局变量。

```scss
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
@import "~@modyqyw/mp-scss/variables/layout";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$header-background-color: #fff;
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
@import "~@modyqyw/mp-scss/variables/layout";
```

## 页面 page

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$container-font-family`|`$font-family-default`|√||
|`$container-font-size-base`|`$font-size-base`|√||
|`$container-font-size`|`$container-font-size-base * $scale + $unit`|√||
|`$container-font-weight`|`400`|√||
|`$container-line-height`|`$line-height-default`|√||
|`$header-height-base`|`48`|√||
|`$header-height`|`$header-height-base * $scale + $unit`|√||
|`$header-background-color`|`transparent`|√||
|`$header-background-color-reverse`|`transparent`|√||
|`$navbar-height-base`|`36`|√||
|`$navbar-height`|`$header-height-base * $scale + $unit`|√||
|`$navbar-background-color`|`transparent`|√||
|`$navbar-background-color-reverse`|`transparent`|√||
|`$aside-width-base`|`120`|√||
|`$aside-width`|`$aside-width-base * $scale + $unit`|√||
|`$aside-background-color`|`transparent`|√||
|`$aside-background-color-reverse`|`transparent`|√||
|`$main-background-color`|`transparent`|√||
|`$main-background-color-reverse`|`transparent`|√||
|`$footer-height-base`|`48`|√||
|`$footer-height`|`$footer-height-base * $scale + $unit`|√||
|`$footer-background-color`|`transparent`|√||
|`$footer-background-color-reverse`|`transparent`|√||
|`$safe-area-height`|`34 * $scale + $unit`|√||
|`$safe-area-background-color`|`transparent`|√||
|`$safe-area-background-color-reverse`|`transparent`|√||

## 栅格 grid

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$row-background-color`|`transparent`|√||
|`$row-background-color-reverse`|`transparent`|√||
|`$col-background-color`|`transparent`|√||
|`$col-background-color-reverse`|`transparent`|√||
|`$grid-max`|`24`|√||
|`$gutter-base`|`12`|√||
|`$gutter-diff`|`4`|√||
|`$gutter-min`|`4`|√||
|`$gutter-max`|`24`|√||
|`$gutter-step`|`2`|√||
|`$m-gutter`|`("": $gutter-base / 2 * $scale + $unit, "-xs": ($gutter-base - 8) / 2 * $scale + $unit, "-sm": ($gutter-base - 4) / 2 * $scale + $unit, "-md": $gutter-base / 2 * $scale + $unit, "-lg": ($gutter-base + 4) / 2 * $scale + $unit, "-xl": ($gutter-base + 8) / 2 * $scale + $unit)`|√|会循环填充|
