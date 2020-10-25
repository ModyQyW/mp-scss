# 快速上手

::: warning 建议
建议安装 [Node.js](https://nodejs.org/en/) 10 或者 12。

国内安装 [node-sass](https://github.com/sass/node-sass#readme) 缓慢，建议转用 [dart-sass](https://github.com/sass/dart-sass#readme)。
:::

安装相关依赖。

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

现在，你应该已经可以使用所有这个库的所有功能。

接下来就可以去学习一下[重置](../reset/README.md)，它是这个库里相对独立的一部分，你完全可以单独使用它。

你的重点是[通用类](../classes/index.md)，[布局类](../layout/index.md)和[组件类](../components/index.md)，它们讲述了怎么使用这个库绝大部分的功能，当然也包含了自定义。

等你学会如何使用这个库之后，还可以去了解这个库其中所遵循的[原则](./purpose.md)。

最后也不要忘了查看[进阶](../advance/README.md)，看看有什么进阶用法能用到你的项目上。
