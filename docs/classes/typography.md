# 排版类 typography

## font-family

|类名|样式|
|---|---|
|`.font`|`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`|

```scss
// 生成 .font, .font-sans, .font-serif, .font-mono
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
|`.text-xs`<Badge text="2.2 移除" />|`font-size: 20rpx;`|
|`.text-sm`<Badge text="2.2 移除" />|`font-size: 24rpx;`|
|`.text-md`<Badge text="2.2 移除" />|`font-size: 28rpx;`|
|`.text-lg`<Badge text="2.2 移除" />|`font-size: 32rpx;`|
|`.text-xl`<Badge text="2.2 移除" />|`font-size: 36rpx;`|
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
|`.text-38`<Badge text="2.2 新增" />|`font-size: 76rpx;`|
|`.text-40`<Badge text="2.2 新增" />|`font-size: 80rpx;`|

```scss
// 生成 .text
$scale: 2;
$unit: rpx;
$font-size-base: 16;
$m-font-size: (
  "": $font-size-base * $scale + $diff
);
// 生成 .text-12, .text-14, .text-16, .text-18, .text-20, .text-22, .text-24
$font-size-min: 12;
$font-size-max: 24;
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

```scss
// 生成 .text-normal, .text-italic, .text-oblique
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
// 不生成相关类
$m-font-variant: ();

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/font-variant";
```

## line-height

|类名|样式|
|---|---|
|`.leading`|`line-height: 1.5;`|
|`.leading-xs`<Badge text="2.2 移除" />|`line-height: 1;`|
|`.leading-sm`<Badge text="2.2 移除" />|`line-height: 1.25;`|
|`.leading-md`<Badge text="2.2 移除" />|`line-height: 1.5;`|
|`.leading-lg`<Badge text="2.2 移除" />|`line-height: 1.75;`|
|`.leading-xl`<Badge text="2.2 移除" />|`line-height: 2;`|
|`.leading-none`<Badge text="2.2 新增" />|`line-height: 1;`|
|`.leading-tight`<Badge text="2.2 新增" />|`line-height: 1.25;`|
|`.leading-normal`<Badge text="2.2 新增" />|`line-height: 1.5;`|
|`.leading-relaxed`<Badge text="2.2 新增" />|`line-height: 1.75;`|
|`.leading-loose`<Badge text="2.2 新增" />|`line-height: 2;`|
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

```scss
// 生成 .leading, .leading-none, .leading-tight, .leading-normal,
//     .leading-relaxed, .leading-loose
$line-height-default: 1.5;
$line-height-diff: 0.25;
$m-font-size: (
  "": $line-height-default,
  "-none": $line-height-default - $line-height-diff * 2,
  "-tight": $line-height-default - $line-height-diff,
  "-normal": $line-height-default,
  "-relaxed": $line-height-default + $line-height-diff,
  "-loose": $line-height-default + $line-height-diff * 2
);
// 生成 .leading-20, .leading-22, .leading-24, .leading-26, .leading-28,
//     .leading-30, .leading-32
$line-height-min: 20;
$line-height-max: 32;
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

支持`$m-colors`和`$m-colors-reverse`里的色彩，详见[进阶 - 色彩](../advance/README.md#色彩)。

```scss
// 生成 .text, .text-main, .text-secondary, .text-disabled
$color-main: #333;
$color-main-reverse: #333;
$m-color: (
  "": $color-main,
  "-main": $color-main,
  "-secondary": #999,
  "-disabled": #ccc
) !default;
// 开启暗黑模式，生成 .is-dark .text, .is-dark .text-main,
//                 .is-dark .text-secondary, .is-dark .text-disabled
$has-dark: true;
$m-color-reverse: (
  "": $color-main-reverse,
  "-main": $color-main-reverse,
  "-secondary": #999,
  "-disabled": #ccc
) !default;

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

```scss
// 生成 .text-left, .text-right, .text-center, .text-justify
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

```scss
// 生成 .text-none, .text-underline, .text-line-through
$m-text-decoration: (
  "-none": none,
  "-underline": underline,
  "-line-through": line-through
) !default;

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

```scss
// 生成 .text-capitalize, .text-uppercase, .text-lowercase
$m-text-transform: (
  "-capitalize": capitalize,
  "-uppercase": uppercase,
  "-lowercase": lowercase
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

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/typography";
// @import "~@modyqyw/mp-scss/classes/typography/word-break";
```
