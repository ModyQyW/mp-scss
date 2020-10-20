# 原则

这里会概括性地说明这个样式库所遵循的一些原则。

## 目标

- 帮助你快速地写完页面样式。
- 逻辑完全由你自己处理。

## 设计

### 组合

这个样式库提供了各种各样的类名，尽可能全面地覆盖了小程序用到的样式属性。

使用这个库的核心，就是组合提供的类名，实现你想要的样式表现。如果你了解过`tailwindcss`或者`bulma`，那么你已经知道这个核心了（毕竟我就是参考着`tailwindcss`和`bulma`做的）。

### 只关心样式

这个库只关心样式，所以你需要自己处理逻辑。

当你要处理某些复杂的逻辑时，这个库可能会显得力不从心。这时候你可以去使用 ui 库，一般来说，ui 库都会封装比较复杂的逻辑供你使用。如果 ui 库的样式不太合适，你可以手动修改。

## 实现

### 遵循规范

这个库使用了`stylelint`。它跟`eslint`类似，可以用来检查`scss`代码。

使用的规范是`@modyqyw/stylelint-config`，它是基于`stylelint-config-twbs-bootstrap`修改出来的，而`stylelint-config-twbs-bootstrap`又是基于 [mdo/code-guide](https://codeguide.co/#css-declaration-order) 制定的。对于新手来说，很有必要阅读一下。

目前，`@modyqyw/stylelint-config`支撑了内部项目的`css`、`less`、`scss`代码检查。欢迎你尝试使用并提 issue/pr。

### 约定式命名

- 以`f-`开头的是`scss`的函数`function`，如`$f-get-color`，放入 utils/functions。
- 以`m-`开头的是`scss`的映射`map`，如`$m-position`。
- 以`l-`开头的是`scss`的列表`list`，如`$l-denominator`。
- 作为基准值、可以被直接使用的简单变量，名字后缀是`-default`，如`$flex-shrink-default`。
- 作为基准值、需要作简单处理（往往是乘以缩放倍数和添加单位）才能被使用的简单变量，名字后缀是`-base`，如`$spacing-base`。

### 函数

- 使用 3 次或以上的代码段需要抽离成函数，如`f-get-color`。

### 变量

- 简单的固定值不需要写成变量形式，如`relative`，`auto`， `100`。
- 能够明确的样式属性默认值，需要写成变量。这些变量作为初始变量放入 [variables/initial](https://github.com/MillCloud/mp-scss/blob/main/src/variables/initial.scss)。如`flex-shrink`默认值是 1，需要写成变量`$flex-shrink-default: 1;`。
- 为了循环填充映射，需要`-min`，`-max`，`-step`结尾的变量，它们分别表示循环开始的值（需要作简单处理才能被使用），循环结束的值（需要作简单处理才能被使用）和循环每次递增的值。这些变量作为初始变量放入 [variables/initial](https://github.com/MillCloud/mp-scss/blob/main/src/variables/initial.scss)，如`$length-min: 0;`，`$length-max: 256;`和`$length-step: 1;`。
- 考虑到实际开发，需要为大多数变量添加`!default`供使用者修改默认值，如`$flex-shrink-default: 1 !default;`，`$length-min: 0 !default;`，`$length-max: 256 !default;`和`$length-step: 1 !default;`。
- 根据已有的变量而生成的变量，作为衍生变量放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)。
- 小程序本身元素需要使用的变量，作为元素变量放入 [variables/elements](https://github.com/MillCloud/mp-scss/blob/main/src/variables/elements.scss)。特别地，页面背景色相关变量需要用于生成变量，需要视为衍生变量，放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)。
- 布局相关的变量，作为布局变量放入 [variables/layout](https://github.com/MillCloud/mp-scss/blob/main/src/variables/layout.scss)。特别地，容器背景色需要用于生成变量，需要视为衍生变量，放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)。
- 组件相关的变量，作为组件变量，放入 [variables/components](https://github.com/MillCloud/mp-scss/blob/main/src/variables/layout.scss)。
- 虽然元素变量、布局变量和组件变量也是衍生变量，但使用时具有针对性，所以抽离出来单独放置。

### 重置

- 参考`ress.css`为已有元素添加重置样式。

### 元素

- 为`button`添加美化，参考`bulma`和`antd`。
- 为`input`添加美化，参考`bootstrap`，`bulma`和`antd`。

### 布局

- 提供布局相关的样式，包括`.container`，`header`，`.navbar`，`.aside`，`.main`，`.footer`和`.safe-area`。
- 提供 24 格栅栏系统，格数可供修改。

### 组件

- 提供`badge`相关的样式。
- 提供`card`相关的样式。
- 提供`divider`相关的样式。
- 提供`icon`相关的样式。
- 提供`overlay`相关的样式。
- 提倡组合形成更多的组件，比如`overlay`和`card`组合可以作为`modal`使用。
- 常用五个组件如果使用组合将会大大增加代码量，所以单独出来供使用。

### 通用类

- 提供`positioning`相关的类名。
- 提供`box-model`相关的类名。
- 提供`typography`相关的类名。
- 提供`visual`相关的类名。
- 提供`misc`相关的类名。
