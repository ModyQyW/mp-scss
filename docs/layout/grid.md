# 栅格类

[源码](https://github.com/MillCloud/mp-scss/blob/main/layout/page.scss)

## 使用

引入栅格文件即可正常使用栅格类，所有内置变量会被自动引入并应用。

```scss
@import "~@modyqyw/mp-scss/layout/grid";
```

## 默认样式

默认提供 12 格基于弹性盒子布局的栅格系统。

```html
<view class="row">
  <view class="col">col</view>
  <view class="col col-6">col-6</view>
  <view class="col col-6">col-6</view>
  <view class="col col-4">col-4</view>
  <view class="col col-4">col-4</view>
  <view class="col col-4">col-4</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
</view>
```

和其它常见的 ui 库差不多，行容器为`.row`，列容器为`.col`。默认地，列容器还支持`.col-1`，`.col-2`到`.col-12`。

## 列间隔

给`.row`添加`.gutter`相关的类可以添加列间隔。

```html
<view class="row gutter">
  <view class="col">col</view>
  <view class="col col-6">col-6</view>
  <view class="col col-6">col-6</view>
  <view class="col col-4">col-4</view>
  <view class="col col-4">col-4</view>
  <view class="col col-4">col-4</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
  <view class="col col-3">col-3</view>
</view>
```

默认地，有以下相关类，还支持`.gutter-4`，`.gutter-6`到`.gutter-24`。`.gutter`和`.gutter-md`效果一致。

- `.gutter`
- `.gutter-xs`
- `.gutter-sm`
- `.gutter-md`
- `.gutter-lg`
- `.gutter-xl`

## 列偏移

给`.col`添加`.col-offset-`相关的类可以添加列偏移，默认支持`.col-offset-1`，`.col-offset-2`到`.col-offset-12`。

```html
<view class="row">
  <view class="col col-4">col-4</view>
  <view class="col col-4 col-offset-4">col-4 col-offset-4</view>
</view>
```

## 列排序

给`col`添加`.col-pull-`或`.col-push-`相关的类可以更改列排序，默认支持`.col-pull-1`，`.col-pull-2`到`.col-pull-12`，`.col-push-1`，`.col-push-2`到`.col-push-12`。

```html
<view class="row">
  <view class="col col-8 col-push-4">col-8 col-push-4</view>
  <view class="col col-4 col-pull-8">col-4 col-pull-8</view>
</view>
```

你也可以使用`.order-`相关的类更改列排序。

## 自定义栅格数量

手动指定`$grid-max`就能自定义栅格数量。

`$grid-max`默认值为`12`，也就是说栅格系统默认为 12 格。

想要修改栅格系统为 24 格，可以这么做

```scss
$grid-max: 24;
@import "~@modyqyw/mp-scss/layout/grid";
// 或
// @import "~@modyqyw/mp-scss";
```

## 自定义 gutter 值

`.gutter`相关类的生成跟两个部分有关系，一个是默认部分，一个循环填充部分。

默认地，`.gutter`，`.gutter-xs`，`.gutter-sm`，`.gutter-md`，`.gutter-lg`，`.gutter-xl`会使用`$gutter-base`。
