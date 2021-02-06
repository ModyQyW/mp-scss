# 杂项类 misc

## opacity

|类名|样式|
|---|---|
|`.opacity-0`|`opacity: 0;`|
|`.opacity-100`|`opacity: 1;`|

```scss
// 生成 .opacity-0, .opacity-50, .opacity-100
$m-opacity: (
  "-0": 0,
  "-50": 0.5,
  "-100": 1
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/misc";
// @import "~@modyqyw/mp-scss/classes/misc/opacity";
```

## transition

|类名|样式|
|---|---|
|`.transition`|`transition: all 0.48s cubic-bezier(.25, .8, .5, 1);`|

```scss
// 生成 .transition
$transition-default: all 0.48s cubic-bezier(.25, .8, .5, 1);
$m-opacity: (
  "": $transition-default
);

@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/classes";
// @import "~@modyqyw/mp-scss/classes/misc";
// @import "~@modyqyw/mp-scss/classes/misc/transition";
```
