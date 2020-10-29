# 快速上手

::: warning 建议
库和文档目前处于`beta`状态，请等待正式版放出后投入使用，目前欢迎帮助编写文档和优化代码。

建议安装 [Node.js](https://nodejs.org/en/) 10 或者 12。

国内安装 [node-sass](https://github.com/sass/node-sass#readme) 缓慢，建议转用 [dart-sass](https://github.com/sass/dart-sass#readme)。
:::

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

现在，你应该已经可以使用所有这个库的所有功能。

比如为页面添加布局。

```html
<view class="container h-full">
  <view class="header">header</view>
  <view class="navbar">navbar</view>
  <view class="container flex-row">
    <view class="aside">aside</view>
    <view class="main">main</view>
  </view>
  <view class="footer">footer</view>
</view>
```

又比如使用栅格系统和组件。

```html
<view class="container">
  <view class="row">
    <view class="col">
      <button class="btn is-primary">
        button
        <view class="badge">1</view>
      </button>
    </view>
    <view class="col">
      <view class="input-wrapper">
        <view class="input-prefix">prefix</view>
        <input class="input"></input>
        <view class="input-suffix">suffix</view>
      </view>
    </view>
    <view class="col">
	  <view class="card">
		<view class="card-header">header</view>
		<view class="divider m-0"></view>
		<view class="card-content border-b">content</view>
		<view class="card-footer">footer</view>
	  </view>
    </view>
  </view>
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

这个库是面向小程序的，提倡使用`rpx`，`%`或不使用单位，参考[尺寸单位](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。默认地，这个库使用最多的单位`$unit`为`rpx`，缩放倍数`$scale`为 2。

接下来你可以去学习一下[重置](../reset/README.md)，它是这个库里相对独立的一部分，以微信小程序为基准，结合`ress.css`，重置小程序默认的样式。你完全可以单独使用它。

你的重点是[通用类](../classes/index.md)，[布局类](../layout/index.md)和[组件类](../components/index.md)，它们讲述了怎么使用这个库绝大部分的功能，怎么做一些自定义的工作。

等你学会如何使用这个库之后，还可以去了解这个库其中所遵循的[原则](./design.md)。

最后也不要忘了查看[进阶](../advance/README.md)，看看有什么进阶用法能用到你的项目上，比如全量引入时的体积优化，修改色板，修改单位，修改缩放倍数等等。
