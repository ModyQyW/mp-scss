# 输入框 input

## 默认样式

要使用输入框类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/input";
```

```html
<view class="container">
  <input class="input" placeholder="默认样式" />
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。你也可以显式地在父元素或在`.btn`用`.is-light`指定使用明亮模式，用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container">
  <input class="input" placeholder="明亮模式" />
</view>
<view class="container is-dark">
  <input class="input" placeholder="暗黑模式" />
</view>
```

## 尺寸

使用`.is-small`可以使用更小的`.input`，使用`.is-large`可以使用更大的`.input`。

```html
<view class="container">
  <input class="input is-small" placeholder="small" />
  <input class="input" placeholder="default" />
  <input class="input is-large" placeholder="large" />
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

支持在`.input-wrapper`上使用`.is-light`，`is-dark`，`.is-small`和`.is-large`。
