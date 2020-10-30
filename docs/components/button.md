# 按钮类 button

## 默认样式

要使用按钮类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/button";
```

在`button`或`view`上添加`.btn`是最简单的使用方式。

```html
<view class="container">
  <button class="btn">使用 button 作标签</button>
  <button class="btn" disabled>使用 button 作标签，禁用状态</button>
  <view class="btn">使用 view 作标签</view>
  <view class="btn is-disabled">使用 view 作标签，禁用状态</view>
</view>
```

## 水波纹

添加`is-ripply`就可以使用内置的水波纹效果。

```html
<view class="container">
  <button class="btn is-ripply">水波纹</button>
</view>
```

## 主题

默认有`default`，`primary`，`success`，`warning`，`error`, `info`六个主题，对于后五个主题还会提供`.is-*-outlined`和`.is-*-link`。

```html
<!-- default 主题 -->
<button class="btn">is-primary</button>
<!-- primary 主题 -->
<button class="btn is-primary">is-primary</button>
<button class="btn is-primary-outlined">is-primary-outlined</button>
<button class="btn is-primary-link">is-primary-link</button>
<!-- success 主题 -->
<button class="btn is-success">is-primary</button>
<button class="btn is-success-outlined">is-primary-outlined</button>
<button class="btn is-success-link">is-primary-link</button>
<!-- warning 主题 -->
<button class="btn is-warning">is-primary</button>
<button class="btn is-warning-outlined">is-primary-outlined</button>
<button class="btn is-warning-link">is-primary-link</button>
<!-- error 主题 -->
<button class="btn is-error">is-primary</button>
<button class="btn is-error-outlined">is-primary-outlined</button>
<button class="btn is-error-link">is-primary-link</button>
<!-- info 主题 -->
<button class="btn is-info">is-primary</button>
<button class="btn is-info-outlined">is-primary-outlined</button>
<button class="btn is-info-link">is-primary-link</button>
```

## 明亮模式和暗黑模式

默认使用明亮模式。你也可以显式地在父元素或在`.btn`用`.is-light`指定使用明亮模式，用`.is-dark`就能指定使用暗黑模式。

```html
<view class="container is-light">
  <button class="btn">明亮模式</button>
</view>
<view class="container is-dark">
  <!-- 强制使用明亮模式 -->
  <button class="btn is-light">明亮模式</button>
</view>
<view class="container is-dark">
  <button class="btn">暗黑模式</button>
</view>
<view class="container">
  <!-- 强制使用暗黑模式 -->
  <button class="btn is-dark">暗黑模式</button>
</view>
```

## 尺寸

使用`.is-small`可以使用更小的`.btn`，使用`.is-large`可以使用更大的`.btn`，可以结合不同主题、不同模式使用。

```html
<view class="container">
  <button class="btn is-small">small</button>
  <button class="btn">default</button>
  <button class="btn is-large">large</button>
</view>
```
