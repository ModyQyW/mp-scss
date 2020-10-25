# 指南

`@modyqyw/mp-scss`是一个面向小程序和基于 Flexbox 的 SCSS 库，用于快速实现自定义设计。

`@modyqyw/mp-scss`定位介乎于`tailwindcss`和`bootstrap`，包含的东西比`tailwindcss`多、比`bootstrap`少，更贴近`tailwindcss`。

除了可自定义、提供属性类之外，`@modyqyw/mp-scss`还专门支持了小程序，包含了重置样式，布局样式，组件样式等，目的就是让小程序开发更加简单快捷。

## 特性

- 重置`reset`：重置小程序元素默认样式
- 工具`utils`：内部常用的代码封装
- 变量`variables`：基本覆盖了常用属性的变量
- 通用`classes`：基本覆盖了常用属性的类
- 布局`layout`：包含页面布局类和栅格系统类
- 组件`components`：快速确定组件样式
- 可自定义：大量可自定义的部分
- 支持：持续维护，期望支持微信小程序和支付宝小程序

## 初衷

`@modyqyw/mp-scss`是我在被小程序折磨的时候做出来的样式库。

现有的、比较好的、成体系的、保持更新的小程序跨平台框架有这么几个：

- [uni-app](https://uniapp.dcloud.io/) - 数字天堂出品
- [taro](https://taro.aotu.io/) - 京东出品
- [rax](https://rax.js.org/) - 阿里出品
- [remax](https://remaxjs.org/) - 阿里出品

他们都提供了官方 ui 库或者推荐了社区 ui 库。但很多时候，ui 库不能满足定制化的需求，我更需要一个可以帮我快速实现页面样式的库。

在尝试好几个库无果后，我决定自己来做一个，于是就有了`scss`开发的`@modyqyw/mp-scss`。我希望这个库不仅对我有帮助，也对正在看文档的你有帮助。

## 致谢

`@modyqyw/mp-scss`的诞生离不开`tailwindcss`和`Ant Design`，同时也学习了社区里的优质设计和实现。

以下按首字母顺序排序。

- [Ant Design](https://ant.design/)
- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [Material Design](https://material.io/)
- [ress.css](https://ress-css.surge.sh/)
- [Tailwindcss](https://tailwindcss.com/)
- [Vuetify](https://vuetifyjs.com/)
