# 组件类总览 components

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components)

## 使用

引入 `components` 后即可使用内置的组件类。务必搭配 `reset` 使用。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/reset";
// @import "~@modyqyw/mp-scss/components";
```

如果需要自定义，那么需要在引入之前写下你的自定义代码。

```scss
// 写下你的自定义代码

// 引入
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/reset";
// @import "~@modyqyw/mp-scss/components";
```

为了尽可能地应对各种情况，组件类默认都会带有大量样式，这就导致了自定义可能会耗费相当大的精力。如果你认为有哪里值得改进，非常欢迎你把实际体验、想法和相关建议作为 issue 提交，我们会竭尽所能跟进，谢谢。
