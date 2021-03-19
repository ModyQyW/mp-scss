# 分割线类 divider

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/divider.scss)

## 默认样式

要使用分割线类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/divider";
```

在想要分割内容的地方可以使用 `.divider`。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
```

## 垂直方向

使用 `.is-vertical` 就可以让 `.divider` 垂直放置。

```html
<view class="row">
  <view>Lorem</view>
  <view class="divider is-vertical"></view>
  <view>Lorem</view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
<view class="container is-dark">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
```

## 使用文字或图标

要使用带文字的水平分割线较为复杂。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider-wrapper w-full">
    <view class="divider"></view>
    <view class="divider-content">text</view>
    <view class="divider"></view>
  </view>
  <view>Lorem</view>
</view>
```

如果要让文字靠左，可以使用 `.is-left`。对应地，使用 `.is-right` 可以让文字靠右。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider-wrapper w-full is-left">
    <view class="divider"></view>
    <view class="divider-content">text</view>
    <view class="divider"></view>
  </view>
  <view>Lorem</view>
</view>
```

你也可以使用图标代替文字，用法不变。

## 变量

|变量名|默认值|
|---|---|
|`$divider--margin-y-base`|`8`|
|`$divider--margin-y-base--vertical`|`0`|
|`$divider-wrapper--margin-y-base`|`8`|
|`$divider-content--padding-y-base`|`0`|
|`$divider--margin-x-base`|`0`|
|`$divider--margin-x-base--vertical`|`8`|
|`$divider-wrapper--margin-x-base`|`0`|
|`$divider-content--padding-x-base`|`8`|
|`$divider--border-width-base`|`1`|
