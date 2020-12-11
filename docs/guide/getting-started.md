# 快速上手

::: warning 建议
库和文档目前处于`rc`状态，可以投入使用。目前欢迎帮助编写文档和优化代码。

建议使用 [Node.js](https://nodejs.org/en/) 12 或者 14。

[node-sass](https://github.com/sass/node-sass#readme) 在国内安装缓慢且[已经被弃用](https://sass-lang.com/blog/libsass-is-deprecated)，建议转用 [dart-sass](https://github.com/sass/dart-sass#readme)。
:::

首先安装相关依赖。对于不同的框架，可能需要安装额外的依赖，请以框架本身说明为准。

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

比如为页面添加布局。[微信小程序代码片段](https://developers.weixin.qq.com/s/S23bgZmT7qlI)

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="container flex-row">
    <view class="aside h-full">aside</view>
    <view class="main h-full">main</view>
  </view>
  <view class="footer">footer</view>
  <view class="safe-area" />
</view>
```

又比如使用栅格系统。[微信小程序代码片段](https://developers.weixin.qq.com/s/7E3vTZmp7bly)

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="main">
    <view class="row w-full">
      <view class="col col-3">col-3</view>
      <view class="col col-3">col-3</view>
      <view class="col col-3">col-3</view>
      <view class="col col-3">col-3</view>
    </view>
    <view class="row w-full">
      <view class="col col-6 pr-8">col-6</view>
      <view class="col col-6 pl-8">col-6</view>
    </view>
  </view>
  <view class="footer">footer</view>
  <view class="safe-area"></view>
</view>
```

如果需要自定义，那么需要在引入之前写下你的自定义代码。具体的自定义方法可以查看对应的章节。

```scss
// 写下你的自定义代码

// 引入
@import "~@modyqyw/mp-scss";
```

引入是非常灵活的，你可以像上面那样全量引入，也可以单独引入某一个部分。下面的引入语句都能正常工作，你可以根据实际情况使用。

```scss
// 全量引入
@import "~@modyqyw/mp-scss";
// 引入通用类
@import "~@modyqyw/mp-scss/classes";
// 引入通用类里的定位类
@import "~@modyqyw/mp-scss/classes/positioning";
// 引入通用类里的定位类里的 position 相关类
@import "~@modyqyw/mp-scss/classes/positioning/position";
```

这个库是面向小程序的，提倡使用`rpx`，`%`或不使用单位，参考[尺寸单位](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。默认地，这个库使用缩放倍数`$scale`为 2，使用单位`$unit`为`rpx`。

这个库支持使用暗黑模式，但默认只能使用明亮模式，也就是说文档里`.is-dark`相关的部分默认不会生成，你需要手动开启暗黑模式，见[进阶](../advance/README.md#色彩)。

接下来你可以去学习一下[重置](../reset/README.md)，它是这个库里相对独立的一部分，重置小程序默认的样式。你完全可以单独使用它。

你的重点是[通用类](../classes/index.md)，[布局类](../layout/index.md)和[组件类](../components/index.md)，它们讲述了怎么使用这个库绝大部分的功能，怎么做一些自定义的工作。

等你学会如何使用这个库之后，还可以去了解这个库其中所遵循的[原则](./design.md)。

最后也不要忘了查看[进阶](../advance/README.md)，看看有什么进阶用法能用到你的项目上，比如全量引入时的体积优化，修改色板，修改单位，修改缩放倍数等等。

为了方便快速开发，我们也提供了模版。

- [boilerplate-uni-app](https://github.com/ModyQyW/boilerplate-uni-app) - 结合了 uview-ui 和 uni-ui 的 uni-app 模板。
- [boilerplate-taro](https://github.com/ModyQyW/boilerplate-taro) - taro 模板。
- [boilerplate-rax](https://github.com/ModyQyW/boilerplate-rax) - rax 模板。
