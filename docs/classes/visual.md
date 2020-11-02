# 视觉类 visual

## background-color

|类名|样式|
|---|---|
|`.bg`，`.is-light .bg`，`.is-light.bg`|`background-color: rgba(0, 0, 0, .04);`|
|`.is-dark .bg`，`.is-dark.bg`|`background-color: rgba(255, 255, 255, .08);`|

这部分由`$m-colors`，`$m-colors-reverse`，`$m-background-color`和`$m-background-color-reverse`生成，由于篇幅原因，省略了`$m-colors`和`$m-colors-reverse`生成的类。修改`$m-colors`和`$m-colors-reverse`可以自定义，见[进阶](../advance/README.md#色彩)。在引入之前做相关修改也可以自定义。

```scss
// 修改颜色
$background-color: #fff;
$background-color-reverse: #121212;
// 生成 .bg, .is-light .bg, .is-light.bg
$m-background-color: (
  "": $background-color
);
// 生成 .is-dark .bg, .is-dark.bg
$m-background-color-reverse: (
  "": $background-color-reverse
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/background-color";
```

## background-repeat

|类名|样式|
|---|---|
|`.bg-repeat`|`background-repeat: repeat;`|
|`.bg-repeat-y`|`background-repeat: repeat-y;`|
|`.bg-repeat-x`|`background-repeat: repeat-x;`|
|`.bg-no-repeat`|`background-repeat: no-repeat;`|

这部分由`$m-background-repeat`生成，在引入之前修改`$m-background-repeat`可以自定义。

```scss
// 生成 .bg-repeat, .bg-repeat-y, .bg-repeat-x, .bg-no-repeat, .bg-repeat-space,
//     .bg-repeat-round
$m-background-repeat: (
  "-repeat": repeat,
  "-repeat-y": repeat-y,
  "-repeat-x": repeat-x,
  "-no-repeat": no-repeat,
  "-repeat-space": space,
  "-repeat-round": round
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/background-repeat";
```

## background-attachment

|类名|样式|
|---|---|
|`.bg-fixed`|`background-attachment: fixed;`|
|`.bg-local`|`background-attachment: local;`|

这部分由`$m-background-attachment`生成，在引入之前修改`$m-background-attachment`可以自定义。

```scss
// 生成 .bg-fixed, .bg-local, .bg-scroll
$m-background-attachment: (
  "-fixed": fixed,
  "-local": local,
  "-scroll": scroll
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/background-attachment";
```

## background-position

|类名|样式|
|---|---|
|`.bg-center`|`background-position: center;`|

这部分由`$m-background-position`生成，在引入之前修改`$m-background-position`可以自定义。

```scss
// 生成 .bg-top, .bg-right, .bg-bottom, .bg-left, .bg-right-top, .bg-right-bottom,
//     .bg-left-top, .bg-left-bottom, .bg-center
$m-background-position: (
  "-top": top,
  "-right": right,
  "-bottom": bottom,
  "-left": left,
  "-right-top": right top,
  "-right-bottom": right bottom,
  "-left-top": left top,
  "-left-bottom": left bottom,
  "-center": center
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/background-position";
```

## background-size

|类名|样式|
|---|---|
|`.bg-contain`|`background-size: contain;`|
|`.bg-cover`|`background-size: cover;`|

这部分由`$m-background-size`生成，在引入之前修改`$m-background-size`可以自定义。

```scss
// 生成 .bg-contain, .bg-cover, .bg-auto, .bg-full
$m-background-size: (
  "-contain": contain,
  "-cover": cover,
  "-auto": auto,
  "-full": 100% 100%
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/background-size";
```

## border-color

|类名|样式|
|---|---|
|`.border`，`.is-light .border`, `.is-light.border`|`border-color: rgba(0, 0, 0, .15);`|
|`.is-dark .border`, `.is-dark.border`|`border-color: rgba(255, 255, 255, .2);`|

这部分由`$m-colors`，`$m-colors-reverse`，`$m-border-color`和`$m-border-color-reverse`生成，由于篇幅原因，省略了`$m-colors`和`$m-colors-reverse`生成的类。修改`$m-colors`和`$m-colors-reverse`可以自定义，见[进阶](../advance/README.md#色彩)。在引入之前做相关修改也可以自定义，下面是修改的示例。

```scss
// 修改颜色
$border-color: #ddd;
$border-color-reverse: #ddd;
// 生成 .border, .is-light .border, .is-light.border
$m-border-color: (
  "": $border-color
) !default;
// 生成 .is-dark .border, .is-dark.border
$m-border-color-reverse: (
  "": $border-color-reverse
) !default;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/border-color";
```

## border-style

|类名|样式|
|---|---|
|`.border`|`border-style: solid;`|
|`.border-solid`|`border-style: solid;`|
|`.border-none`|`border-style: none;`|

这部分由`$m-border-style`生成，在引入之前修改`$m-border-style`可以自定义。

```scss
// 生成 .border, .border-solid, .border-dashed, .border-dotted, .border-none
$m-border-style: (
  "": solid,
  "-solid": solid,
  "-dashed": dashed,
  "-dotted": dotted,
  "-none": none
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/border-style";
```

## border-width

|类名|样式|
|---|---|
|`.border`|`border-width: 2rpx;`|
|`.border-md`|`border-width: 2rpx;`|
|`.border-lg`|`border-width: 4rpx;`|
|`.border-xl`|`border-width: 6rpx;`|
|`.border-0`|`border-width: 0;`|
|`.border-1`|`border-width: 2rpx;`|
|`.border-1-real`|`border-width: 1rpx;`|

注意：**支持使用`.border-y-*`，`.border-x-*`，`.border-t-*`，`.border-right-*`，`.border-b-*`，`.border-l-*`等类**，它们分别对应`border-top-width`和`border-bottom-width`，`border-right-width`和`border-left-width`，`border-top-width`，`border-right-width`，`border-bottom-width`，`border-left-width`。这里由于篇幅原因不再列出。

这部分由`$m-border-width`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 base, diff
$border-width-base: 1;
$border-width-diff: 1;
// 生成 .border, .border-md, .border-lg, .border-xl
$m-border-width: (
  "": $border-width-base * $scale + $unit,
  "-md": $border-width-base * $scale + $unit,
  "-lg": (
    $border-width-base + $border-width-diff
  ) * $scale + $unit,
  "-xl": (
    $border-width-base + $border-width-diff * 2
  ) * $scale + $unit
);
// 设置 min, max, step 循环填充映射
// 生成 .border-0, .border-1, .border-2
$border-width-min: 0;
$border-width-max: 2;
$border-width-step: 1;
// 移除 .border-1-real，如果 $scale == 1，则该变量不生效
$border-width-has-1-real: false;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/border-width";
```

## border-radius

|类名|样式|
|---|---|
|`.rounded-full`|`border-radius: 100%;`|
|`.rounded-half`|`border-radius: 50%;`|
|`.rounded`|`border-radius: 4rpx;`|
|`.rounded-xs`|`border-radius: 0;`|
|`.rounded-sm`|`border-radius: 2rpx;`|
|`.rounded-md`|`border-radius: 4rpx;`|
|`.rounded-lg`|`border-radius: 6rpx;`|
|`.rounded-xl`|`border-radius: 8rpx;`|
|`.rounded-0`|`border-radius: 0;`|
|`.rounded-1`|`border-radius: 2rpx;`|
|`.rounded-2`|`border-radius: 4rpx;`|
|`.rounded-3`|`border-radius: 6rpx;`|
|`.rounded-4`|`border-radius: 8rpx;`|

注意：**支持使用`.rounded-t-*`，`.rounded-b-*`，`.rounded-r-*`，`.rounded-l-*`，`.rounded-tl-*`，`.rounded-tr-*`，`.rounded-br-*`，`.rounded-bl-*`等类**，它们分别对应`border-top-left-radius`和`border-top-right-radius`，`border-bottom-right-radius`和`border-bottom-left-radius`，`border-top-right-radius`和`border-bottom-right-radius`，`border-top-left-radius`和`border-bottom-left-radius`，`border-top-left-radius`，`border-top-right-radius`，`border-bottom-right-radius`，`border-bottom-left-radius`。这里由于篇幅原因不再列出。

这部分由`$m-border-radius`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 base, diff
$border-radius-base: 4;
$border-radius-diff: 1;
// 生成 .rounded-full, .rounded-half, .rounded, .rounded-xs, .rounded-sm,
//     .rounded-md, .rounded-lg, .rounded-xl
$m-border-radius: (
  "-full": 100%,
  "-half": 50%,
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
  ) * $scale + $unit
);
// 设置 min, max, step 循环填充映射
// 生成 .rounded-0, .rounded-1, .rounded-2
$border-radius-min: 0;
$border-radius-max: 2;
$border-radius-step: 1;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/border-radius";

// 最终得到 .rounded-full, .rounded, .rounded-xs, .rounded-sm, .rounded-md, .rounded-lg, .rounded-xl, .rounded-0, .rounded-1, .rounded-2
```

## outline

|类名|样式|
|---|---|
|`.outline-none`|`outline: none;`|

这部分由`$m-outline`生成，在引入之前修改`$m-outline`可以自定义。

```scss
// 不生成相关类
$m-outline: ();
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/outline";
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

这部分由`$m-box-shadow`生成，在引入之前做相关修改可以自定义。

```scss
// 修改颜色
$box-shadow-umbra: rgba(0, 0, 0, .2);
$box-shadow-penumbra: rgba(0, 0, 0, .14);
$box-shadow-ambient: rgba(0, 0, 0, .12);
// 设置 min, max, step 循环填充映射
// 生成 .shadow-0, .shadow-1, .shadow-2, .shadow-3, .shadow-4
$box-shadow-min: 0;
$box-shadow-max: 4;
$box-shadow-step: 1;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/box-shadow";
```
