# 分割线类 divider

## 默认样式

要使用分割线类，需要先引入。

```scss
@import "~@modyqyw/mp-scss";
// @import "~@modyqyw/mp-scss/components";
// @import "~@modyqyw/mp-scss/components/divider";
```

在想要分割内容的地方可以使用`.divider`。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
```

## 垂直方向

使用`.is-vertical`就可以让`.divider`垂直放置。

```html
<view class="row">
  <view>Lorem</view>
  <view class="divider is-vertical"></view>
  <view>Lorem</view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
<view class="container is-dark">
  <view>Lorem</view>
  <view class="divider"></view>
  <view>Lorem</view>
</view>
```

## 使用文字

要使用带文字的分割线较为复杂。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider-wrapper">
    <view class="divider"></view>
    <view class="divider-text">text</view>
    <view class="divider"></view>
  </view>
  <view>Lorem</view>
</view>
```

如果要让文字靠左，可以使用`.is-left`。对应地，使用`.is-right`可以让文字靠右。

```html
<view class="container">
  <view>Lorem</view>
  <view class="divider-wrapper is-left">
    <view class="divider"></view>
    <view class="divider-text">text</view>
    <view class="divider"></view>
  </view>
  <view>Lorem</view>
</view>
```
