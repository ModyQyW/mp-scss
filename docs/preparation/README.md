# 准备

## 初衷

现有比较好的小程序跨平台框架就两个：[uni-app](https://uniapp.dcloud.io/) 和 [taro](https://taro-docs.jd.com/taro/docs/README.html)。

这两个框架都提供了自己的 ui 库，这很好。但是很多时候，我需要的不是完完整整的 ui 库，而仅仅是无关平台的样式定制，这就导致了这两个框架的 ui 库对于我来说都不是特别合适。再进一步地说，这两个 ui 库都没有深浅主题的切换。

于是我就自己来做一个了。

## 预备知识

- [scss](https://sass-lang.com/)

你需要着重掌握[变量 variables](https://sass-lang.com/documentation/variables)，[字符串 strings](https://sass-lang.com/documentation/values/strings)，[映射 maps](https://sass-lang.com/documentation/values/maps)，[颜色 color](https://sass-lang.com/documentation/modules/color)。这个库里大量地使用了与它们相关的知识。

为什么不使用 mixin？mixin 在一定程度上加大了调试的负担，我想尽可能地避免使用 mixin。
