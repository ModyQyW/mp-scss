# 排版类 typography

[源码](https://github.com/ModyQyW/mp-scss/blob/main/classes/typography)

## font-family

|类名|样式|
|---|---|
|`.font`|`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`|

```scss
// 生成 .font, .font-{sans|serif|mono}
$font-family-default: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, "Noto Sans", sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
$font-family-serif: georgia, cambria, "Times New Roman", times, serif;
$font-family-mono: menlo, monaco, consolas, "Liberation Mono", "Courier New",
  monospace;
$font-family: (
  "": $font-family-default,
  "-sans": $font-family-sans,
  "-serif": $font-family-serif,
  "-mono": $font-family-mono
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-family";
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
|`.text-2xl`|`font-size: 40rpx;`|
|`.text-3xl`|`font-size: 48rpx;`|
|`.text-4xl`|`font-size: 56rpx;`|
|`.text-5xl`|`font-size: 64rpx;`|
|`.text-6xl`|`font-size: 80rpx;`|
|`.text-7xl`|`font-size: 96rpx;`|
|`.text-8xl`|`font-size: 112rpx;`|
|`.text-9xl`|`font-size: 128rpx;`|
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
|`.text-38`|`font-size: 76rpx;`|
|`.text-40`|`font-size: 80rpx;`|
|`.text-42`|`font-size: 84rpx;`|
|`.text-44`|`font-size: 88rpx;`|
|`.text-46`|`font-size: 92rpx;`|
|`.text-48`|`font-size: 96rpx;`|
|`.text-50`|`font-size: 100rpx;`|
|`.text-52`|`font-size: 104rpx;`|
|`.text-54`|`font-size: 108rpx;`|
|`.text-56`|`font-size: 112rpx;`|
|`.text-58`|`font-size: 116rpx;`|
|`.text-60`|`font-size: 120rpx;`|
|`.text-62`|`font-size: 124rpx;`|
|`.text-64`|`font-size: 128rpx;`|

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// // 生成 .text-{xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl}
$font-size-base: 14 !default;
$font-size-diff: 2 !default;
$m-font-size: (
  "": $font-size-base * $scale + $unit,
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
  ) * $scale + $unit,
  "-2xl": (
    $font-size-base + $font-size-diff * 3
  ) * $scale + $unit,
  "-3xl": (
    $font-size-base + $font-size-diff * 5
  ) * $scale + $unit,
  "-4xl": (
    $font-size-base + $font-size-diff * 7
  ) * $scale + $unit,
  "-5xl": (
    $font-size-base + $font-size-diff * 9
  ) * $scale + $unit,
  "-6xl": (
    $font-size-base + $font-size-diff * 13
  ) * $scale + $unit,
  "-7xl": (
    $font-size-base + $font-size-diff * 17
  ) * $scale + $unit,
  "-8xl": (
    $font-size-base + $font-size-diff * 21
  ) * $scale + $unit,
  "-9xl": (
    $font-size-base + $font-size-diff * 25
  ) * $scale + $unit
);
// 生成 .text-{10|12|14|16|...|62|64}
$font-size-min: 10;
$font-size-max: 64;
$font-size-step: 2;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-size";
```

## font-style

|类名|样式|
|---|---|
|`.text-normal`|`font-style: normal;`|
|`.text-italic`|`font-style: italic;`|
|`.text-oblique`|`font-style: oblique;`|

```scss
// 生成 .text-{normal|italic|oblique}
$m-font-style: (
  "-normal": normal,
  "-italic": italic,
  "-oblique": oblique
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-style";
```

## font-weight

|类名|样式|
|---|---|
|`.text`|`font-weight: 400;`|
|`.text-regular`|`font-weight: 400;`|
|`.text-medium`|`font-weight: 500;`|
|`.text-semi-bold`|`font-weight: 600;`|
|`.text-bold`|`font-weight: 700;`|

```scss
// 生成 .text, .text-{regular|medium|semi-bold|bold}
$m-font-weight: (
  "": 400,
  "-regular": 400,
  "-medium": 500,
  "-semi-bold": 600,
  "-bold": 700
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-weight";
```

## font-variant

|类名|样式|
|---|---|
|`.tabular-nums`|`font-variant: tabular-nums;`|

```scss
// 生成 .tabular-nums
$m-font-variant: (
  "tabular-nums": tabular-nums
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-variant";
```

## line-height

|类名|样式|
|---|---|
|`.leading`|`line-height: 1.5;`|
|`.leading-xs`|`line-height: 1;`|
|`.leading-sm`|`line-height: 1.25;`|
|`.leading-md`|`line-height: 1.5;`|
|`.leading-lg`|`line-height: 1.75;`|
|`.leading-xl`|`line-height: 2;`|
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
|`.leading-46`|`line-height: 92rpx;`|
|`.leading-48`|`line-height: 98rpx;`|
|`.leading-50`|`line-height: 98rpx;`|
|`.leading-52`|`line-height: 98rpx;`|
|`.leading-54`|`line-height: 98rpx;`|
|`.leading-56`|`line-height: 98rpx;`|
|`.leading-58`|`line-height: 98rpx;`|
|`.leading-60`|`line-height: 98rpx;`|
|`.leading-62`|`line-height: 98rpx;`|
|`.leading-64`|`line-height: 98rpx;`|
|`.leading-66`|`line-height: 98rpx;`|
|`.leading-68`|`line-height: 98rpx;`|
|`.leading-70`|`line-height: 98rpx;`|
|`.leading-72`|`line-height: 98rpx;`|

```scss
// 生成 .leading, .leading-{xs|sm|md|lg|xl}
$line-height-default: 1.5;
$line-height-diff: 0.25;
$m-line-height: (
  "": $line-height-default,
  "-xs": $line-height-default - $line-height-diff * 2,
  "-sm": $line-height-default - $line-height-diff,
  "-md": $line-height-default,
  "-lg": $line-height-default + $line-height-diff,
  "-xl": $line-height-default + $line-height-diff * 2
);
// 生成 .leading-{18|20|22|24|...|70|72}
$line-height-min: 18;
$line-height-max: 72;
$line-height-step: 2;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/line-height";
```

## color

|类名|样式|
|---|---|
|`.text`|`color: rgba(0, 0, 0, .85);`|
|`.text-main`|`color: rgba(0, 0, 0, .85);`|
|`.text-secondary`|`color: rgba(0, 0, 0, .45);`|
|`.text-disabled`|`color: rgba(0, 0, 0, .25);`|
|`.text-primary`|`color: #1890ff;`|
|`.text-success`|`color: #52c41a;`|
|`.text-warning`|`color: #faad14;`|
|`.text-error`|`color: #f5222d;`|
|`.text-info`|`color: #1890ff;`|
|`.is-dark .text`|`color: rgba(255, 255, 255, .85);`|
|`.is-dark .text-main`|`color: rgba(255, 255, 255, .85);`|
|`.is-dark .text-secondary`|`color: rgba(255, 255, 255, .45);`|
|`.is-dark .text-disabled`|`color: rgba(255, 255, 255, .3);`|
|`.is-dark .text-primary`|`color: #177ddc;`|
|`.is-dark .text-success`|`color: #49aa19;`|
|`.is-dark .text-warning`|`color: #d89614;`|
|`.is-dark .text-error`|`color: #d32029;`|
|`.is-dark .text-info`|`color: #177ddc;`|

请参考 [色彩](../advance/README.md#色彩) 说明，了解更多。

```scss
$color-main: fade-out($black, 0.15) !default;
$color-secondary: fade-out($black, 0.55) !default;
$color-disabled: fade-out($black, 0.75) !default;
$color-main-reverse: fade-out($white, 0.15) !default;
$color-secondary-reverse: fade-out($white, 0.55) !default;
$color-disabled-reverse: fade-out($white, 0.7) !default;
// 生成 .text, .text-{main|secondary|disabled}
$m-color: (
  "": $color-main,
  "-main": $color-main,
  "-secondary": $color-secondary,
  "-disabled": $color-disabled
);
// 生成 。is-dark .text, 。is-dark .text-{main|secondary|disabled}
$has-dark: true;
$m-color-reverse: (
  "": $color-main-reverse,
  "-main": $color-main-reverse,
  "-secondary": $color-secondary-reverse,
  "-disabled": $color-disabled-reverse
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/color";
```

## text-align

|类名|样式|
|---|---|
|`.text-left`|`text-align: left;`|
|`.text-right`|`text-align: right;`|
|`.text-center`|`text-align: center;`|
|`.text-justify`|`text-align: justify;`|

```scss
// 生成 .text-{left|right|center|justify}
$m-text-align: (
  "-left": left,
  "-right": right,
  "-center": center,
  "-justify": justify
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/text-align";
```

## text-decoration

|类名|样式|
|---|---|
|`.text-none`|`text-decoration: none;`|
|`.text-underline`|`text-decoration: underline;`|
|`.text-overline`|`text-decoration: overline;`|
|`.text-line-through`|`text-decoration: line-through;`|

```scss
// 生成 .text-{none|underline|overline|line-through}
$m-text-decoration: (
  "-none": none,
  "-underline": underline,
  "-overline": overline,
  "-line-through": line-through
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/text-decoration";
```

## text-transform

|类名|样式|
|---|---|
|`.text-uppercase`|`text-transform: uppercase;`|
|`.text-lowercase`|`text-transform: lowercase;`|
|`.text-capitalize`|`text-transform: capitalize;`|

```scss
// 生成 .text-capitalize, .text-uppercase, .text-lowercase
$m-text-transform: (
  "-uppercase": uppercase,
  "-lowercase": lowercase,
  "-capitalize": capitalize
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/text-transform";
```

## word-break

|类名|样式|
|---|---|
|`.text-break-normal`|`word-break: normal; overflow-wrap: normal;`|
|`.text-break-word`|`overflow-wrap: break-word;`|
|`.text-break-all`|`word-break: break-all;`|
|`.text-truncate`|`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`|

这部分不能自定义。
