# 加载器类 loader

## 默认样式

要使用加载器类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/loader";
```

在`view`上添加`.loader`是最简单的使用方式。

```html
<view class="container">
  <view class="loader"></view>
</view>
```

## 主题

默认有`default`，`white`，`primary`，`success`，`warning`，`error`, `info`七个主题。`white`是 2.0.0-beta.1 开始新增的。

```html
<view class="container">
  <!-- default 主题 -->
  <view class="loader"></view>
  <!-- white 主题，2.0.0-beta.1 新增 -->
  <view class="loader is-white"></view>
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

默认使用明亮模式。你也可以显式地在父元素或在`.loader`用`.is-light`指定使用明亮模式，用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container">
  <view class="loader"></view>
</view>
<view class="container is-dark">
  <!-- 强制使用明亮模式 -->
  <view class="loader is-light"></view>
</view>
<view class="container is-dark">
  <view class="loader"></view>
</view>
<view class="container is-light">
  <!-- 强制使用暗黑模式 -->
  <view class="loader is-dark"></view>
</view>
```

## 尺寸

使用`.is-large`可以使用更大的`.loader`，可以结合不同主题、不同模式使用。

```html
<view class="container">
  <view class="loader is-large"></view>
</view>
```

## 结合

一个常见的用途是把`.loader`和`.button`结合，自定义加载中按钮。

```html
<button class="btn is-primary is-loading">
  <view class="loader is-white"></view>
  加载中...
</button>
```

```scss
.btn.is-primary .loader.is-white::after {
  background-color: $primary;
}
```

注意需要让`.loader::after`的背景色和父元素的背景色保持一致。
