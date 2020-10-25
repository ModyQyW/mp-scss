# 组件 components

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/components.scss)

## 使用

组件变量必须搭配初始变量和衍生变量使用，进行相应的引入后即可使用内置组件变量。

```scss
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
@import "~@modyqyw/mp-scss/variables/components";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$badge-z-index: 10;
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
@import "~@modyqyw/mp-scss/variables/components";
```

## 徽标 badge

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$badge-top`|`0`|√||
|`$badge-right`|`0`|√||
|`$badge-z-index`|`auto`|√||
|`$badge-display`|`flex`|√||
|`$badge-sizing-base`|`20`|√||
|`$badge-min-width`|`$badge-sizing-base * $scale + $unit`|√||
|`$badge-height`|`$badge-sizing-base * $scale + $unit`|√||
|`$badge-padding-base`|`6`|√||
|`$badge-padding-y`|`0`|√||
|`$badge-padding-x`|`$badge-padding-base * $scale + $unit`|√||
|`$badge-font-size-base`|`$font-size-base - 2`|√||
|`$badge-font-size`|`$badge-font-size-base * $scale + $unit`|√||
|`$badge-font-weight`|`400`|√||
|`$badge-line-height`|`$badge-height`|√||
|`$badge-border-style`|`solid`|√||
|`$badge-border-width`|`1 * $scale + $unit`|√||
|`$badge-border-radius-base`|`$badge-sizing-base / 2`|√||
|`$badge-border-radius`|`$badge-border-radius-base * $scale + $unit`|√||
|`$badge-transition`|`$transition-duration-default $transition-timing-function-default`|√||
|`$badge-transform`|`translate(50%, -50%)`|√||
|`$badge-transform-origin`|`100% 0`|√||
|`$badge-color`|`$color-main`|√||
|`$badge-background-color`|`$gray-5`|√||
|`$badge-border-color`|`$gray-5`|√||
|`$badge-box-shadow`|`0 0 0 1 * $scale + $unit $container-background-color`|√||
|`$badge-color-reverse`|`$color-main-reverse`|√||
|`$badge-background-color-reverse`|`$gray-5`|√||
|`$badge-border-color-reverse`|`$gray-5`|√||
|`$badge-box-shadow-reverse`|`0 0 0 1 * $scale + $unit $container-background-color-reverse`|√||
|`$badge-primary-color`|`$gray-1`|√||
|`$badge-primary-background-color`|`$primary-5`|√||
|`$badge-primary-border-color`|`$primary-5`|√||
|`$badge-primary-color-reverse`|`$gray-1`|√||
|`$badge-primary-background-color-reverse`|`$primary-5-reverse`|√||
|`$badge-primary-border-color-reverse`|`$primary-5-reverse`|√||
|`$badge-success-color`|`$gray-1`|√||
|`$badge-success-background-color`|`$success-5`|√||
|`$badge-success-border-color`|`$success-5`|√||
|`$badge-success-color-reverse`|`$gray-1`|√||
|`$badge-success-background-color-reverse`|`$success-5-reverse`|√||
|`$badge-success-border-color-reverse`|`$success-5-reverse`|√||
|`$badge-warning-color`|`$gray-1`|√||
|`$badge-warning-background-color`|`$warning-5`|√||
|`$badge-warning-border-color`|`$warning-5`|√||
|`$badge-warning-color-reverse`|`$gray-1`|√||
|`$badge-warning-background-color-reverse`|`$warning-5-reverse`|√||
|`$badge-warning-border-color-reverse`|`$warning-5-reverse`|√||
|`$badge-error-color`|`$gray-1`|√||
|`$badge-error-background-color`|`$error-5`|√||
|`$badge-error-border-color`|`$error-5`|√||
|`$badge-error-color-reverse`|`$gray-1`|√||
|`$badge-error-background-color-reverse`|`$error-5-reverse`|√||
|`$badge-error-border-color-reverse`|`$error-5-reverse`|√||
|`$badge-info-color`|`$gray-1`|√||
|`$badge-info-background-color`|`$info-5`|√||
|`$badge-info-border-color`|`$info-5`|√||
|`$badge-info-color-reverse`|`$gray-1`|√||
|`$badge-info-background-color-reverse`|`$info-5-reverse`|√||
|`$badge-info-border-color-reverse`|`$info-5-reverse`|√||
|`$badge-sm-sizing-base`|`14`|√||
|`$badge-sm-min-width`|`$badge-sm-sizing-base * $scale + $unit`|√||
|`$badge-sm-height`|`$badge-sm-sizing-base * $scale + $unit`|√||
|`$badge-sm-padding-y`|`0`|√||
|`$badge-sm-padding-x`|`0`|√||
|`$badge-sm-font-size-base`|`$badge-font-size-base`|√||
|`$badge-sm-font-size`|`$badge-sm-font-size-base * $scale + $unit`|√||
|`$badge-sm-line-height`|`$badge-sm-height`|√||
|`$badge-sm-border-radius-base`|`$badge-sm-sizing-base / 2`|√||
|`$badge-sm-border-radius`|`$badge-sm-border-radius-base * $scale + $unit`|√||
|`$badge-dot-sizing-base`|`6`|√||
|`$badge-dot-width`|`$badge-dot-sizing-base * $scale + $unit`|√||
|`$badge-dot-min-width`|`auto`|√||
|`$badge-dot-height`|`$badge-dot-sizing-base * $scale + $unit`|√||
|`$badge-dot-padding-y`|`0`|√||
|`$badge-dot-padding-x`|`0`|√||
|`$badge-dot-overflow`|`hidden`|√||
|`$badge-dot-color`|`transparent`|√||
|`$badge-dot-border-radius`|`100%`|√||

## 按钮 button

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$button-display`|`flex`|√||
|`$button-padding-base`|`4`|√||
|`$button-padding-y`|`$button-padding-base * $scale + $unit`|√||
|`$button-padding-x`|`$button-padding-base * 4 * $scale + $unit`|√||
|`$button-margin-y`|`0`|√||
|`$button-margin-x`|`0`|√||
|`$button-font-size-base`|`$font-size-base`|√||
|`$button-font-size`|`$button-font-size-base * $scale + $unit`|√||
|`$button-font-weight`|`400`|√||
|`$button-line-height`|`$line-height-default`|√||
|`$button-border-style`|`solid`|√||
|`$button-border-width`|`1 * $scale + $unit`|√||
|`$button-border-radius-base`|`$border-radius-base`|√||
|`$button-border-radius`|`$button-border-radius-base * $scale + $unit`|√||
|`$button-transition`|`$transition-duration-default $transition-timing-function-default`|√||
|`$button-ripply-background-color`|`$gray-10`|√||
|`$button-ripply-transition`|`$transition-duration-default`|√||
|`$button-ripply-transform-scale`|`10`|√||
|`$button-ripply-active-opacity`|`.24`|√||
|`$button-color`|`$color-main`|√||
|`$button-background-color`|`$container-background-color`|√||
|`$button-border-color`|`$border-color`|√||
|`$button-focus-color`|`$primary-5`|√||
|`$button-focus-background-color`|`$container-background-color`|√||
|`$button-focus-border-color`|`$primary-5`|√||
|`$button-active-color`|`$primary-7`|√||
|`$button-active-background-color`|`$container-background-color`|√||
|`$button-active-border-color`|`$primary-7`|√||
|`$button-disabled-color`|`$color-disabled`|√||
|`$button-disabled-background-color`|`$gray-3`|√||
|`$button-disabled-border-color`|`$border-color`|√||
|`$button-color-reverse`|`$color-main-reverse`|√||
|`$button-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-border-color-reverse`|`$border-color-reverse`|√||
|`$button-focus-color-reverse`|`$primary-5-reverse`|√||
|`$button-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-focus-border-color-reverse`|`$primary-5-reverse`|√||
|`$button-active-color-reverse`|`$primary-7-reverse`|√||
|`$button-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-active-border-color-reverse`|`$primary-7-reverse`|√||
|`$button-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-disabled-background-color-reverse`|`$gray-8`|√||
|`$button-disabled-border-color-reverse`|`$border-color-reverse`|√||
|`$button-primary-color`|`$gray-1`|√||
|`$button-primary-background-color`|`$primary-6`|√||
|`$button-primary-border-color`|`$primary-6`|√||
|`$button-primary-hover-color`|`$gray-1`|√||
|`$button-primary-hover-background-color`|`$primary-5`|√||
|`$button-primary-hover-border-color`|`$primary-5`|√||
|`$button-primary-focus-color`|`$gray-1`|√||
|`$button-primary-focus-background-color`|`$primary-5`|√||
|`$button-primary-focus-border-color`|`$primary-5`|√||
|`$button-primary-active-color`|`$gray-1`|√||
|`$button-primary-active-background-color`|`$primary-7`|√||
|`$button-primary-active-border-color`|`$primary-7`|√||
|`$button-primary-outlined-color`|`$primary-6`|√||
|`$button-primary-outlined-background-color`|`$container-background-color`|√||
|`$button-primary-outlined-border-color`|`$primary-6`|√||
|`$button-primary-outlined-hover-color`|`$primary-5`|√||
|`$button-primary-outlined-hover-background-color`|`$container-background-color`|√||
|`$button-primary-outlined-hover-border-color`|`$primary-5`|√||
|`$button-primary-outlined-focus-color`|`$primary-5`|√||
|`$button-primary-outlined-focus-background-color`|`$container-background-color`|√||
|`$button-primary-outlined-focus-border-color`|`$primary-5`|√||
|`$button-primary-outlined-active-color`|`$primary-7`|√||
|`$button-primary-outlined-active-background-color`|`$container-background-color`|√||
|`$button-primary-outlined-active-border-color`|`$primary-7`|√||
|`$button-primary-link-color`|`$primary-6`|√||
|`$button-primary-link-text-decoration`|`underline`|√||
|`$button-primary-link-background-color`|`$container-background-color`|√||
|`$button-primary-link-border-color`|`$container-background-color`|√||
|`$button-primary-link-hover-color`|`$primary-5`|√||
|`$button-primary-link-hover-background-color`|`$container-background-color`|√||
|`$button-primary-link-hover-border-color`|`$container-background-color`|√||
|`$button-primary-link-focus-color`|`$primary-5`|√||
|`$button-primary-link-focus-background-color`|`$container-background-color`|√||
|`$button-primary-link-focus-border-color`|`$container-background-color`|√||
|`$button-primary-link-active-color`|`$primary-7`|√||
|`$button-primary-link-active-background-color`|`$container-background-color`|√||
|`$button-primary-link-active-border-color`|`$container-background-color`|√||
|`$button-primary-link-disabled-color`|`$color-disabled`|√||
|`$button-primary-link-disabled-background-color`|`$container-background-color`|√||
|`$button-primary-link-disabled-border-color`|`$container-background-color`|√||
|`$button-primary-color-reverse`|`$gray-1`|√||
|`$button-primary-background-color-reverse`|`$primary-6-reverse`|√||
|`$button-primary-border-color-reverse`|`$primary-6-reverse`|√||
|`$button-primary-hover-color-reverse`|`$gray-1`|√||
|`$button-primary-hover-background-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-hover-border-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-focus-color-reverse`|`$gray-1`|√||
|`$button-primary-focus-background-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-focus-border-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-active-color-reverse`|`$gray-1`|√||
|`$button-primary-active-background-color-reverse`|`$primary-7-reverse`|√||
|`$button-primary-active-border-color-reverse`|`$primary-7-reverse`|√||
|`$button-primary-outlined-color-reverse`|`$primary-6-reverse`|√||
|`$button-primary-outlined-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-outlined-border-color-reverse`|`$primary-6-reverse`|√||
|`$button-primary-outlined-hover-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-outlined-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-outlined-hover-border-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-outlined-focus-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-outlined-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-outlined-focus-border-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-outlined-active-color-reverse`|`$primary-7-reverse`|√||
|`$button-primary-outlined-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-outlined-active-border-color-reverse`|`$primary-7-reverse`|√||
|`$button-primary-link-color-reverse`|`$primary-6-reverse`|√||
|`$button-primary-link-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-hover-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-link-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-hover-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-focus-color-reverse`|`$primary-5-reverse`|√||
|`$button-primary-link-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-focus-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-active-color-reverse`|`$primary-7-reverse`|√||
|`$button-primary-link-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-active-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-primary-link-disabled-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-primary-link-disabled-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-color`|`$gray-1`|√||
|`$button-success-background-color`|`$success-6`|√||
|`$button-success-border-color`|`$success-6`|√||
|`$button-success-hover-color`|`$gray-1`|√||
|`$button-success-hover-background-color`|`$success-5`|√||
|`$button-success-hover-border-color`|`$success-5`|√||
|`$button-success-focus-color`|`$gray-1`|√||
|`$button-success-focus-background-color`|`$success-5`|√||
|`$button-success-focus-border-color`|`$success-5`|√||
|`$button-success-active-color`|`$gray-1`|√||
|`$button-success-active-background-color`|`$success-7`|√||
|`$button-success-active-border-color`|`$success-7`|√||
|`$button-success-outlined-color`|`$success-6`|√||
|`$button-success-outlined-background-color`|`$container-background-color`|√||
|`$button-success-outlined-border-color`|`$success-6`|√||
|`$button-success-outlined-hover-color`|`$success-5`|√||
|`$button-success-outlined-hover-background-color`|`$container-background-color`|√||
|`$button-success-outlined-hover-border-color`|`$success-5`|√||
|`$button-success-outlined-focus-color`|`$success-5`|√||
|`$button-success-outlined-focus-background-color`|`$container-background-color`|√||
|`$button-success-outlined-focus-border-color`|`$success-5`|√||
|`$button-success-outlined-active-color`|`$success-7`|√||
|`$button-success-outlined-active-background-color`|`$container-background-color`|√||
|`$button-success-outlined-active-border-color`|`$success-7`|√||
|`$button-success-link-color`|`$success-6`|√||
|`$button-success-link-text-decoration`|`underline`|√||
|`$button-success-link-background-color`|`$container-background-color`|√||
|`$button-success-link-border-color`|`$container-background-color`|√||
|`$button-success-link-hover-color`|`$success-5`|√||
|`$button-success-link-hover-background-color`|`$container-background-color`|√||
|`$button-success-link-hover-border-color`|`$container-background-color`|√||
|`$button-success-link-focus-color`|`$success-5`|√||
|`$button-success-link-focus-background-color`|`$container-background-color`|√||
|`$button-success-link-focus-border-color`|`$container-background-color`|√||
|`$button-success-link-active-color`|`$success-7`|√||
|`$button-success-link-active-background-color`|`$container-background-color`|√||
|`$button-success-link-active-border-color`|`$container-background-color`|√||
|`$button-success-link-disabled-color`|`$color-disabled`|√||
|`$button-success-link-disabled-background-color`|`$container-background-color`|√||
|`$button-success-link-disabled-border-color`|`$container-background-color`|√||
|`$button-success-color-reverse`|`$gray-1`|√||
|`$button-success-background-color-reverse`|`$success-6-reverse`|√||
|`$button-success-border-color-reverse`|`$success-6-reverse`|√||
|`$button-success-hover-color-reverse`|`$gray-1`|√||
|`$button-success-hover-background-color-reverse`|`$success-5-reverse`|√||
|`$button-success-hover-border-color-reverse`|`$success-5-reverse`|√||
|`$button-success-focus-color-reverse`|`$gray-1`|√||
|`$button-success-focus-background-color-reverse`|`$success-5-reverse`|√||
|`$button-success-focus-border-color-reverse`|`$success-5-reverse`|√||
|`$button-success-active-color-reverse`|`$gray-1`|√||
|`$button-success-active-background-color-reverse`|`$success-7-reverse`|√||
|`$button-success-active-border-color-reverse`|`$success-7-reverse`|√||
|`$button-success-outlined-color-reverse`|`$success-6-reverse`|√||
|`$button-success-outlined-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-outlined-border-color-reverse`|`$success-6-reverse`|√||
|`$button-success-outlined-hover-color-reverse`|`$success-5-reverse`|√||
|`$button-success-outlined-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-outlined-hover-border-color-reverse`|`$success-5-reverse`|√||
|`$button-success-outlined-focus-color-reverse`|`$success-5-reverse`|√||
|`$button-success-outlined-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-outlined-focus-border-color-reverse`|`$success-5-reverse`|√||
|`$button-success-outlined-active-color-reverse`|`$success-7-reverse`|√||
|`$button-success-outlined-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-outlined-active-border-color-reverse`|`$success-7-reverse`|√||
|`$button-success-link-color-reverse`|`$success-6-reverse`|√||
|`$button-success-link-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-hover-color-reverse`|`$success-5-reverse`|√||
|`$button-success-link-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-hover-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-focus-color-reverse`|`$success-5-reverse`|√||
|`$button-success-link-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-focus-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-active-color-reverse`|`$success-7-reverse`|√||
|`$button-success-link-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-active-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-success-link-disabled-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-success-link-disabled-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-color`|`$gray-1`|√||
|`$button-warning-background-color`|`$warning-6`|√||
|`$button-warning-border-color`|`$warning-6`|√||
|`$button-warning-hover-color`|`$gray-1`|√||
|`$button-warning-hover-background-color`|`$warning-5`|√||
|`$button-warning-hover-border-color`|`$warning-5`|√||
|`$button-warning-focus-color`|`$gray-1`|√||
|`$button-warning-focus-background-color`|`$warning-5`|√||
|`$button-warning-focus-border-color`|`$warning-5`|√||
|`$button-warning-active-color`|`$gray-1`|√||
|`$button-warning-active-background-color`|`$warning-7`|√||
|`$button-warning-active-border-color`|`$warning-7`|√||
|`$button-warning-outlined-color`|`$warning-6`|√||
|`$button-warning-outlined-background-color`|`$container-background-color`|√||
|`$button-warning-outlined-border-color`|`$warning-6`|√||
|`$button-warning-outlined-hover-color`|`$warning-5`|√||
|`$button-warning-outlined-hover-background-color`|`$container-background-color`|√||
|`$button-warning-outlined-hover-border-color`|`$warning-5`|√||
|`$button-warning-outlined-focus-color`|`$warning-5`|√||
|`$button-warning-outlined-focus-background-color`|`$container-background-color`|√||
|`$button-warning-outlined-focus-border-color`|`$warning-5`|√||
|`$button-warning-outlined-active-color`|`$warning-7`|√||
|`$button-warning-outlined-active-background-color`|`$container-background-color`|√||
|`$button-warning-outlined-active-border-color`|`$warning-7`|√||
|`$button-warning-link-color`|`$warning-6`|√||
|`$button-warning-link-text-decoration`|`underline`|√||
|`$button-warning-link-background-color`|`$container-background-color`|√||
|`$button-warning-link-border-color`|`$container-background-color`|√||
|`$button-warning-link-hover-color`|`$warning-5`|√||
|`$button-warning-link-hover-background-color`|`$container-background-color`|√||
|`$button-warning-link-hover-border-color`|`$container-background-color`|√||
|`$button-warning-link-focus-color`|`$warning-5`|√||
|`$button-warning-link-focus-background-color`|`$container-background-color`|√||
|`$button-warning-link-focus-border-color`|`$container-background-color`|√||
|`$button-warning-link-active-color`|`$warning-7`|√||
|`$button-warning-link-active-background-color`|`$container-background-color`|√||
|`$button-warning-link-active-border-color`|`$container-background-color`|√||
|`$button-warning-link-disabled-color`|`$color-disabled`|√||
|`$button-warning-link-disabled-background-color`|`$container-background-color`|√||
|`$button-warning-link-disabled-border-color`|`$container-background-color`|√||
|`$button-warning-color-reverse`|`$gray-1`|√||
|`$button-warning-background-color-reverse`|`$warning-6-reverse`|√||
|`$button-warning-border-color-reverse`|`$warning-6-reverse`|√||
|`$button-warning-hover-color-reverse`|`$gray-1`|√||
|`$button-warning-hover-background-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-hover-border-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-focus-color-reverse`|`$gray-1`|√||
|`$button-warning-focus-background-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-focus-border-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-active-color-reverse`|`$gray-1`|√||
|`$button-warning-active-background-color-reverse`|`$warning-7-reverse`|√||
|`$button-warning-active-border-color-reverse`|`$warning-7-reverse`|√||
|`$button-warning-outlined-color-reverse`|`$warning-6-reverse`|√||
|`$button-warning-outlined-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-outlined-border-color-reverse`|`$warning-6-reverse`|√||
|`$button-warning-outlined-hover-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-outlined-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-outlined-hover-border-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-outlined-focus-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-outlined-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-outlined-focus-border-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-outlined-active-color-reverse`|`$warning-7-reverse`|√||
|`$button-warning-outlined-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-outlined-active-border-color-reverse`|`$warning-7-reverse`|√||
|`$button-warning-link-color-reverse`|`$warning-6-reverse`|√||
|`$button-warning-link-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-hover-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-link-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-hover-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-focus-color-reverse`|`$warning-5-reverse`|√||
|`$button-warning-link-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-focus-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-active-color-reverse`|`$warning-7-reverse`|√||
|`$button-warning-link-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-active-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-warning-link-disabled-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-warning-link-disabled-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-color`|`$gray-1`|√||
|`$button-error-background-color`|`$error-6`|√||
|`$button-error-border-color`|`$error-6`|√||
|`$button-error-hover-color`|`$gray-1`|√||
|`$button-error-hover-background-color`|`$error-5`|√||
|`$button-error-hover-border-color`|`$error-5`|√||
|`$button-error-focus-color`|`$gray-1`|√||
|`$button-error-focus-background-color`|`$error-5`|√||
|`$button-error-focus-border-color`|`$error-5`|√||
|`$button-error-active-color`|`$gray-1`|√||
|`$button-error-active-background-color`|`$error-7`|√||
|`$button-error-active-border-color`|`$error-7`|√||
|`$button-error-outlined-color`|`$error-6`|√||
|`$button-error-outlined-background-color`|`$container-background-color`|√||
|`$button-error-outlined-border-color`|`$error-6`|√||
|`$button-error-outlined-hover-color`|`$error-5`|√||
|`$button-error-outlined-hover-background-color`|`$container-background-color`|√||
|`$button-error-outlined-hover-border-color`|`$error-5`|√||
|`$button-error-outlined-focus-color`|`$error-5`|√||
|`$button-error-outlined-focus-background-color`|`$container-background-color`|√||
|`$button-error-outlined-focus-border-color`|`$error-5`|√||
|`$button-error-outlined-active-color`|`$error-7`|√||
|`$button-error-outlined-active-background-color`|`$container-background-color`|√||
|`$button-error-outlined-active-border-color`|`$error-7`|√||
|`$button-error-link-color`|`$error-6`|√||
|`$button-error-link-text-decoration`|`underline`|√||
|`$button-error-link-background-color`|`$container-background-color`|√||
|`$button-error-link-border-color`|`$container-background-color`|√||
|`$button-error-link-hover-color`|`$error-5`|√||
|`$button-error-link-hover-background-color`|`$container-background-color`|√||
|`$button-error-link-hover-border-color`|`$container-background-color`|√||
|`$button-error-link-focus-color`|`$error-5`|√||
|`$button-error-link-focus-background-color`|`$container-background-color`|√||
|`$button-error-link-focus-border-color`|`$container-background-color`|√||
|`$button-error-link-active-color`|`$error-7`|√||
|`$button-error-link-active-background-color`|`$container-background-color`|√||
|`$button-error-link-active-border-color`|`$container-background-color`|√||
|`$button-error-link-disabled-color`|`$color-disabled`|√||
|`$button-error-link-disabled-background-color`|`$container-background-color`|√||
|`$button-error-link-disabled-border-color`|`$container-background-color`|√||
|`$button-error-color-reverse`|`$gray-1`|√||
|`$button-error-background-color-reverse`|`$error-6-reverse`|√||
|`$button-error-border-color-reverse`|`$error-6-reverse`|√||
|`$button-error-hover-color-reverse`|`$gray-1`|√||
|`$button-error-hover-background-color-reverse`|`$error-5-reverse`|√||
|`$button-error-hover-border-color-reverse`|`$error-5-reverse`|√||
|`$button-error-focus-color-reverse`|`$gray-1`|√||
|`$button-error-focus-background-color-reverse`|`$error-5-reverse`|√||
|`$button-error-focus-border-color-reverse`|`$error-5-reverse`|√||
|`$button-error-active-color-reverse`|`$gray-1`|√||
|`$button-error-active-background-color-reverse`|`$error-7-reverse`|√||
|`$button-error-active-border-color-reverse`|`$error-7-reverse`|√||
|`$button-error-outlined-color-reverse`|`$error-6-reverse`|√||
|`$button-error-outlined-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-outlined-border-color-reverse`|`$error-6-reverse`|√||
|`$button-error-outlined-hover-color-reverse`|`$error-5-reverse`|√||
|`$button-error-outlined-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-outlined-hover-border-color-reverse`|`$error-5-reverse`|√||
|`$button-error-outlined-focus-color-reverse`|`$error-5-reverse`|√||
|`$button-error-outlined-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-outlined-focus-border-color-reverse`|`$error-5-reverse`|√||
|`$button-error-outlined-active-color-reverse`|`$error-7-reverse`|√||
|`$button-error-outlined-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-outlined-active-border-color-reverse`|`$error-7-reverse`|√||
|`$button-error-link-color-reverse`|`$error-6-reverse`|√||
|`$button-error-link-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-hover-color-reverse`|`$error-5-reverse`|√||
|`$button-error-link-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-hover-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-focus-color-reverse`|`$error-5-reverse`|√||
|`$button-error-link-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-focus-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-active-color-reverse`|`$error-7-reverse`|√||
|`$button-error-link-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-active-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-error-link-disabled-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-error-link-disabled-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-color`|`$gray-1`|√||
|`$button-info-background-color`|`$info-6`|√||
|`$button-info-border-color`|`$info-6`|√||
|`$button-info-hover-color`|`$gray-1`|√||
|`$button-info-hover-background-color`|`$info-5`|√||
|`$button-info-hover-border-color`|`$info-5`|√||
|`$button-info-focus-color`|`$gray-1`|√||
|`$button-info-focus-background-color`|`$info-5`|√||
|`$button-info-focus-border-color`|`$info-5`|√||
|`$button-info-active-color`|`$gray-1`|√||
|`$button-info-active-background-color`|`$info-7`|√||
|`$button-info-active-border-color`|`$info-7`|√||
|`$button-info-outlined-color`|`$info-6`|√||
|`$button-info-outlined-background-color`|`$container-background-color`|√||
|`$button-info-outlined-border-color`|`$info-6`|√||
|`$button-info-outlined-hover-color`|`$info-5`|√||
|`$button-info-outlined-hover-background-color`|`$container-background-color`|√||
|`$button-info-outlined-hover-border-color`|`$info-5`|√||
|`$button-info-outlined-focus-color`|`$info-5`|√||
|`$button-info-outlined-focus-background-color`|`$container-background-color`|√||
|`$button-info-outlined-focus-border-color`|`$info-5`|√||
|`$button-info-outlined-active-color`|`$info-7`|√||
|`$button-info-outlined-active-background-color`|`$container-background-color`|√||
|`$button-info-outlined-active-border-color`|`$info-7`|√||
|`$button-info-link-color`|`$info-6`|√||
|`$button-info-link-text-decoration`|`underline`|√||
|`$button-info-link-background-color`|`$container-background-color`|√||
|`$button-info-link-border-color`|`$container-background-color`|√||
|`$button-info-link-hover-color`|`$info-5`|√||
|`$button-info-link-hover-background-color`|`$container-background-color`|√||
|`$button-info-link-hover-border-color`|`$container-background-color`|√||
|`$button-info-link-focus-color`|`$info-5`|√||
|`$button-info-link-focus-background-color`|`$container-background-color`|√||
|`$button-info-link-focus-border-color`|`$container-background-color`|√||
|`$button-info-link-active-color`|`$info-7`|√||
|`$button-info-link-active-background-color`|`$container-background-color`|√||
|`$button-info-link-active-border-color`|`$container-background-color`|√||
|`$button-info-link-disabled-color`|`$color-disabled`|√||
|`$button-info-link-disabled-background-color`|`$container-background-color`|√||
|`$button-info-link-disabled-border-color`|`$container-background-color`|√||
|`$button-info-color-reverse`|`$gray-1`|√||
|`$button-info-background-color-reverse`|`$info-6-reverse`|√||
|`$button-info-border-color-reverse`|`$info-6-reverse`|√||
|`$button-info-hover-color-reverse`|`$gray-1`|√||
|`$button-info-hover-background-color-reverse`|`$info-5-reverse`|√||
|`$button-info-hover-border-color-reverse`|`$info-5-reverse`|√||
|`$button-info-focus-color-reverse`|`$gray-1`|√||
|`$button-info-focus-background-color-reverse`|`$info-5-reverse`|√||
|`$button-info-focus-border-color-reverse`|`$info-5-reverse`|√||
|`$button-info-active-color-reverse`|`$gray-1`|√||
|`$button-info-active-background-color-reverse`|`$info-7-reverse`|√||
|`$button-info-active-border-color-reverse`|`$info-7-reverse`|√||
|`$button-info-outlined-color-reverse`|`$info-6-reverse`|√||
|`$button-info-outlined-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-outlined-border-color-reverse`|`$info-6-reverse`|√||
|`$button-info-outlined-hover-color-reverse`|`$info-5-reverse`|√||
|`$button-info-outlined-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-outlined-hover-border-color-reverse`|`$info-5-reverse`|√||
|`$button-info-outlined-focus-color-reverse`|`$info-5-reverse`|√||
|`$button-info-outlined-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-outlined-focus-border-color-reverse`|`$info-5-reverse`|√||
|`$button-info-outlined-active-color-reverse`|`$info-7-reverse`|√||
|`$button-info-outlined-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-outlined-active-border-color-reverse`|`$info-7-reverse`|√||
|`$button-info-link-color-reverse`|`$info-6-reverse`|√||
|`$button-info-link-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-hover-color-reverse`|`$info-5-reverse`|√||
|`$button-info-link-hover-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-hover-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-focus-color-reverse`|`$info-5-reverse`|√||
|`$button-info-link-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-focus-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-active-color-reverse`|`$info-7-reverse`|√||
|`$button-info-link-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-active-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-disabled-color-reverse`|`$color-disabled-reverse`|√||
|`$button-info-link-disabled-background-color-reverse`|`$container-background-color-reverse`|√||
|`$button-info-link-disabled-border-color-reverse`|`$container-background-color-reverse`|√||
|`$button-sm-padding-y`|`0`|√||
|`$button-sm-padding-x`|`$button-padding-base * 2 * $scale + $unit`|√||
|`$button-sm-font-size`|`$button-font-size-base * $scale + $unit`|√||
|`$button-lg-padding-y`|`$button-padding-base * 1.5 * $scale + $unit`|√||
|`$button-lg-padding-x`|`$button-padding-base * 4 * $scale + $unit`|√||
|`$button-lg-font-size`|`($button-font-size-base + 2) * $scale + $unit`|√||

## 卡片 card

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$card-display`|`flex`|√||
|`$card-padding-y`|`0`|√||
|`$card-padding-x`|`0`|√||
|`$card-margin-y`|`0`|√||
|`$card-margin-x`|`0`|√||
|`$card-font-size-base`|`$font-size-base`|√||
|`$card-font-size`|`$card-font-size-base * $scale + $unit`|√||
|`$card-font-weight`|`400`|√||
|`$card-line-height`|`$line-height-default`|√||
|`$card-border-style`|`solid`|√||
|`$card-border-width-base`|`1`|√||
|`$card-border-width`|`$card-border-width-base * $scale + $unit`|√||
|`$card-border-radius-base`|`2`|√||
|`$card-border-radius`|`2 * $scale + $unit`|√||
|`$card-color`|`$color-main`|√||
|`$card-background-color`|`$container-background-color`|√||
|`$card-border-color`|`$border-color`|√||
|`$card-color-reverse`|`$color-main-reverse`|√||
|`$card-background-color-reverse`|`$container-background-color-reverse`|√||
|`$card-border-color-reverse`|`$border-color-reverse`|√||
|`$card-header-display`|`flex`|√||
|`$card-header-padding-base`|`16`|√||
|`$card-header-padding-y`|`$card-header-padding-base * $scale + $unit`|√||
|`$card-header-padding-x`|`$card-header-padding-base * 1.5 * $scale + $unit`|√||
|`$card-header-font-size-base`|`$font-size-base + 2`|√||
|`$card-header-font-size`|`$card-header-font-size-base * $scale + $unit`|√||
|`$card-header-font-weight`|`500`|√||
|`$card-header-line-height`|`$line-height-default`|√||
|`$card-content-padding-base`|`$card-header-padding-base`|√||
|`$card-content-padding-y`|`$card-content-padding-base * 1.5 * $scale + $unit`|√||
|`$card-content-padding-x`|`$card-content-padding-base * 1.5 * $scale + $unit`|√||
|`$card-footer-padding-base`|`$card-header-padding-base`|√||
|`$card-footer-padding-y`|`$card-footer-padding-base * $scale + $unit`|√||
|`$card-footer-padding-x`|`$card-footer-padding-base * 1.5 * $scale + $unit`|√||
|`$card-sm-header-padding-base`|`$card-header-padding-base / 2`|√||
|`$card-sm-header-padding-y`|`$card-sm-header-padding-base * $scale + $unit`|√||
|`$card-sm-header-padding-x`|`$card-sm-header-padding-base * 1.5 * $scale + $unit`|√||
|`$card-sm-header-font-size-base`|`$font-size-base`|√||
|`$card-sm-header-font-size`|`$card-sm-header-font-size-base * $scale + $unit`|√||
|`$card-sm-content-padding-base`|`$card-sm-header-padding-base`|√||
|`$card-sm-content-padding-y`|`$card-sm-content-padding-base * 1.5 * $scale + $unit`|√||
|`$card-sm-content-padding-x`|`$card-sm-content-padding-base * 1.5 * $scale + $unit`|√||
|`$card-sm-footer-padding-base`|`$card-sm-header-padding-base`|√||
|`$card-sm-footer-padding-y`|`$card-sm-footer-padding-base * $scale + $unit`|√||
|`$card-sm-footer-padding-x`|`$card-sm-footer-padding-base * 1.5 * $scale + $unit`|√||

## 分割线 divider

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$divider-display`|`block`|√||
|`$divider-width`|`100%`|√||
|`$divider-height`|`auto`|√||
|`$divider-margin-base`|`8`|√||
|`$divider-margin-y`|`$divider-margin-base * 3 * $scale + $unit`|√||
|`$divider-margin-x`|`0`|√||
|`$divider-border-top-style`|`solid`|√||
|`$divider-border-top-width-base`|`1`|√||
|`$divider-border-top-width`|`$divider-border-top-width-base * $scale + $unit`|√||
|`$divider-border-top-color`|`$border-color`|√||
|`$divider-border-top-color-reverse`|`$border-color-reverse`|√||
|`$divider-transition`|`$transition-duration-default $transition-timing-function-default`|√||
|`$divider-vertical-display`|`inline-block`|√||
|`$divider-vertical-width`|`auto`|√||
|`$divider-vertical-height`|`100%`|√||
|`$divider-vertical-margin-base`|`$divider-margin-base`|√||
|`$divider-vertical-margin-y`|`0`|√||
|`$divider-vertical-margin-x`|`$divider-vertical-margin-base * $scale + $unit`|√||
|`$divider-vertical-border-left-style`|`$divider-border-top-style`|√||
|`$divider-vertical-border-left-width`|`$divider-border-top-width`|√||
|`$divider-vertical-border-left-color`|`$border-color`|√||
|`$divider-vertical-border-left-color-reverse`|`$border-color-reverse`|√||
|`$divider-wrapper-display`|`flex`|√||
|`$divider-text-display`|`inline-block`|√||
|`$divider-text-padding-base`|`16`|√||
|`$divider-text-padding-y`|`0`|√||
|`$divider-text-padding-x`|`$divider-text-padding-base * $scale + $unit`|√||
|`$divider-text-font-size-base`|`$font-size-base`|√||
|`$divider-text-font-size`|`$divider-text-font-size-base * $scale + $unit`|√||
|`$divider-text-font-weight`|`400`|√||
|`$divider-text-line-height`|`$line-height-default`|√||

## 图标 icon

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$icon-display`|`inline-block`|√||
|`$icon-sizing-base`|`$font-size-base`|√||
|`$icon-sizing`|`$icon-sizing-base * $scale + $unit`|√||
|`$icon-line-height`|`1`|√||
|`$icon-sm-sizing`|`($icon-sizing-base - 2) * $scale + $unit`|√||
|`$icon-sm-line-height`|`1`|√||
|`$icon-lg-sizing`|`($icon-sizing-base + 2) * $scale + $unit`|√||
|`$icon-lg-line-height`|`1`|√||

## 输入框 input

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$input-placeholder-color`|`$color-secondary`|√||
|`$input-placeholder-color-reverse`|`$color-secondary-reverse`|√||
|`$input-display`|`inline-block`|√||
|`$input-padding-base`|`4`|√||
|`$input-padding-y`|`$input-padding-base * $scale + $unit`|√||
|`$input-padding-x`|`$input-padding-base * 3 * $scale + $unit`|√||
|`$input-margin-y`|`0`|√||
|`$input-margin-x`|`0`|√||
|`$input-font-size-base`|`$font-size-base`|√||
|`$input-font-size`|`$input-font-size-base * $scale + $unit`|√||
|`$input-font-weight`|`400`|√||
|`$input-font-variant`|`tabular-nums`|√||
|`$input-line-height`|`$line-height-default`|√||
|`$input-border-style`|`solid`|√||
|`$input-border-width`|`1 * $scale + $unit`|√||
|`$input-border-radius-base`|`$border-radius-base`|√||
|`$input-border-radius`|`$input-border-radius-base * $scale + $unit`|√||
|`$input-transition`|`$transition-duration-default $transition-timing-function-default`|√||
|`$input-color`|`$color-main`|√||
|`$input-background-color`|`$container-background-color`|√||
|`$input-border-color`|`$border-color`|√||
|`$input-active-color`|`$color-main`|√||
|`$input-active-background-color`|`$container-background-color`|√||
|`$input-active-border-color`|`$primary-6`|√||
|`$input-color-reverse`|`$color-main-reverse`|√||
|`$input-background-color-reverse`|`$container-background-color-reverse`|√||
|`$input-border-color-reverse`|`$border-color`|√||
|`$input-focus-color-reverse`|`$color-main-reverse`|√||
|`$input-focus-background-color-reverse`|`$container-background-color-reverse`|√||
|`$input-focus-border-color-reverse`|`$primary-6-reverse`|√||
|`$input-active-color-reverse`|`$color-main-reverse`|√||
|`$input-active-background-color-reverse`|`$container-background-color-reverse`|√||
|`$input-active-border-color-reverse`|`$primary-6-reverse`|√||
|`$input-sm-padding-y`|`0`|√||
|`$input-sm-padding-x`|`$input-padding-base * 2 * $scale + $unit`|√||
|`$input-sm-font-size`|`$input-font-size-base * $scale + $unit`|√||
|`$input-lg-padding-y`|`$input-padding-base * 1.5 * $scale + $unit`|√||
|`$input-lg-padding-x`|`$input-padding-base * 4 * $scale + $unit`|√||
|`$input-lg-font-size`|`($input-font-size-base + 2) * $scale + $unit`|√||v
|`$input-wrapper-display`|`inline-flex`|√||
|`$input-wrapper-padding-y`|`$input-padding-y`|√||
|`$input-wrapper-padding-x`|`$input-padding-x`|√||
|`$input-wrapper-margin-y`|`$input-margin-y`|√||
|`$input-wrapper-margin-x`|`$input-margin-x`|√||
|`$input-wrapper-font-size-base`|`$input-font-size-base`|√||
|`$input-wrapper-font-size`|`$input-wrapper-font-size-base * $scale + $unit`|√||
|`$input-wrapper-font-weight`|`$input-font-weight`|√||
|`$input-wrapper-font-variant`|`$input-font-variant`|√||
|`$input-wrapper-line-height`|`$input-line-height`|√||
|`$input-wrapper-border-style`|`$input-border-style`|√||
|`$input-wrapper-border-width`|`$input-border-width`|√||
|`$input-wrapper-border-radius-base`|`$input-border-radius-base`|√||
|`$input-wrapper-border-radius`|`$input-wrapper-border-radius-base * $scale + $unit`|√||
|`$input-wrapper-transition`|`$input-transition`|√||
|`$input-wrapper-color`|`$input-color`|√||
|`$input-wrapper-background-color`|`$input-background-color`|√||
|`$input-wrapper-border-color`|`$input-border-color`|√||
|`$input-wrapper-focus-color`|`$input-focus-color`|√||
|`$input-wrapper-focus-background-color`|`$input-focus-background-color`|√||
|`$input-wrapper-focus-border-color`|`$input-focus-border-color`|√||
|`$input-wrapper-active-color`|`$input-active-color`|√||
|`$input-wrapper-active-background-color`|`$input-active-background-color`|√||
|`$input-wrapper-active-border-color`|`$input-active-border-color`|√||
|`$input-wrapper-color-reverse`|`$input-color-reverse`|√||
|`$input-wrapper-background-color-reverse`|`$input-background-color-reverse`|√||
|`$input-wrapper-border-color-reverse`|`$input-border-color-reverse`|√||
|`$input-wrapper-focus-color-reverse`|`$input-focus-color-reverse`|√||
|`$input-wrapper-focus-background-color-reverse`|`$input-focus-background-color-reverse`|√||
|`$input-wrapper-focus-border-color-reverse`|`$input-focus-border-color-reverse`|√||
|`$input-wrapper-active-color-reverse`|`$input-active-color-reverse`|√||
|`$input-wrapper-active-background-color-reverse`|`$input-active-background-color-reverse`|√||
|`$input-wrapper-active-border-color-reverse`|`$input-active-border-color-reverse`|√||
|`$input-wrapper-sm-padding-y`|`0`|√||
|`$input-wrapper-sm-padding-x`|`$input-padding-base * 2 * $scale + $unit`|√||
|`$input-wrapper-sm-font-size`|`$input-font-size-base * $scale + $unit`|√||
|`$input-wrapper-lg-padding-y`|`$input-padding-base * 1.5 * $scale + $unit`|√||
|`$input-wrapper-lg-padding-x`|`$input-padding-base * 4 * $scale + $unit`|√||
|`$input-wrapper-lg-font-size`|`($input-font-size-base + 2) * $scale + $unit`|√||
|`$input-wrapper-prefix-display`|`flex`|√||
|`$input-wrapper-prefix-margin-right-base`|`4`|√||
|`$input-wrapper-prefix-margin-right`|`$input-wrapper-prefix-margin-right-base * $scale + $unit`|√||
|`$input-wrapper-suffix-display`|`flex`|√||
|`$input-wrapper-suffix-margin-right-base`|`4`|√||
|`$input-wrapper-suffix-margin-right`|`$input-wrapper-suffix-margin-right-base * $scale + $unit`|√||

## 遮盖 overlay

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$overlay-z-index`|`$z-index-max - $z-index-step * 2`|√||
|`$overlay-width`|`100%`|√||
|`$overlay-height`|`100%`|√||
|`$overlay-color`|`$color-main`|√||
|`$overlay-background-color`|`fade-out($black, .55)`|√||
|`$overlay-color-reverse`|`$color-main-reverse`|√||
|`$overlay-background-color-reverse`|`$overlay-background-color`|√||
