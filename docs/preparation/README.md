# 准备

## 初衷

现有比较好的小程序跨平台框架就两个：[uni-app](https://uniapp.dcloud.io/) 和 [taro](https://taro-docs.jd.com/taro/docs/README.html)。

这两个框架都提供了自己的 ui 库，这很好。但是很多时候，我需要的不是完完整整的 ui 库，而仅仅是无关平台的样式定制，这也就意味着这两个框架的 ui 库对于我来说都不是特别合适。再进一步地说，这两个 ui 库都没有深浅色主题的切换。

于是我就决定，自己来做一个。

## 预备知识

- [scss](https://sass-lang.com/)

你需要着重掌握[变量 variables](https://sass-lang.com/documentation/variables)，[字符串 strings](https://sass-lang.com/documentation/values/strings)，[映射 maps](https://sass-lang.com/documentation/values/maps)，[颜色 color](https://sass-lang.com/documentation/modules/color)。这个库里大量地使用了与它们相关的知识。

- [stylelint](https://stylelint.io/)

我使用了 stylelint + [bootstrap 规范](https://github.com/twbs/stylelint-config-twbs-bootstrap)来检查代码。当然我在它的基础上做了些许改动。

为什么不使用 mixin？mixin 在一定程度上加大了调试的负担，同时也会影响代码检查，我想尽可能地避免使用 mixin。

或许你最初还会疑惑为什么我不打算做 css 和 less 的版本，一部分原因是我没有那么多的精力，另一部分则是 css 变量的支持在小程序上可能会出现问题，less 和 stylus 没有找到较好的现成的规则供我使用。
