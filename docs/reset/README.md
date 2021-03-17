---
sidebar: 'auto'
---

# 重置

[源码](https://github.com/ModyQyW/mp-scss/blob/main/reset/index.scss)

## 使用

引入`reset`后即可重置小程序的默认样式。`reset`可以单独使用。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/reset";
```

## 注意

如果你使用了微信小程序[新版组件样式](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)，将会导致重置和其它部分样式无效。

为了确保重置起作用，请不要使用微信小程序新版组件样式。
