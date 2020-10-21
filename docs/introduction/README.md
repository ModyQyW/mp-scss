# 介绍

## 初衷

`@modyqyw/mp-scss`是我在做小程序开发的时候捣腾出来的样式库。

现有的、比较好的、成体系的、保持更新的小程序跨平台框架有这么几个：

- [uni-app](https://uniapp.dcloud.io/) - 数字天堂出品
- [taro](https://taro.aotu.io/) - 京东出品
- [rax](https://rax.js.org/) - 阿里出品
- [remax](https://remaxjs.org/) - 阿里出品

他们都提供了官方 ui 库或者推荐了社区 ui 库。但是很多时候，我需要的不是一个 ui 库，而是一个简单的样式库，像 tailwindcss 和 bulma 那样的。

于是我就决定，自己参考着 tailwindcss 和 bulma 来做一个，于是就有了`@modyqyw/mp-scss`。我希望这个库不仅对我有帮助，也对正在看文档的你有帮助。

总而言之，`@modyqyw/mp-scss`的目标是帮助你快速地写完页面样式，逻辑完全由你自己处理。如果你想要的不只是页面样式，那么我会建议你去找一下 ui 库。

## 技术栈

- [scss](https://sass-lang.com/) - 你的项目也必须使用`scss`
  - [变量 variables](https://sass-lang.com/documentation/variables)
  - [字符串 strings](https://sass-lang.com/documentation/values/strings)
  - [映射 maps](https://sass-lang.com/documentation/values/maps)
  - [列表 lists](https://sass-lang.com/documentation/values/lists)
- [stylelint](https://stylelint.io/)
  - [@modyqyw/stylelint-config](https://github.com/MillCloud/stylelint-config#readme)

## 功能

- 工具，包含了 Ant Design 色板的实现函数
- 变量：基本覆盖了常用属性的变量
- 重置：用于重置小程序默认样式
- 元素：美化原有元素，支持 button 和 input
- 布局：包含页面布局类和 24 格栅栏系统
- 组件：用于快速写出组件的类
- 通用类：基本覆盖了常用属性的类
- 可定制：大量可自定义的部分

如果你对这个库感兴趣，你可以继续阅读[原则部分](../preparation/README.md)来了解这个库设计和实现时所遵循的原则，也可以直接开始阅读[工具部分](../utils/README.md)来一步步了解怎么使用这个库。等你已经了解了怎么使用这个库，你还可以把这个文档作为速查表，而无需翻阅源码。
