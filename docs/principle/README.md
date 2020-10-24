# 原则

这里会概括性地说明这个样式库所遵循的一些原则。

不一定现在就要理解这些原则，但有这些原则的印象可以帮助更好地上手这个样式库。

## 目标

- 帮助你快速地写完页面样式。
- 逻辑完全由你自己处理。

## 计划支持

- 微信小程序
- 支付宝小程序

## 设计

### 组合

这个样式库提供了各种各样的类名，尽可能覆盖常用的样式属性。

使用这个库的核心，就是组合提供的类名，实现你想要的样式表现。如果你了解过`tailwindcss`或者`bulma`，那么你已经知道这个核心了。

### 只关心样式

这个库只关心样式，所以你需要自己处理逻辑。

当你要处理某些复杂的逻辑时，这个库可能会显得力不从心。这时候你可以去使用 ui 库，一般来说，ui 库都会封装比较复杂的逻辑供你使用。如果 ui 库的样式不太合适，你可以手动修改。

### 可自定义

大部分提供的类都可以修改相关的变量来自定义，尽可能地让生成的类能匹配你的业务。

当你发现默认提供的类不能满足你的需求时，那就尝试着自定义吧。

## 实现

### 遵循规范

这个库使用了`stylelint`。它跟`eslint`类似，可以用来检查`scss`代码。

使用的规范是`@modyqyw/stylelint-config`，它是基于`stylelint-config-twbs-bootstrap`修改出来的，而`stylelint-config-twbs-bootstrap`又是基于 [mdo/code-guide](https://codeguide.co/#css-declaration-order) 制定的。对于新手来说，很有必要阅读一下。

目前，`@modyqyw/stylelint-config`支撑了内部项目的`css`、`less`、`scss`代码检查。欢迎你尝试使用并提 issue/pr。

### 约定式命名

- 用`f-`作变量名前缀：函数`function`，如`$f-get-color`。
- 用`m-`作变量名前缀：映射`map`，如`$m-position`。
- 用`l-`作变量名前缀：列表`list`，如`$l-denominator`。
- 用`-default`作变量名后缀：作为基准值、可以被直接使用的简单变量，如`$flex-shrink-default`。
- 用`-base`作变量名后缀：作为基准值、需要作简单处理（往往是增减差量，乘以缩放倍数和添加单位）才能被使用的简单变量，如`$spacing-base`。
- 用`-diff`做变量名后缀：用于生成映射初始值的变量，表示相邻级的差量，直接作用于基准值，如`$spacing-diff`。
- 用`-min`作变量名后缀：用于循环填充映射的变量，表示循环开始的值（需要作简单处理才能被使用），如`$spacing-min`。
- 用`-max`作变量名后缀：用于循环填充映射的变量，表示循环结束的值（需要作简单处理才能被使用），如`$spacing-max`。
- 用`-step`作变量名后缀：用于循环填充映射的变量，表示循环循环每次递增的值，如`$spacing-step`。
- 用`-reverse`作变量名后缀：暗黑模式下使用的变量，如`$red-reverse`。
- 通用度较高的变量名不需要包含属性，如`$red`。
- 对应属性的变量名需要包含属性，如`$length-default`。特别地，`$m-position-value`这个映射会用于`top`，`right`，`bottom`，`left`这四个属性上，但变量名没有包含属性。
- 对应元素的变量名需要包含元素，如`$button-display: flex !default;`。

### 工具

- 使用 3 次或以上的代码段需要抽离成函数，如`f-get-color`。
- 使用 3 次或以上的样式不抽离成混合`mixin`，以让 stylelint 发挥校验的作用。

### 变量

- 简单的固定值不需要写成变量形式，如`relative`，`auto`， `100`。
- 考虑到实际开发，需要为大多数变量添加`!default`允许修改默认值，如`$length-default: auto !default;`。
- 能够明确的属性默认值，需要写成变量。这些变量作为初始变量放入 [variables/initial](https://github.com/MillCloud/mp-scss/blob/main/variables/initial.scss)。如`flex-shrink`默认值是 1，需要写成变量`$flex-shrink-default: 1 !default;`。特别地，为了设计上的统一，部分变量没有使用属性默认值，如`line-height`默认值是`normal`，但实际上`$line-height: 1.5715 !default;`。
- 如果属性的值有别称，不需要写成变量，如`font-weight`取`normal`和`400`效果一样，不需要写成`$font-weight-normal: 400 !default;`，直接使用`400`即可。
- 根据已有的变量而生成的变量，作为衍生变量放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/variables/derived.scss)。如`$m-flex-shrink: ("": flex-shrink-default) !default`。
- 小程序本身元素需要使用的变量，作为元素变量放入 [variables/elements](https://github.com/MillCloud/mp-scss/blob/main/variables/elements.scss)。特别地，页面背景色相关变量需要用于生成变量，需要视为衍生变量，放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/variables/derived.scss)。
- 布局相关的变量，作为布局变量放入 [variables/layout](https://github.com/MillCloud/mp-scss/blob/main/variables/layout.scss)。特别地，页面容器背景色需要用于生成变量，需要视为衍生变量，放入 [variables/derived](https://github.com/MillCloud/mp-scss/blob/main/variables/derived.scss)。
- 组件相关的变量，作为组件变量放入 [variables/components](https://github.com/MillCloud/mp-scss/blob/main/variables/layout.scss)。
- 虽然元素变量、布局变量和组件变量也是衍生变量，但使用时具有针对性，所以抽离出来单独放置。

### 重置

- 参考`ress.css`为已有元素添加重置样式。

### 通用

- 提供定位`positioning`相关类。
- 提供盒模型`box-model`相关类。
- 提供排版`typography`相关类。
- 提供视觉`visual`相关类。
- 提供杂项`misc`相关类。

### 元素

- 提供按钮`button`相关类。
- 提供输入框`input`相关类。

### 布局

- 提供布局相关类，包括`.container`，`header`，`.navbar`，`.aside`，`.main`，`.footer`和`.safe-area`。
- 提供栅格系统相关类。

### 组件

- 提供徽标`badge`相关的样式。
- 提供卡片`card`相关的样式。
- 提供分割线`divider`相关的样式。
- 提供图标`icon`相关的样式。
- 提供遮罩`overlay`相关的样式。
- 提倡组合形成更多的组件，比如`overlay`和`card`组合可以作为`modal`使用。
- 如果使用组合实现提供的五个组件的样式将会大大增加代码量，所以单独出来供使用。
