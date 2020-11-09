# 遮罩类 overlay

## 默认样式

要使用遮罩类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/overlay";
```

在`view`上添加`.overlay`是最简单的使用方式。

```html
<view class="container">
  <view class="overlay"></view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container">
  <view class="overlay"></view>
</view>
```

```html
<view class="container is-dark">
  <view class="overlay"></view>
</view>
```

## 组合

一个常见的用途是把`.overlay`和`.card`结合，自定义一个模态框。

```html
<view class="container">
  <view class="overlay d-flex align-center justify-center p-20">
    <view class="card">
      <view class="card-header">header</view>
      <view class="card-content">content</view>
      <view class="card-footer">footer</view>
    </view>
  </view>
</view>
```
