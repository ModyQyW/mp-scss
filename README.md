# mp-scss

A scss lib for miniprogram. Since miniprogram is used almost only in China, Chinese docs are provided.

一个面向小程序的个人级 scss 样式库，包含 scss 变量 variables，重置样式 normalize，组件样式 components 和类样式 classes。

该样式库的目标是：在仅有原型图的情况下，用这个样式库能快速做出不仅能适配微信小程序和支付宝小程序，而且看起来还过得去的页面。

初期阶段，更新较为频繁且可能存在遗漏，欢迎中肯的意见，建议，issues，prs 等。

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。

### 准备

- 推荐使用 nvm，长期支持版 lts node，长期支持版 npm 和 yarn。
  - 参照以下链接，首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - **不**推荐使用 [Homebrew](https://brew.sh/) 在 Mac 安装 nvm
  - 接着在终端/命令行安装长期支持版 node

    ```sh
    nvm install --lts
    ```

  - 全局升级 npm 到长期支持版，安装 yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

- Git 也是需要的
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 git 是推荐的

### 安装

```sh
yarn add @modyqyw/mp-scss
# or
npm i @modyqyw/mp-scss
```

### 使用

- 下面是简略版文档，[完整版文档](https://modyqyw.github.io/mp-scss/)另外部署。

- 只支持 scss，没有计划支持 css，less 和 stylus。

- 引入预设变量。之后你可以根据预设变量定制自己的样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/variables";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/variables/index";
```

注意：如果你只在`App.vue`的`style`标签或者`app.scss`引入了预设变量文件，你是不能在每个样式标签/文件中使用预设变量的。这与编译机制有关，`App.vue`中的`style`标签和`app.scss`会被编译成微信小程序的`app.wxss`。

要在每个样式标签/文件中都使用预设变量，你可以每个样式标签/文件中都手动引入一次，或配置`sass-loader`的`prependData`选项，把预设变量文件自动引入到每个样式标签/文件中。

- 引入预设重置样式。注意：不要使用微信小程序 v2 样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/variables";
@import "~@modyqyw/mp-scss/normalize";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/variables/index";
@import "../node_modules/@modyqyw/mp-scss/normalize/index";
```

- 引入预设组件样式。注意：不要使用微信小程序 v2 样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/variables";
@import "~@modyqyw/mp-scss/normalize";
@import "~@modyqyw/mp-scss/components";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/variables/index";
@import "../node_modules/@modyqyw/mp-scss/normalize/index";
@import "../node_modules/@modyqyw/mp-scss/components/index";
```

- 引入预设类样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/variables";
@import "~@modyqyw/mp-scss/classes";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/variables/index";
@import "../node_modules/@modyqyw/mp-scss/classes/index";
```

- 引入全部变量与样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/index";
```

注意：这种做法意味着你要重置小程序样式，使用预设类样式和预设组件样式，这很可能会导致样式覆盖问题。如果发生了这类问题，而你认为并不合理，请提 issue 并附上 demo。

- 默认使用 Ant Design 配色。如果要修改，需要在引入预设变量前进行细颗粒度的修改。

```scss
// Dust Red / 薄暮
$red: #f5222d !default;
// Volcano / 火山
$volcano: #fa541c !default;
// Sunset Orange / 日暮
$orange: #fa8c16 !default;
// Calendula Gold / 金盏花
$gold: #faad14 !default;
// Sunrise Yellow / 日出
$yellow: #fadb14 !default;
// Lime / 青柠
$lime: #a0d911 !default;
// Polar Green / 极光绿
$green: #52c41a !default;
// Cyan / 明青
$cyan: #13c2c2 !default;
// Daybreak Blue / 拂晓蓝
$blue: #1890ff !default;
// Geek Blue / 极客蓝
$geek-blue: #2f54eb !default;
// Golden Purple / 酱紫
$purple: #722ed1 !default;
// Magenta / 法式洋红
$magenta: #eb2f96 !default;
// 中性色
$gray: #8c8c8c !default;
$gray-1: #fff !default;
$gray-2: #fafafa !default;
$gray-3: #f5f5f5 !default;
$gray-4: #f0f0f0 !default;
$gray-5: #d9d9d9 !default;
$gray-6: #bfbfbf !default;
$gray-7: #8c8c8c !default;
$gray-8: #595959 !default;
$gray-9: #434343 !default;
$gray-10: #262626 !default;
$gray-11: #1f1f1f !default;
$gray-12: #141414 !default;
$gray-13: #000 !default;
// 功能色
$color-primary: $blue-6 !default;
$color-success: $green-6 !default;
$color-warning: $gold-6 !default;
$color-error: $red-6 !default;
$color-info: $blue-6 !default;
// 文字色
$color-title: rgba(0, 0, 0, .85) !default;
$color-main: rgba(0, 0, 0, .65) !default;
$color-secondary: rgba(0, 0, 0, .45) !default;
$color-disabled: rgba(0, 0, 0, .25) !default;
$color-title-reverse: rgba(255, 255, 255, .85) !default;
$color-main-reverse: rgba(255, 255, 255, .65) !default;
$color-secondary-reverse: rgba(255, 255, 255, .45) !default;
$color-disabled-reverse: rgba(255, 255, 255, .3) !default;
// 背景色
$color-bg-container: $gray-1 !default;
$color-bg-default: rgba(0, 0, 0, .04) !default;
$color-bg-mask: rgba(0, 0, 0, .45) !default;
$color-bg-shadow: rgba(0, 0, 0, .45) !default;
$color-bg-divider: rgba(0, 0, 0, .06) !default;
$color-bg-container-reverse: $gray-12 !default;
$color-bg-default-reverse: rgba(255, 255, 255, .08) !default;
$color-bg-mask-reverse: rgba(255, 255, 255, .55) !default;
$color-bg-shadow-reverse: rgba(255, 255, 255, .55) !default;
$color-bg-divider-reverse: rgba(255, 255, 255, .12) !default;
// 边框色
$color-border-default: rgba(0, 0, 0, .15) !default;
$color-border-default-reverse: rgba(255, 255, 255, .2) !default;
```

- 默认使用 rpx 作为长度单位。如果要修改，需要在引入预设变量前修改。

```scss
$unit: rpx; // 使用 rpx 作为长度单位，默认
$unit: px; // 修改为使用 px 作为长度单位
```

- 默认会对所有长度类数值乘 2，原因见[此处](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。如果要修改，需要在引入预设变量前修改。

```scss
$scale: 2; // 乘 2，默认
$scale: 1; // 修改为不缩放
```

- 默认字体族如下。如果要修改，需要在引入预设变量前修改。

```scss
$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

- 默认基准字体大小值为 14，根据`$unit`和`$scale`计算得出基准字体大小。如果要修改，需要在引入预设变量前修改。

```scss
$font-size-benchmark: 14; // 默认为 14
$line-height-base: $line-height-benchmark * $scale + $unit; // 基准字体大小计算
```

- 默认基准行高值为 22，根据`$unit`和`$scale`计算得出基准字体大小。如果要修改，需要在引入预设变量前修改。

```scss
$line-height-benchmark: 22; // 默认为 22
$line-height-base: $line-height-benchmark * $scale + $unit; // 基准行高计算
```

## 测试

目前没有测试。欢迎 PR。

## 特性

- scss 实现 Ant Design v4 色板
- 预设变量，帮助定制自己的样式
- 长期维护

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 版本命名

使用 [SemVer](http://semver.org/) 进行版本控制。有关可用版本，请参阅此仓库的 [releases](https://github.com/ModyQyW/css-styles/releases)。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/css-styles/contributors) 列表。

## 协议

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## 致谢

- [Ant Design](https://ant.design/)
- [Material Design](https://material.io/)
- [bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
- [bulma](https://bulma.io/)
- [tailwindcss](https://tailwindcss.com/)
- [normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)
