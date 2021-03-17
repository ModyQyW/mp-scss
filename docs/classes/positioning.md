# 定位类 positioning

[源码](https://github.com/ModyQyW/mp-scss/blob/main/classes/positioning)

## position

|类名|样式|
|---|---|
|`.relative`|`position: relative;`|
|`.absolute`|`position: absolute;`|
|`.static`|`position: static;`|
|`.fixed`|`position: fixed;`|

```scss
// 生成 .relative, .absolute, .fixed
$m-position: (
  "relative": relative,
  "absolute": absolute,
  "static": static,
  "fixed": fixed
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/positioning";
// @import "~@modyqyw/mp-scss/classes/positioning/position";
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
|`.top-auto`|`top: auto;`|
|`.right-auto`|`right: auto;`|
|`.bottom-auto`|`bottom: auto;`|
|`.left-auto`|`left: auto;`|
|`.inset-auto`|`top: auto; right: auto; bottom: auto; left: auto;`|
|`.inset-y-auto`|`top: auto; bottom: auto;`|
|`.inset-x-auto`|`right: auto; left: auto;`|

```scss
// 生成 {top|right|bottom|left|inset|inset-y|inset-x}-{0|auto}
$m-position-value: (
  "-0": 0,
  "-auto": auto
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/positioning";
// @import "~@modyqyw/mp-scss/classes/positioning/position-value";
```

## z-index

|类名|样式|
|---|---|
|`.z-n50`|`z-index: -50;`|
|`.z-n40`|`z-index: -40;`|
|`.z-n30`|`z-index: -30;`|
|`.z-n20`|`z-index: -20;`|
|`.z-n10`|`z-index: -10;`|
|`.z-0`|`z-index: 0;`|
|`.z-10`|`z-index: 10;`|
|`.z-20`|`z-index: 20;`|
|`.z-30`|`z-index: 30;`|
|`.z-40`|`z-index: 40;`|
|`.z-50`|`z-index: 50;`|

```scss
// 生成 .z-auto
$m-z-index: (
  "-auto": auto
);
// 生成 .z-{n50|n40|n30|n20|...||40|50}
$z-index-min: -50;
$z-index-max: 50;
$z-index-step: 10;

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/positioning";
// @import "~@modyqyw/mp-scss/classes/positioning/z-index";
```
