# 视觉类 visual

[源码](https://github.com/ModyQyW/mp-scss/blob/main/classes/visual)

## background-color

|类名|样式|
|---|---|
|`.bg`|`background-color: rgba(0, 0, 0, .04);`|
|`.bg-primary`|`background-color: #1890ff;`|
|`.bg-success`|`background-color: #52c41a;`|
|`.bg-warning`|`background-color: #faad14;`|
|`.bg-error`|`background-color: #f5222d;`|
|`.bg-info`|`background-color: #1890ff;`|
|`.is-dark .bg`|`background-color: rgba(255, 255, 255, .08);`|
|`.is-dark .bg-primary`|`background-color: #177ddc;`|
|`.is-dark .bg-success`|`background-color: #49aa19;`|
|`.is-dark .bg-warning`|`background-color: #d89614;`|
|`.is-dark .bg-error`|`background-color: #d32029;`|
|`.is-dark .bg-info`|`background-color: #177ddc;`|

请参考 [色彩](../advance/README.md#色彩) 说明，了解更多。

```scss
// 生成 .bg
$background-color: fade-out($black, 0.96);
$background-color-reverse: fade-out($white, 0.92);
$m-background-color: (
  "": $background-color
);
// 生成 。is-dark .bg
$has-dark: true;
$m-background-color-reverse: (
  "": $background-color-reverse
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/background-color";
```

## background-repeat

|类名|样式|
|---|---|
|`.bg-repeat`|`background-repeat: repeat;`|
|`.bg-repeat-y`|`background-repeat: repeat-y;`|
|`.bg-repeat-x`|`background-repeat: repeat-x;`|
|`.bg-no-repeat`|`background-repeat: no-repeat;`|

```scss
// 生成 .bg-{repeat|repeat-y|repeat-x|no-repeat}
$m-background-repeat: (
  "-repeat": repeat,
  "-repeat-y": repeat-y,
  "-repeat-x": repeat-x,
  "-no-repeat": no-repeat
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/background-repeat";
```

## background-attachment

|类名|样式|
|---|---|
|`.bg-fixed`|`background-attachment: fixed;`|
|`.bg-local`|`background-attachment: local;`|
|`.bg-scroll`|`background-attachment: scroll;`|

```scss
// 生成 .bg-{fixed|local|scroll}
$m-background-attachment: (
  "-fixed": fixed,
  "-local": local,
  "-scroll": scroll
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/background-attachment";
```

## background-position

|类名|样式|
|---|---|
|`.bg-center`|`background-position: center;`|

```scss
// 生成 .bg-center
$m-background-position: (
  "-center": center
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/background-position";
```

## background-size

|类名|样式|
|---|---|
|`.bg-contain`|`background-size: contain;`|
|`.bg-cover`|`background-size: cover;`|
|`.bg-auto`|`background-size: auto;`|

```scss
// 生成 .bg-{contain|cover|auto}
$m-background-size: (
  "-contain": contain,
  "-cover": cover,
  "-auto": auto
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/background-size";
```

## border-color

|类名|样式|
|---|---|
|`.border`|`border-color: rgba(0, 0, 0, .15);`|
|`.is-dark .border`|`border-color: rgba(0, 0, 0, .2);`|

请参考 [色彩](../advance/README.md#色彩) 说明，了解更多。

支持 `.border-{y|x|t|r|b|l}-*`，分别对应 `border-top-color` 和 `border-bottom-color`，`border-right-color` 和 `border-left-color`，`border-top-color`，`border-right-color`，`border-bottom-color`，`border-left-color`。

```scss
// 生成 .border
$border-color: fade-out($black, 0.85);
$border-color-reverse: fade-out($white, 0.8);
$m-border-color: (
  "": $border-color
);
// 生成 。is-dark .border
$has-dark: true;
$m-border-color-reverse: (
  "": $border-color-reverse
) !default;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/border-color";
```

## border-style

|类名|样式|
|---|---|
|`.border`|`border-style: solid;`|
|`.border-solid`|`border-style: solid;`|
|`.border-dotted`|`border-style: dotted;`|
|`.border-dashed`|`border-style: dashed;`|
|`.border-none`|`border-style: none;`|

支持 `.border-{y|x|t|r|b|l}-*`，分别对应 `border-top-style` 和 `border-bottom-style`，`border-right-style` 和 `border-left-style`，`border-top-style`，`border-right-style`，`border-bottom-style`，`border-left-style`。

```scss
// 生成 .border, .border-{solid|dotted|dashed|none}
$m-border-style: (
  "": solid,
  "-solid": solid,
  "-dashed": dashed,
  "-dotted": dotted,
  "-none": none
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/border-style";
```

## border-width

|类名|样式|
|---|---|
|`.border`|`border-width: 2rpx;`|
|`.border-0`|`border-width: 0;`|
|`.border-1`|`border-width: 2rpx;`|
|`.border-2`|`border-width: 4rpx;`|
|`.border-3`|`border-width: 6rpx;`|
|`.border-4`|`border-width: 8rpx;`|
|`.border-1-real`|`border-width: 1rpx;`|

支持 `.border-{y|x|t|r|b|l}-*`，分别对应 `border-top-width` 和 `border-bottom-width`，`border-right-width` 和 `border-left-width`，`border-top-width`，`border-right-width`，`border-bottom-width`，`border-left-width`。

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// 生成 .border
$border-width-base: 1;
$m-border-width: (
  "": $border-width-base * $scale + $unit
);
// 生成 .border-{0-4}
$border-width-min: 0;
$border-width-max: 4;
$border-width-step: 1;
// 在 $scale != 1 的时候生成 .border-1-real
$border-width-has-1-real: true;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/border-width";
```

## border-radius

|类名|样式|
|---|---|
|`.rounded-full`|`border-radius: 100%;`|
|`.rounded-half`|`border-radius: 50%;`|
|`.rounded-pill`|`border-radius: 9999rpx;`|
|`.rounded`|`border-radius: 8rpx;`|
|`.rounded-xs`|`border-radius: 0;`|
|`.rounded-sm`|`border-radius: 4rpx;`|
|`.rounded-md`|`border-radius: 8rpx;`|
|`.rounded-lg`|`border-radius: 12rpx;`|
|`.rounded-xl`|`border-radius: 16rpx;`|
|`.rounded-2xl`|`border-radius: 24rpx;`|
|`.rounded-3xl`|`border-radius: 32rpx;`|
|`.rounded-0`|`border-radius: 0;`|
|`.rounded-1`|`border-radius: 2rpx;`|
|`.rounded-2`|`border-radius: 4rpx;`|
|`.rounded-3`|`border-radius: 6rpx;`|
|`.rounded-4`|`border-radius: 8rpx;`|
|`.rounded-5`|`border-radius: 10rpx;`|
|`.rounded-6`|`border-radius: 12rpx;`|
|`.rounded-7`|`border-radius: 14rpx;`|
|`.rounded-8`|`border-radius: 16rpx;`|

支持 `.rounded-{t|b|r|l|tl|tr|br|bl}-*`，分别对应 `border-top-left-radius` 和 `border-top-right-radius`，`border-bottom-right-radius` 和 `border-bottom-left-radius`，`border-top-right-radius` 和 `border-bottom-right-radius`，`border-top-left-radius` 和 `border-bottom-left-radius`，`border-top-left-radius`，`border-top-right-radius`，`border-bottom-right-radius`，`border-bottom-left-radius`。

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// 生成 .rounded, .rounded-{full|half|pill|xs|sm|md|lg|xl|2xl|3xl}
$border-radius-base: 4;
$border-radius-diff: 2;
$m-border-radius: (
  "-full": 100%,
  "-half": 50%,
  "-pill": 9999 + $unit,
  "": $border-radius-base * $scale + $unit,
  "-xs": (
    $border-radius-base - $border-radius-diff * 2
  ) * $scale + $unit,
  "-sm": (
    $border-radius-base - $border-radius-diff
  ) * $scale + $unit,
  "-md": $border-radius-base * $scale + $unit,
  "-lg": (
    $border-radius-base + $border-radius-diff
  ) * $scale + $unit,
  "-xl": (
    $border-radius-base + $border-radius-diff * 2
  ) * $scale + $unit,
  "-2xl": (
    $border-radius-base + $border-radius-diff * 4
  ) * $scale + $unit,
  "-3xl": (
    $border-radius-base + $border-radius-diff * 6
  ) * $scale + $unit
);
// 生成 .rounded-{0-8}
$border-radius-min: 0;
$border-radius-max: 8;
$border-radius-step: 1;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/border-radius";
```

## outline

|类名|样式|
|---|---|
|`.outline-none`|`outline: none;`|

```scss
// 生成 .outline-none
$m-outline: (
  "-none": none
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/outline";
```

## box-shadow

|类名|样式|
|---|---|
|`.shadow-0`|`box-shadow: 0 0 0 0 rgba(0, 0, 0, .2), 0 0 0 0 rgba(0, 0, 0, .14), 0 0 0 0 rgba(0, 0, 0, .12)`|
|`.shadow-1`|`box-shadow: 0 4rpx 2rpx -2rpx rgba(0, 0, 0, .2), 0 2rpx 2rpx 0 rgba(0, 0, 0, .14), 0 2rpx 6rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-2`|`box-shadow: 0 6rpx 2rpx -4rpx rgba(0, 0, 0, .2), 0 4rpx 4rpx 0 rgba(0, 0, 0, .14), 0 2rpx 10rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-3`|`box-shadow: 0 6rpx 6rpx -4rpx rgba(0, 0, 0, .2), 0 6rpx 8rpx 0 rgba(0, 0, 0, .14), 0 2rpx 16rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-4`|`box-shadow: 0 4rpx 8rpx -2rpx rgba(0, 0, 0, .2), 0 8rpx 10rpx 0 rgba(0, 0, 0, .14), 0 2rpx 20rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-5`|`box-shadow: 0 6rpx 10rpx -2rpx rgba(0, 0, 0, .2), 0 10rpx 16rpx 0 rgba(0, 0, 0, .14), 0 2rpx 28rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-6`|`box-shadow: 0 6rpx 10rpx -2rpx rgba(0, 0, 0, .2), 0 12rpx 20rpx 0 rgba(0, 0, 0, .14), 0 2rpx 36rpx 0 rgba(0, 0, 0, .12);`|
|`.shadow-7`|`box-shadow: 0 8rpx 10rpx -4rpx rgba(0, 0, 0, .2), 0 14rpx 20rpx 2rpx rgba(0, 0, 0, .14), 0 4rpx 32rpx 2rpx rgba(0, 0, 0, .12);`|
|`.shadow-8`|`box-shadow: 0 10rpx 10rpx -6rpx rgba(0, 0, 0, .2), 0 16rpx 20rpx 2rpx rgba(0, 0, 0, .14), 0 6rpx 28rpx 4rpx rgba(0, 0, 0, .12);`|
|`.shadow-9`|`box-shadow: 0 10rpx 12rpx -6rpx rgba(0, 0, 0, .2), 0 18rpx 24rpx 2rpx rgba(0, 0, 0, .14), 0 6rpx 32rpx 4rpx rgba(0, 0, 0, .12);`|
|`.shadow-10`|`box-shadow: 0 12rpx 12rpx -6rpx rgba(0, 0, 0, .2), 0 20rpx 28rpx 2rpx rgba(0, 0, 0, .14), 0 8rpx 36rpx 6rpx rgba(0, 0, 0, .12);`|
|`.shadow-11`|`box-shadow: 0 12rpx 14rpx -8rpx rgba(0, 0, 0, .2), 0 22rpx 30rpx 2rpx rgba(0, 0, 0, .14), 0 8rpx 40rpx 6rpx rgba(0, 0, 0, .12);`|
|`.shadow-12`|`box-shadow: 0 14rpx 16rpx -8rpx rgba(0, 0, 0, .2), 0 24rpx 34rpx 4rpx rgba(0, 0, 0, .14), 0 10rpx 44rpx 8rpx rgba(0, 0, 0, .12);`|
|`.shadow-13`|`box-shadow: 0 14rpx 16rpx -8rpx rgba(0, 0, 0, .2), 0 26rpx 38rpx 4rpx rgba(0, 0, 0, .14), 0 10rpx 48rpx 8rpx rgba(0, 0, 0, .12);`|
|`.shadow-14`|`box-shadow: 0 14rpx 18rpx -8rpx rgba(0, 0, 0, .2), 0 28rpx 42rpx 4rpx rgba(0, 0, 0, .14), 0 10rpx 52rpx 8rpx rgba(0, 0, 0, .12);`|
|`.shadow-15`|`box-shadow: 0 16rpx 18rpx -10rpx rgba(0, 0, 0, .2), 0 30rpx 44rpx 4rpx rgba(0, 0, 0, .14), 0 12rpx 56rpx 10rpx rgba(0, 0, 0, .12);`|
|`.shadow-16`|`box-shadow: 0 16rpx 20rpx -10rpx rgba(0, 0, 0, .2), 0 32rpx 48rpx 4rpx rgba(0, 0, 0, .14), 0 12rpx 60rpx 10rpx rgba(0, 0, 0, .12);`|
|`.shadow-17`|`box-shadow: 0 16rpx 22rpx -10rpx rgba(0, 0, 0, .2), 0 34rpx 52rpx 4rpx rgba(0, 0, 0, .14), 0 12rpx 64rpx 10rpx rgba(0, 0, 0, .12);`|
|`.shadow-18`|`box-shadow: 0 18rpx 22rpx -10rpx rgba(0, 0, 0, .2), 0 36rpx 56rpx 4rpx rgba(0, 0, 0, .14), 0 14rpx 68rpx 12rpx rgba(0, 0, 0, .12);`|
|`.shadow-19`|`box-shadow: 0 18rpx 24rpx -12rpx rgba(0, 0, 0, .2), 0 38rpx 58rpx 4rpx rgba(0, 0, 0, .14), 0 14rpx 72rpx 12rpx rgba(0, 0, 0, .12);`|
|`.shadow-20`|`box-shadow: 0 20rpx 26rpx -12rpx rgba(0, 0, 0, .2), 0 40rpx 62rpx 6rpx rgba(0, 0, 0, .14), 0 16rpx 76rpx 14rpx rgba(0, 0, 0, .12);`|
|`.shadow-21`|`box-shadow: 0 20rpx 26rpx -12rpx rgba(0, 0, 0, .2), 0 42rpx 66rpx 6rpx rgba(0, 0, 0, .14), 0 16rpx 80rpx 14rpx rgba(0, 0, 0, .12);`|
|`.shadow-22`|`box-shadow: 0 20rpx 28rpx -12rpx rgba(0, 0, 0, .2), 0 44rpx 70rpx 6rpx rgba(0, 0, 0, .14), 0 16rpx 84rpx 14rpx rgba(0, 0, 0, .12);`|
|`.shadow-23`|`box-shadow: 0 22rpx 28rpx -14rpx rgba(0, 0, 0, .2), 0 46rpx 72rpx 6rpx rgba(0, 0, 0, .14), 0 18rpx 88rpx 16rpx rgba(0, 0, 0, .12);`|
|`.shadow-24`|`box-shadow: 0 22rpx 30rpx -14rpx rgba(0, 0, 0, .2), 0 48rpx 76rpx 6rpx rgba(0, 0, 0, .14), 0 18rpx 92rpx 16rpx rgba(0, 0, 0, .12);`|

```scss
// 修改颜色
$box-shadow-umbra: rgba(0, 0, 0, .2);
$box-shadow-penumbra: rgba(0, 0, 0, .14);
$box-shadow-ambient: rgba(0, 0, 0, .12);
// 生成 .shadow-{0-24}
$box-shadow-min: 0;
$box-shadow-max: 24;
$box-shadow-step: 1;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/visual";
// @import "~@modyqyw/mp-scss/classes/visual/box-shadow";
```

这里使用了内置阴影，最多只有 25 种阴影可选。
