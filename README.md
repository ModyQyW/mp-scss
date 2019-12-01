# mp-scss

个人在小程序中使用的 scss 集合。我觉得它会覆盖到你需要的方方面面、给你带来便利。

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。

### 准备

- 推荐使用 nvm，长期支持版 lts node，长期支持版 npm 和 yarn。
  - 参照以下链接，首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 nvm 是**不**推荐的
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

- 目前仅支持 scss，没有计划支持原生 css 和 less，虽然我都有思路。

- 引入预设变量。之后你可以根据预设变量定制自己的样式。你也可以在某一页面引入以使用预设变量。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/index";
```

- 引入预设样式。

```scss
/* uni-app @/App.vue 需要手动先添加 sass 和 sass-loader */
@import "~@modyqyw/mp-scss/styles";
```

```scss
/* taro @/app.scss */
@import "../node_modules/@modyqyw/mp-scss/styles/index";
```

当然，你也可以手动引入你所需要的预设样式。

- 目前默认配色使用 Ant Design 配色，如果要修改，请在引入预设变量前进行细颗粒度的修改，修改该部分会影响默认配色。

```scss
/* 默认为 Ant Design 配色 */
$primary-color: $ad-blue;
$success-color: $ad-green;
$warning-color: $ad-gold;
$error-color: $ad-red;
$info-color: $ad-blue;
/* 使用 Material Design 配色 */
$primary-color: $md-blue;
$success-color: $md-green;
$warning-color: $md-yellow;
$error-color: $md-red;
$info-color: $md-blue;
/* 使用 html 配色 */
$primary-color: blue;
$success-color: green;
$warning-color: yellow;
$error-color: red;
$info-color: blue;
```

- 目前默认使用 rpx 作为长度单位，如果要修改，请在引入预设变量前修改。支持任意值，但是你乱玩就肯定会出一些莫名情况的情况，不保修。

```scss
$unit: rpx; // 使用 rpx 作为长度单位，默认
$unit: px; // 使用 px 作为长度单位
```

- 目前默认会放大到 2 倍，原因见[此处](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。你可以引入预设变量前修改。

```scss
$scale: 2; // 放大到 2 倍，默认
$scale: 1; // 我的用户眼睛很好，不放大
```

- 在容器上添加`light`类或`dark`类会导致某些默认颜色变化，限制条件是不要使用`light`类或`dark`类同级的元素去定位某一元素。假装能切换主题吧，萨普莱斯。

## 测试

目前没有测试。欢迎 PR。

## 特性

- scss 自实现 Ant Design v3 色板，真香啊.jpg
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
- [ElementUI](https://element.eleme.io/)
- [@mdo/code-guide](https://github.com/mdo/code-guide)
- [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
