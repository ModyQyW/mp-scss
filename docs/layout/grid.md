# 栅格系统类 grid

[源码](https://github.com/ModyQyW/mp-scss/blob/main/grid.scss)

## 默认样式

要使用栅格系统类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/layout";
// @import "~@modyqyw/mp-scss/layout/grid";
```

默认提供 12 格基于弹性盒子布局的栅格系统。行容器为 `.row`，列容器为 `.col`。

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

默认地，列容器还支持 `.col-{1-12}`。

## 列间隔

给 `.row` 添加 `.gutter` 相关类可以添加列间隔，默认支持 `.gutter` 和 `.gutter-{xs|sm|md|lg|xl|0|4|8|12|16|20|24}`。

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
|`.row.gutter-0`|`margin-right: 0; margin-left: 0;`|
|`.row.gutter-0 > .col`|`padding-right: 0; padding-left: 0;`|
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
|`.row.gutter-24`|`margin-right: -24rpx; margin-left: -24rpx;`|
|`.row.gutter-24 > .col`|`padding-right: 24rpx; padding-left: 24rpx;`|

## 列偏移

给 `.col` 添加 `.col-offset-*` 相关类可以添加列偏移，默认支持 `.col-offset-{1-12}`。

```html
<view class="row">
  <view class="col col-4">col-4</view>
  <view class="col col-4 col-offset-4">col-4 col-offset-4</view>
</view>
```

## 列排序

给 `.col` 添加 `.col-pull-*` 或 `.col-push-*` 相关类可以更改列排序，默认支持 `.col-pull-{1-12}`，`.col-push-{1-12}`。

```html
<view class="row">
  <view class="col col-8 col-push-4">col-8 col-push-4</view>
  <view class="col col-4 col-pull-8">col-4 col-pull-8</view>
</view>
```

你也可以使用 `.order` 相关类更改列排序。

## 变量

|变量名|默认值|
|---|---|
|`$grid-max`|`12`|
|`$gutter-base`|`12`|
|`$gutter-diff`|`4`|
|`$gutter-min`|`0`|
|`$gutter-max`|`24`|
|`$gutter-step`|`4`|
|`$m-gutter`|因过长而省略，见下方示例|

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// 指定栅格数量为 12 格
$grid-max: 12;
// 生成 .gutter, .gutter-{xs|sm|md|lg|xl}
$gutter-base: 12;
$gutter-diff: 4;
$m-gutter: (
  "": math.div($gutter-base, 2) * $scale + $unit,
  "-xs": math.div($gutter-base - $gutter-diff * 2, 2) * $scale + $unit,
  "-sm": math.div($gutter-base - $gutter-diff, 2) * $scale + $unit,
  "-md": math.div($gutter-base, 2) * $scale + $unit,
  "-lg": math.div($gutter-base + $gutter-diff, 2) * $scale + $unit,
  "-xl": math.div($gutter-base + $gutter-diff * 2, 2) * $scale + $unit
);
// 生成 .gutter-{0|4|8|12|16|20|24}
$gutter-min: 0;
$gutter-max: 24;
$gutter-step: 4;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/layout";
// @import "~@modyqyw/mp-scss/layout/grid";
```
