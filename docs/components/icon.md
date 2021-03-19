# 图标类 icon

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/icon.scss)

## 默认样式

要使用图标类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/icon";
```

在需要图标的地方可以使用 `.icon`。

```html
<view class="container">
  <button class="btn">
    <image class="icon" src="../assets/image.png"></image>
    text
  </button>
</view>
```

## 尺寸

内置四个尺寸类。

```html
<view class="container">
  <button class="btn is-xs">
    <image class="icon is-xs mr-4" src="../assets/image.png"></image>
    text
  </button>
  <button class="btn is-sm">
    <image class="icon is-sm mr-4" src="../assets/image.png"></image>
    text
  </button>
  <button class="btn">
    <image class="icon mr-4" src="../assets/image.png"></image>
    text
  </button>
  <button class="btn is-lg">
    <image class="icon is-lg mr-4" src="../assets/image.png"></image>
    text
  </button>
  <button class="btn is-xl">
    <image class="icon is-xl mr-4" src="../assets/image.png"></image>
    text
  </button>
</view>
```

## 变量

|变量名|变量值|
|---|---|
|`icon--font-size-base`|`$font-size-base`|
|`$icon--font-size-base--xs`|`$font-size-base`|
|`$icon--font-size-base--sm`|`$font-size-base`|
|`$icon--font-size-base--lg`|`$font-size-base + $font-size-diff`|
|`$icon--font-size-base--xl`|`$font-size-base + $font-size-diff`|
|`$icon--line-height`|`$line-height-default`|
|`$icon--line-height--xs`|`$line-height-default`|
|`$icon--line-height--sm`|`$line-height-default`|
|`$icon--line-height--lg`|`$line-height-default`|
|`$icon--line-height--xl`|`$line-height-default`|

## FAQ

### 有实际可供使用的图标吗

库内没有内置图标，这并非核心目标。如果有需要，请自行引入。

### 图标过大或过小

我们假定你使用的图标都带有一定的空白边距。如果没有边距，请自行用一个容器包裹并添加内边距，或者更换图标，或者调整图标的 `line-height` 为 1。
