# 输入框 input

[源码](https://github.com/MillCloud/mp-scss/blob/main/components/input.scss)

## 使用

引入输入框文件即可正常使用输入框类，所有内置变量会被自动引入并应用。

```scss
@import "~@modyqyw/mp-scss/components/input";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/components/input";
```

## 默认样式

```html
<view class="container">
  <input class="input" placeholder="默认样式" />
</view>
```

## 明暗模式

可以在输入框的祖先元素或按钮本身添加`is-dark`类，指定输入框使用暗黑模式。

如果不添加，或者添加`is-light`类，输入框将使用明亮模式。

一般而言，建议在页面的顶级布局元素（也就是`.container`）上添加`is-dark`类。

```html
<view class="container">
  <input class="input" placeholder="明亮模式" />
</view>
<view class="container is-dark">
  <input class="input" placeholder="暗黑模式" />
</view>
```

## 尺寸

```html
<view class="container">
  <input class="input is-small" placeholder="small" />
  <input class="input" placeholder="default" />
  <input class="input is-large" placeholder="large" />
</view>
```

## 带前后缀的输入框组

```html
<view class="container">
  <view class="input-wrapper">
    <view class="prefix">前缀</view>
    <input class="input" placeholder="请输入" />
    <view class="suffix">后缀</view>
  </view>
</view>
```

## 不同尺寸的输入框组

```html
<view class="container">
  <view class="input-wrapper is-small">
    <view class="prefix">前缀</view>
    <input class="input" placeholder="small" />
    <view class="suffix">后缀</view>
  </view>
  <view class="input-wrapper">
    <view class="prefix">前缀</view>
    <input class="input" placeholder="default" />
    <view class="suffix">后缀</view>
  </view>
  <view class="input-wrapper is-large">
    <view class="prefix">前缀</view>
    <input class="input" placeholder="large" />
    <view class="suffix">后缀</view>
  </view>
</view>
```
