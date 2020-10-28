# 杂项类 misc

## opacity

|类名|样式|
|---|---|
|`.opacity-0`|`opacity: 0;`|
|`.opacity-100`|`opacity: 1;`|

这部分由`$m-opacity`生成，在引入之前修改`$m-opacity`可以自定义。

```scss
// 生成 .opacity-0, .opacity-50, .opacity-100
$m-opacity: (
  "-0": 0,
  "-50": .5,
  "-100": 1
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/misc";
@import "~@modyqyw/mp-scss/classes/misc/opacity";
```

## transition

|类名|样式|
|---|---|
|`.transition`|`transition: .48s cubic-bezier(.25, .8, .5, 1);`|

这部分由`$m-transition`生成，在引入之前做相关修改可以自定义。

```scss
// 设置 default
$transition-default: .56s cubic-bezier(.25, .8, .5, 1);
// 生成 .transition
$m-opacity: (
  "": $transition-default
);
// 结合实际情况四选一引入
@import "~@modyqyw/mp-scss";
@import "~@modyqyw/mp-scss/classes";
@import "~@modyqyw/mp-scss/classes/misc";
@import "~@modyqyw/mp-scss/classes/misc/transition";
```
