# 按钮 button

[源码](https://github.com/MillCloud/mp-scss/blob/main/elements/button.scss)

## 使用

引入按钮文件即可正常使用按钮类，所有内置变量会被自动引入并应用。

```scss
@import "~@modyqyw/mp-scss/elements/button";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/elements/button";
```

## 默认样式

```html
<view class="container">
  <button class="btn">使用 button 作标签</button>
  <button class="btn" disabled>使用 button 作标签，禁用状态</button>
  <view class="btn">使用 view 作标签</view>
  <view class="btn is-disabled">使用 view 作标签，禁用状态</view>
</view>
```

## 水波纹

```html
<view class="container">
  <button class="btn is-ripply">水波纹</button>
  <view class="btn is-ripply">水波纹</view>
</view>
```

## 明暗模式

可以在按钮的祖先元素或按钮本身添加`is-dark`类，指定按钮使用暗黑模式。

如果不添加，或者添加`is-light`类，按钮将使用明亮模式。

一般而言，建议在页面的顶级布局元素（也就是`.container`）上添加`is-dark`类。

```html
<view class="container">
  <button class="btn">明亮模式</button>
</view>
<view class="container is-dark">
  <button class="btn">暗黑模式</button>
</view>
```

## primary

```html
<view class="container">
  <button class="btn is-primary">primary</button>
  <button class="btn is-primary-outlined">primary-outlined</button>
  <button class="btn is-primary-link">primary-link</button>
</view>
<view class="container is-dark">
  <button class="btn is-primary">primary</button>
  <button class="btn is-primary-outlined">primary-outlined</button>
  <button class="btn is-primary-link">primary-link</button>
</view>
```

## success

```html
<view class="container">
  <button class="btn is-success">success</button>
  <button class="btn is-success-outlined">success-outlined</button>
  <button class="btn is-success-link">success-link</button>
</view>
<view class="container is-dark">
  <button class="btn is-success">success</button>
  <button class="btn is-success-outlined">success-outlined</button>
  <button class="btn is-success-link">success-link</button>
</view>
```

## warning

```html
<view class="container">
  <button class="btn is-warning">warning</button>
  <button class="btn is-warning-outlined">warning-outlined</button>
  <button class="btn is-warning-link">warning-link</button>
</view>
<view class="container is-dark">
  <button class="btn is-warning">warning</button>
  <button class="btn is-warning-outlined">warning-outlined</button>
  <button class="btn is-warning-link">warning-link</button>
</view>
```

## error

```html
<view class="container">
  <button class="btn is-error">error</button>
  <button class="btn is-error-outlined">error-outlined</button>
  <button class="btn is-error-link">error-link</button>
</view>
<view class="container is-dark">
  <button class="btn is-error">error</button>
  <button class="btn is-error-outlined">error-outlined</button>
  <button class="btn is-error-link">error-link</button>
</view>
```

## info

```html
<view class="container">
  <button class="btn is-info">info</button>
  <button class="btn is-info-outlined">info-outlined</button>
  <button class="btn is-info-link">info-link</button>
</view>
<view class="container is-dark">
  <button class="btn is-info">info</button>
  <button class="btn is-info-outlined">info-outlined</button>
  <button class="btn is-info-link">info-link</button>
</view>
```

## 不同尺寸

```html
<view class="container">
  <button class="btn is-small">small</button>
  <button class="btn">default</button>
  <button class="btn is-large">large</button>
</view>
```
