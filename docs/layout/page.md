# 页面布局类

[源码](https://github.com/MillCloud/mp-scss/blob/main/layout/page.scss)

## 使用

引入页面布局文件即可正常使用页面布局类，所有内置变量会被自动引入并应用。

```scss
@import "~@modyqyw/mp-scss/layout/page";
```

## 默认样式

```css
page {
  height: 100%;
}
```

我们为了让页面铺满整个屏幕，首先要让根元素`page`占满整个屏幕。默认地，`page`带有`width: 100%`的样式，所以只需要添加`height: 100%`。

```html
<view class="container h-full">
  ...
</view>
```

之后，为了让顶级布局元素`.container`铺满整个屏幕，要让它高度为 100%。这里使用了之后才会说到的通用类`.h-full`，可以快速地设置`.container`的高度为 100%。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  ...
  <view class="footer">footer</view>
  <view class="safe-area">safe-area</view>
</view>
```

之后再填充`.header`，`.navbar`和`.footer`。如果需要安全区，可以加上`.safe-area`。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="main">main</view>
  <view class="footer">footer</view>
</view>
```

填充`.main`可以显示对应的内容。

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

有时候还需要`.aside`和`.main`同级显示，这时候需要使用`.container`作为容器，并用`.flex-row`设置`.container`的排布方向。

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

组合使用`.container`，`.header`，`.navbar`，`.aside`，`.main`，`.footer`和通用类，理论上能满足 80% 以上的布局需求。

## 自定义

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/layout/page";
```

### 自定义 header 高度

手动指定`$header-height-base`就能自定义`.header`高度。

`$header-height-base`默认值为`48`，将会使用`$header-height-base * $scale + $unit`作为`.header`的高度，也就是说`.header`高度默认为`96rpx`。

想要修改`.header`高度为`80rpx`，在没有修改`$scale`和`$unit`的情况下，可以这么做

```scss
$header-height-base: 40;
@import "~@modyqyw/mp-scss/layout/page";
// 或
// @import "~@modyqyw/mp-scss";
```

你也可以直接修改`$header-height: 80rpx;`，但这样`$header-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$header-height-base`即可。

### 自定义 navbar 高度

手动指定`$navbar-height-base`就能自定义`.navbar`高度。

`$navbar-height-base`默认值为`36`，将会使用`$navbar-height-base * $scale + $unit`作为`.navbar`的高度，也就是说`.navbar`高度默认为`72rpx`。

想要修改`.navbar`高度为`80rpx`，在没有修改`$scale`和`$unit`的情况下，可以这么做

```scss
$navbar-height-base: 40;
@import "~@modyqyw/mp-scss/layout/page";
// 或
// @import "~@modyqyw/mp-scss";
```

你也可以直接修改`$navbar-height: 80rpx;`，但这样`$navbar-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$navbar-height-base`即可。

### 自定义 aside 宽度

手动指定`$aside-width-base`就能自定义`.aside`高度。

`$aside-width-base`默认值为`120`，将会使用`$aside-width-base * $scale + $unit`作为`.aside`的宽度，也就是说`.aside`宽度默认为`240rpx`。

想要修改`.aside`宽度为`200rpx`，在没有修改`$scale`和`$unit`的情况下，可以这么做

```scss
$aside-width-base: 100;
@import "~@modyqyw/mp-scss/layout/page";
// 或
// @import "~@modyqyw/mp-scss";
```

你也可以直接修改`$aside-width: 200rpx;`，但这样`$aside-width-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$aside-width-base`即可。

### 自定义 footer 高度

手动指定`$footer-height-base`就能自定义`.footer`高度。

`$footer-height-base`默认值为`48`，将会使用`$footer-height-base * $scale + $unit`作为`.footer`的高度，也就是说`.footer`高度默认为`96rpx`。

想要修改`.footer`高度为`80rpx`，在没有修改`$scale`和`$unit`的情况下，可以这么做

```scss
$footer-height-base: 40;
@import "~@modyqyw/mp-scss/layout/page";
// 或
// @import "~@modyqyw/mp-scss";
```

你也可以直接修改`$footer-height: 80rpx;`，但这样`$footer-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$footer-height-base`即可。

### 自定义 safe-area 高度

手动指定`$safe-area-height-base`就能自定义`.safe-area`高度。

`$safe-area-height-base`默认值为`34`，将会使用`$safe-area-height-base * $scale + $unit`作为`.safe-area`的高度，也就是说`.safe-area`高度默认为`96rpx`。

想要修改`.safe-area`高度为`80rpx`，在没有修改`$scale`和`$unit`的情况下，可以这么做

```scss
$safe-area-height-base: 40;
@import "~@modyqyw/mp-scss/layout/page";
// 或
// @import "~@modyqyw/mp-scss";
```

你也可以直接修改`$safe-area-height: 80rpx;`，但这样`$safe-area-height-base`，`$scale`和`$unit`都失去了本来的意义。如果没有必须这么做的理由，建议修改`$safe-area-height-base`即可。
