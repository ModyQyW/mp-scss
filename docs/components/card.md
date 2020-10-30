# 卡片类 card

## 默认样式

要使用卡片类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/card";
```

在`view`上使用`.card`。

```html
<view class="container">
  <view class="card">...</view>
</view>
```

然后使用`.card-header`作为卡片头，使用`.card-content`作为卡片主要内容，使用`.card-footer`作为卡片尾。

```html
<view class="container">
  <view class="card">
    <view class="card-header">header</view>
    <view class="card-content">content</view>
    <view class="card-footer">footer</view>
  </view>
</view>
```

要添加分割线，可以使用`.border`相关的类。

```html
<view class="container">
  <view class="card">
    <view class="card-header border-b">header</view>
    <view class="card-content">content</view>
    <view class="card-footer border-t">footer</view>
  </view>
</view>
```

也可以使用分割线类`.divider`。

```html
<view class="container">
  <view class="card">
    <view class="card-header">header</view>
    <view class="divider m-0"></view>
    <view class="card-content">content</view>
    <view class="divider m-0"></view>
    <view class="card-footer">footer</view>
  </view>
</view>
```

## 明亮模式和暗黑模式

默认使用明亮模式。你也可以显式地在父元素或在`.card`用`.is-light`指定使用明亮模式，用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container is-light">
  <view class="card">...</view>
</view>
<view class="container is-dark">
  <!-- 强制使用明亮模式 -->
  <view class="card is-light">...</view>
</view>
<view class="container is-dark">
  <view class="card">...</view>
</view>
<view class="container is-light">
  <!-- 强制使用暗黑模式 -->
  <view class="card is-dark">...</view>
</view>
```
