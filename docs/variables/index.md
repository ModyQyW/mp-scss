# 总览

[源码](https://github.com/MillCloud/mp-scss/blob/main/variables)

## 使用

引入变量文件后即可使用所有内置变量。

```scss
@import "~@modyqyw/mp-scss/variables";
```

你也可以[配置`sass-loader`](https://github.com/webpack-contrib/sass-loader#additionaldata)让它默认注入这一行代码，这样就不必在每个`scss`部分都手动引入一次也能使用所有变量了。

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/app.scss
$unit: px;
$scale: 1;
@import "~@modyqyw/mp-scss/variables";
```

你也可以配置`sass-loader`让它默认注入这一个文件，这样就不必在每个`scss`部分都手动引入一次也能使用所有变量了。

## 注意

你不一定非要阅读变量部分来了解都有哪些变量。个人比较推荐的是只需要阅读[变量-初始变量](./initial.md)和[变量-衍生变量](./derived.md)大概了解一下。当你需要自定义时，再来细细查看。
