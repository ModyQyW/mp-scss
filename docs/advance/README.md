# 进阶

## 优化体积

小程序诞生的本意是让用户使用 APP 的少量功能，免去用户下载 APP 的烦恼，方便用户，也因此，小程序的体积有着较为严格的要求。

以当下被广泛使用的微信小程序作为[参考](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages.html)，整个小程序不得超过 16M，超过 2M 时需要分包，每个分包不得超过 2M。

如果把全部样式都引入到小程序中，很容易占据分包的大量空间，因此在设计和实现时，已经尽可能地压缩了最终生成的样式的数量，如色板插入颜色允许使用开关，见[色彩-通用颜色](#通用颜色)。

除此之外，使用者还可以使用 [purgecss](https://purgecss.com/) 进一步地优化体积，它是一个用于移除未使用的样式的工具，可以在多个库/框架内使用。

值得说明的是，`purgecss`目前还存在一些问题（见[#303](https://github.com/FullHuman/purgecss/issues/303)）。如果你不太放心，请先不要使用它。

## 在原生小程序上使用

这个库使用了`scss`开发，但不能排除某些使用原生开发的使用者也想要使用这个库。

在原生小程序上使用，需要生成对应的样式文件，并把文件放入到你需要的位置再引用。

请先克隆这个库到本地。

```sh
git@github.com:MillCloud/mp-scss.git
# for gitee
# git@gitee.com:millcloud/mp-scss.git
npm install -g yarn && yarn
```

修改源码，直到你认为生成的样式符合你的需求。

如果你需要`postcss`处理后的源码（比如添加前缀和压缩），运行以下的命令。

```sh
yarn build
```

如果不需要，运行以下的命令。

```sh
yarn build-no-transform
```

之后，复制`dist`目录下你需要的文件到特定位置再引用。

`dist`目录下会有三个文件夹`acss`，`css`，`wxss`，对应不同的文件后缀，请根据需要使用。

## 缩放倍数和单位

目前，小程序用得最多的缩放倍数是 2，用得最多的单位是`rpx`，见[尺寸单位](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)。因此，这个库使用了`$scale`指定缩放倍数，默认为 2，使用了`$unit`指定单位，默认为`rpx`。

如果要因为设计稿不是 iPhone6 而使用非 2 的缩放倍数，可以手动指定`$scale`。

```scss
// 设计稿是 iPhone5
$scale: 2.34;
// 设计稿是 iPhone6 Plus
$scale: 1.81;
@import "~@modyqyw/mp-scss";
```

如果要使用其它的单位，可以手动指定`$unit`。

```scss
$unit: px;
@import "~@modyqyw/mp-scss";
```

需要注意的是，修改`$scale`和`$unit`会影响通用类、布局类和组件类，我们并不鼓励你修改这两个变量。如果你不能确定修改的后果，你可以只针对你需要的部分做简单的自定义，而不是修改`$scale`和`$unit`。

## !important

使用`!important`可以方便快速地得到自己想要的样式，你可以使用`$has-important`来让通用类`classes`中的样式附带上`!important`。

```scss
$has-important: true;
@import "~@modyqyw/mp-scss";
```

需要注意的是，我们并不鼓励你使用`!important`覆盖样式，这可能会导致难以调整的样式。请尽可能地利用 CSS 的特性来覆盖样式。

## 色彩

### 明亮模式和暗黑模式

默认使用明亮模式。

要使用暗黑模式，需要手动开启暗黑模式的开关。

```scss
$has-dark: true;
@import "~@modyqyw/mp-scss";
```

然后在页面顶级布局元素（一般是`.container`）上使用`.is-dark`来声明使用暗黑模式，这将会自动调整对应的类的表现。

```html
<view class="container is-dark">
  <!-- 所有后代受影响，使用暗黑模式 -->
  ...
</view>
```

要注意 - 开启暗黑模式将会生成额外的样式，占用更多的体积，所以默认没有开启暗黑模式。

色板有两个，分别是明亮模式色板`$m-colors`和暗黑模式色板`$m-colors-reverse`，用于`color`，`background-color`和`border-color`的颜色生成。

### 通用颜色

对于`red`，`volcano`，`orange`，`gold`，`yellow`，`lime`，`green`，`cyan`，`blue`，`geek-blue`，`purple`，`magenta`这 12 种通用颜色，对应地有 12 个基准变量。

```scss
$red: #f5222d !default;
$volcano: #fa541c !default;
$orange: #fa8c16 !default;
$gold: #faad14 !default;
$yellow: #fadb14 !default;
$lime: #a0d911 !default;
$green: #52c41a !default;
$cyan: #13c2c2 !default;
$blue: #1890ff !default;
$geek-blue: #2f54eb !default;
$purple: #722ed1 !default;
$magenta: #eb2f96 !default;
```

库内部使用了`f-get-color`这个方法来生成明亮模式下的通用颜色。下面是使用`$red`生成`$red-1`到`$red-10`的代码，其它基准变量的使用与它类似。

```scss
$red-1: f-get-color($red, 1);
$red-2: f-get-color($red, 2);
$red-3: f-get-color($red, 3);
$red-4: f-get-color($red, 4);
$red-5: f-get-color($red, 5);
$red-6: f-get-color($red, 6);
$red-7: f-get-color($red, 7);
$red-8: f-get-color($red, 8);
$red-9: f-get-color($red, 9);
$red-10: f-get-color($red, 10);
```

而要生成暗黑模式下的通用颜色，则使用了`scss`提供的函数`mix`，布局容器在暗黑模式下的背景颜色变量`$container-background-color-reverse`以及明亮模式下的通用颜色。

```scss
$red-reverse: mix($red, $container-background-color-reverse, 85%);
$red-1-reverse: mix($red-8, $container-background-color-reverse, 15%);
$red-2-reverse: mix($red-7, $container-background-color-reverse, 25%);
$red-3-reverse: mix($red, $container-background-color-reverse, 30%);
$red-4-reverse: mix($red, $container-background-color-reverse, 45%);
$red-5-reverse: mix($red, $container-background-color-reverse, 65%);
$red-6-reverse: mix($red, $container-background-color-reverse, 85%);
$red-7-reverse: mix($red-5, $container-background-color-reverse, 90%);
$red-8-reverse: mix($red-4, $container-background-color-reverse, 95%);
$red-9-reverse: mix($red-3, $container-background-color-reverse, 97%);
$red-10-reverse: mix($red-2, $container-background-color-reverse, 98%);
```

这 12 种通用颜色都有对应的开关，用于判断是否放入`$m-colors`和`$m-colors-reverse`内，默认均为`false`，表示不放入`$m-colors`和`$m-colors-reverse`，但你仍然可以直接使用这些变量。

```scss
$has-red: false !default;
$has-volcano: false !default;
$has-orange: false !default;
$has-gold: false !default;
$has-yellow: false !default;
$has-lime: false !default;
$has-green: false !default;
$has-cyan: false !default;
$has-blue: false !default;
$has-geek-blue: true !default;
$has-purple: false !default;
$has-magenta: false !default;
```

如果你看得比较仔细，你会发现 12 个基准变量的声明都有`!default`。这表明你可以修改这 12 个基准变量，进而修改对应的其它颜色。

```scss
// 修改红色基准变量
$red: #f00;
@import "~@modyqyw/mp-scss";
```

想要把某种通用颜色也放入`$m-colors`和`$m-colors-reverse`，可以指定对应开关值为`true`，同时你也可以直接使用这些变量。

```scss
$has-red: true;
@import "~@modyqyw/mp-scss";
```

在 12 种通用颜色之外，有 4 种颜色比较特殊。`transparent`，`white`，`black`这三者可以通过使用`$has-transparent`，`$has-white`，`$has-black`来分别指定是否放入`$m-colors`，默认均为`true`。

`gray`有指定的色板，你可以直接修改某一项。类似地，您可以使用`$has-gray`来指定是否把它们放入`$m-colors`，默认为`true`。

```scss
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
```

你甚至能添加一个自定义颜色到色板里，下面是添加粉色的示例。

```scss
@import "~@modyqyw/mp-scss";

$pink: #ff1493;
$pink-1: f-get-color($pink, 1);
$pink-2: f-get-color($pink, 2);
$pink-3: f-get-color($pink, 3);
$pink-4: f-get-color($pink, 4);
$pink-5: f-get-color($pink, 5);
$pink-6: f-get-color($pink, 6);
$pink-7: f-get-color($pink, 7);
$pink-8: f-get-color($pink, 8);
$pink-9: f-get-color($pink, 9);
$pink-10: f-get-color($pink, 10);
$pink-reverse: mix($pink, $container-background-color-reverse, 85%);
$pink-1-reverse: mix($pink-8, $container-background-color-reverse, 15%);
$pink-2-reverse: mix($pink-7, $container-background-color-reverse, 25%);
$pink-3-reverse: mix($pink, $container-background-color-reverse, 30%);
$pink-4-reverse: mix($pink, $container-background-color-reverse, 45%);
$pink-5-reverse: mix($pink, $container-background-color-reverse, 65%);
$pink-6-reverse: mix($pink, $container-background-color-reverse, 85%);
$pink-7-reverse: mix($pink-5, $container-background-color-reverse, 90%);
$pink-8-reverse: mix($pink-4, $container-background-color-reverse, 95%);
$pink-9-reverse: mix($pink-3, $container-background-color-reverse, 97%);
$pink-10-reverse: mix($pink-2, $container-background-color-reverse, 98%);

$m-colors: map-merge(
  $m-colors,
  (
    "-pink": $pink,
    "-pink-1": $pink-1,
    "-pink-2": $pink-2,
    "-pink-3": $pink-3,
    "-pink-4": $pink-4,
    "-pink-5": $pink-5,
    "-pink-6": $pink-6,
    "-pink-7": $pink-7,
    "-pink-8": $pink-8,
    "-pink-9": $pink-9,
    "-pink-10": $pink-10
  )
);
$m-colors-reverse: map-merge(
  $m-colors-reverse,
  (
    "-pink": $pink-reverse,
    "-pink-1": $pink-1-reverse,
    "-pink-2": $pink-2-reverse,
    "-pink-3": $pink-3-reverse,
    "-pink-4": $pink-4-reverse,
    "-pink-5": $pink-5-reverse,
    "-pink-6": $pink-6-reverse,
    "-pink-7": $pink-7-reverse,
    "-pink-8": $pink-8-reverse,
    "-pink-9": $pink-9-reverse,
    "-pink-10": $pink-10-reverse
  )
);
```

### 主题颜色

默认内置了`primary`，`success`，`warning`，`error`，`info`这 5 种主题颜色，对应地有 5 个基准变量和 5 个开关变量。

```scss
$primary: #1890ff !default;
$has-primary: true !default;
$success: #52c41a !default;
$has-success: true !default;
$warning: #faad14 !default;
$has-warning: true !default;
$error: #f5222d !default;
$has-error: true !default;
$info: #1890ff !default;
$has-info: true !default;
```

主题颜色的自定义和 12 种通用颜色的自定义一致，此处不再赘述。之所以单独出来，是因为主题颜色会默认放入`$m-colors`和`$m-colors-reverse`里，而 12 种通用颜色默认是不放的，这是为了压缩生成的样式文件体积。

### 色板

如果你对 Ant Design 比较熟悉，你会发现这个项目里使用了 Ant Design 的色板，所以要查看颜色的话，完全可以去查看 Ant Design 的色板。

库内部使用`scss`实现了 Ant Design 的颜色生成方法`f-get-color`，如果有兴趣可以自行[查看 Github 源码](https://github.com/MillCloud/mp-scss/blob/master/utils/functions.scss)或[查看 Gitee 源码](https://gitee.com/MillCloud/mp-scss/blob/master/utils/functions.scss)。

## faq

### 为什么不使用 mixin

mixin 在一定程度上加大了调试的负担，同时也会影响代码检查，我想尽可能地避免使用 mixin。

### 为什么不使用 css 变量

支持度不佳，存在兼容性问题。
