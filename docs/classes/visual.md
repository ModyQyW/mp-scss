# 视觉类 visual

## background-color

|类名|样式|
|---|---|
|`.bg`，`.is-light .bg`，`.is-light.bg`|`background-color: rgba(0, 0, 0, .04);`|
|`.is-dark .bg`，`.is-dark.bg`|`background-color: rgba(255, 255, 255, .08);`|

这部分由`$m-colors`，`$m-colors-reverse`，`$m-background-color`和`$m-background-color-reverse`生成，由于篇幅原因，省略了`$m-colors`和`$m-colors-reverse`生成的类。修改`$m-colors`和`$m-colors-reverse`可以自定义，见[进阶](../advance/README.md)。在引入之前做相关修改也可以自定义，下面是修改的示例。

```scss
// 修改颜色
$background-color: #fff;
$background-color-reverse: #121212;
// 也可以直接修改 $m-background-color 和 $m-background-color-reverse

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
// 添加 .bg-repeat-space, .bg-repeat-round
$m-background-repeat: (
  "-repeat": repeat,
  "-repeat-y": repeat-y,
  "-repeat-x": repeat-x,
  "-repeat-space": space,
  "-repeat-round": round,
  "-no-repeat": no-repeat
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
// 添加 .bg-scroll
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
|`.bg-top`|`background-position: top;`|
|`.bg-right`|`background-position: right;`|
|`.bg-bottom`|`background-position: bottom;`|
|`.bg-left`|`background-position: left;`|
|`.bg-right-top`|`background-position: right top;`|
|`.bg-right-bottom`|`background-position: right bottom;`|
|`.bg-left-top`|`background-position: left top;`|
|`.bg-left-bottom`|`background-position: left bottom;`|
|`.bg-center`|`background-position: center;`|

这部分由`$m-background-position`生成，在引入之前修改`$m-background-position`可以自定义。

```scss
// 只保留 .bg-center
$m-background-position: (
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
|`.bg-auto`|`background-size: auto;`|
|`.bg-full`|`background-size: 100% 100%;`|

这部分由`$m-background-size`生成，在引入之前修改`$m-background-size`可以自定义。

```scss
// 移除 .bg-full
$m-background-size: (
  "-contain": contain,
  "-cover": cover,
  "-auto": auto
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

这部分由`$m-colors`，`$m-colors-reverse`，`$m-border-color`和`$m-border-color-reverse`生成，由于篇幅原因，省略了`$m-colors`和`$m-colors-reverse`生成的类。修改`$m-colors`和`$m-colors-reverse`可以自定义，见[进阶](../advance/README.md)。在引入之前做相关修改也可以自定义，下面是修改的示例。

```scss
// 修改颜色
$border-color: #ddd;
$border-color-reverse: #ddd;
// 也可以直接修改 $m-border-color 和 $m-border-color-reverse
$m-border-color: (
  "": #ddd
) !default;
$m-border-color-reverse: (
  "": #ddd
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
|`.border-dashed`|`border-style: dashed;`|
|`.border-dotted`|`border-style: dotted;`|
|`.border-none`|`border-style: none;`|

这部分由`$m-border-style`生成，在引入之前修改`$m-border-style`可以自定义。

```scss
// 只保留 .border
$m-border-style: (
  "": solid
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
|`.border-2`|`border-width: 4rpx;`|
|`.border-3`|`border-width: 6rpx;`|
|`.border-4`|`border-width: 8rpx;`|
|`.border-1-real`|`border-width: 1rpx;`|

注意：**支持使用`.border-y-*`，`.border-x-*`，`.border-t-*`，`.border-right-*`，`.border-b-*`，`.border-l-*`等类**，它们分别对应`border-width-top`和`border-width-bottom`，`border-width-right`和`border-width-left`，`border-width-top`，`border-width-right`，`border-width-bottom`，`border-width-left`。这里由于篇幅原因不再列出。

这部分由`$m-border-width`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 base, diff 填充映射
$border-width-base: 1;
$border-width-diff: 2;

// 移除 .border-xl
$m-border-width: (
  "": $border-width-base * $scale + $unit,
  "-md": $border-width-base * $scale + $unit,
  "-lg": (
    $border-width-base + $border-width-diff
  ) * $scale + $unit
);

// 设置 min, max, step 循环填充映射
$border-width-min: 0;
$border-width-max: 2;
$border-width-step: 1;

// 移除 .border-1-real
$border-width-has-1-real: false;

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/border-width";

// 最终得到 .border, .border-md, .border-lg, .border-0, .border-1, .border-2
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
// 设置 base, diff 填充映射
$border-radius-base: 4;
$border-radius-diff: 1;

// 移除 .rounded-half
$m-border-radius: (
  "-full": 100%,
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
// 移除 .outline-none
$m-outline: ();

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/visual";
@import "~@modyqyw/mp-scss/classes/visual/outline";
```

## box-shadow

TODO: finish this part