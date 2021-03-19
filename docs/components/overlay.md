# 遮罩类 overlay

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/overlay.scss)

## 默认样式

要使用遮罩类，需要先引入。

```scss
@import '~@modyqyw/mp-scss';
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/overlay";
```

在 `view` 上添加 `.overlay` 是最简单的使用方式。

```html
<view class="container">
  <view class="overlay"></view>
</view>
```

## 隐藏

要隐藏一个遮罩，只需要为 `.overlay` 添加 `.is-hidden`。

```html
<view class="container">
  <view class="overlay is-hidden"></view>
</view>
```

要切换显示和隐藏，只需要动态地去掉和添加 `.is-hidden`。

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="overlay"></view>
</view>
<view class="container is-dark">
  <view class="overlay"></view>
</view>
```

## 组合

一个常见的用途是把 `.overlay` 和 `.card` 结合，自定义一个模态框。

```html
<view class="container">
  <view class="overlay d-flex align-center justify-center p-20">
    <view class="card">
      <view class="card-header">header</view>
      <view class="card-content">content</view>
      <view class="card-footer">footer</view>
    </view>
  </view>
</view>
```

## 变量

下面是一些可供自定义的变量。

|变量名|默认值|
|---|---|
|`$overlay--z-index`|`$z-index-max - $z-index-step`|
|`$overlay--background-color`|`rgba(0, 0, 0, 0.45)`|
