# 徽标类 badge

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/badge.scss)

## 默认样式

要使用徽标类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/badge";
```

使用一个父元素作为容器，在其中使用 `.badge`，默认会显示在右上角。

```html
<view class="btn">
  button
  <view class="badge"></view>
</view>
```

## 主题

默认有 `default`，`primary`，`success`，`warning`，`error`，`info`，`white` 几个主题。

```html
<!-- default 主题 -->
<view class="btn">
  button
  <view class="badge"></view>
</view>
<!-- primary 主题 -->
<view class="btn">
  button
  <view class="badge is-primary"></view>
</view>
<!-- success 主题 -->
<view class="btn">
  button
  <view class="badge is-success"></view>
</view>
<!-- warning 主题 -->
<view class="btn">
  button
  <view class="badge is-warning"></view>
</view>
<!-- error 主题 -->
<view class="btn">
  button
  <view class="badge is-error"></view>
</view>
<!-- info 主题 -->
<view class="btn">
  button
  <view class="badge is-info"></view>
</view>
<!-- white 主题 -->
<view class="btn">
  button
  <view class="badge is-white"></view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="btn">
    button
    <view class="badge"></view>
  </view>
</view>
<view class="container is-dark">
  <view class="btn">
    button
    <view class="badge"></view>
  </view>
</view>
```

## 尺寸

使用 `.is-sm` 可以使用更小的 `.badge`。可以结合不同主题、不同模式使用。

```html
<view class="btn">
  button
  <view class="badge is-sm"></view>
</view>
```

## 圆点形式

使用 `.is-dot` 可以使用圆点形式的 `.badge`。可以结合不同主题、不同模式使用。

```html
<view class="btn">
  button
  <view class="badge is-dot"></view>
</view>
```

## 位置

使用 `.is-bottom` 可以让 `.badge` 出现在容器的右下角，使用 `.is-left` 可以让 `.badge` 出现在左上角，组合使用 `.is-bottom` 和 `.is-left` 可以让 `.badge` 出现在左下角。

```html
<view class="btn">
  button
  <view class="badge is-bottom"></view>
</view>
<view class="btn">
  button
  <view class="badge is-left"></view>
</view>
<view class="btn">
  button
  <view class="badge is-left is-bottom"></view>
</view>
```

## 变量

|变量名|默认值|
|---|---|
|`$badge--padding-y-base`|`0`|
|`$badge--padding-y-base--sm`|`0`|
|`$badge--padding-y-base--dot`|`0`|
|`$badge--padding-x-base`|`6`|
|`$badge--padding-x-base--sm`|`0`|
|`$badge--padding-x-base--dot`|`0`|
|`$badge--font-size-base`|`$font-size-base - $font-size-diff`|
|`$badge--font-size-base--sm`|`$font-size-base - $font-size-diff`|
|`$badge--line-height`|`$line-height-default`|
|`$badge--line-height--sm`|`$line-height-default - $line-height-diff`|
|`$badge--height-base`|`$badge--padding-y-base * 2 + $badge--font-size-base * $badge--line-height`|
|`$badge--height-base--sm`|`$badge--padding-y-base--sm * 2 + $badge--font-size-base--sm * $badge--line-height--sm`|
|`$badge--height-base--dot`|`6`|
