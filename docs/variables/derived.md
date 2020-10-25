# 衍生 derived

[源码](https://github.com/MillCloud/mp-scss/blob/main/src/variables/derived.scss)

## 使用

衍生变量必须搭配初始变量使用，进行相应的引入后即可使用内置衍生变量。

```scss
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
```

如果需要自定义变量，那就需要在引入之前声明对应的变量。

```scss
// ${PROJECT_DIR}/src/fake/path/index.scss
$container-background-color-reverse: #121212;
@import "~@modyqyw/mp-scss/variables/initial";
@import "~@modyqyw/mp-scss/variables/derived";
```

## 预设变量 preset

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|---|
|`$page-background-color`|`$gray-1`|√|小程序根节点的默认背景色|
|`$page-background-color-reverse`|`$gray-13`|√|暗黑模式下小程序根节点的默认背景色|
|`$container-background-color`|`$gray-1`|√|顶级布局元素的默认背景色|
|`$container-background-color-reverse`|`$gray-12`|√|暗黑模式下顶级布局元素的默认背景色|

## 通用变量 common

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$red-1`|`#fff1f0`|×|使用`f-get-color`和`$red`生成|
|`$red-2`|`#ffccc7`|×|同上|
|`$red-3`|`#ffa39e`|×|同上|
|`$red-4`|`#ff7875`|×|同上|
|`$red-5`|`#ff4d4f`|×|同上|
|`$red-6`|`#f5222d`|×|同上|
|`$red-7`|`#cf1322`|×|同上|
|`$red-8`|`#a8071a`|×|同上|
|`$red-9`|`#820014`|×|同上|
|`$red-10`|`#5c0011`|×|同上|
|`$red-reverse`|`#d32029`|×|使用`scss`的`mix`函数，`$red`和`$container-background-color-reverse`生成|
|`$red-1-reverse`|`#2a1215`|×|同上|
|`$red-2-reverse`|`#431418`|×|同上|
|`$red-3-reverse`|`#58181c`|×|同上|
|`$red-4-reverse`|`#791a1f`|×|同上|
|`$red-5-reverse`|`#a61d24`|×|同上|
|`$red-6-reverse`|`#d32029`|×|同上|
|`$red-7-reverse`|`#e84749`|×|同上|
|`$red-8-reverse`|`#f37370`|×|同上|
|`$red-9-reverse`|`#f89f9a`|×|同上|
|`$red-10-reverse`|`#fac8c3`|×|同上|
|`$volcano-1`|`#fff2e8`|×|使用`f-get-color`和`$volcano`生成|
|`$volcano-2`|`#ffd8bf`|×|同上|
|`$volcano-3`|`#ffbb96`|×|同上|
|`$volcano-4`|`#ff9c6e`|×|同上|
|`$volcano-5`|`#ff7a45`|×|同上|
|`$volcano-6`|`#fa541c`|×|同上|
|`$volcano-7`|`#d4380d`|×|同上|
|`$volcano-8`|`#ad2102`|×|同上|
|`$volcano-9`|`#871400`|×|同上|
|`$volcano-10`|`#610b00`|×|同上|
|`$volcano-reverse`|`#d84a1b`|×|使用`scss`的`mix`函数，`$volcano`和`$container-background-color-reverse`生成|
|`$volcano-1-reverse`|`#2b1611`|×|同上|
|`$volcano-2-reverse`|`#441d12`|×|同上|
|`$volcano-3-reverse`|`#592716`|×|同上|
|`$volcano-4-reverse`|`#7c3118`|×|同上|
|`$volcano-5-reverse`|`#aa3e19`|×|同上|
|`$volcano-6-reverse`|`#d84a1b`|×|同上|
|`$volcano-7-reverse`|`#e87040`|×|同上|
|`$volcano-8-reverse`|`#f3956a`|×|同上|
|`$volcano-9-reverse`|`#f8b692`|×|同上|
|`$volcano-10-reverse`|`#fad4bc`|×|同上|
|`$orange-1`|`#fff7e6`|×|使用`f-get-color`和`$orange`生成|
|`$orange-2`|`#ffe7ba`|×|同上|
|`$orange-3`|`#ffd591`|×|同上|
|`$orange-4`|`#ffc069`|×|同上|
|`$orange-5`|`#ffa940`|×|同上|
|`$orange-6`|`#fa8c16`|×|同上|
|`$orange-7`|`#d46b08`|×|同上|
|`$orange-8`|`#ad4e00`|×|同上|
|`$orange-9`|`#873800`|×|同上|
|`$orange-10`|`#612500`|×|同上|
|`$orange-reverse`|`#d87a16`|×|使用`scss`的`mix`函数，`$orange`和`$container-background-color-reverse`生成|
|`$orange-1-reverse`|`#2b1d11`|×|同上|
|`$orange-2-reverse`|`#442a11`|×|同上|
|`$orange-3-reverse`|`#593815`|×|同上|
|`$orange-4-reverse`|`#7c4a15`|×|同上|
|`$orange-5-reverse`|`#aa6215`|×|同上|
|`$orange-6-reverse`|`#d87a16`|×|同上|
|`$orange-7-reverse`|`#e89a3c`|×|同上|
|`$orange-8-reverse`|`#f3b765`|×|同上|
|`$orange-9-reverse`|`#f8cf8d`|×|同上|
|`$orange-10-reverse`|`#fae3b7`|×|同上|
|`$gold-1`|`#fffbe6`|×|使用`f-get-color`和`$gold`生成|
|`$gold-2`|`#fff1b8`|×|同上|
|`$gold-3`|`#ffe58f`|×|同上|
|`$gold-4`|`#ffd666`|×|同上|
|`$gold-5`|`#ffc53d`|×|同上|
|`$gold-6`|`#faad14`|×|同上|
|`$gold-7`|`#d48806`|×|同上|
|`$gold-8`|`#ad6800`|×|同上|
|`$gold-9`|`#874d00`|×|同上|
|`$gold-10`|`#613400`|×|同上|
|`$gold-reverse`|`#d89614`|×|使用`scss`的`mix`函数，`$gold`和`$container-background-color-reverse`生成|
|`$gold-1-reverse`|`#2b2111`|×|同上|
|`$gold-2-reverse`|`#443111`|×|同上|
|`$gold-3-reverse`|`#594214`|×|同上|
|`$gold-4-reverse`|`#7c5914`|×|同上|
|`$gold-5-reverse`|`#aa7714`|×|同上|
|`$gold-6-reverse`|`#d89614`|×|同上|
|`$gold-7-reverse`|`#e8b339`|×|同上|
|`$gold-8-reverse`|`#f3cc62`|×|同上|
|`$gold-9-reverse`|`#f8df8b`|×|同上|
|`$gold-10-reverse`|`#faedb5`|×|同上|
|`$yellow-1`|`#feffe6`|×|使用`f-get-color`和`$yellow`生成|
|`$yellow-2`|`#ffffb8`|×|同上|
|`$yellow-3`|`#fffb8f`|×|同上|
|`$yellow-4`|`#fff566`|×|同上|
|`$yellow-5`|`#ffec3d`|×|同上|
|`$yellow-6`|`#fadb14`|×|同上|
|`$yellow-7`|`#d4b106`|×|同上|
|`$yellow-8`|`#ad8b00`|×|同上|
|`$yellow-9`|`#876800`|×|同上|
|`$yellow-10`|`#614700`|×|同上|
|`$yellow-reverse`|`#d8bd14`|×|使用`scss`的`mix`函数，`$yellow`和`$container-background-color-reverse`生成|
|`$yellow-1-reverse`|`#2b2611`|×|同上|
|`$yellow-2-reverse`|`#443b11`|×|同上|
|`$yellow-3-reverse`|`#595014`|×|同上|
|`$yellow-4-reverse`|`#7c6e14`|×|同上|
|`$yellow-5-reverse`|`#aa9514`|×|同上|
|`$yellow-6-reverse`|`#d8bd14`|×|同上|
|`$yellow-7-reverse`|`#e8d639`|×|同上|
|`$yellow-8-reverse`|`#f3ea62`|×|同上|
|`$yellow-9-reverse`|`#f8f48b`|×|同上|
|`$yellow-10-reverse`|`#fafab5`|×|同上|
|`$lime-1`|`#fcffe6`|×|使用`f-get-color`和`$lime`生成|
|`$lime-2`|`#f4ffb8`|×|同上|
|`$lime-3`|`#eaff8f`|×|同上|
|`$lime-4`|`#d3f261`|×|同上|
|`$lime-5`|`#bae637`|×|同上|
|`$lime-6`|`#a0d911`|×|同上|
|`$lime-7`|`#7cb305`|×|同上|
|`$lime-8`|`#5b8c00`|×|同上|
|`$lime-9`|`#3f6600`|×|同上|
|`$lime-10`|`#254000`|×|同上|
|`$lime-reverse`|`#8bbb11`|×|使用`scss`的`mix`函数，`$lime`和`$container-background-color-reverse`生成|
|`$lime-1-reverse`|`#1f2611`|×|同上|
|`$lime-2-reverse`|`#2e3c10`|×|同上|
|`$lime-3-reverse`|`#3e4f13`|×|同上|
|`$lime-4-reverse`|`#536d13`|×|同上|
|`$lime-5-reverse`|`#6f9412`|×|同上|
|`$lime-6-reverse`|`#8bbb11`|×|同上|
|`$lime-7-reverse`|`#a9d134`|×|同上|
|`$lime-8-reverse`|`#c9e75d`|×|同上|
|`$lime-9-reverse`|`#e4f88b`|×|同上|
|`$lime-10-reverse`|`#f0fab5`|×|同上|
|`$green-1`|`#f6ffed`|×|使用`f-get-color`和`$green`生成|
|`$green-2`|`#d9f7be`|×|同上|
|`$green-3`|`#b7eb8f`|×|同上|
|`$green-4`|`#95de64`|×|同上|
|`$green-5`|`#73d13d`|×|同上|
|`$green-6`|`#52c41a`|×|同上|
|`$green-7`|`#389e0d`|×|同上|
|`$green-8`|`#237804`|×|同上|
|`$green-9`|`#135200`|×|同上|
|`$green-10`|`#092b00`|×|同上|
|`$green-reverse`|`#49aa19`|×|使用`scss`的`mix`函数，`$green`和`$container-background-color-reverse`生成|
|`$green-1-reverse`|`#162312`|×|同上|
|`$green-2-reverse`|`#1d3712`|×|同上|
|`$green-3-reverse`|`#274916`|×|同上|
|`$green-4-reverse`|`#306317`|×|同上|
|`$green-5-reverse`|`#3c8618`|×|同上|
|`$green-6-reverse`|`#49aa19`|×|同上|
|`$green-7-reverse`|`#6abe39`|×|同上|
|`$green-8-reverse`|`#8fd460`|×|同上|
|`$green-9-reverse`|`#b2e58b`|×|同上|
|`$green-10-reverse`|`#d5f2bb`|×|同上|
|`$cyan-1`|`#e6fffb`|×|使用`f-get-color`和`$cyan`生成|
|`$cyan-2`|`#b5f5ec`|×|同上|
|`$cyan-3`|`#87e8de`|×|同上|
|`$cyan-4`|`#5cdbd3`|×|同上|
|`$cyan-5`|`#36cfc9`|×|同上|
|`$cyan-6`|`#13c2c2`|×|同上|
|`$cyan-7`|`#08979c`|×|同上|
|`$cyan-8`|`#006d75`|×|同上|
|`$cyan-9`|`#00474f`|×|同上|
|`$cyan-10`|`#002329`|×|同上|
|`$cyan-reverse`|`#13a8a8`|×|使用`scss`的`mix`函数，`$cyan`和`$container-background-color-reverse`生成|
|`$cyan-1-reverse`|`#112123`|×|同上|
|`$cyan-2-reverse`|`#113536`|×|同上|
|`$cyan-3-reverse`|`#144848`|×|同上|
|`$cyan-4-reverse`|`#146262`|×|同上|
|`$cyan-5-reverse`|`#138585`|×|同上|
|`$cyan-6-reverse`|`#13a8a8`|×|同上|
|`$cyan-7-reverse`|`#33bcb7`|×|同上|
|`$cyan-8-reverse`|`#58d1c9`|×|同上|
|`$cyan-9-reverse`|`#84e2d8`|×|同上|
|`$cyan-10-reverse`|`#b2f1e8`|×|同上|
|`$blue-1`|`#e6f7ff`|×|使用`f-get-color`和`$blue`生成|
|`$blue-2`|`#bae7ff`|×|同上|
|`$blue-3`|`#91d5ff`|×|同上|
|`$blue-4`|`#69c0ff`|×|同上|
|`$blue-5`|`#40a9ff`|×|同上|
|`$blue-6`|`#1890ff`|×|同上|
|`$blue-7`|`#096dd9`|×|同上|
|`$blue-8`|`#0050b3`|×|同上|
|`$blue-9`|`#003a8c`|×|同上|
|`$blue-10`|`#002766`|×|同上|
|`$blue-reverse`|`#177ddc`|×|使用`scss`的`mix`函数，`$blue`和`$container-background-color-reverse`生成|
|`$blue-1-reverse`|`#111d2c`|×|同上|
|`$blue-2-reverse`|`#112a45`|×|同上|
|`$blue-3-reverse`|`#15395b`|×|同上|
|`$blue-4-reverse`|`#164c7e`|×|同上|
|`$blue-5-reverse`|`#1765ad`|×|同上|
|`$blue-6-reverse`|`#177ddc`|×|同上|
|`$blue-7-reverse`|`#3c9ae8`|×|同上|
|`$blue-8-reverse`|`#65b7f3`|×|同上|
|`$blue-9-reverse`|`#8dcff8`|×|同上|
|`$blue-10-reverse`|`#b7e3fa`|×|同上|
|`$geek-blue-1`|`#f0f5ff`|×|使用`f-get-color`和`$geek-blue`生成|
|`$geek-blue-2`|`#d6e4ff`|×|同上|
|`$geek-blue-3`|`#adc6ff`|×|同上|
|`$geek-blue-4`|`#85a5ff`|×|同上|
|`$geek-blue-5`|`#597ef7`|×|同上|
|`$geek-blue-6`|`#2f54eb`|×|同上|
|`$geek-blue-7`|`#1d39c4`|×|同上|
|`$geek-blue-8`|`#10239e`|×|同上|
|`$geek-blue-9`|`#061178`|×|同上|
|`$geek-blue-10`|`#030852`|×|同上|
|`$geek-blue-reverse`|`#2b4acb`|×|使用`scss`的`mix`函数，`$geek-blue`和`$container-background-color-reverse`生成|
|`$geek-blue-1-reverse`|`#131629`|×|同上|
|`$geek-blue-2-reverse`|`#161d40`|×|同上|
|`$geek-blue-3-reverse`|`#1c2755`|×|同上|
|`$geek-blue-4-reverse`|`#203175`|×|同上|
|`$geek-blue-5-reverse`|`#263ea0`|×|同上|
|`$geek-blue-6-reverse`|`#2b4acb`|×|同上|
|`$geek-blue-7-reverse`|`#5273e0`|×|同上|
|`$geek-blue-8-reverse`|`#7f9ef3`|×|同上|
|`$geek-blue-9-reverse`|`#a8c1f8`|×|同上|
|`$geek-blue-10-reverse`|`#d2e0fa`|×|同上|
|`$purple-1`|`#f9f0ff`|×|使用`f-get-color`和`$purple`生成|
|`$purple-2`|`#efdbff`|×|同上|
|`$purple-3`|`#d3adf7`|×|同上|
|`$purple-4`|`#b37feb`|×|同上|
|`$purple-5`|`#9254de`|×|同上|
|`$purple-6`|`#722ed1`|×|同上|
|`$purple-7`|`#531dab`|×|同上|
|`$purple-8`|`#391085`|×|同上|
|`$purple-9`|`#22075e`|×|同上|
|`$purple-10`|`#120338`|×|同上|
|`$purple-reverse`|`#642ab5`|×|使用`scss`的`mix`函数，`$purple`和`$container-background-color-reverse`生成|
|`$purple-1-reverse`|`#1a1325`|×|同上|
|`$purple-2-reverse`|`#24163a`|×|同上|
|`$purple-3-reverse`|`#301c4d`|×|同上|
|`$purple-4-reverse`|`#3e2069`|×|同上|
|`$purple-5-reverse`|`#51258f`|×|同上|
|`$purple-6-reverse`|`#642ab5`|×|同上|
|`$purple-7-reverse`|`#854eca`|×|同上|
|`$purple-8-reverse`|`#ab7ae0`|×|同上|
|`$purple-9-reverse`|`#cda8f0`|×|同上|
|`$purple-10-reverse`|`#ebd7fa`|×|同上|
|`$magenta-1`|`#fff0f6`|×|使用`f-get-color`和`$magenta`生成，可以修改`$magenta`以修改初始值|
|`$magenta-2`|`#ffd6e7`|×|同上|
|`$magenta-3`|`#ffadd2`|×|同上|
|`$magenta-4`|`#ff85c0`|×|同上|
|`$magenta-5`|`#f759ab`|×|同上|
|`$magenta-6`|`#eb2f96`|×|同上|
|`$magenta-7`|`#c41d7f`|×|同上|
|`$magenta-8`|`#9e1068`|×|同上|
|`$magenta-9`|`#780650`|×|同上|
|`$magenta-10`|`#520339`|×|同上|
|`$magenta-reverse`|`#cb2b83`|×|使用`scss`的`mix`函数，`$magenta`和`$container-background-color-reverse`生成|
|`$magenta-1-reverse`|`#291321`|×|同上|
|`$magenta-2-reverse`|`#40162f`|×|同上|
|`$magenta-3-reverse`|`#551c3b`|×|同上|
|`$magenta-4-reverse`|`#75204f`|×|同上|
|`$magenta-5-reverse`|`#a02669`|×|同上|
|`$magenta-6-reverse`|`#cb2b83`|×|同上|
|`$magenta-7-reverse`|`#e0529c`|×|同上|
|`$magenta-8-reverse`|`#f37fb7`|×|同上|
|`$magenta-9-reverse`|`#f8a8cc`|×|同上|
|`$magenta-10-reverse`|`#fad2e3`|×|同上|
|`$primary`|`$blue`|√||
|`$primary-1`|`#e6f7ff`|×|使用`f-get-color`和`$primary`生成|
|`$primary-2`|`#bae7ff`|×|同上|
|`$primary-3`|`#91d5ff`|×|同上|
|`$primary-4`|`#69c0ff`|×|同上|
|`$primary-5`|`#40a9ff`|×|同上|
|`$primary-6`|`#1890ff`|×|同上|
|`$primary-7`|`#096dd9`|×|同上|
|`$primary-8`|`#0050b3`|×|同上|
|`$primary-9`|`#003a8c`|×|同上|
|`$primary-10`|`#002766`|×|同上|
|`$primary-reverse`|`#177ddc`|×|使用`scss`的`mix`函数，`$primary`和`$container-background-color-reverse`生成|
|`$primary-1-reverse`|`#111d2c`|×|同上|
|`$primary-2-reverse`|`#112a45`|×|同上|
|`$primary-3-reverse`|`#15395b`|×|同上|
|`$primary-4-reverse`|`#164c7e`|×|同上|
|`$primary-5-reverse`|`#1765ad`|×|同上|
|`$primary-6-reverse`|`#177ddc`|×|同上|
|`$primary-7-reverse`|`#3c9ae8`|×|同上|
|`$primary-8-reverse`|`#65b7f3`|×|同上|
|`$primary-9-reverse`|`#8dcff8`|×|同上|
|`$primary-10-reverse`|`#b7e3fa`|×|同上|
|`$success`|`$green`|√||
|`$success-1`|`#f6ffed`|×|使用`f-get-color`和`$success`生成|
|`$success-2`|`#d9f7be`|×|同上|
|`$success-3`|`#b7eb8f`|×|同上|
|`$success-4`|`#95de64`|×|同上|
|`$success-5`|`#73d13d`|×|同上|
|`$success-6`|`#52c41a`|×|同上|
|`$success-7`|`#389e0d`|×|同上|
|`$success-8`|`#237804`|×|同上|
|`$success-9`|`#135200`|×|同上|
|`$success-10`|`#092b00`|×|同上|
|`$success-reverse`|`#49aa19`|×|使用`scss`的`mix`函数，`$success`和`$container-background-color-reverse`生成|
|`$success-1-reverse`|`#162312`|×|同上|
|`$success-2-reverse`|`#1d3712`|×|同上|
|`$success-3-reverse`|`#274916`|×|同上|
|`$success-4-reverse`|`#306317`|×|同上|
|`$success-5-reverse`|`#3c8618`|×|同上|
|`$success-6-reverse`|`#49aa19`|×|同上|
|`$success-7-reverse`|`#6abe39`|×|同上|
|`$success-8-reverse`|`#8fd460`|×|同上|
|`$success-9-reverse`|`#b2e58b`|×|同上|
|`$success-10-reverse`|`#d5f2bb`|×|同上|
|`$warning`|`$gold`|√||
|`$warning-1`|`#fffbe6`|×|使用`f-get-color`和`$warning`生成|
|`$warning-2`|`#fff1b8`|×|同上|
|`$warning-3`|`#ffe58f`|×|同上|
|`$warning-4`|`#ffd666`|×|同上|
|`$warning-5`|`#ffc53d`|×|同上|
|`$warning-6`|`#faad14`|×|同上|
|`$warning-7`|`#d48806`|×|同上|
|`$warning-8`|`#ad6800`|×|同上|
|`$warning-9`|`#874d00`|×|同上|
|`$warning-10`|`#613400`|×|同上|
|`$warning-reverse`|`#d89614`|×|使用`scss`的`mix`函数，`$warning`和`$container-background-color-reverse`生成|
|`$warning-1-reverse`|`#2b2111`|×|同上|
|`$warning-2-reverse`|`#443111`|×|同上|
|`$warning-3-reverse`|`#594214`|×|同上|
|`$warning-4-reverse`|`#7c5914`|×|同上|
|`$warning-5-reverse`|`#aa7714`|×|同上|
|`$warning-6-reverse`|`#d89614`|×|同上|
|`$warning-7-reverse`|`#e8b339`|×|同上|
|`$warning-8-reverse`|`#f3cc62`|×|同上|
|`$warning-9-reverse`|`#f8df8b`|×|同上|
|`$warning-10-reverse`|`#faedb5`|×|同上|
|`$error`|`$red`|√||
|`$error-1`|`#fff1f0`|×|使用`f-get-color`和`$error`生成|
|`$error-2`|`#ffccc7`|×|同上|
|`$error-3`|`#ffa39e`|×|同上|
|`$error-4`|`#ff7875`|×|同上|
|`$error-5`|`#ff4d4f`|×|同上|
|`$error-6`|`#f5222d`|×|同上|
|`$error-7`|`#cf1322`|×|同上|
|`$error-8`|`#a8071a`|×|同上|
|`$error-9`|`#820014`|×|同上|
|`$error-10`|`#5c0011`|×|同上|
|`$error-reverse`|`#d32029`|×|使用`scss`的`mix`函数，`$error`和`$container-background-color-reverse`生成|
|`$error-1-reverse`|`#2a1215`|×|同上|
|`$error-2-reverse`|`#431418`|×|同上|
|`$error-3-reverse`|`#58181c`|×|同上|
|`$error-4-reverse`|`#791a1f`|×|同上|
|`$error-5-reverse`|`#a61d24`|×|同上|
|`$error-6-reverse`|`#d32029`|×|同上|
|`$error-7-reverse`|`#e84749`|×|同上|
|`$error-8-reverse`|`#f37370`|×|同上|
|`$error-9-reverse`|`#f89f9a`|×|同上|
|`$error-10-reverse`|`#fac8c3`|×|同上|
|`$info`|`$blue`|√||
|`$info-1`|`#e6f7ff`|×|使用`f-get-color`和`$info`生成|
|`$info-2`|`#bae7ff`|×|同上|
|`$info-3`|`#91d5ff`|×|同上|
|`$info-4`|`#69c0ff`|×|同上|
|`$info-5`|`#40a9ff`|×|同上|
|`$info-6`|`#1890ff`|×|同上|
|`$info-7`|`#096dd9`|×|同上|
|`$info-8`|`#0050b3`|×|同上|
|`$info-9`|`#003a8c`|×|同上|
|`$info-10`|`#002766`|×|同上|
|`$info-reverse`|`#177ddc`|×|使用`scss`的`mix`函数，`$info`和`$container-background-color-reverse`生成|
|`$info-1-reverse`|`#111d2c`|×|同上|
|`$info-2-reverse`|`#112a45`|×|同上|
|`$info-3-reverse`|`#15395b`|×|同上|
|`$info-4-reverse`|`#164c7e`|×|同上|
|`$info-5-reverse`|`#1765ad`|×|同上|
|`$info-6-reverse`|`#177ddc`|×|同上|
|`$info-7-reverse`|`#3c9ae8`|×|同上|
|`$info-8-reverse`|`#65b7f3`|×|同上|
|`$info-9-reverse`|`#8dcff8`|×|同上|
|`$info-10-reverse`|`#b7e3fa`|×|同上|

为了方便起见，另外提供了两个映射`$m-colors`和`$m-colors-reverse`。`$m-colors-reverse`包含了暗黑模式的所有通用颜色，`$m-colors`包含了其它所有通用颜色。

## 定位变量 positioning

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-z-index`|`("": $z-index-default, "-auto": auto)`|√|会循环填充|

## 盒模型变量 box-model

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-flex-shrink`|`("": $flex-shrink-default)`|√|会循环填充|
|`$m-flex-grow`|`("": $flex-grow-default)`|√|会循环填充|
|`$m-order`|`("": $order-default, "-first": $order-first, "-last": $order-last)`|√|会循环填充|
|`$m-length`|`("": $length-default, "-auto": auto)`|√|会循环填充，如果`$scale`不为 1，会补充`("-1-real": 1 + $unit)`|
|`$m-spacing`|`("-auto": auto, "": $spacing-base * $scale + $unit, "-xs": ($spacing-base - $spacing-diff * 2) * $scale + $unit, "-sm": ($spacing-base - $spacing-diff) * $scale + $unit, "-md": $spacing-base * $scale + $unit, "-lg": ($spacing-base + $spacing-diff) * $scale + $unit,  "-xl": ($spacing-base + $spacing-diff * 2) * $scale + $unit)`|√|会循环填充，如果`$scale`不为 1，会补充`("-1-real": 1 + $unit, "-n1-real": -1 + $unit)`|
|`$m-ratio`|`("-full": 100%, "-half": 50%, "-0": 0)`|√|会循环填充|

## 排版变量 typography

|变量名|初始值|可否修改初始值|后续操作|说明|
|---|---|:-:|---|---|
|`$m-font-family`|`("": $font-family-default, "-sans": $font-family-sans, "-serif": $font-family-serif, "-mono": $font-family-mono)`|√||
|`$m-font-size`|`("": $font-size-base * $scale + $unit, "-xs": ($font-size-base - $font-size-diff * 2) * $scale + $unit, "-sm": ($font-size-base - $font-size-diff) * $scale + $unit, "-md": $font-size-base * $scale + $unit, "-lg": ($font-size-base + $font-size-diff) * $scale + $unit, "-xl": ($font-size-base + $font-size-diff * 2) * $scale + $unit)`|√|会循环填充|
|`$m-line-height`|`("": $line-height-default, "-normal": $line-height-default, "-none": $line-height-none, "-tight": $line-height-tight, "-snug": $line-height-snug, "-relaxed": $line-height-relaxed, "-loose": $line-height-loose)`|√|会循环填充|
|`$color-title`|`fade-out($black, .15)`|√||
|`$color-title-small`|`fade-out($black, .15)`|√||
|`$color-main`|`fade-out($black, .15)`|√||
|`$color-main-small`|`fade-out($black, .15)`|√||
|`$color-secondary`|`fade-out($black, .15)`|√||
|`$color-title`|`fade-out($black, .15)`|√||
|`$color-title-reverse`|`fade-out($white, .15)`|√||
|`$color-title-small-reverse`|`fade-out($white, .15)`|√||
|`$color-main-reverse`|`fade-out($white, .15)`|√||
|`$color-main-small-reverse`|`fade-out($white, .15)`|√||
|`$color-secondary-reverse`|`fade-out($white, .15)`|√||
|`$color-disabled-reverse`|`fade-out($white, .15)`|√||
|`$m-color`|`("-title": $color-title, "-title-small": $color-title-small, "-main": $color-main, "-main-small": $color-main-small, "-secondary": $color-secondary, "-disabled": $color-disabled)`|√||
|`$m-color-reverse`|`("-title": $color-title-reverse, "-title-small": $color-title-small-reverse, "-main": $color-main-reverse, "-main-small": $color-main-small-reverse, "-secondary": $color-secondary-reverse, "-disabled": $color-disabled-reverse)`|√||

## 视觉变量 visual

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$background-color`|`fade-out($black, .96)`|√||
|`$background-color-reverse`|`fade-out($white, .92)`|√||
|`$m-background-color`|`("": $background-color)`|√||
|`$m-background-color-reverse`|`("": $background-color-reverse)`|√||
|`$border-color`|`fade-out($black, .85)`|√||
|`$border-color-reverse`|`fade-out($white, .8)`|√||
|`$m-border-color`|`("": $border-color)`|√||
|`$m-border-color-reverse`|`("": $border-color-reverse)`|√||
|`$m-border-width`|`("": $border-width-base * $scale + $unit)`|√|会循环填充，如果`$scale`不为 1，会补充`("-1-real": 1 + $unit)`|
|`$m-border-radius`|`("": $border-radius-base * $scale + $unit, "-xs": ($border-radius-base - $border-radius-diff * 2) * $scale + $unit, "-sm": ($border-radius-base - $border-radius-diff) * $scale + $unit, "-md": border-radius-base * $scale + $unit, "-lg": ($border-radius-base + $border-radius-diff) * $scale + $unit, "-xl": ($border-radius-base + $border-radius-diff * 2) * $scale + $unit, "-half": 50%, "-full": 100%)`|√|会循环填充|
|`$m-box-shadow-umbra`|一个键为0-24的映射|×||
|`$m-box-shadow-penumbra`|一个键为0-24的映射|×||
|`$m-box-shadow-ambient`|一个键为0-24的映射|×||

## 杂项变量 misc

|变量名|初始值|可否修改初始值|说明|
|---|---|:-:|---|
|`$m-transition`|`("": $transition-duration-default $transition-timing-function-default)`|√||
