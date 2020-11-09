# 按钮类 button

## 默认样式

要使用按钮类，可以只引入对应的文件。

```scss
@import "~@modyqyw/mp-scss/components/button";
```

在`button`或`view`上添加`.btn`是最简单的使用方式。

```html
<view class="container">
  <button class="btn">button</button>
  <button class="btn" disabled>disabled button</button>
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

默认有`default`，`primary`，`success`，`warning`，`error`, `info`六个主题。

```html
<!-- default 主题 -->
<button class="btn">default</button>
<button class="btn is-plain">default plain</button>
<button class="btn is-outlined">default outlined</button>
<button class="btn is-text">default text</button>
<!-- primary 主题 -->
<button class="btn is-primary">primary</button>
<button class="btn is-primary is-plain">primary plain</button>
<button class="btn is-primary is-outlined">primary outlined</button>
<button class="btn is-primary is-text">primary text</button>
<!-- success 主题 -->
<button class="btn is-success">success</button>
<button class="btn is-success is-plain">success plain</button>
<button class="btn is-success is-outlined">success outlined</button>
<button class="btn is-success is-text">success text</button>
<!-- warning 主题 -->
<button class="btn is-warning">warning</button>
<button class="btn is-warning is-plain">warning plain</button>
<button class="btn is-warning is-outlined">warning outlined</button>
<button class="btn is-warning is-text">warning text</button>
<!-- error 主题 -->
<button class="btn is-error">error</button>
<button class="btn is-error is-plain">error plain</button>
<button class="btn is-error is-outlined">error outlined</button>
<button class="btn is-error is-text">error text</button>
<!-- info 主题 -->
<button class="btn is-info">info</button>
<button class="btn is-info is-plain">info plain</button>
<button class="btn is-info is-outlined">info outlined</button>
<button class="btn is-info is-text">info text</button>
```

## 明亮模式和暗黑模式

默认使用明亮模式。[手动开启暗黑模式](../advance/README.md#明亮模式和暗黑模式)并在`.container`上使用`.is-dark`，就能指定使用暗黑模式。

```html
<view class="container is-light">
  <button class="btn">明亮模式</button>
</view>
<view class="container is-dark">
  <button class="btn">暗黑模式</button>
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
