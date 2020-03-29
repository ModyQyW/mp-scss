# mp-scss

一个以小程序样式为主的个人级 scss 集合，包含变量与样式。初期阶段，更新较为频繁，可以等稳定后再尝试。

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

- 目前仅支持 scss，没有计划支持原生 css 和 less。你也可以自己去实现，思路都是差不多的。

- 引入预设变量。之后你可以根据预设变量定制自己的样式。你也可以在某一页面引入以使用预设变量。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/settings";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/settings/index";
```

- 引入预设样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/settings";
@import "~@modyqyw/mp-scss/styles";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/settings/index";
@import "../node_modules/@modyqyw/mp-scss/styles/index";
```

当然，你也可以手动引入你所需要的预设样式。

- 目前默认配色使用 Ant Design 配色，如果要修改，请在引入预设变量前进行细颗粒度的修改，修改该部分会影响默认配色。

```scss
/* 默认为 Ant Design 设置 */
$color-primary: $ad-blue;
$color-success: $ad-green;
$color-warning: $ad-gold;
$color-error: $ad-red;
$color-info: $ad-blue;
$color-primary-reverse: $ad-blue-reverse;
$color-success-reverse: $ad-green-reverse;
$color-warning-reverse: $ad-gold-reverse;
$color-error-reverse: $ad-red-reverse;
$color-info-reverse: $ad-blue-reverse;
$color-title: rgba(0, 0, 0, .85);
$color-title-light: rgba(0, 0, 0, .75);
$color-main: rgba(0, 0, 0, .65);
$color-main-light: rgba(0, 0, 0, .55);
$color-secondary: rgba(0, 0, 0, .45);
$color-disabled: rgba(0, 0, 0, .25);
$color-title-reverse: rgba(255, 255, 255, .85);
$color-title-light-reverse: rgba(255, 255, 255, .75);
$color-main-reverse: rgba(255, 255, 255, .65);
$color-main-light-reverse: rgba(255, 255, 255, .55);
$color-secondary-reverse: rgba(255, 255, 255, .45);
$color-disabled-reverse: rgba(255, 255, 255, .3);
$background-color-light: $ad-gray-1;
$background-color-dark: $ad-gray-12;
/* 使用 Material Design 设置 */
$color-primary: $md-blue;
$color-success: $md-green;
$color-warning: $md-yellow;
$color-error: $md-red;
$color-info: $md-blue;
$color-primary-reverse: $md-blue;
$color-success-reverse: $md-green;
$color-warning-reverse: $md-yellow;
$color-error-reverse: $md-red;
$color-info-reverse: $md-blue;
$color-title: rgba(0, 0, 0, .87);
$color-title-light: rgba(0, 0, 0, .87);
$color-main: rgba(0, 0, 0, .87);
$color-main-light: rgba(0, 0, 0, .87);
$color-secondary: rgba(0, 0, 0, .6);
$color-disabled: rgba(0, 0, 0, .38);
$color-title-reverse: rgba(255, 255, 255, 1);
$color-title-light-reverse: rgba(255, 255, 255, 1);
$color-main-reverse: rgba(255, 255, 255, 1);
$color-main-light-reverse: rgba(255, 255, 255, 1);
$color-secondary-reverse: rgba(255, 255, 255, .7);
$color-disabled-reverse: rgba(255, 255, 255, .5);
$background-color-light: #fff;
$background-color-dark: #121212;
```

- 目前默认使用 rpx 作为长度单位，如果要修改，请在引入预设变量前修改。支持任意值，但是你乱玩就肯定会出一些莫名情况的情况，不保修。

```scss
$unit: rpx; // 使用 rpx 作为长度单位，默认
$unit: px; // 使用 px 作为长度单位
```

- 目前默认会放大到 2 倍，原因见[此处](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。你可以引入预设变量前修改。

```scss
$scale: 2; // 放大到 2 倍，默认
$scale: 1; // 不放大
```

- 推荐做法：在页面容器上添加`light`类或`dark`类。这样会导致某些默认颜色变化（如边框，背景，文字等），同时也会带来一个限制条件：不要使用`light`类或`dark`类同级的元素去定位某一元素。

- 源码阅读顺序建议
  - settings
    - _colors
    - _ratio
    - _spacing
    - _positioning
    - _box-model
    - _typography
    - _visual
    - _misc
  - styles
    - components
    - positioning
    - box-model
    - typography
    - visual
    - misc

## 测试

目前没有测试。欢迎 PR。

## 特性

- scss 实现 Ant Design v3 色板，真香啊.jpg（v4 增添了暗色主题下的色板，正在思考实现中，你也可以在 issue 中提供相关的建议）
- 预设变量，助你定制自己的样式
- 可选的预设样式，引入后通过`class`直接添加样式
- 不测试就上线，所以欢迎小白鼠提 issue，长期维护

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

- [Material Design](https://material.io/)
- [Ant Design](https://ant.design/)
- [bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
- [tailwindcss](https://tailwindcss.com/)
- [bulma](https://bulma.io/)
