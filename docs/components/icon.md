# 图标类 icon

## 默认样式

要使用图标类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/icon";
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

## FAQ

### 有实际可供使用的图标吗

库内没有内置图标，这并非核心目标。如果有需要，请自行引入。
