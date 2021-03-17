# 盒模型类 box-model

[源码](https://github.com/ModyQyW/mp-scss/blob/main/classes/box-model)

## box-sizing

|类名|样式|
|---|---|
|`.box-border`|`box-sizing: border-box;`|
|`.box-content`|`box-sizing: content-box;`|

```scss
// 生成 .box-{border|content}
$m-box-sizing: (
  "-border": border-box,
  "-content": content-box
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/box-sizing";
```

## display

|类名|样式|
|---|---|
|`.d-block`|`display: block;`|
|`.d-inline-block`|`display: inline-block;`|
|`.d-inline`|`display: inline;`|
|`.d-flex`|`display: flex;`|
|`.d-inline-flex`|`display: inline-flex;`|
|`.d-none`|`display: none;`|

```scss
// 生成 .d-{block|inline-block|inline|flex|inline-flex|none}
$m-display: (
  "-block": block,
  "-inline-block": inline-block,
  "-inline": inline,
  "-flex": flex,
  "-inline-flex": inline-flex,
  "-none": none
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/display";
```

## flex

|类名|样式|
|---|---|
|`.flex-initial`|`flex: 0 1 auto;`|
|`.flex-auto`|`flex: 1 1 auto;`|
|`.flex-none`|`flex: 0 0 auto;`|

```scss
// 生成 .flex-{initial|auto|none}
$m-flex: (
  "-initial": 0 1 auto,
  "-auto": 1 1 auto,
  "-none": 0 0 auto
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/flex";
```

## flex-direction

|类名|样式|
|---|---|
|`.flex-row`|`flex-direction: row;`|
|`.flex-col`|`flex-direction: column;`|

```scss
// 生成 .flex-{row|col}
$m-flex-direction: (
  "-row": row,
  "-col": column
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/flex-direction";
```

## flex-wrap

|类名|样式|
|---|---|
|`.flex-nowrap`|`flex-direction: nowrap;`|
|`.flex-wrap`|`flex-direction: wrap;`|

```scss
// 生成 .flex-{nowrap|wrap}
$m-flex-wrap: (
  "-nowrap": nowrap,
  "-wrap": wrap
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/flex-wrap";
```

## flex-shrink

|类名|样式|
|---|---|
|`.flex-shrink-0`|`flex-shrink: 0;`|
|`.flex-shrink-1`|`flex-shrink: 1;`|
|`.flex-shrink-2`|`flex-shrink: 2;`|
|`.flex-shrink-3`|`flex-shrink: 3;`|
|`.flex-shrink-4`|`flex-shrink: 4;`|

```scss
// 不额外生成
$m-flex-shrink: ();
// 生成 .flex-shrink-{0-4}
$flex-shrink-min: 0;
$flex-shrink-max: 4;
$flex-shrink-step: 1;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/flex-shrink";
```

## flex-grow

|类名|样式|
|---|---|
|`.flex-grow-0`|`flex-grow: 0;`|
|`.flex-grow-1`|`flex-grow: 1;`|
|`.flex-grow-2`|`flex-grow: 2;`|
|`.flex-grow-3`|`flex-grow: 3;`|
|`.flex-grow-4`|`flex-grow: 4;`|

```scss
// 不额外生成
$m-flex-grow: ();
// 生成 .flex-grow-{0-4}
$flex-grow-min: 0;
$flex-grow-max: 4;
$flex-grow-step: 1;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/flex-grow";
```

## align-content

|类名|样式|
|---|---|
|`.align-content-start`|`align-content: flex-start;`|
|`.align-content-end`|`align-content: flex-end;`|
|`.align-content-center`|`align-content: center;`|

```scss
// 生成 .align-content-{start|end|center}
$m-align-content: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/align-content";
```

## align-items

|类名|样式|
|---|---|
|`.align-start`|`align-items: flex-start;`|
|`.align-end`|`align-items: flex-end;`|
|`.align-center`|`align-items: center;`|

```scss
// 生成 .align-{start|end|center}
$m-align-items: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/align-items";
```

## align-self

|类名|样式|
|---|---|
|`.align-self-start`|`align-self: flex-start;`|
|`.align-self-end`|`align-self: flex-end;`|
|`.align-self-center`|`align-self: center;`|

```scss
// 生成 .align-self-{start|end|center}
$m-align-self: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/align-self";
```

## justify-content

|类名|样式|
|---|---|
|`.justify-start`|`justify-content: flex-start;`|
|`.justify-end`|`justify-content: flex-end;`|
|`.justify-center`|`justify-content: center;`|
|`.justify-space-between`|`justify-content: space-between;`|
|`.justify-space-around`|`justify-content: space-around;`|

```scss
// 生成 .justify-{start|end|center|space-between|around}
$m-justify-content: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center,
  "-space-between": space-between,
  "-space-around": space-around
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/justify-content";
```

## order

|类名|样式|
|---|---|
|`.order-n2`|`order: -2;`|
|`.order-n1`|`order: -1;`|
|`.order-0`|`order: 0;`|
|`.order-1`|`order: 1;`|
|`.order-2`|`order: 2;`|

```scss
// 不额外生成
$m-order: ();
// 生成 .order-{n2|n1|0|1|2}
$order-min: -2;
$order-max: 2;
$order-step: 1;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/order";
```

## width

|类名|样式|
|---|---|
|`.w-auto`|`width: auto;`|
|`.w-full`|`width: 100%;`|
|`.w-half`|`width: 50%;`|
|`.w-1-8`|`width: 12.5%;`|
|`.w-2-8`|`width: 25%;`|
|`.w-3-8`|`width: 37.5%;`|
|`.w-4-8`|`width: 50%;`|
|`.w-5-8`|`width: 62.5%;`|
|`.w-6-8`|`width: 75%;`|
|`.w-7-8`|`width: 87.5%;`|
|`.w-1-10`|`width: 10%;`|
|`.w-2-10`|`width: 20%;`|
|`.w-3-10`|`width: 30%;`|
|`.w-4-10`|`width: 40%;`|
|`.w-5-10`|`width: 50%;`|
|`.w-6-10`|`width: 60%;`|
|`.w-7-10`|`width: 70%;`|
|`.w-8-10`|`width: 80%;`|
|`.w-9-10`|`width: 90%;`|
|`.w-1-12`|`width: 8.33333333%;`|
|`.w-2-12`|`width: 16.66666667%;`|
|`.w-3-12`|`width: 25%;`|
|`.w-4-12`|`width: 33.33333333%;`|
|`.w-5-12`|`width: 41.66666667%;`|
|`.w-6-12`|`width: 50%;`|
|`.w-7-12`|`width: 58.33333333%;`|
|`.w-8-12`|`width: 66.66666667%;`|
|`.w-9-12`|`width: 75%;`|
|`.w-10-12`|`width: 83.33333333%;`|
|`.w-11-12`|`width: 91.66666667%;`|
|`.w-0`|`width: 0;`|
|`.w-2`|`width: 4rpx;`|
|`.w-4`|`width: 8rpx;`|
|`.w-6`|`width: 12rpx;`|
|`.w-8`|`width: 16rpx;`|
|`.w-10`|`width: 20rpx;`|
|`.w-12`|`width: 24rpx;`|
|`.w-14`|`width: 28rpx;`|
|`.w-16`|`width: 32rpx;`|
|`.w-18`|`width: 36rpx;`|
|`.w-20`|`width: 40rpx;`|
|`.w-22`|`width: 44rpx;`|
|`.w-24`|`width: 48rpx;`|
|`.w-26`|`width: 52rpx;`|
|`.w-28`|`width: 56rpx;`|
|`.w-30`|`width: 60rpx;`|
|`.w-32`|`width: 64rpx;`|
|`.w-34`|`width: 68rpx;`|
|`.w-36`|`width: 72rpx;`|
|`.w-38`|`width: 76rpx;`|
|`.w-40`|`width: 80rpx;`|
|`.w-42`|`width: 84rpx;`|
|`.w-44`|`width: 88rpx;`|
|`.w-46`|`width: 92rpx;`|
|`.w-48`|`width: 96rpx;`|
|`.w-50`|`width: 100rpx;`|
|`.w-52`|`width: 104rpx;`|
|`.w-54`|`width: 108rpx;`|
|`.w-56`|`width: 112rpx;`|
|`.w-58`|`width: 116rpx;`|
|`.w-60`|`width: 120rpx;`|
|`.w-62`|`width: 124rpx;`|
|`.w-64`|`width: 128rpx;`|
|`.w-66`|`width: 132rpx;`|
|`.w-68`|`width: 136rpx;`|
|`.w-70`|`width: 140rpx;`|
|`.w-72`|`width: 144rpx;`|
|`.w-74`|`width: 148rpx;`|
|`.w-76`|`width: 152rpx;`|
|`.w-78`|`width: 156rpx;`|
|`.w-80`|`width: 160rpx;`|
|`.w-1-real`|`width: 1rpx;`|

```scss
// 生成 .w-{auto|full|half}
$m-width: (
  "-auto": auto,
  "-full": 100%,
  "-half": 50%
);
// 生成 .w-*-{8|10|12}
$l-width-denominator: 8, 10, 12;
// 生成 .w-{0|2|4|6|...|78|80}
$width-min: 0;
$width-max: 80;
$width-step: 2;
// 在 $scale != 1 的时候生成 .w-1-real
$width-has-1-real: true;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/width";
```

## height

|类名|样式|
|---|---|
|`.h-auto`|`height: auto;`|
|`.h-full`|`height: 100%;`|
|`.h-half`|`height: 50%;`|
|`.h-1-8`|`height: 12.5%;`|
|`.h-2-8`|`height: 25%;`|
|`.h-3-8`|`height: 37.5%;`|
|`.h-4-8`|`height: 50%;`|
|`.h-5-8`|`height: 62.5%;`|
|`.h-6-8`|`height: 75%;`|
|`.h-7-8`|`height: 87.5%;`|
|`.h-1-10`|`height: 10%;`|
|`.h-2-10`|`height: 20%;`|
|`.h-3-10`|`height: 30%;`|
|`.h-4-10`|`height: 40%;`|
|`.h-5-10`|`height: 50%;`|
|`.h-6-10`|`height: 60%;`|
|`.h-7-10`|`height: 70%;`|
|`.h-8-10`|`height: 80%;`|
|`.h-9-10`|`height: 90%;`|
|`.h-1-12`|`height: 8.33333333%;`|
|`.h-2-12`|`height: 16.66666667%;`|
|`.h-3-12`|`height: 25%;`|
|`.h-4-12`|`height: 33.33333333%;`|
|`.h-5-12`|`height: 41.66666667%;`|
|`.h-6-12`|`height: 50%;`|
|`.h-7-12`|`height: 58.33333333%;`|
|`.h-8-12`|`height: 66.66666667%;`|
|`.h-9-12`|`height: 75%;`|
|`.h-10-12`|`height: 83.33333333%;`|
|`.h-11-12`|`height: 91.66666667%;`|
|`.h-0`|`height: 0;`|
|`.h-2`|`height: 4rpx;`|
|`.h-4`|`height: 8rpx;`|
|`.h-6`|`height: 12rpx;`|
|`.h-8`|`height: 16rpx;`|
|`.h-10`|`height: 20rpx;`|
|`.h-12`|`height: 24rpx;`|
|`.h-14`|`height: 28rpx;`|
|`.h-16`|`height: 32rpx;`|
|`.h-18`|`height: 36rpx;`|
|`.h-20`|`height: 40rpx;`|
|`.h-22`|`height: 44rpx;`|
|`.h-24`|`height: 48rpx;`|
|`.h-26`|`height: 52rpx;`|
|`.h-28`|`height: 56rpx;`|
|`.h-30`|`height: 60rpx;`|
|`.h-32`|`height: 64rpx;`|
|`.h-34`|`height: 68rpx;`|
|`.h-36`|`height: 72rpx;`|
|`.h-38`|`height: 76rpx;`|
|`.h-40`|`height: 80rpx;`|
|`.h-42`|`height: 84rpx;`|
|`.h-44`|`height: 88rpx;`|
|`.h-46`|`height: 92rpx;`|
|`.h-48`|`height: 96rpx;`|
|`.h-50`|`height: 100rpx;`|
|`.h-52`|`height: 104rpx;`|
|`.h-54`|`height: 108rpx;`|
|`.h-56`|`height: 112rpx;`|
|`.h-58`|`height: 116rpx;`|
|`.h-60`|`height: 120rpx;`|
|`.h-62`|`height: 124rpx;`|
|`.h-64`|`height: 128rpx;`|
|`.h-66`|`height: 132rpx;`|
|`.h-68`|`height: 136rpx;`|
|`.h-70`|`height: 140rpx;`|
|`.h-72`|`height: 144rpx;`|
|`.h-74`|`height: 148rpx;`|
|`.h-76`|`height: 152rpx;`|
|`.h-78`|`height: 156rpx;`|
|`.h-80`|`height: 160rpx;`|
|`.h-1-real`|`height: 1rpx;`|

```scss
// 生成 .h-{auto|full|half}
$m-height: (
  "-auto": auto,
  "-full": 100%,
  "-half": 50%
);
// 生成 .h-*-{8|10|12}
$l-height-denominator: 8, 10, 12;
// 生成 .h-{0|2|4|6|...|78|80}
$height-min: 0;
$height-max: 80;
$height-step: 2;
// 在 $scale != 1 的时候生成 h-1-real
$height-has-1-real: true;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/height";
```

## padding

|类名|样式|
|---|---|
|`.p-xs`|`padding: 8rpx;`|
|`.p-sm`|`padding: 16rpx;`|
|`.p-md`|`padding: 24rpx;`|
|`.p-lg`|`padding: 32rpx;`|
|`.p-xl`|`padding: 40rpx;`|
|`.p-0`|`padding: 0;`|
|`.p-2`|`padding: 4rpx;`|
|`.p-4`|`padding: 8rpx;`|
|`.p-6`|`padding: 12rpx;`|
|`.p-8`|`padding: 16rpx;`|
|`.p-10`|`padding: 20rpx;`|
|`.p-12`|`padding: 24rpx;`|
|`.p-14`|`padding: 28rpx;`|
|`.p-16`|`padding: 32rpx;`|
|`.p-18`|`padding: 36rpx;`|
|`.p-20`|`padding: 40rpx;`|
|`.p-22`|`padding: 44rpx;`|
|`.p-24`|`padding: 48rpx;`|
|`.p-26`|`padding: 52rpx;`|
|`.p-28`|`padding: 56rpx;`|
|`.p-30`|`padding: 60rpx;`|
|`.p-32`|`padding: 64rpx;`|
|`.p-34`|`padding: 68rpx;`|
|`.p-36`|`padding: 72rpx;`|
|`.p-38`|`padding: 76rpx;`|
|`.p-40`|`padding: 80rpx;`|
|`.p-42`|`padding: 84rpx;`|
|`.p-44`|`padding: 88rpx;`|
|`.p-46`|`padding: 92rpx;`|
|`.p-48`|`padding: 96rpx;`|
|`.p-50`|`padding: 100rpx;`|
|`.p-52`|`padding: 104rpx;`|
|`.p-54`|`padding: 108rpx;`|
|`.p-56`|`padding: 112rpx;`|
|`.p-58`|`padding: 116rpx;`|
|`.p-60`|`padding: 120rpx;`|
|`.p-62`|`padding: 124rpx;`|
|`.p-64`|`padding: 128rpx;`|
|`.p-66`|`padding: 132rpx;`|
|`.p-68`|`padding: 136rpx;`|
|`.p-70`|`padding: 140rpx;`|
|`.p-72`|`padding: 144rpx;`|
|`.p-74`|`padding: 148rpx;`|
|`.p-76`|`padding: 152rpx;`|
|`.p-78`|`padding: 156rpx;`|
|`.p-80`|`padding: 160rpx;`|

也支持 `.p{y|x|t|r|b|l}-*`，分别对应`padding-top` 和 `padding-bottom`，`padding-right` 和 `padding-left`，`padding-top`，`padding-right`，`padding-bottom`，`padding-left`。

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// 生成 .p-{xs|sm|md|lg|xl}
$padding-base: 12;
$padding-diff: 4;
$m-padding: (
  "-xs": (
    $padding-base - $padding-diff * 2
  ) * $scale + $unit,
  "-sm": (
    $padding-base - $padding-diff
  ) * $scale + $unit,
  "-md": $padding-base * $scale + $unit,
  "-lg": (
    $padding-base + $padding-diff
  ) * $scale + $unit,
  "-xl": (
    $padding-base + $padding-diff * 2
  ) * $scale + $unit
);
// 生成 .p-{0|2|4|6|...|78|80}
$padding-min: 0;
$padding-max: 80;
$padding-step: 2;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/padding";
```

## margin

|类名|样式|
|---|---|
|`.m-auto`|`margin: auto;`|
|`.m-nxs`|`margin: -8rpx;`|
|`.m-nsm`|`margin: -16rpx;`|
|`.m-nmd`|`margin: -24rpx;`|
|`.m-nlg`|`margin: -32rpx;`|
|`.m-nxl`|`margin: -40rpx;`|
|`.m-xs`|`margin: 8rpx;`|
|`.m-sm`|`margin: 16rpx;`|
|`.m-md`|`margin: 24rpx;`|
|`.m-lg`|`margin: 32rpx;`|
|`.m-xl`|`margin: 40rpx;`|
|`.m-n80`|`margin: -160rpx;`|
|`.m-n78`|`margin: -156rpx;`|
|`.m-n76`|`margin: -152rpx;`|
|`.m-n74`|`margin: -148rpx;`|
|`.m-n72`|`margin: -144rpx;`|
|`.m-n70`|`margin: -140rpx;`|
|`.m-n68`|`margin: -136rpx;`|
|`.m-n66`|`margin: -132rpx;`|
|`.m-n64`|`margin: -128rpx;`|
|`.m-n62`|`margin: -124rpx;`|
|`.m-n60`|`margin: -120rpx;`|
|`.m-n58`|`margin: -116rpx;`|
|`.m-n56`|`margin: -112rpx;`|
|`.m-n54`|`margin: -108rpx;`|
|`.m-n52`|`margin: -104rpx;`|
|`.m-n50`|`margin: -100rpx;`|
|`.m-n48`|`margin: -96rpx;`|
|`.m-n46`|`margin: -92rpx;`|
|`.m-n44`|`margin: -88rpx;`|
|`.m-n42`|`margin: -84rpx;`|
|`.m-n40`|`margin: -80rpx;`|
|`.m-n38`|`margin: -76rpx;`|
|`.m-n36`|`margin: -72rpx;`|
|`.m-n34`|`margin: -68rpx;`|
|`.m-n32`|`margin: -64rpx;`|
|`.m-n30`|`margin: -60rpx;`|
|`.m-n28`|`margin: -56rpx;`|
|`.m-n26`|`margin: -52rpx;`|
|`.m-n24`|`margin: -48rpx;`|
|`.m-n22`|`margin: -44rpx;`|
|`.m-n20`|`margin: -40rpx;`|
|`.m-n18`|`margin: -36rpx;`|
|`.m-n16`|`margin: -32rpx;`|
|`.m-n14`|`margin: -28rpx;`|
|`.m-n12`|`margin: -24rpx;`|
|`.m-n10`|`margin: -20rpx;`|
|`.m-n8`|`margin: -16rpx;`|
|`.m-n6`|`margin: -12rpx;`|
|`.m-n4`|`margin: -8rpx;`|
|`.m-n2`|`margin: -4rpx;`|
|`.m-0`|`margin: 0;`|
|`.m-2`|`margin: 4rpx;`|
|`.m-4`|`margin: 8rpx;`|
|`.m-6`|`margin: 12rpx;`|
|`.m-8`|`margin: 16rpx;`|
|`.m-10`|`margin: 20rpx;`|
|`.m-12`|`margin: 24rpx;`|
|`.m-14`|`margin: 28rpx;`|
|`.m-16`|`margin: 32rpx;`|
|`.m-18`|`margin: 36rpx;`|
|`.m-20`|`margin: 40rpx;`|
|`.m-22`|`margin: 44rpx;`|
|`.m-24`|`margin: 48rpx;`|
|`.m-26`|`margin: 52rpx;`|
|`.m-28`|`margin: 56rpx;`|
|`.m-30`|`margin: 60rpx;`|
|`.m-32`|`margin: 64rpx;`|
|`.m-34`|`margin: 68rpx;`|
|`.m-36`|`margin: 72rpx;`|
|`.m-38`|`margin: 76rpx;`|
|`.m-40`|`margin: 80rpx;`|
|`.m-42`|`margin: 84rpx;`|
|`.m-44`|`margin: 88rpx;`|
|`.m-46`|`margin: 92rpx;`|
|`.m-48`|`margin: 96rpx;`|
|`.m-50`|`margin: 100rpx;`|
|`.m-52`|`margin: 104rpx;`|
|`.m-54`|`margin: 108rpx;`|
|`.m-56`|`margin: 112rpx;`|
|`.m-58`|`margin: 116rpx;`|
|`.m-60`|`margin: 120rpx;`|
|`.m-62`|`margin: 124rpx;`|
|`.m-64`|`margin: 128rpx;`|
|`.m-66`|`margin: 132rpx;`|
|`.m-68`|`margin: 136rpx;`|
|`.m-70`|`margin: 140rpx;`|
|`.m-72`|`margin: 144rpx;`|
|`.m-74`|`margin: 148rpx;`|
|`.m-76`|`margin: 152rpx;`|
|`.m-78`|`margin: 156rpx;`|
|`.m-80`|`margin: 160rpx;`|

也支持 `.m{y|x|t|r|b|l}-*`，分别对应`margin-top` 和 `margin-bottom`，`margin-right` 和 `margin-left`，`margin-top`，`margin-right`，`margin-bottom`，`margin-left`。

```scss
// 通用变量
$unit: rpx;
$scale: 2;
// 生成 .m-{auto|nxs|nsm|nmd|nlg|nxl|xs|sm|md|lg|xl}
$margin-base: 12;
$margin-diff: 4;
$m-margin: (
  "-auto": auto,
  "-nxs": (
    -$margin-base + $margin-diff * 2
  ) * $scale + $unit,
  "-nsm": (
    -$margin-base + $margin-diff
  ) * $scale + $unit,
  "-nmd": (
    -$margin-base
  ) * $scale + $unit,
  "-nlg": (
    -$margin-base + $margin-diff
  ) * $scale + $unit,
  "-nxl": (
    -$margin-base + $margin-diff * 2
  ) * $scale + $unit,
  "-xs": (
    $margin-base - $margin-diff * 2
  ) * $scale + $unit,
  "-sm": (
    $margin-base - $margin-diff
  ) * $scale + $unit,
  "-md": $margin-base * $scale + $unit,
  "-lg": (
    $margin-base + $margin-diff
  ) * $scale + $unit,
  "-xl": (
    $margin-base + $margin-diff * 2
  ) * $scale + $unit
);
// 生成 .m-{-80|-78|-76|-74|...|78|80}
$margin-min: -80;
$margin-max: 80;
$margin-step: 2;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/margin";
```

## overflow

|类名|样式|
|---|---|
|`.overflow-auto`|`overflow: auto;`|
|`.overflow-hidden`|`overflow: hidden;`|
|`.overflow-visible`|`overflow: visible;`|
|`.overflow-y-auto`|`overflow-y: auto;`|
|`.overflow-y-hidden`|`overflow-y: hidden;`|
|`.overflow-y-visible`|`overflow-y: visible;`|
|`.overflow-x-auto`|`overflow-x: auto;`|
|`.overflow-x-hidden`|`overflow-x: hidden;`|
|`.overflow-x-visible`|`overflow-x: visible;`|

```scss
// 生成 .overflow-{auto|hidden|visible}, .overflow-{y|x}-{auto|hidden|visible}
$m-overflow: (
  "-auto": auto,
  "-hidden": hidden,
  "-visible": visible
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/overflow";
```
