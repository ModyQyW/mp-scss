# 准备

## 初衷

现有的、比较好的、成体系的、保持更新的小程序跨平台框架有这么几个：

- [uni-app](https://uniapp.dcloud.io/) - 数字天堂出品
- [taro](https://taro.aotu.io/) - 京东出品
- [rax](https://rax.js.org/) - 阿里出品
- [remax](https://remaxjs.org/) - 阿里出品

他们都提供了官方 ui 库或者推荐了社区 ui 库，这很好。

但是很多时候，我需要的不是完完整整的 ui 库，而是一些简简单单的样式。

于是我就决定，自己参考着 tailwindcss 和 bulma 来做一个。

我希望这个库不仅对我有帮助，也对正在看文档的你有帮助。

## 预备知识

- [scss](https://sass-lang.com/)

你需要着重掌握[变量 variables](https://sass-lang.com/documentation/variables)，[字符串 strings](https://sass-lang.com/documentation/values/strings)，[映射 maps](https://sass-lang.com/documentation/values/maps)，[颜色 color](https://sass-lang.com/documentation/modules/color)。这个库里大量地使用了与它们相关的知识。

- [stylelint](https://stylelint.io/)

我使用了 stylelint + 魔改的 [bootstrap 规范](https://github.com/twbs/stylelint-config-twbs-bootstrap)来检查代码。

为什么不使用 mixin？mixin 在一定程度上加大了调试的负担，同时也会影响代码检查，我想尽可能地避免使用 mixin。

或许你最初还会疑惑为什么我不打算做 css 和 less 的版本，一部分原因是我没有那么多的精力，另一部分则是 css 变量的支持在小程序上可能会出现问题，less 和 stylus 没有找到较好的现成的规则供我使用。

完整版文档将在 v2 / v3 版本推出。
