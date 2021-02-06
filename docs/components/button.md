# 按钮类 button

## 默认样式

要使用按钮类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/button";
```

在`button`上添加`.btn`是最简单的使用方式。

```html
<view class="container">
  <button class="btn">button</button>
  <button class="btn" disabled>disabled button</button>
</view>
```

## 主题

默认有`default`，`primary`，`success`，`warning`，`error`, `info`六个主题。

```html
<!-- default 主题 -->
<button class="btn">default</button>
<button class="btn is-plain">default plain</button>
<button class="btn is-outlined">default outlined</button>
<button class="btn is-text">default text</button>
<!-- primary 主题 -->
<button class="btn is-primary">primary</button>
<button class="btn is-primary is-plain">primary plain</button>
<button class="btn is-primary is-outlined">primary outlined</button>
<button class="btn is-primary is-text">primary text</button>
<!-- success 主题 -->
<button class="btn is-success">success</button>
<button class="btn is-success is-plain">success plain</button>
<button class="btn is-success is-outlined">success outlined</button>
<button class="btn is-success is-text">success text</button>
<!-- warning 主题 -->
<button class="btn is-warning">warning</button>
<button class="btn is-warning is-plain">warning plain</button>
<button class="btn is-warning is-outlined">warning outlined</button>
<button class="btn is-warning is-text">warning text</button>
<!-- error 主题 -->
<button class="btn is-error">error</button>
<button class="btn is-error is-plain">error plain</button>
<button class="btn is-error is-outlined">error outlined</button>
<button class="btn is-error is-text">error text</button>
<!-- info 主题 -->
<button class="btn is-info">info</button>
<button class="btn is-info is-plain">info plain</button>
<button class="btn is-info is-outlined">info outlined</button>
<button class="btn is-info is-text">info text</button>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <button class="btn">明亮模式</button>
</view>
<view class="container is-dark">
  <button class="btn">暗黑模式</button>
</view>
```

## 水波纹

添加`is-ripply`就可以使用内置的水波纹效果，可以结合不同主题、不同模式使用。

```html
<view class="container">
  <button class="btn is-ripply">水波纹</button>
</view>
```

## 尺寸

内置四个尺寸类，可以结合不同主题、不同模式使用。其中，`.is-xs` 和 `.is-xl` 是 2.2 新增的。

```html
<view class="container">
  <button class="btn is-xs">extra small</button>
  <button class="btn is-sm">small</button>
  <button class="btn">default</button>
  <button class="btn is-lg">large</button>
  <button class="btn is-xl">extra large</button>
</view>
```

## 变量 <Badge text="2.2 新增">

下面是一些可供自定义的变量。

|变量名|变量值|
|---|---|
|`$btn--border-width-base`|1|
|`$btn--padding-y-base`|4|
|`$btn--padding-y-base--xs`|0|
|`$btn--padding-y-base--sm`|2|
|`$btn--padding-y-base--lg`|6|
|`$btn--padding-y-base--xl`|8|
|`$btn--padding-x-base`|16|
|`$btn--padding-x-base--xs`|8|
|`$btn--padding-x-base--sm`|12|
|`$btn--padding-x-base--lg`|20|
|`$btn--padding-x-base--xl`|24|
|`$btn--font-size-base`|`$font-size-base`，默认为 14|
|`$btn--font-size-base--xs`|`$font-size-base`，默认为 14|
|`$btn--font-size-base--sm`|`$font-size-base`，默认为 14|
|`$btn--font-size-base--lg`|`$font-size-base + $font-size-diff`，默认为 16|
|`$btn--font-size-base--xl`|`$font-size-base + $font-size-diff`，默认为 16|
|`$btn--line-height`|`$line-height-default`，默认为 1.5|
|`$btn--line-height--xs`|`$line-height-default`，默认为 1.5|
|`$btn--line-height--sm`|`$line-height-default`，默认为 1.5|
|`$btn--line-height--lg`|`$line-height-default`，默认为 1.5|
|`$btn--line-height--xl`|`$line-height-default`，默认为 1.5|
|`$btn--height-base`|`$btn--border-width-base * 2 + $btn--padding-y-base * 2 + $btn--font-size-base * $btn--line-height`，默认为 31|
|`$btn--height-base--xs`|`$btn--border-width-base * 2 + $btn--padding-y-base--xs * 2 + $btn--font-size-base--xs * $btn--line-height--xs`，默认为 23|
|`$btn--height-base--sm`|`$btn--border-width-base * 2 + $btn--padding-y-base--sm * 2 + $btn--font-size-base--sm * $btn--line-height--sm`，默认为 27|
|`$btn--height-base--lg`|`$btn--border-width-base * 2 + $btn--padding-y-base--lg * 2 + $btn--font-size-base--lg * $btn--line-height--lg`，默认为 38|
|`$btn--height-base--xl`|`$btn--border-width-base * 2 + $btn--padding-y-base--xl * 2 + $btn--font-size-base--xl * $btn--line-height--xl`，默认为 42|
