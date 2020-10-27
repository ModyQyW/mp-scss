# 定位类 positioning

## position

|类名|样式|
|---|---|
|`.relative`|`position: relative;`|
|`.absolute`|`position: absolute;`|
|`.fixed`|`position: fixed;`|
|`.static`|`position: static;`|
|`.sticky`|`position: sticky;`|

这部分由`$m-position`生成，在引入之前修改`$m-position`可以自定义。

```scss
// 移除 .static, .sticky
$m-position: (
  "relative": relative,
  "absolute": absolute,
  "fixed": fixed
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/positioning";
@import "~@modyqyw/mp-scss/classes/positioning/position";
```

## top/right/bottom/left

|类名|样式|
|---|---|
|`.top-0`|`top: 0;`|
|`.right-0`|`right: 0;`|
|`.bottom-0`|`bottom: 0;`|
|`.left-0`|`left: 0;`|
|`.inset-0`|`top: 0; right: 0; bottom: 0; left: 0;`|
|`.inset-y-0`|`top: 0; bottom: 0;`|
|`.inset-x-0`|`right: 0; left: 0;`|

这部分由`$m-position-value`生成，在引入之前修改`$m-position-value`可以自定义。

```scss
// 增加 .top-auto, .right-auto, .bottom-auto, .left-auto, .inset-auto, .inset-y-auto, .inset-x-auto
$m-position-value: (
  "-0": 0,
  "-auto": auto
);

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/positioning";
@import "~@modyqyw/mp-scss/classes/positioning/position-value";
```

## z-index

|类名|样式|
|---|---|
|`.z-0`|`z-index: 0;`|
|`.z-10`|`z-index: 10;`|
|`.z-20`|`z-index: 20;`|
|`.z-30`|`z-index: 30;`|
|`.z-40`|`z-index: 40;`|
|`.z-50`|`z-index: 50;`|
|`.z-60`|`z-index: 60;`|
|`.z-70`|`z-index: 70;`|
|`.z-80`|`z-index: 80;`|
|`.z-90`|`z-index: 90;`|
|`.z-100`|`z-index: 100;`|
|`.z-110`|`z-index: 110;`|
|`.z-120`|`z-index: 120;`|

这部分由`$m-z-index`生成，在引入之前做相关修改可以自定义。

```scss
// 增加 .z-auto
$m-z-index: ("-auto": auto);

// 设置 min, max, step 循环填充映射
$z-index-min: -10;
$z-index-max: 10;
$z-index-step: 5;

// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/positioning";
@import "~@modyqyw/mp-scss/classes/positioning/z-index";

// 最终得到 .z-auto, .z-n10, .z-n5, .z-0, .z-5, .z-10
```
