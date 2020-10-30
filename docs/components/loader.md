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

默认有`default`，`primary`，`success`，`warning`，`error`, `info`六个主题。

```html
<view class="container">
  <!-- default 主题 -->
  <view class="loader"></view>
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
  <button class="loader is-large"></button>
</view>
```

## 适应不同的背景

要适应特定颜色的背景，需要做额外的修改。

```html
<view class="container">
  <button class="loader"></button>
</view>
```

```scss
.container,
.container.is-light {
  background-color: #fafafa;
}

.loader::after,
.is-light .loader::after,
.loader.is-light::after {
  background-color: #fafafa;
}

.container.is-dark {
  background-color: #121212;
}

.is-dark .loader::after,
.loader.is-dark {
  background-color: #121212;
}
```

注意保证对应关系。
