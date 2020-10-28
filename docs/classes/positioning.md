# 定位类 positioning

## position

|类名|样式|
|---|---|
|`.relative`|`position: relative;`|
|`.absolute`|`position: absolute;`|
|`.fixed`|`position: fixed;`|

这部分由`$m-position`生成，在引入之前修改`$m-position`可以自定义。

```scss
// 生成 .relative, .absolute, .fixed, .static, .sticky
$m-position: (
  "relative": relative,
  "absolute": absolute,
  "fixed": fixed,
  "static": static,
  "sticky": sticky
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
// 生成 {top|right|bottom|left|inset|inset-y|inset-x}-{0|auto}
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

这部分由`$m-z-index`生成，在引入之前做相关修改可以自定义。

```scss
// 生成 .z-auto
$m-z-index: ("-auto": auto);
// 设置 min, max, step 循环填充映射
// 生成 .z-n10, .z-n5, .z-0, .z-5, .z-10
$z-index-min: -10;
$z-index-max: 10;
$z-index-step: 5;
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/positioning";
@import "~@modyqyw/mp-scss/classes/positioning/z-index";
```