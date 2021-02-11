# 输入框 input

## 默认样式

要使用输入框类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/input";
```

```html
<view class="container">
  <input class="input" placeholder="默认样式" />
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <input class="input" placeholder="明亮模式" />
</view>
<view class="container is-dark">
  <input class="input" placeholder="暗黑模式" />
</view>
```

## 尺寸

内置四个尺寸类。其中，`.is-xs` 和 `.is-xl` 是 2.2 新增的。

```html
<view class="container">
  <input class="input is-xs" placeholder="extra small" />
  <input class="input is-sm" placeholder="small" />
  <input class="input" placeholder="default" />
  <input class="input is-lg" placeholder="large" />
  <input class="input is-xl" placeholder="extra large" />
</view>
```

## 输入框组

使用`.input-wrapper`启用输入框组，使用`.input-prefix`添加输入框组的前缀，使用`.input-suffix`添加输入框组的后缀。

```html
<view class="container">
  <view class="input-wrapper">
    <view class="input-prefix">前缀</view>
    <input class="input" placeholder="请输入" />
    <view class="input-suffix">后缀</view>
  </view>
</view>
```

支持在`.input-wrapper`上使用`.is-{xs|sm|lg|xl}`。其中，`.is-xs` 和 `.is-xl` 是 2.2 新增的。

## 变量 <Badge text="2.2 新增" />

下面是一些可供自定义的变量。

|变量名|变量值|
|---|---|
|`$input--border-width-base`|1|
|`$input--padding-y-base`|4|
|`$input--padding-y-base--xs`|0|
|`$input--padding-y-base--sm`|2|
|`$input--padding-y-base--lg`|6|
|`$input--padding-y-base--xl`|8|
|`$input--padding-x-base`|12|
|`$input--padding-x-base--xs`|4|
|`$input--padding-x-base--sm`|8|
|`$input--padding-x-base--lg`|16|
|`$input--padding-x-base--xl`|20|
|`$input--font-size-base`|`$font-size-base`，默认为 14|
|`$input--font-size-base--xs`|`$font-size-base`，默认为 14|
|`$input--font-size-base--sm`|`$font-size-base`，默认为 14|
|`$input--font-size-base--lg`|`$font-size-base`，默认为 14|
|`$input--font-size-base--xl`|`$font-size-base`，默认为 14|
|`$input--line-height`|`$line-height-default`，默认为 1.5|
|`$input--line-height--xs`|`$line-height-default`，默认为 1.5|
|`$input--line-height--sm`|`$line-height-default`，默认为 1.5|
|`$input--line-height--lg`|`$line-height-default`，默认为 1.5|
|`$input--line-height--xl`|`$line-height-default`，默认为 1.5|
|`$input--height-base`|`$input--border-width-base *2 + $input--padding-y-base* 2 + $input--font-size-base * $input--line-height`，默认为 31|
|`$input--height-base--xs`|`$input--border-width-base *2 + $input--padding-y-base--xs* 2 + $input--font-size-base--xs * $input--line-height--xs`，默认为 23|
|`$input--height-base--sm`|`$input--border-width-base *2 + $input--padding-y-base--sm* 2 + $input--font-size-base--sm * $input--line-height--sm`，默认为 27|
|`$input--height-base--lg`|`$input--border-width-base *2 + $input--padding-y-base--lg* 2 + $input--font-size-base--lg * $input--line-height--lg`，默认为 38|
|`$input--height-base--xl`|`$input--border-width-base *2 + $input--padding-y-base--xl* 2 + $input--font-size-base--xl * $input--line-height--xl`，默认为 42|

## FAQ

### input 的 placeholder 样式不正常

- 请指定 placeholder 类名为`input-placeholder`。
- 必要时指如下样式。

```scss
/* stylelint-disable */
.input-placeholder {
  position: absolute;
  top: calc(50% - #{$input--font-size-base * $input--line-height / 2 * $scale + $unit}) !important;

  .is-xs & {
    top: calc(50% - #{$input--font-size-base--xs * $input--line-height--xs / 2 * $scale + $unit}) !important;
  }

  .is-sm & {
    top: calc(50% - #{$input--font-size-base--sm * $input--line-height--sm / 2 * $scale + $unit}) !important;
  }

  .is-lg & {
    top: calc(50% - #{$input--font-size-base--lg * $input--line-height--lg / 2 * $scale + $unit}) !important;
  }

  .is-xl & {
    top: calc(50% - #{$input--font-size-base--xl * $input--line-height--xl / 2 * $scale + $unit}) !important;
  }
}
```
