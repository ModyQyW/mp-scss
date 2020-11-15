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

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="btn is-primary">
    button
    <view class="badge"></view>
  </view>
</view>
<view class="container is-dark">
  <view class="btn is-primary">
    button
    <view class="badge"></view>
  </view>
</view>
```

## 尺寸

使用`.is-sm`可以使用更小的`.badge`。可以结合不同主题、不同模式使用。

```html
<view class="btn is-primary">
  button
  <view class="badge is-sm"></view>
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
