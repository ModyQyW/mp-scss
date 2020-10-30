# 页面布局类 page

## 默认样式

要使用页面布局类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/layout/page";
```

首先要让根元素`page`占满整个屏幕。

```css
page {
  width: 100%;
  height: 100%;
}
```

之后，让顶级的布局容器`.container`铺满整个屏幕。

```html
<view class="container h-full">
  ...
</view>
```

再填充`.header`，`.navbar`和`.footer`。如果需要安全区，可以加上`.safe-area`。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  ...
  <view class="footer">footer</view>
  <view class="safe-area">safe-area</view>
</view>
```

使用`.main`作为内容区。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="main">main</view>
  <view class="footer">footer</view>
</view>
```

要添加和`.main`同级的`.aside`，需要再包裹一个布局容器`.container`。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="container flex-row">
    <view class="aside">aside</view>
    <view class="main">main</view>
  </view>
  <view class="footer">footer</view>
</view>
```

也可以把`.aside`独立出来，放到一边。

```html
<view class="container h-full flex-row">
  <view class="aside">aside</view>
  <view class="container">
    <view class="header">header</view>
    <view class="navbar">navbar</view>
    <view class="main">main</view>
    <view class="footer">footer</view>
  </view>
</view>
```

也可以把`.aside`放到一旁。

组合使用页面布局类和通用类应该能满足绝大部分的布局需求。

## 明亮模式和暗黑模式

默认使用明亮模式。你也可以使用`.is-light`显式地在`.container`指定使用明亮模式。

```html
<view class="container is-light">
  <!-- 所有后代受影响，使用明亮模式 -->
  ...
</view>
```

使用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container is-dark">
  <!-- 所有后代受影响，使用暗黑模式 -->
  ...
</view>
```

## 自定义 container 背景颜色

手动指定`$container-background-color`就能自定义`.container`明亮模式下的背景色，手动指定`$container-background-color-reverse`就能自定义`.container`暗黑模式下的背景色。

`.container`在明亮模式下背景色默认为`#fff`，在暗黑模式下背景色默认为`#141414`。

```scss
// 修改 .container 的背景颜色
$container-background-color: #fff;
$container-background-color-reverse: #141414;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

## 自定义 header 高度

手动指定`$header-height-base`就能自定义`.header`高度。

`$header-height-base`默认值为`48`，将会使用`$header-height-base * $scale + $unit`作为`.header`的高度，也就是说`.header`高度默认为`96rpx`。

```scss
// 修改 .header 高度为 80rpx
$header-height-base: 40;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

你也可以直接修改`$header-height: 80rpx;`，但这样`$header-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$header-height-base`即可。

## 自定义 navbar 高度

手动指定`$navbar-height-base`就能自定义`.navbar`高度。

`$navbar-height-base`默认值为`36`，将会使用`$navbar-height-base * $scale + $unit`作为`.navbar`的高度，也就是说`.navbar`高度默认为`72rpx`。

```scss
// 修改 .navbar 高度为 80rpx
$navbar-height-base: 40;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

你也可以直接修改`$navbar-height: 80rpx;`，但这样`$navbar-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$navbar-height-base`即可。

## 自定义 aside 宽度

手动指定`$aside-width-base`就能自定义`.aside`高度。

`$aside-width-base`默认值为`120`，将会使用`$aside-width-base * $scale + $unit`作为`.aside`的宽度，也就是说`.aside`宽度默认为`240rpx`。

```scss
// 修改 .aside 宽度为 200rpx
$aside-width-base: 100;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

你也可以直接修改`$aside-width: 200rpx;`，但这样`$aside-width-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$aside-width-base`即可。

## 自定义 footer 高度

手动指定`$footer-height-base`就能自定义`.footer`高度。

`$footer-height-base`默认值为`48`，将会使用`$footer-height-base * $scale + $unit`作为`.footer`的高度，也就是说`.footer`高度默认为`96rpx`。

```scss
// 修改 .footer 高度为 80rpx
$footer-height-base: 40;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

你也可以直接修改`$footer-height: 80rpx;`，但这样`$footer-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$footer-height-base`即可。

## 自定义 safe-area 高度

手动指定`$safe-area-height-base`就能自定义`.safe-area`高度。

`$safe-area-height-base`默认值为`34`，将会使用`$safe-area-height-base * $scale + $unit`作为`.safe-area`的高度，也就是说`.safe-area`高度默认为`96rpx`。

```scss
// 修改 .safe-area 高度为 80rpx
$safe-area-height-base: 40;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/page";
```

你也可以直接修改`$safe-area-height: 80rpx;`，但这样`$safe-area-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$safe-area-height-base`即可。
