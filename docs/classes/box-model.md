# 盒模型类 box-model

## box-sizing

|类名|样式|
|---|---|
|`.box-content`|`box-sizing: content-box;`|
|`.box-border`|`box-sizing: border-box;`|

这部分由`$m-box-sizing`生成，在引入之前做相关修改可以自定义。

```scss
// 移除 .box-content
$m-box-sizing: (
  "-border": border-box
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/positioning";
@import "~@modyqyw/mp-scss/classes/positioning/box-sizing";

// 最终得到 .box-border
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

这部分由`$m-display`生成，在引入之前修改`$m-display`可以自定义。

```scss
// 移除 .d-inline
$m-display: (
  "-block": block,
  "-inline-block": inline-block,
  "-flex": flex,
  "-inline-flex": inline-flex,
  "-none": none
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/display";

// 最终得到 .d-block, .d-inline-block, .d-flex, .d-inline-flex, .d-none
```

## flex

|类名|样式|
|---|---|
|`.flex-auto`|`flex: 1 1 auto;`|
|`.flex-none`|`flex: 0 0 auto;`|

这部分由`$m-flex`生成，在引入之前修改`$m-flex`可以自定义。

```scss
// 增加 .flex-default
$m-flex: (
  "-default": 0 1 auto,
  "-auto": 1 1 auto,
  "-none": 0 0 auto
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/flex";

// 最终得到 .flex-default, .flex-auto, .flex-none
```

## flex-direction

|类名|样式|
|---|---|
|`.flex-row`|`flex-direction: row;`|
|`.flex-row-reverse`|`flex-direction: row-reverse;`|
|`.flex-col`|`flex-direction: col;`|
|`.flex-col-reverse`|`flex-direction: col-reverse;`|

这部分由`$m-flex-direction`生成，在引入之前修改`$m-flex-direction`可以自定义。

```scss
// 移除 .flex-row-reverse, .flex-col-reverse
$m-flex-direction: (
  "-row": row,
  "-col": column
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/flex-direction";

// 最终得到 .flex-row, .flex-col
```

## flex-wrap

|类名|样式|
|---|---|
|`.flex-nowrap`|`flex-direction: nowrap;`|
|`.flex-wrap`|`flex-direction: wrap;`|
|`.flex-wrap-reverse`|`flex-direction: wrap-reverse;`|

这部分由`$m-flex-wrap`生成，在引入之前修改`$m-flex-wrap`可以自定义。

```scss
// 移除 .flex-wrap-reverse
$m-flex-wrap: (
  "-nowrap": nowrap,
  "-wrap": wrap
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/flex-wrap";

// 最终得到 .flex-nowrap, .flex-wrap
```

## flex-shrink

|类名|样式|
|---|---|
|`.flex-shrink-0`|`flex-shrink: 0;`|
|`.flex-shrink-1`|`flex-shrink: 1;`|
|`.flex-shrink-2`|`flex-shrink: 2;`|

这部分由`$m-flex-shrink`生成，在引入之前做相关修改可以自定义。

```scss
// 增加 .flex-shrink-default
$m-flex-shrink: (
  "-default": 1
);

// 设置 min, max, step 循环填充映射
$flex-shrink-min: 0;
$flex-shrink-max: 1;
$flex-shrink-step: 1;

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/flex-shrink";

// 最终得到 .flex-shrink-default, .flex-shrink-0, .flex-shrink-1
// 其中 .flex-shrink-default { flex-shrink: 1; }
```

## flex-grow

|类名|样式|
|---|---|
|`.flex-grow-0`|`flex-grow: 0;`|
|`.flex-grow-1`|`flex-grow: 1;`|
|`.flex-grow-2`|`flex-grow: 2;`|

这部分由`$m-flex-grow`生成，在引入之前做相关修改可以自定义。

```scss
// 增加 .flex-grow-default
$m-flex-grow: (
  "-default": 0
);

// 设置 min, max, step 循环填充映射
$flex-grow-min: 0;
$flex-grow-max: 1;
$flex-grow-step: 1;

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/flex-grow";

// 最终得到 .flex-grow-default, .flex-grow-0, .flex-grow-1
// 其中 .flex-grow-default { flex-grow: 0; }
```

## align-content

|类名|样式|
|---|---|
|`.align-content-start`|`align-content: flex-start;`|
|`.align-content-end`|`align-content: flex-end;`|
|`.align-content-center`|`align-content: center;`|
|`.align-content-space-between`|`align-content: space-between;`|
|`.align-content-space-around`|`align-content: space-around;`|
|`.align-content-space-evenly`|`align-content: space-evenly;`|
|`.align-content-stretch`|`align-content: stretch;`|

这部分由`$m-align-content`生成，在引入之前修改`$m-align-content`可以自定义。

```scss
// 移除 .align-content-stretch
$m-align-content: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center,
  "-space-between": space-between,
  "-space-around": space-around,
  "-space-evenly": space-evenly
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/align-content";

// 最终得到 .align-content-start, .align-content-end, .align-content-center, .align-content-space-between, .align-content-space-around, .align-content-space-evenly
```

## align-items

|类名|样式|
|---|---|
|`.align-start`|`align-items: flex-start;`|
|`.align-end`|`align-items: flex-end;`|
|`.align-center`|`align-items: center;`|
|`.align-baseline`|`align-items: baseline;`|
|`.align-stretch`|`align-items: stretch;`|

这部分由`$m-align-items`生成，在引入之前修改`$m-align-items`可以自定义。

```scss
// 移除 .align-baseline, .align-stretch
$m-align-items: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/align-items";

// 最终得到 .align-start, .align-end, .align-center
```

## align-self

|类名|样式|
|---|---|
|`.align-self-auto`|`align-self: auto;`|
|`.align-self-start`|`align-self: flex-start;`|
|`.align-self-end`|`align-self: flex-end;`|
|`.align-self-center`|`align-self: center;`|
|`.align-self-stretch`|`align-self: stretch;`|

这部分由`$m-align-self`生成，在引入之前修改`$m-align-self`可以自定义。

```scss
// 移除 .align-self-stretch
$m-align-self: (
  "-auto": auto,
  "-start": flex-start,
  "-end": flex-end,
  "-center": center
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/align-self";

// 最终得到 .align-self-auto, .align-self-start, .align-self-end, .align-self-center
```

## justify-content

|类名|样式|
|---|---|
|`.justify-start`|`justify-content: flex-start;`|
|`.justify-end`|`justify-content: flex-end;`|
|`.justify-center`|`justify-content: center;`|
|`.justify-space-between`|`justify-content: space-between;`|
|`.justify-space-around`|`justify-content: space-around;`|
|`.justify-space-evenly`|`justify-content: space-evenly;`|
|`.justify-stretch`|`justify-content: stretch;`|

这部分由`$m-justify-content`生成，在引入之前修改`$m-justify-content`可以自定义。

```scss
// 移除 .justify-stretch
$m-justify-content: (
  "-start": flex-start,
  "-end": flex-end,
  "-center": center,
  "-space-between": space-between,
  "-space-around": space-around,
  "-space-evenly": space-evenly
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/justify-content";

// 最终得到 .justify-start, .justify-end, .justify-center, .justify-space-between, .justify-space-around, .justify-space-evenly
```

## order

|类名|样式|
|---|---|
|`.order-first`|`order: -9999;`|
|`.order-last`|`order: 9999;`|
|`.order-n2`|`order: -2;`|
|`.order-n1`|`order: -1;`|
|`.order-0`|`order: 0;`|
|`.order-1`|`order: 1;`|
|`.order-2`|`order: 2;`|

这部分由`$m-order`生成，在引入之前做相关修改可以自定义。

```scss
// 移除 .order-first, .order-last
$m-order: ();

// 设置 min, max, step 循环填充映射
$order-min: 0;
$order-max: 2;
$order-step: 1;

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/order";

// 最终得到 .order-0, .order-1, .order-2
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

这部分由`$m-overflow`生成，在引入之前修改`$m-overflow`可以自定义。

```scss
// 增加 .overflow-visible, .overflow-y-visible, .overflow-x-visible, .overflow-scroll, .overflow-y-scroll, .overflow-x-scroll
$m-overflow: (
  "-auto": auto,
  "-hidden": hidden,
  "-visible": visible,
  "-scroll": scroll
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/box-model";
@import "~@modyqyw/mp-scss/classes/box-model/overflow";

// 最终得到 .overflow-auto, .overflow-hidden, .overflow-visible, .overflow-scroll, .overflow-y-auto, .overflow-y-hidden, .overflow-y-visible, .overflow-y-scroll, .overflow-x-auto, .overflow-x-hidden, .overflow-x-visible, .overflow-x-scroll
```
