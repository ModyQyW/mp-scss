# 徽标类 badge

## 默认样式

要使用徽标类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/badge";
```

使用一个父元素作为容器，在其中使用`.badge`。

```html
<view class="btn is-primary">
  button
  <view class="badge"></view>
</view>
```

## 主题

默认有`default`，`primary`，`success`，`warning`，`error`, `info`六个主题。

```html
<!-- default 主题 -->
<view class="btn is-primary">
  button
  <view class="badge"></view>
</view>
<!-- primary 主题 -->
<view class="btn is-primary">
  button
  <view class="badge is-primary"></view>
</view>
<!-- success 主题 -->
<view class="btn is-primary">
  button
  <view class="badge is-success"></view>
</view>
<!-- warning 主题 -->
<view class="btn is-warning">
  button
  <view class="badge"></view>
</view>
<!-- error 主题 -->
<view class="btn is-primary">
  button
  <view class="badge is-error"></view>
</view>
<!-- info 主题 -->
<view class="btn is-primary">
  button
  <view class="badge is-info"></view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。你也可以显式地在父元素或在`.badge`用`.is-light`指定使用明亮模式，用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container is-light">
  <view class="btn is-primary">
    button
    <view class="badge"></view>
  </view>
</view>
<view class="container is-dark">
  <view class="btn is-primary">
    button
    <!-- 强制使用明亮模式 -->
    <view class="badge is-light"></view>
  </view>
</view>
<view class="container is-dark">
  <view class="btn is-primary">
    button
    <view class="badge"></view>
  </view>
</view>
<view class="container">
  <view class="btn is-primary">
    button
    <!-- 强制使用暗黑模式 -->
    <view class="badge is-dark"></view>
  </view>
</view>
```

## 尺寸

使用`.is-small`可以使用更小的`.badge`。可以结合不同主题、不同模式使用。

```html
<view class="btn is-primary">
  button
  <view class="badge is-small"></view>
</view>
```

## 圆点形式

使用`.is-dot`可以使用圆点形式的`.badge`。可以结合不同主题、不同模式使用。

```html
<view class="btn is-primary">
  button
  <view class="badge is-dot"></view>
</view>
```
