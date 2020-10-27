# 实现

## 规范

`stylelint` + `@modyqyw/stylelint-config`

### 工具 utils

- 使用 3 次或以上的代码段需要抽离成函数，如`f-get-color`。
- 使用 3 次或以上的样式不抽离成混合`mixin`，以让`stylelint`发挥校验、修正的作用。

### 变量 variables

- 变量划分为初始变量`initial variables`，衍生变量`derived variables`，布局变量`layout variables`和组件变量`components variables`。
  - 初始变量 - 能够明确初始值，且不依赖于其它变量的变量。
  - 衍生变量 - 依赖其它变量或会做其它处理的变量。
  - 布局变量 - 特殊的初始变量/衍生变量，包含页面布局变量和栅格系统变量。
  - 组件变量 - 特殊的初始变量/衍生变量，包含组件使用的变量。
- 变量名没有包含属性名 - 通用度较高的变量，如`$unit`和`$scale`。
- 变量名包括`has` - 表示是否需要把变量填充到对应映射里，如`$has-red`。
- 变量名前缀是属性名或变量名包含属性名 - 和该属性相关的变量，如`$m-position`。
  - 特别地，`$m-position-value`这个映射会用于`top`，`right`，`bottom`，`left`这四个属性上，但变量名没有包含属性。
- 变量名前缀是`f-` - 函数`function`，如`$f-get-color`。
- 变量名前缀是`m-` - 映射`map`，如`$m-position`。
  - 当对应的属性使用语义化命名且不会混淆时，键可以是空字符串。极少数情况为了方便开发，也可以使用空字符串作为键。
  - `$m-font-family`会生成唯一的`.font*`类，可以使用空字符串作为默认值的键，对应的类就是`.font`。
  - `background`相关属性生成的`.bg*`类不唯一，但`$m-background-color`生成的`.bg*`类不会和其它的混淆，所以`$m-background-color`里面也可以使用空字符串作为默认值的键。
  - `.border*`类由多个相关属性共享，但`.border`本身可以明确表达需要边框的意图，对应地可以在`$m-border-color`，`$m-border-style`，`$m-border-width`都使用空字符串作为默认值的键，进而保证`.border`类的样式方便开发，但必须允许使用者自定义。
- 变量名前缀是`l-` - 列表`list`，如`$l-width-denominator`。
- 变量名后缀是`-default` - 作为基准值、可以被直接使用的简单变量，如`$line-height-base`。
- 变量名后缀是`-base` - 作为基准值、需要作简单处理（往往是增减差量，乘以缩放倍数和添加单位）才能被使用的简单变量，如`$padding-base`。
- 变量名后缀是`-diff` - 用于生成映射初始值的变量，表示差量，直接被基准值加减，如`$padding-diff`。
- 变量名后缀是`-min` - 用于循环填充映射的变量，表示循环开始的值，如`$padding-min`。
- 变量名后缀是`-max` - 用于循环填充映射的变量，表示循环结束的值，如`$padding-max`。
- 变量名后缀是`-step` - 用于循环填充映射的变量，表示循环循环每次递增的值，如`$padding-step`。
- 变量名后缀是`-reverse` - 暗黑模式下使用的变量，如`$red-reverse`。
- 变量名后缀是`-has-1-real` - 在`$scale`不为 1 时有效，填充不乘以缩放倍数、只添加单位的值到对应属性的映射里。
- 简单的固定值不需要写成变量，如`relative`，`auto`， `100`。
- 为不会带来破坏性影响的变量添加`!default`，允许修改默认值。但不会添加校验，如果自定义变量错误将会无法正常使用。

### 重置 reset

- 以微信小程序为基准，结合`ress.css`，重置小程序默认的样式。

### 通用类 classes

- 提供定位类`positioning`。
- 提供盒模型类`box-model`。
- 提供排版类`typography`。
- 提供视觉类`visual`。
- 提供杂项类`misc`。

### 布局类 layout

- 提供页面布局类。
- 提供栅格系统类。

### 组件类 components

- 提供徽标`badge`相关类。
- 提供按钮`.btn`相关类。
- 提供卡片`.card`相关类。
- 提供分割线`.divider`相关类。
- 提供图标`.icon`相关类。
- 提供输入框`.input`相关类。
- 提供遮罩`.overlay`相关类。
- 提倡组合形成更多的组件，比如`overlay`和`card`组合可以作为`modal`使用。
- 如果使用组合实现提供的五个组件的样式将会大大增加代码量，所以单独出来供使用。
