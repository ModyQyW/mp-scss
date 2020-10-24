# 介绍

## 快速开始

首先安装相关依赖。

```sh
npm i @modyqyw/mp-scss
npm i -D scss sass-loader
# or
# yarn add @modyqyw/mp-scss
# yarn add -D scss sass-loader
```

然后在项目的入口`scss`部分引入这个库。

```scss
@import "~@modyqyw/mp-scss";
```

这样就能使用所有的内置类，体验默认样式了。

如果需要自定义，请阅读需要自定义的部分的文档。

如果你想要在原生开发里使用这个库，可以参考[最佳实践](../best-practices/README.md)的说明。

## 初衷

`@modyqyw/mp-scss`是我在被小程序折磨的时候做出来的样式库。

现有的、比较好的、成体系的、保持更新的小程序跨平台框架有这么几个：

- [uni-app](https://uniapp.dcloud.io/) - 数字天堂出品
- [taro](https://taro.aotu.io/) - 京东出品
- [rax](https://rax.js.org/) - 阿里出品
- [remax](https://remaxjs.org/) - 阿里出品

他们都提供了官方 ui 库或者推荐了社区 ui 库。但是很多时候，我需要的不是一个 ui 库，而是一个简单的样式库，像 tailwindcss 那样的样式库。

于是我就决定，自己参考着`tailwindcss`和其它好几个库/设计模式来做一个，于是就有了`@modyqyw/mp-scss`。我希望这个库不仅对我有帮助，也对正在看文档的你有帮助。

总而言之，`@modyqyw/mp-scss`的目标是帮助你快速地写完页面样式，逻辑完全由你自己处理，计划支持微信小程序和支付宝小程序。

如果你想要的不只是页面样式，那么我会建议你去找一下 ui 库。

## 技术栈

- [scss](https://sass-lang.com/) - 你的项目也必须使用`scss`
- [stylelint](https://stylelint.io/)
  - [@modyqyw/stylelint-config](https://github.com/MillCloud/stylelint-config#readme)

## 功能

- 工具`utils`：Ant Design 色板的实现函数
- 变量`variables`：基本覆盖了常用属性的变量
- 重置`reset`：用于重置小程序默认样式
- 通用`classes`：基本覆盖了常用属性的类
- 元素`elements`：原有元素的相关类
- 布局`layout`：包含页面布局类和栅格系统类
- 组件`components`：快速确定组件样式
- 可自定义：大量可自定义的部分

如果你对这个库感兴趣，你可以

- 阅读[原则部分](../principle/README.md)：了解这个库设计和实现时所遵循的原则
- 阅读[工具部分](../utils/README.md)：了解这个库生成色板颜色的函数
- 阅读[变量部分](../variables/index.md)：了解这个库里的变量
- 阅读[重置部分](../reset/README.md)：了解怎么使用这个库里对小程序样式的重置
- 阅读[通用部分](../classes/index.md)：了解怎么使用这个库里的通用类
- 阅读[元素部分](../elements/index.md)：了解怎么使用这个库里的`button`，`input`的相关类
- 阅读[布局部分](../layout/index.md)：了解怎么使用这个库里的页面布局和栅格系统的相关类
- 阅读[组件部分](../components/index.md)： 了解怎么使用这个库里的五个组件`badge`，`card`，`divider`，`icon`和`overlay`的相关类

- 等你已经了解了怎么使用这个库，你还可以把这个文档作为速查表，而无需翻阅源码。
