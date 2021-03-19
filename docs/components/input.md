# 输入框 input

[源码](https://github.com/ModyQyW/mp-scss/blob/main/components/input.scss)

## 默认样式

要使用输入框类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/input";
```

在 `input` 上添加 `.input` 是最简单的使用方式。

```html
<view class="container">
  <input
    class="input"
    placeholder="默认样式"
    placeholder-class="input-placeholder"
  />
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式) 并在 `.container` 上使用 `.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <input
    class="input"
    placeholder="明亮模式"
    placeholder-class="input-placeholder"
  />
</view>
<view class="container is-dark">
  <input
    class="input"
    placeholder="暗黑模式"
    placeholder-class="input-placeholder"
  />
</view>
```

## 尺寸

内置四个尺寸类。

```html
<view class="container">
  <input
    class="input is-xs"
    placeholder="extra small"
    placeholder-class="input-placeholder"
  />
  <input
    class="input is-sm"
    placeholder="small"
    placeholder-class="input-placeholder"
  />
  <input
    class="input"
    placeholder="default"
    placeholder-class="input-placeholder"
  />
  <input
    class="input is-lg"
    placeholder="large"
    placeholder-class="input-placeholder"
  />
  <input
    class="input is-xl"
    placeholder="extra large"
    placeholder-class="input-placeholder"
  />
</view>
```

## 输入框组

使用 `.input-wrapper` 启用输入框组，使用 `.input-prefix` 和 `.input-suffix` 分别添加输入框组的前后缀。

```html
<view class="container">
  <view class="input-wrapper">
    <view class="input-prefix">前缀</view>
    <input
      class="input"
      placeholder="请输入"
      placeholder-class="input-placeholder"
    />
    <view class="input-suffix">后缀</view>
  </view>
</view>
```

支持在 `.input-wrapper` 上使用 `.is-{xs|sm|lg|xl}`，子元素 `.input` 会自动匹配样式。

## 变量

|变量名|默认值|
|---|---|
|`$input--border-width-base`|`1`|
|`$input--padding-y-base`|`4`|
|`$input--padding-y-base--xs`|`0`|
|`$input--padding-y-base--sm`|`2`|
|`$input--padding-y-base--lg`|`6`|
|`$input--padding-y-base--xl`|`8`|
|`$input--padding-x-base`|`12`|
|`$input--padding-x-base--xs`|`4`|
|`$input--padding-x-base--sm`|`8`|
|`$input--padding-x-base--lg`|`16`|
|`$input--padding-x-base--xl`|`20`|
|`$input--font-size-base`|`$font-size-base`|
|`$input--font-size-base--xs`|`$font-size-base`|
|`$input--font-size-base--sm`|`$font-size-base`|
|`$input--font-size-base--lg`|`$font-size-base`|
|`$input--font-size-base--xl`|`$font-size-base`|
|`$input--line-height`|`$line-height-default`|
|`$input--line-height--xs`|`$line-height-default`|
|`$input--line-height--sm`|`$line-height-default`|
|`$input--line-height--lg`|`$line-height-default`|
|`$input--line-height--xl`|`$line-height-default`|
|`$input--height-base`|`$input--border-width-base *2 + $input--padding-y-base* 2 + $input--font-size-base * $input--line-height`|
|`$input--height-base--xs`|`$input--border-width-base *2 + $input--padding-y-base--xs* 2 + $input--font-size-base--xs * $input--line-height--xs`|
|`$input--height-base--sm`|`$input--border-width-base *2 + $input--padding-y-base--sm* 2 + $input--font-size-base--sm * $input--line-height--sm`|
|`$input--height-base--lg`|`$input--border-width-base *2 + $input--padding-y-base--lg* 2 + $input--font-size-base--lg * $input--line-height--lg`|
|`$input--height-base--xl`|`$input--border-width-base *2 + $input--padding-y-base--xl* 2 + $input--font-size-base--xl * $input--line-height--xl`|

## FAQ

### input 的 placeholder 样式不正常

- 请指定 placeholder 类名为`input-placeholder`。
