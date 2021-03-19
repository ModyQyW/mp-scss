# 卡片类 card

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/card.scss)

## 默认样式

要使用卡片类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/card";
```

在 `view` 上使用 `.card`。

```html
<view class="container">
  <view class="card"></view>
</view>
```

然后使用 `.card-header` 作为卡片头，使用 `.card-content` 作为卡片主要内容，使用 `.card-footer` 作为卡片尾。

```html
<view class="container">
  <view class="card">
    <view class="card-header">header</view>
    <view class="card-content">content</view>
    <view class="card-footer">footer</view>
  </view>
</view>
```

要添加分割线，可以使用 `.border` 相关的类。

```html
<view class="container">
  <view class="card">
    <view class="card-header">header</view>
    <view class="card-content border-y">content</view>
    <view class="card-footer">footer</view>
  </view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="card"></view>
</view>
<view class="container is-dark">
  <view class="card"></view>
</view>
```

## 变量

|变量名|默认值|
|---|---|
|`$card-header--padding-y-base`|`16`|
|`$card-header--padding-y-base--sm`|`8`|
|`$card-content--padding-y-base`|`16`|
|`$card-content--padding-y-base--sm`|`8`|
|`$card-footer--padding-y-base`|`16`|
|`$card-footer--padding-y-base--sm`|`8`|
|`$card-header--padding-x-base`|`16`|
|`$card-header--padding-x-base--sm`|`8`|
|`$card-content--padding-x-base`|`16`|
|`$card-content--padding-x-base--sm`|`8`|
|`$card-footer--padding-x-base`|`16`|
|`$card-footer--padding-x-base--sm`|`8`|
|`$card--font-size-base`|`$font-size-base`|
|`$card--font-size-base--sm`|`$font-size-base`|
|`$card--line-height`|`$line-height-default`|
|`$card--line-height--sm`|`$line-height-default`|
|`$card--border-width-base`|`1`|
