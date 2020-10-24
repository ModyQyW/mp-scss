# 总览

[源码](https://github.com/MillCloud/mp-scss/blob/main/elements)

## 使用

引入元素类即可正常使用元素类，所有内置变量会被自动引入并应用。

```scss
@import "~@modyqyw/mp-scss/elements";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/elements";
```

## 支持元素

目前支持两个元素：`button`和`input`。

### button

- 支持明亮模式和暗黑模式
- 支持禁用
- 支持水波纹
- 支持 primary/success/warning/error/info + default/outlined/link
- 支持 small/large 尺寸

### input

- 支持明亮模式和暗黑模式
- 支持带前后缀的输入框组
- 支持 small/large 尺寸
