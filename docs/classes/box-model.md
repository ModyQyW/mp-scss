# 盒模型类 box-model

## box-sizing

|类名|样式|
|---|---|
|`.box-border`|`box-sizing: border-box;`|

```scss
// 生成 .box-content, .box-border
$m-box-sizing: (
  "-content": content-box,
  "-border": border-box
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
|`.d-flex`|`display: flex;`|
|`.d-inline-flex`|`display: inline-flex;`|
|`.d-none`|`display: none;`|

```scss
// 生成 .d-block, .d-inline-block, .d-inline, .d-flex, .d-inline-flex, .d-none
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
|`.flex-auto`|`flex: 1 1 auto;`|
|`.flex-none`|`flex: 0 0 auto;`|

```scss
// 生成 .flex, .flex-auto, .flex-none
$m-flex: (
  "": 0 1 auto,
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
// 生成 .flex-row, .flex-row-reverse, .flex-col, .flex-col-reverse
$m-flex-direction: (
  "-row": row,
  "-row-reverse": row-reverse,
  "-col": column,
  "-col-reverse": column-reverse
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
// 生成 .flex-nowrap, .flex-wrap, .flex-wrap-reverse
$m-flex-wrap: (
  "-nowrap": nowrap,
  "-wrap": wrap,
  "-wrap-reverse": wrap-reverse
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

```scss
// 生成 .flex-shrink
$m-flex-shrink: (
  "": 1
);
// 生成 .flex-shrink-0, .flex-shrink-1, .flex-shrink-2
$flex-shrink-min: 0;
$flex-shrink-max: 2;
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

```scss
// 生成 .flex-grow
$m-flex-grow: (
  "": 0
);
// 生成 .flex-grow-0, .flex-grow-1, .flex-grow-2
$flex-grow-min: 0;
$flex-grow-max: 2;
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
// 生成 .align-content-start, .align-content-end, .align-content-center,
//     .align-content-space-between, .align-content-space-around
$m-align-content: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center,
  "-space-between": space-between,
  "-space-around": space-around
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
// 生成 .align-start, .align-end, .align-center
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
// 生成 .align-self-start, .align-self-end, .align-self-center
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
// 生成 .justify-start, .justify-end, .justify-center, .justify-space-between,
//     .justify-space-around
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
// 生成 .order-first, .order-last
$m-order: (
  "-first": -9999,
  "-last": 9999
);
// 生成 .order-0, .order-1, .order-2
$order-min: 0;
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
|`.w-full`|`width: 100%;`|
|`.w-half`|`width: 50%;`|
|`.w-1-6`<Badge text="2.2 移除" />|`width: 16.66666667%;`|
|`.w-2-6`<Badge text="2.2 移除" />|`width: 33.33333333%;`|
|`.w-3-6`<Badge text="2.2 移除" />|`width: 50%;`|
|`.w-4-6`<Badge text="2.2 移除" />|`width: 66.66666667%;`|
|`.w-5-6`<Badge text="2.2 移除" />|`width: 83.33333333%;`|
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
|`.w-1-12`<Badge text="2.2 新增" />|`width: 8.33333333%;`|
|`.w-2-12`<Badge text="2.2 新增" />|`width: 16.66666667%;`|
|`.w-3-12`<Badge text="2.2 新增" />|`width: 25%;`|
|`.w-4-12`<Badge text="2.2 新增" />|`width: 33.33333333%;`|
|`.w-5-12`<Badge text="2.2 新增" />|`width: 41.66666667%;`|
|`.w-6-12`<Badge text="2.2 新增" />|`width: 50%;`|
|`.w-7-12`<Badge text="2.2 新增" />|`width: 58.33333333%;`|
|`.w-8-12`<Badge text="2.2 新增" />|`width: 66.66666667%;`|
|`.w-9-12`<Badge text="2.2 新增" />|`width: 75%;`|
|`.w-10-12`<Badge text="2.2 新增" />|`width: 83.33333333%;`|
|`.w-11-12`<Badge text="2.2 新增" />|`width: 91.66666667%;`|
|`.w-0`|`width: 0;`|
|`.w-1`|`width: 2rpx;`|
|`.w-2`|`width: 4rpx;`|
|`.w-3`|`width: 6rpx;`|
|`.w-4`|`width: 8rpx;`|
|`.w-5`|`width: 10rpx;`|
|`.w-6`|`width: 12rpx;`|
|`.w-7`|`width: 14rpx;`|
|`.w-8`|`width: 16rpx;`|
|`.w-9`|`width: 18rpx;`|
|`.w-10`|`width: 20rpx;`|
|`.w-11`|`width: 22rpx;`|
|`.w-12`|`width: 24rpx;`|
|`.w-13`|`width: 26rpx;`|
|`.w-14`|`width: 28rpx;`|
|`.w-15`|`width: 30rpx;`|
|`.w-16`|`width: 32rpx;`|
|`.w-17`|`width: 34rpx;`|
|`.w-18`|`width: 36rpx;`|
|`.w-19`|`width: 38rpx;`|
|`.w-20`|`width: 40rpx;`|
|`.w-21`|`width: 42rpx;`|
|`.w-22`|`width: 44rpx;`|
|`.w-23`|`width: 46rpx;`|
|`.w-24`|`width: 48rpx;`|
|`.w-25`<Badge text="2.2 新增" />|`width: 50rpx;`|
|`.w-26`<Badge text="2.2 新增" />|`width: 52rpx;`|
|`.w-27`<Badge text="2.2 新增" />|`width: 54rpx;`|
|`.w-28`<Badge text="2.2 新增" />|`width: 56rpx;`|
|`.w-29`<Badge text="2.2 新增" />|`width: 58rpx;`|
|`.w-30`<Badge text="2.2 新增" />|`width: 60rpx;`|
|`.w-31`<Badge text="2.2 新增" />|`width: 62rpx;`|
|`.w-32`<Badge text="2.2 新增" />|`width: 64rpx;`|
|`.w-33`<Badge text="2.2 新增" />|`width: 66rpx;`|
|`.w-34`<Badge text="2.2 新增" />|`width: 68rpx;`|
|`.w-35`<Badge text="2.2 新增" />|`width: 70rpx;`|
|`.w-36`<Badge text="2.2 新增" />|`width: 72rpx;`|
|`.w-37`<Badge text="2.2 新增" />|`width: 74rpx;`|
|`.w-38`<Badge text="2.2 新增" />|`width: 76rpx;`|
|`.w-39`<Badge text="2.2 新增" />|`width: 78rpx;`|
|`.w-40`<Badge text="2.2 新增" />|`width: 80rpx;`|
|`.w-1-real`|`width: 1rpx;`|

```scss
// 生成 .w-full, .w-half, .w-auto
$m-width: (
  "-full": 100%,
  "-half": 50%,
  "-auto": auto
);
// 生成 .w-*-{8|10|12}
$l-width-denominator: 8, 10, 12;
// 生成 .w-0, .w-1, .w-2
$width-min: 0;
$width-max: 2;
$width-step: 1;
// 移除 .w-1-real，如果 $scale == 1，则该变量默认不生效
$width-has-1-real: false;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/width";
```

## height

|类名|样式|
|---|---|
|`.h-full`|`height: 100%;`|
|`.h-half`|`height: 50%;`|
|`.h-1-6`<Badge text="2.2 移除" />|`height: 16.66666667%;`|
|`.h-2-6`<Badge text="2.2 移除" />|`height: 33.33333333%;`|
|`.h-3-6`<Badge text="2.2 移除" />|`height: 50%;`|
|`.h-4-6`<Badge text="2.2 移除" />|`height: 66.66666667%;`|
|`.h-5-6`<Badge text="2.2 移除" />|`height: 83.33333333%;`|
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
|`.h-1-12`<Badge text="2.2 新增" />|`height: 8.33333333%;`|
|`.h-2-12`<Badge text="2.2 新增" />|`height: 16.66666667%;`|
|`.h-3-12`<Badge text="2.2 新增" />|`height: 25%;`|
|`.h-4-12`<Badge text="2.2 新增" />|`height: 33.33333333%;`|
|`.h-5-12`<Badge text="2.2 新增" />|`height: 41.66666667%;`|
|`.h-6-12`<Badge text="2.2 新增" />|`height: 50%;`|
|`.h-7-12`<Badge text="2.2 新增" />|`height: 58.33333333%;`|
|`.h-8-12`<Badge text="2.2 新增" />|`height: 66.66666667%;`|
|`.h-9-12`<Badge text="2.2 新增" />|`height: 75%;`|
|`.h-10-12`<Badge text="2.2 新增" />|`height: 83.33333333%;`|
|`.h-11-12`<Badge text="2.2 新增" />|`height: 91.66666667%;`|
|`.h-0`|`height: 0;`|
|`.h-1`|`height: 2rpx;`|
|`.h-2`|`height: 4rpx;`|
|`.h-3`|`height: 6rpx;`|
|`.h-4`|`height: 8rpx;`|
|`.h-5`|`height: 10rpx;`|
|`.h-6`|`height: 12rpx;`|
|`.h-7`|`height: 14rpx;`|
|`.h-8`|`height: 16rpx;`|
|`.h-9`|`height: 18rpx;`|
|`.h-10`|`height: 20rpx;`|
|`.h-11`|`height: 22rpx;`|
|`.h-12`|`height: 24rpx;`|
|`.h-13`|`height: 26rpx;`|
|`.h-14`|`height: 28rpx;`|
|`.h-15`|`height: 30rpx;`|
|`.h-16`|`height: 32rpx;`|
|`.h-17`|`height: 34rpx;`|
|`.h-18`|`height: 36rpx;`|
|`.h-19`|`height: 38rpx;`|
|`.h-20`|`height: 40rpx;`|
|`.h-21`|`height: 42rpx;`|
|`.h-22`|`height: 44rpx;`|
|`.h-23`|`height: 46rpx;`|
|`.h-24`|`height: 48rpx;`|
|`.h-25`<Badge text="2.2 新增" />|`height: 50rpx;`|
|`.h-26`<Badge text="2.2 新增" />|`height: 52rpx;`|
|`.h-27`<Badge text="2.2 新增" />|`height: 54rpx;`|
|`.h-28`<Badge text="2.2 新增" />|`height: 56rpx;`|
|`.h-29`<Badge text="2.2 新增" />|`height: 58rpx;`|
|`.h-30`<Badge text="2.2 新增" />|`height: 60rpx;`|
|`.h-31`<Badge text="2.2 新增" />|`height: 62rpx;`|
|`.h-32`<Badge text="2.2 新增" />|`height: 64rpx;`|
|`.h-33`<Badge text="2.2 新增" />|`height: 66rpx;`|
|`.h-34`<Badge text="2.2 新增" />|`height: 68rpx;`|
|`.h-35`<Badge text="2.2 新增" />|`height: 70rpx;`|
|`.h-36`<Badge text="2.2 新增" />|`height: 72rpx;`|
|`.h-37`<Badge text="2.2 新增" />|`height: 74rpx;`|
|`.h-38`<Badge text="2.2 新增" />|`height: 76rpx;`|
|`.h-39`<Badge text="2.2 新增" />|`height: 78rpx;`|
|`.h-40`<Badge text="2.2 新增" />|`height: 80rpx;`|
|`.h-1-real`|`height: 1rpx;`|

这部分由`$m-height`生成，在引入之前做相关修改可以自定义。

```scss
// 生成 .h-full, .h-half, .h-auto
$m-height: (
  "-full": 100%,
  "-half": 50%,
  "-auto": auto
);
// 生成 .h-*-{8|10|12}
$l-height-denominator: 8, 10, 12;
// 生成 .h-0, .h-1, .h-2
$height-min: 0;
$height-max: 2;
$height-step: 1;
// 移除 .h-1-real，如果 $scale == 1，则该变量默认不生效
$height-has-1-real: false;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/height";
```

## padding

|类名|样式|
|---|---|
|`.p-xs`<Badge text="2.2 移除" />|`padding: 8rpx;`|
|`.p-sm`<Badge text="2.2 移除" />|`padding: 16rpx;`|
|`.p-md`<Badge text="2.2 移除" />|`padding: 24rpx;`|
|`.p-lg`<Badge text="2.2 移除" />|`padding: 32rpx;`|
|`.p-xl`<Badge text="2.2 移除" />|`padding: 40rpx;`|
|`.p-1-6`<Badge text="2.2 移除" />|`padding: 16.66666667%;`|
|`.p-2-6`<Badge text="2.2 移除" />|`padding: 33.33333333%;`|
|`.p-3-6`<Badge text="2.2 移除" />|`padding: 50%;`|
|`.p-4-6`<Badge text="2.2 移除" />|`padding: 66.66666667%;`|
|`.p-5-6`<Badge text="2.2 移除" />|`padding: 83.33333333%;`|
|`.p-1-8`<Badge text="2.2 移除" />|`padding: 12.5%;`|
|`.p-2-8`<Badge text="2.2 移除" />|`padding: 25%;`|
|`.p-3-8`<Badge text="2.2 移除" />|`padding: 37.5%;`|
|`.p-4-8`<Badge text="2.2 移除" />|`padding: 50%;`|
|`.p-5-8`<Badge text="2.2 移除" />|`padding: 62.5%;`|
|`.p-6-8`<Badge text="2.2 移除" />|`padding: 75%;`|
|`.p-7-8`<Badge text="2.2 移除" />|`padding: 87.5%;`|
|`.p-1-10`<Badge text="2.2 移除" />|`padding: 10%;`|
|`.p-2-10`<Badge text="2.2 移除" />|`padding: 20%;`|
|`.p-3-10`<Badge text="2.2 移除" />|`padding: 30%;`|
|`.p-4-10`<Badge text="2.2 移除" />|`padding: 40%;`|
|`.p-5-10`<Badge text="2.2 移除" />|`padding: 50%;`|
|`.p-6-10`<Badge text="2.2 移除" />|`padding: 60%;`|
|`.p-7-10`<Badge text="2.2 移除" />|`padding: 70%;`|
|`.p-8-10`<Badge text="2.2 移除" />|`padding: 80%;`|
|`.p-9-10`<Badge text="2.2 移除" />|`padding: 90%;`|
|`.p-0`|`padding: 0;`|
|`.p-1`|`padding: 2rpx;`|
|`.p-2`|`padding: 4rpx;`|
|`.p-3`|`padding: 6rpx;`|
|`.p-4`|`padding: 8rpx;`|
|`.p-5`|`padding: 10rpx;`|
|`.p-6`|`padding: 12rpx;`|
|`.p-7`|`padding: 14rpx;`|
|`.p-8`|`padding: 16rpx;`|
|`.p-9`|`padding: 18rpx;`|
|`.p-10`|`padding: 20rpx;`|
|`.p-11`|`padding: 22rpx;`|
|`.p-12`|`padding: 24rpx;`|
|`.p-13`|`padding: 26rpx;`|
|`.p-14`|`padding: 28rpx;`|
|`.p-15`|`padding: 30rpx;`|
|`.p-16`|`padding: 32rpx;`|
|`.p-17`|`padding: 34rpx;`|
|`.p-18`|`padding: 36rpx;`|
|`.p-19`|`padding: 38rpx;`|
|`.p-20`|`padding: 40rpx;`|
|`.p-21`|`padding: 42rpx;`|
|`.p-22`|`padding: 44rpx;`|
|`.p-23`|`padding: 46rpx;`|
|`.p-24`|`padding: 48rpx;`|
|`.p-25`<Badge text="2.2 新增" />|`padding: 50rpx;`|
|`.p-26`<Badge text="2.2 新增" />|`padding: 52rpx;`|
|`.p-27`<Badge text="2.2 新增" />|`padding: 54rpx;`|
|`.p-28`<Badge text="2.2 新增" />|`padding: 56rpx;`|
|`.p-29`<Badge text="2.2 新增" />|`padding: 58rpx;`|
|`.p-30`<Badge text="2.2 新增" />|`padding: 60rpx;`|
|`.p-31`<Badge text="2.2 新增" />|`padding: 62rpx;`|
|`.p-32`<Badge text="2.2 新增" />|`padding: 64rpx;`|
|`.p-33`<Badge text="2.2 新增" />|`padding: 66rpx;`|
|`.p-34`<Badge text="2.2 新增" />|`padding: 68rpx;`|
|`.p-35`<Badge text="2.2 新增" />|`padding: 70rpx;`|
|`.p-36`<Badge text="2.2 新增" />|`padding: 72rpx;`|
|`.p-37`<Badge text="2.2 新增" />|`padding: 74rpx;`|
|`.p-38`<Badge text="2.2 新增" />|`padding: 76rpx;`|
|`.p-39`<Badge text="2.2 新增" />|`padding: 78rpx;`|
|`.p-40`<Badge text="2.2 新增" />|`padding: 80rpx;`|
|`.p-1-real`|`padding: 1rpx;`|

支持`.p{y|x|t|r|b|l}-*`，分别对应`padding-top`和`padding-bottom`，`padding-right`和`padding-left`，`padding-top`，`padding-right`，`padding-bottom`，`padding-left`。

```scss
// 生成 .p-xs, .p-sm, .p-md, .p-lg, .p-xl
$scale: 2;
$unit: rpx;
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
// 生成 .p-*-{8|10|12}
$l-padding-denominator: 8, 10, 12;
// 生成 .p-0, .p-1, .p-2
$padding-min: 0;
$padding-max: 2;
$padding-step: 1;
// 移除 .p-1-real，如果 $scale == 1，则该变量默认不生效
$padding-has-1-real: false;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/padding";
```

## margin

|类名|样式|
|---|---|
|`.m-auto`|`margin: auto;`|
|`.m-xs`<Badge text="2.2 移除" />|`margin: 8rpx;`|
|`.m-sm`<Badge text="2.2 移除" />|`margin: 16rpx;`|
|`.m-md`<Badge text="2.2 移除" />|`margin: 24rpx;`|
|`.m-lg`<Badge text="2.2 移除" />|`margin: 32rpx;`|
|`.m-xl`<Badge text="2.2 移除" />|`margin: 40rpx;`|
|`.m-1-6`<Badge text="2.2 移除" />|`margin: 16.66666667%;`|
|`.m-2-6`<Badge text="2.2 移除" />|`margin: 33.33333333%;`|
|`.m-3-6`<Badge text="2.2 移除" />|`margin: 50%;`|
|`.m-4-6`<Badge text="2.2 移除" />|`margin: 66.66666667%;`|
|`.m-5-6`<Badge text="2.2 移除" />|`margin: 83.33333333%;`|
|`.m-1-8`<Badge text="2.2 移除" />|`margin: 12.5%;`|
|`.m-2-8`<Badge text="2.2 移除" />|`margin: 25%;`|
|`.m-3-8`<Badge text="2.2 移除" />|`margin: 37.5%;`|
|`.m-4-8`<Badge text="2.2 移除" />|`margin: 50%;`|
|`.m-5-8`<Badge text="2.2 移除" />|`margin: 62.5%;`|
|`.m-6-8`<Badge text="2.2 移除" />|`margin: 75%;`|
|`.m-7-8`<Badge text="2.2 移除" />|`margin: 87.5%;`|
|`.m-1-10`<Badge text="2.2 移除" />|`margin: 10%;`|
|`.m-2-10`<Badge text="2.2 移除" />|`margin: 20%;`|
|`.m-3-10`<Badge text="2.2 移除" />|`margin: 30%;`|
|`.m-4-10`<Badge text="2.2 移除" />|`margin: 40%;`|
|`.m-5-10`<Badge text="2.2 移除" />|`margin: 50%;`|
|`.m-6-10`<Badge text="2.2 移除" />|`margin: 60%;`|
|`.m-7-10`<Badge text="2.2 移除" />|`margin: 70%;`|
|`.m-8-10`<Badge text="2.2 移除" />|`margin: 80%;`|
|`.m-9-10`<Badge text="2.2 移除" />|`margin: 90%;`|
|`.m-0`|`margin: 0;`|
|`.m-1`|`margin: 2rpx;`|
|`.m-2`|`margin: 4rpx;`|
|`.m-3`|`margin: 6rpx;`|
|`.m-4`|`margin: 8rpx;`|
|`.m-5`|`margin: 10rpx;`|
|`.m-6`|`margin: 12rpx;`|
|`.m-7`|`margin: 14rpx;`|
|`.m-8`|`margin: 16rpx;`|
|`.m-9`|`margin: 18rpx;`|
|`.m-10`|`margin: 20rpx;`|
|`.m-11`|`margin: 22rpx;`|
|`.m-12`|`margin: 24rpx;`|
|`.m-13`|`margin: 26rpx;`|
|`.m-14`|`margin: 28rpx;`|
|`.m-15`|`margin: 30rpx;`|
|`.m-16`|`margin: 32rpx;`|
|`.m-17`|`margin: 34rpx;`|
|`.m-18`|`margin: 36rpx;`|
|`.m-19`|`margin: 38rpx;`|
|`.m-20`|`margin: 40rpx;`|
|`.m-21`|`margin: 42rpx;`|
|`.m-22`|`margin: 44rpx;`|
|`.m-23`|`margin: 46rpx;`|
|`.m-24`|`margin: 48rpx;`|
|`.m-25`<Badge text="2.2 新增" />|`margin: 50rpx;`|
|`.m-26`<Badge text="2.2 新增" />|`margin: 52rpx;`|
|`.m-27`<Badge text="2.2 新增" />|`margin: 54rpx;`|
|`.m-28`<Badge text="2.2 新增" />|`margin: 56rpx;`|
|`.m-29`<Badge text="2.2 新增" />|`margin: 58rpx;`|
|`.m-30`<Badge text="2.2 新增" />|`margin: 60rpx;`|
|`.m-31`<Badge text="2.2 新增" />|`margin: 62rpx;`|
|`.m-32`<Badge text="2.2 新增" />|`margin: 64rpx;`|
|`.m-33`<Badge text="2.2 新增" />|`margin: 66rpx;`|
|`.m-34`<Badge text="2.2 新增" />|`margin: 68rpx;`|
|`.m-35`<Badge text="2.2 新增" />|`margin: 70rpx;`|
|`.m-36`<Badge text="2.2 新增" />|`margin: 72rpx;`|
|`.m-37`<Badge text="2.2 新增" />|`margin: 74rpx;`|
|`.m-38`<Badge text="2.2 新增" />|`margin: 76rpx;`|
|`.m-39`<Badge text="2.2 新增" />|`margin: 78rpx;`|
|`.m-40`<Badge text="2.2 新增" />|`margin: 80rpx;`|
|`.m-1-real`|`margin: 1rpx;`|

支持`.m{y|x|t|r|b|l}-*`，分别对应`margin-top`和`margin-bottom`，`margin-right`和`margin-left`，`margin-top`，`margin-right`，`margin-bottom`，`margin-left`。

```scss
// 生成 .m-auto, .m-xs, .m-sm, .m-md, .m-lg, .m-xl
$scale: 2;
$unit: rpx;
$margin-base: 12;
$margin-diff: 4;
$m-margin: (
  "-auto": auto,
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
// 生成 .m-*-{8|10|12}
$l-margin-denominator: 8, 10, 12;
// 生成 .m-0, .m-1, .m-2
$margin-min: 0;
$margin-max: 2;
$margin-step: 1;
// 移除 .m-1-real，如果 $scale == 1，则该变量默认不生效
$margin-has-1-real: false;

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
|`.overflow-y-auto`|`overflow-y: auto;`|
|`.overflow-y-hidden`|`overflow-y: hidden;`|
|`.overflow-x-auto`|`overflow-x: auto;`|
|`.overflow-x-hidden`|`overflow-x: hidden;`|

```scss
// 生成 .overflow-auto, .overflow-hidden, .overflow-{y|x}-auto,
//     .overflow-{y|x}-hidden
$m-overflow: (
  "-auto": auto,
  "-hidden": hidden,
  "-visible": visible,
  "-scroll": scroll
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/box-model";
// @import "~@modyqyw/mp-scss/classes/box-model/overflow";
```
