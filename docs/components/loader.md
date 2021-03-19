# 加载器类 loader

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/loader.scss)

## 默认样式

要使用加载器类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/loader";
```

在 `view` 上添加 `.loader` 是最简单的使用方式。

```html
<view class="container">
  <view class="loader"></view>
</view>
```

## 主题

默认有 `default`，`white`，`black`，`primary`，`success`，`warning`，`error`，`info` 八个主题。

```html
<view class="container">
  <!-- default 主题 -->
  <view class="loader"></view>
  <!-- white 主题 -->
  <view class="loader is-white"></view>
  <!-- black 主题 -->
  <view class="loader is-black"></view>
  <!-- primary 主题 -->
  <view class="loader is-primary"></view>
  <!-- success 主题 -->
  <view class="loader is-success"></view>
  <!-- warning 主题 -->
  <view class="loader is-warning"></view>
  <!-- error 主题 -->
  <view class="loader is-error"></view>
  <!-- info 主题 -->
  <view class="loader is-info"></view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="loader"></view>
</view>
<view class="container is-dark">
  <view class="loader"></view>
</view>
```

## 尺寸

内置四个尺寸类。

```html
<view class="container">
  <view class="loader is-xs"></view>
  <view class="loader is-sm"></view>
  <view class="loader"></view>
  <view class="loader is-lg"></view>
  <view class="loader is-xl"></view>
</view>
```

## 结合

一个常见的用途是把 `.loader` 和 `.button` 结合，自定义加载中按钮。

```html
<button class="btn is-primary is-loading">
  <view class="loader is-white"></view>
  加载中...
</button>
```

注意需要让 `.loader::after` 的背景色和父元素的背景色保持一致。

```scss
.btn.is-primary.is-loading .loader::after {
  background-color: $primary;
}
```

## 变量

|变量名|默认值|
|---|---|
|`$loader--font-size-base`|`$font-size-base`|
|`$loader--font-size-diff`|`$font-size-diff`|
|`$loader--line-height`|`$line-height-default`|
|`$loader--animation-duration`|`1s`|
