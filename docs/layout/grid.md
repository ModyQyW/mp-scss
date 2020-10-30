# 栅格系统类 grid

## 默认样式

要使用栅格系统类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/layout/grid";
```

默认提供 12 格基于弹性盒子布局的栅格系统。行容器为`.row`，列容器为`.col`。

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

默认地，列容器还支持`.col-1`，`.col-2`到`.col-12`。

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

|类名|样式|
|---|---|
|`.row.gutter`|`margin-right: -12rpx; margin-left: -12rpx;`|
|`.row.gutter > .col`|`padding-right: 12rpx; padding-left: 12rpx;`|
|`.row.gutter-xs`|`margin-right: -4rpx; margin-left: -4rpx;`|
|`.row.gutter-xs > .col`|`padding-right: 4rpx; padding-left: 4rpx;`|
|`.row.gutter-sm`|`margin-right: -8rpx; margin-left: -8rpx;`|
|`.row.gutter-sm > .col`|`padding-right: 8rpx; padding-left: 8rpx;`|
|`.row.gutter-md`|`margin-right: -12rpx; margin-left: -12rpx;`|
|`.row.gutter-md > .col`|`padding-right: 12rpx; padding-left: 12rpx;`|
|`.row.gutter-lg`|`margin-right: -16rpx; margin-left: -16rpx;`|
|`.row.gutter-lg > .col`|`padding-right: 16rpx; padding-left: 16rpx;`|
|`.row.gutter-xl`|`margin-right: -20rpx; margin-left: -20rpx;`|
|`.row.gutter-xl > .col`|`padding-right: 20rpx; padding-left: 20rpx;`|
|`.row.gutter-4`|`margin-right: -4rpx; margin-left: -4rpx;`|
|`.row.gutter-4 > .col`|`padding-right: 4rpx; padding-left: 4rpx;`|
|`.row.gutter-8`|`margin-right: 8rpx; margin-left: -8rpx;`|
|`.row.gutter-8 > .col`|`padding-right: 8rpx; padding-left: 8rpx;`|
|`.row.gutter-12`|`margin-right: -12rpx; margin-left: -12rpx;`|
|`.row.gutter-12 > .col`|`padding-right: 12rpx; padding-left: 12rpx;`|
|`.row.gutter-16`|`margin-right: -16rpx; margin-left: -16rpx;`|
|`.row.gutter-16 > .col`|`padding-right: 16rpx; padding-left: 16rpx;`|
|`.row.gutter-20`|`margin-right: -20rpx; margin-left: -20rpx;`|
|`.row.gutter-20 > .col`|`padding-right: 20rpx; padding-left: 20rpx;`|

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

```scss
// 修改栅格系统为 24 格
$grid-max: 24;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/grid";
```

## 自定义 gutter 类

这部分由`$m-gutter`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 base, diff
$gutter-base: 12;
$gutter-diff: 4;
// 生成 .gutter, .gutter-xs, .gutter-sm, .gutter-md, .gutter-lg, .gutter-xl
$m-gutter: (
  "": $gutter-base * $scale + $diff,
  "-xs": (
    $gutter-base - $gutter-diff * 2
  ) * $scale + $unit,
  "-sm": (
    $gutter-base - $gutter-diff
  ) * $scale + $unit,
  "-md": $gutter-base * $scale + $unit,
  "-lg": (
    $gutter-base + $gutter-diff
  ) * $scale + $unit,
  "-xl": (
    $gutter-base + $gutter-diff * 2
  ) * $scale + $unit
);
// 设置 min, max, step 循环填充映射
// 生成 .gutter-4, .gutter-8, .gutter-12
$font-size-min: 4;
$font-size-max: 12;
$font-size-step: 4;
// 结合实际情况三选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/layout";
@import "~@modyqyw/mp-scss/layout/grid";
```
