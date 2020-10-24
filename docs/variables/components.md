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
$badge-display: block;
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
|`$badge-transition`|`$transition-delay-default $transition-timing-function-default`|√||
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
|`$divider-transition`|`$transition-delay-default $transition-timing-function-default`|√||
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
