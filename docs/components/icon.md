# 图标类 icon

## 默认样式

要使用图标类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/icon";
```

在需要图标的地方可以使用`.icon`快速指定图标大小。

```html
<view class="container">
  <button class="btn is-primary">
    <image class="icon" src="../fake/image.png"></image>
    text
  </button>
</view>
```

## 尺寸

使用`.is-sm`可以使用更小的`.icon`，使用`.is-lg`可以使用更大的`.icon`，可以结合使用。

```html
<view class="container">
  <button class="btn is-primary is-sm">
    <image class="icon is-sm" src="../fake/image.png"></image>
    text
  </button>
  <button class="btn is-primary is-lg">
    <image class="icon is-lg" src="../fake/image.png"></image>
    text
  </button>
</view>
```
