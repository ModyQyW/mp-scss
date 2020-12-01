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

使用`.is-sm`可以使用更小的`.input`，使用`.is-lg`可以使用更大的`.input`。

```html
<view class="container">
  <input class="input is-sm" placeholder="small" />
  <input class="input" placeholder="default" />
  <input class="input is-lg" placeholder="large" />
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

支持在`.input-wrapper`上使用`is-dark`，`.is-sm`和`.is-lg`。

## FAQ

### 阿里小程序 input 的 placeholder 样式不正常

请指定 placeholder 类名为`input-placeholder`。
