# 工具总览 utils

## 使用

引入`utils`后即可使用所有内置工具。

```scss
@import "~@modyqyw/mp-scss/utils";
```

## 函数 functions

[源码（含参考链接）](https://github.com/MillCloud/mp-scss/blob/main/src/utils/functions.scss)

### 使用函数

引入`utils/function`后即可使用内置函数。

```scss
@import "~@modyqyw/mp-scss/utils/functions";
```

### f-get-color

f-get-color 用于生成明亮背景下的十六进制不带透明度的颜色。

```scss
$new-hex-color: f-get-color($hex-color, $index);
```

参数：

- `$hex-color` - 十六进制不带透明度的颜色，作为色板第 6 号颜色被函数内使用（色板一共 10 号颜色）
- `$index` - 号数，默认值是 6

返回值：

- `$new-hex-color` - 生成的十六进制不带透明度的颜色
