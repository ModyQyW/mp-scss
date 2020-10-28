# 排版类 typography

## font-family

|类名|样式|
|---|---|
|`.font`|`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`|

这部分由`$m-font-family`生成，在引入之前修改`$m-font-family`可以自定义。

```scss
// 生成 .font, .font-sans, .font-serif, .font-mono
$font-family: (
  "": -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
  "-sans": system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji",
  "-serif": Georgia, Cambria, "Times New Roman", Times, serif,
  "-mono": Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/font-family";
```

## font-size

|类名|样式|
|---|---|
|`.text`|`font-size: 28rpx;`|
|`.text-xs`|`font-size: 20rpx;`|
|`.text-sm`|`font-size: 24rpx;`|
|`.text-md`|`font-size: 28rpx;`|
|`.text-lg`|`font-size: 32rpx;`|
|`.text-xl`|`font-size: 36rpx;`|
|`.text-10`|`font-size: 20rpx;`|
|`.text-12`|`font-size: 24rpx;`|
|`.text-14`|`font-size: 28rpx;`|
|`.text-16`|`font-size: 32rpx;`|
|`.text-18`|`font-size: 36rpx;`|
|`.text-20`|`font-size: 40rpx;`|
|`.text-22`|`font-size: 44rpx;`|
|`.text-24`|`font-size: 48rpx;`|
|`.text-26`|`font-size: 52rpx;`|
|`.text-28`|`font-size: 56rpx;`|
|`.text-30`|`font-size: 60rpx;`|
|`.text-32`|`font-size: 64rpx;`|
|`.text-34`|`font-size: 68rpx;`|
|`.text-36`|`font-size: 72rpx;`|

这部分由`$m-font-size`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 base, diff
$font-size-base: 16;
$font-size-diff: 2;
// 生成 .text, .text-xs, .text-sm, .text-md, .text-lg, .text-xl
$m-font-size: (
  "": $font-size-base * $scale + $diff,
  "-xs": (
    $font-size-base - $font-size-diff * 2
  ) * $scale + $unit,
  "-sm": (
    $font-size-base - $font-size-diff
  ) * $scale + $unit,
  "-md": $font-size-base * $scale + $unit,
  "-lg": (
    $font-size-base + $font-size-diff
  ) * $scale + $unit,
  "-xl": (
    $font-size-base + $font-size-diff * 2
  ) * $scale + $unit
);
// 设置 min, max, step 循环填充映射
// 生成 .text-12, .text-14, .text-16, .text-18, .text-20, .text-22, .text-24
$font-size-min: 12;
$font-size-max: 24;
$font-size-step: 2;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/font-size";
```

## font-style

|类名|样式|
|---|---|
|`.text-normal`|`font-style: normal;`|
|`.text-italic`|`font-style: italic;`|

这部分由`$m-font-style`生成，在引入之前修改`$m-font-style`可以自定义。

```scss
// 生成 .text-normal, .text-italic, .text-oblique
$m-font-style: (
  "-normal": normal,
  "-italic": italic,
  "-oblique": oblique
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/font-style";
```

## font-weight

|类名|样式|
|---|---|
|`.text`|`font-weight: 400;`|
|`.text-regular`|`font-weight: 400;`|
|`.text-medium`|`font-weight: 500;`|
|`.text-semi-bold`|`font-weight: 600;`|
|`.text-bold`|`font-weight: 700;`|

这部分由`$m-font-weight`生成，在引入之前修改`$m-font-weight`可以自定义。

```scss
// 生成 .text, .text-thin, .text-extra-light, .text-ultra-light, .text-light,
//     .text-regular, .text-medium, .text-semi-bold, .text-bold,
//     .text-extra-bold, .text-ultra-bold, .text-heavy
$m-font-weight: (
  "": 400,
  "-thin": 100,
  "-extra-light": 200,
  "-ultra-light": 200,
  "-light": 300,
  "-regular": 400,
  "-medium": 500,
  "-semi-bold": 600,
  "-bold": 700,
  "-extra-bold": 800,
  "-ultra-bold": 800,
  "-heavy": 900
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/font-weight";
```

## font-variant

|类名|样式|
|---|---|
|`.tabular-nums`|`font-variant: tabular-nums;`|

这部分由`$m-font-variant`生成，在引入之前修改`$m-font-variant`可以自定义。

```scss
// 不生成相关类
$m-font-variant: ();
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/font-variant";
```

## line-height

|类名|样式|
|---|---|
|`.leading`|`line-height: 1.5715;`|
|`.leading-xs`|`line-height: 1.2855;`|
|`.leading-sm`|`line-height: 1.4285;`|
|`.leading-md`|`line-height: 1.5715;`|
|`.leading-lg`|`line-height: 1.7145;`|
|`.leading-xl`|`line-height: 1.8575;`|
|`.leading-18`|`line-height: 36rpx;`|
|`.leading-20`|`line-height: 40rpx;`|
|`.leading-22`|`line-height: 44rpx;`|
|`.leading-24`|`line-height: 48rpx;`|
|`.leading-26`|`line-height: 52rpx;`|
|`.leading-28`|`line-height: 56rpx;`|
|`.leading-30`|`line-height: 60rpx;`|
|`.leading-32`|`line-height: 64rpx;`|
|`.leading-34`|`line-height: 68rpx;`|
|`.leading-36`|`line-height: 72rpx;`|
|`.leading-38`|`line-height: 76rpx;`|
|`.leading-40`|`line-height: 80rpx;`|
|`.leading-42`|`line-height: 84rpx;`|
|`.leading-44`|`line-height: 88rpx;`|

这部分由`$m-line-height`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 default, diff
$line-height-default: 1.5715;
$line-height-diff: .143;
// 生成 .leading, .leading-xs, .leading-sm, .leading-md, .leading-lg, .leading-xl
$m-font-size: (
  "": $line-height-default,
  "-xs": $line-height-default - $line-height-diff * 2,
  "-sm": $line-height-default - $line-height-diff,
  "-md": $line-height-default,
  "-lg": $line-height-default + $line-height-diff,
  "-xl": $line-height-default + $line-height-diff * 2
);
// 设置 min, max, step 循环填充映射
// 生成 .leading-20, .leading-22, .leading-24, .leading-26, .leading-28,
//     .leading-30, .leading-32
$line-height-min: 20;
$line-height-max: 32;
$line-height-step: 2;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/";
```

## color

|类名|样式|
|---|---|
|`.text`，`.is-light .text`, `.is-light.text`|`color: rgba(0, 0, 0, .85);`|
|`.text-main`，`.is-light .text-main`, `.is-light.text-main`|`color: rgba(0, 0, 0, .85);`|
|`.text-secondary`，`.is-light .text-secondary`, `.is-light.text-secondary`|`color: rgba(0, 0, 0, .45);`|
|`.text-disabled`，`.is-light .text-disabled`, `.is-light.text-disabled`|`color: rgba(0, 0, 0, .25);`|
|`.is-dark .text`, `.is-dark.text`|`color: rgba(255, 255, 255, .85);`|
|`.is-dark .text-main`, `.is-dark.text-main`|`color: rgba(255, 255, 255, .85);`|
|`.is-dark .text-secondary`, `.is-dark.text-secondary`|`color: rgba(255, 255, 255, .45);`|
|`.is-dark .text-disabled`, `.is-dark.text-disabled`|`color: rgba(255, 255, 255, .3);`|

这部分由`$m-colors`，`$m-colors-reverse`，`$m-color`和`$m-color-reverse`生成，由于篇幅原因，省略了`$m-colors`和`$m-colors-reverse`生成的类。修改`$m-colors`和`$m-colors-reverse`可以自定义，见[进阶](../advance/README.md)。在引入之前做相关修改也可以自定义。

```scss
// 修改颜色
$color-main: #333;
$color-main-reverse: #333;
// 生成 .text, .is-light .text, .is-light.text, .text-main, .is-light .text-main,
//     .is-light.text-main, .text-secondary, .is-light .text-secondary,
//     .is-light.text-secondary, .text-disabled, .is-light .text-disabled,
//     .is-light.text-disabled
$m-color: (
  "": $color-main,
  "-main": $color-main,
  "-secondary": #999,
  "-disabled": #ccc
) !default;
// 生成 .is-dark .text, .is-dark.text, .is-dark .text-main, .is-dark.text-main,
//     .text-secondary, .is-dark .text-secondary, .is-dark.text-secondary,
//     .text-disabled, .is-dark .text-disabled, .is-dark.text-disabled
$m-color-reverse: (
  "": $color-main-reverse,
  "-main": $color-main-reverse,
  "-secondary": #999,
  "-disabled": #ccc
) !default;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/color";
```

## text-align

|类名|样式|
|---|---|
|`.text-left`|`text-align: left;`|
|`.text-right`|`text-align: right;`|
|`.text-center`|`text-align: center;`|

这部分由`$m-text-align`生成，在引入之前修改`$m-text-align`可以自定义。

```scss
// 生成 .text-left, .text-right, .text-center, .text-justify
$m-text-align: (
  "-left": left,
  "-right": right,
  "-center": center,
  "-justify": justify
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/text-align";
```

## text-decoration

|类名|样式|
|---|---|
|`.text-none`|`text-decoration: none;`|
|`.text-underline`|`text-decoration: underline;`|

这部分由`$m-text-decoration`生成，在引入之前修改`$m-text-decoration`可以自定义。

```scss
// 生成 .text-none, .text-overline, .text-underline, .text-line-through
$m-text-decoration: (
  "-none": none,
  "-overline": overline,
  "-underline": underline,
  "-line-through": line-through
) !default;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/text-decoration";
```

## text-transform

|类名|样式|
|---|---|
|`.text-uppercase`|`text-transform: uppercase;`|
|`.text-lowercase`|`text-transform: lowercase;`|

这部分由`$m-text-transform`生成，在引入之前修改`$m-text-transform`可以自定义。

```scss
// 生成 .text-capitalize, .text-uppercase, .text-lowercase
$m-text-transform: (
  "-capitalize": capitalize,
  "-uppercase": uppercase,
  "-lowercase": lowercase
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/text-transform";
```

## word-break

|类名|样式|
|---|---|
|`.text-break-normal`|`word-break: normal; overflow-wrap: normal;`|
|`.text-break-word`|`overflow-wrap: break-word;`|
|`.text-break-all`|`word-break: break-all;`|
|`.text-truncate`|`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`|

这部分手动生成，目前不能自定义。

```scss

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/typography";
@import "~@modyqyw/mp-scss/classes/typography/word-break";
```
