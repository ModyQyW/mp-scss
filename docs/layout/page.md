# 页面布局类 page

[源码](https://github.com/ModyQyW/mp-scss/blob/main/page.scss)

## 默认样式

要使用页面布局类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/layout";
// @import "~@modyqyw/mp-scss/layout/page";
```

首先要让根元素占满整个屏幕。如果你引入了 `reset`，它已经替你完成了这部分工作。

```scss
page,
body {
  width: 100%;
  height: 100%;
}
```

之后，让顶级布局容器 `.container` 铺满整个屏幕。

```html
<view class="container h-full">
  ...
</view>
```

再填充 `.header`，`.navbar` 和 `.footer`。如果需要安全区，可以加上 `.safe-area`。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  ...
  <view class="footer">footer</view>
  <view class="safe-area">safe-area</view>
</view>
```

使用 `.main` 作为内容区。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="main">main</view>
  <view class="footer">footer</view>
</view>
```

要添加和 `.main` 同级的 `.aside`，需要再包裹一个布局容器 `.container`。

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

组合使用页面布局类和通用类应该能满足绝大部分的布局需求。

注意，在某些机型上可能会出现布局不正常的问题，一般是对 flexbox 布局支持不佳所致，可以尝试指定 `.container.flex-row` 的高度。针对上面最后一个示例，可以使用以下的方式指定高度。

```scss
.container.flex-row {
  flex: 0 0 calc(100% - #{($header-height-base + $navbar-height-base + $footer-height-base) * $scale + $unit});
  height: 0 0 calc(100% - #{($header-height-base + $navbar-height-base + $footer-height-base) * $scale + $unit});
}
```

## 明亮模式和暗黑模式

默认使用明亮模式。

```html
<view class="container">
  <!-- 所有后代受影响，使用明亮模式 -->
  ...
</view>
```

[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 后，使用 `.is-dark` 开启暗黑模式。

```html
<view class="container is-dark">
  <!-- 所有后代受影响，使用暗黑模式 -->
  ...
</view>
```

## 变量

|变量名|默认值|
|---|---|
|`$page-background-color`|`$gray-1`|
|`$page-background-color-reverse`|`$gray-13`|
|`$body-background-color`|`$page-background-color`|
|`$body-background-color-reverse`|`$page-background-color-reverse`|
|`$page-background-color`|`$gray-1`|
|`$page-background-color-reverse`|`$gray-13`|
|`$container-font-family`|`$font-family-default`|
|`$container-font-size-base`|`$font-size-base`|
|`$container-font-weight`|`400`|
|`$container-line-height`|`$line-height-default`|
|`$container-background-color`|`$gray-1`|
|`$container-background-color-reverse`|`$gray-12`|
|`$header-height-base`|`48`|
|`$header-background-color`|`transparent`|
|`$header-background-color-reverse`|`transparent`|
|`$navbar-height-base`|`32`|
|`$navbar-background-color`|`transparent`|
|`$navbar-background-color-reverse`|`transparent`|
|`$aside-width-base`|`100`|
|`$aside-background-color`|`transparent`|
|`$aside-background-color-reverse`|`transparent`|
|`$main-background-color`|`transparent`|
|`$main-background-color-reverse`|`transparent`|
|`$footer-height-base`|`48`|
|`$footer-background-color`|`transparent`|
|`$footer-background-color-reverse`|`transparent`|
|`$safe-area-height-base`|`34`|
|`$safe-area-background-color`|`transparent`|
|`$safe-area-background-color-reverse`|`transparent`|

你可以直接修改对应的变量来自定义，也可以像下面这样手动自定义。

```scss
// 指定根元素的背景色，-reverse 后缀表示暗黑模式下使用
$page-background-color: #fff;
$page-background-color-reverse: #000;
$body-background-color: $page-background-color;
$body-background-color: $page-background-color-reverse;

// 指定 .container 及其子元素排版的默认表现
$container-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
  "微软雅黑", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$container-font-size-base: 14;
$container-font-weight: 400;
$container-line-height: 1.5;
// 指定 .container 背景色
$container-background-color: #fff;
$container-background-color-reverse: #141414;

// 指定 .header 高度
$header-height-base: 48;
// 指定 .header 背景色
$header-background-color: transparent;
$header-background-color-reverse: transparent;

// 指定 .navbar 高度
$navbar-height-base: 32;
// 指定 .navbar 背景色
$navbar-background-color: transparent;
$navbar-background-color-reverse: transparent;

// 指定 .aside 宽度
$aside-width-base: 100;
// 指定 .aside 背景色
$aside-background-color: transparent;
$aside-background-color-reverse: transparent;

// 指定 .main 背景色
$main-background-color: transparent;
$main-background-color-reverse: transparent;

// 指定 .footer 高度
$footer-height-base: 48;
// 指定 .footer 背景色
$footer-background-color: transparent;
$footer-background-color-reverse: transparent;

// 指定 .safe-area 高度
$safe-area-height-base: 34;
// 指定 .safe-area 背景色
$safe-area-background-color: transparent;
$safe-area-background-color-reverse: transparent;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/layout";
// @import "~@modyqyw/mp-scss/layout/page";
```
