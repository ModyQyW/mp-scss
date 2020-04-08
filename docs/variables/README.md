# 变量

你可以在这里查看预设的变量。它们供你定制样式，也供你直接在小程序中单独使用。

## 长度单位 dimension unit 和缩放 scale

长度单位不使用`px`，`em`，`rem`等，而是使用`rpx`，对标微信小程序和支付宝小程序标准。

```scss
$unit: rpx !default;
```

与`rpx`对应，缩放默认为 2。

```scss
$scale: 2 !default;
```

更多有关尺寸单位和缩放的说明，参考[微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html)和[支付宝小程序官方文档](https://opendocs.alipay.com/mini/framework/acss)。

具体代码见 [variables/_index.scss](https://github.com/ModyQyW/mp-scss/blob/master/variables/_index.scss)。

## 颜色 colors

内置 Ant Design 的颜色（主要参考[颜色设计](https://ant.design/docs/spec/colors-cn)和[暗黑模式](https://ant.design/docs/spec/dark-cn)）。详细的变量名和变量值的对应可参考下表。

|变量名|变量值|是否可覆盖|备注|
|:-:|:-:|:-:|---|
|`$gray`|`#8c8c8c`<input type="color" disabled value="#8c8c8c" />|√|中性色，色板色|
|`$gray-1`|`#fff`<input type="color" disabled value="#ffffff" />|√|中性色，色板色，白色，默认页面背景色|
|`$gray-2`|`#fafafa`<input type="color" disabled value="#fafafa" />|√|中性色，色板色|
|`$gray-3`|`#f5f5f5`<input type="color" disabled value="#f5f5f5" />|√|中性色，色板色|
|`$gray-4`|`#f0f0f0`<input type="color" disabled value="#f0f0f0" />|√|中性色，色板色|
|`$gray-5`|`#d9d9d9`<input type="color" disabled value="#d9d9d9" />|√|中性色，色板色|
|`$gray-6`|`#d9d9d9`<input type="color" disabled value="#d9d9d9" />|√|中性色，色板色|
|`$gray-7`|`#8c8c8c`<input type="color" disabled value="#8c8c8c" />|√|中性色，色板色|
|`$gray-8`|`#595959`<input type="color" disabled value="#595959" />|√|中性色，色板色|
|`$gray-9`|`#434343`<input type="color" disabled value="#434343" />|√|中性色，色板色|
|`$gray-10`|`#262626`<input type="color" disabled value="#262626" />|√|中性色，色板色|
|`$gray-11`|`#1f1f1f`<input type="color" disabled value="#1f1f1f" />|√|中性色，色板色|
|`$gray-12`|`#141414`<input type="color" disabled value="#141414" />|√|中性色，色板色，暗黑模式下默认页面背景色|
|`$gray-13`|`#000`<input type="color" disabled value="#000000" />|√|中性色，色板色，黑色|
|||||
|`$color-title`|`rgba(0, 0, 0, .85)`|√|文字色，标题颜色|
|`$color-title-small`|`rgba(0, 0, 0, .75)`|√|文字色，子标题颜色|
|`$color-main`|`rgba(0, 0, 0, .65)`|√|文字色，正常字号主要文字颜色|
|`$color-main-small`|`rgba(0, 0, 0, .55)`|√|文字色，较小字号主要文字颜色|
|`$color-secondary`|`rgba(0, 0, 0, .45)`|√|文字色，次要文字颜色|
|`$color-disabled`|`rgba(0, 0, 0, .25)`|√|文字色，禁用文字颜色|
|`$color-title-reverse`|`rgba(255, 255, 255, .85)`|√|文字色，标题颜色，暗黑模式下使用|
|`$color-title-small-reverse`|`rgba(255, 255, 255, .75)`|√|文字色，子标题颜色，暗黑模式下使用|
|`$color-main-reverse`|`rgba(255, 255, 255, .65)`|√|文字色，正常字号主要文字颜色，暗黑模式下使用|
|`$color-main-small-reverse`|`rgba(255, 255, 255, .55)`|√|文字色，较小字号主要文字颜色，暗黑模式下使用|
|`$color-secondary-reverse`|`rgba(255, 255, 255, .45)`|√|文字色，次要文字颜色，暗黑模式下使用|
|`$color-disabled-reverse`|`rgba(255, 255, 255, .3)`|√|文字色，禁用文字颜色，暗黑模式下使用|
|||||
|`$color-bg-container`|`$gray-1`|√|背景色，容器类背景色|
|`$color-bg-default`|`rgba(0, 0, 0, .04)`|√|背景色，组件背景色|
|`$color-bg-mask`|`rgba(0, 0, 0, .45)`|√|背景色，遮罩背景色|
|`$color-bg-shadow`|`rgba(0, 0, 0, .45)`|√|背景色，遮罩背景色|
|`$color-bg-divider`|`rgba(0, 0, 0, .06)`|√|背景色，分割线背景色|
|`$color-bg-container-reverse`|`$gray-12`|√|背景色，容器类背景色，暗黑模式下使用|
|`$color-bg-default-reverse`|`rgba(255, 255, 255, .08)`|√|背景色，组件背景色，暗黑模式下使用|
|`$color-bg-mask-reverse`|`rgba(255, 255, 255, .55)`|√|背景色，遮罩背景色，暗黑模式下使用|
|`$color-bg-shadow-reverse`|`rgba(255, 255, 255, .55)`|√|背景色，遮罩背景色，暗黑模式下使用|
|`$color-bg-divider-reverse`|`rgba(255, 255, 255, .12)`|√|背景色，分割线背景色，暗黑模式下使用|
|||||
|`$color-border-default`|`rgba(0, 0, 0, .15)`|√|边框色|
|`$color-border-default`|`rgba(255, 255, 255, .2)`|√|边框色，暗黑模式下使用|
|||||
|`$red`|`#f5222d`<input type="color" disabled value="#f5222d" />|√|色板色|
|`$red-1`|`#fff1f0`<input type="color" disabled value="#fff1f0" />|×|色板色，由`$red`生成|
|`$red-2`|`#ffccc7`<input type="color" disabled value="#ffccc7" />|×|色板色，由`$red`生成|
|`$red-3`|`#ffa39e`<input type="color" disabled value="#ffa39e" />|×|色板色，由`$red`生成|
|`$red-4`|`#ff7875`<input type="color" disabled value="#ff7875" />|×|色板色，由`$red`生成|
|`$red-5`|`#ff4d4f`<input type="color" disabled value="#ff4d4f" />|×|色板色，由`$red`生成|
|`$red-6`|`#f5222d`<input type="color" disabled value="#f5222d" />|×|色板色，由`$red`生成|
|`$red-7`|`#cf1322`<input type="color" disabled value="#cf1322" />|×|色板色，由`$red`生成|
|`$red-8`|`#a8071a`<input type="color" disabled value="#a8071a" />|×|色板色，由`$red`生成|
|`$red-9`|`#820014`<input type="color" disabled value="#820014" />|×|色板色，由`$red`生成|
|`$red-10`|`#5c0011`<input type="color" disabled value="#5c0011" />|×|色板色，由`$red`生成|
|`$red-reverse`|`#d32029`<input type="color" disabled value="#d32029" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-1-reverse`|`#2a1215`<input type="color" disabled value="#2a1215" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-2-reverse`|`#431418`<input type="color" disabled value="#431418" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-3-reverse`|`#58181c`<input type="color" disabled value="#58181c" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-4-reverse`|`#791a1f`<input type="color" disabled value="#791a1f" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-5-reverse`|`#a61d24`<input type="color" disabled value="#a61d24" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-6-reverse`|`#d32029`<input type="color" disabled value="#d32029" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-7-reverse`|`#e84749`<input type="color" disabled value="#e84749" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-8-reverse`|`#f37370`<input type="color" disabled value="#f37370" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-9-reverse`|`#f89f9a`<input type="color" disabled value="#f89f9a" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$red-10-reverse`|`#fac8c3`<input type="color" disabled value="#fac8c3" />|×|色板色，由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$volcano`|`#fa541c`<input type="color" disabled value="#fa541c" />|√|色板色|
|`$volcano-1`|`#fff2e8`<input type="color" disabled value="#fff2e8" />|×|色板色，由`$volcano`生成|
|`$volcano-2`|`#ffd8bf`<input type="color" disabled value="#ffd8bf" />|×|色板色，由`$volcano`生成|
|`$volcano-3`|`#ffbb96`<input type="color" disabled value="#ffbb96" />|×|色板色，由`$volcano`生成|
|`$volcano-4`|`#ff9c6e`<input type="color" disabled value="#ff9c6e" />|×|色板色，由`$volcano`生成|
|`$volcano-5`|`#ff7a45`<input type="color" disabled value="#ff7a45" />|×|色板色，由`$volcano`生成|
|`$volcano-6`|`#fa541c`<input type="color" disabled value="#fa541c" />|×|色板色，由`$volcano`生成|
|`$volcano-7`|`#d4380d`<input type="color" disabled value="#d4380d" />|×|色板色，由`$volcano`生成|
|`$volcano-8`|`#ad2102`<input type="color" disabled value="#ad2102" />|×|色板色，由`$volcano`生成|
|`$volcano-9`|`#871400`<input type="color" disabled value="#871400" />|×|色板色，由`$volcano`生成|
|`$volcano-10`|`#610b00`<input type="color" disabled value="#610b00" />|×|色板色，由`$volcano`生成|
|`$volcano-reverse`|`#d84a1b`<input type="color" disabled value="#d84a1b" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-1-reverse`|`#2b1611`<input type="color" disabled value="#2b1611" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-2-reverse`|`#441d12`<input type="color" disabled value="#441d12" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-3-reverse`|`#592716`<input type="color" disabled value="#592716" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-4-reverse`|`#7c3118`<input type="color" disabled value="#7c3118" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-5-reverse`|`#aa3e19`<input type="color" disabled value="#aa3e19" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-6-reverse`|`#d84a1b`<input type="color" disabled value="#d84a1b" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-7-reverse`|`#e87040`<input type="color" disabled value="#e87040" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-8-reverse`|`#f3956a`<input type="color" disabled value="#f3956a" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-9-reverse`|`#f8b692`<input type="color" disabled value="#f8b692" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$volcano-10-reverse`|`#fad4bc`<input type="color" disabled value="#fad4bc" />|×|色板色，由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$orange`|`#fa8c16`<input type="color" disabled value="#fa8c16" />|√|色板色|
|`$orange-1`|`#fff7e6`<input type="color" disabled value="#fff7e6" />|×|色板色，由`$orange`生成|
|`$orange-2`|`#ffe7ba`<input type="color" disabled value="#ffe7ba" />|×|色板色，由`$orange`生成|
|`$orange-3`|`#ffd591`<input type="color" disabled value="#ffd591" />|×|色板色，由`$orange`生成|
|`$orange-4`|`#ffc069`<input type="color" disabled value="#ffc069" />|×|色板色，由`$orange`生成|
|`$orange-5`|`#ffa940`<input type="color" disabled value="#ffa940" />|×|色板色，由`$orange`生成|
|`$orange-6`|`#fa8c16`<input type="color" disabled value="#fa8c16" />|×|色板色，由`$orange`生成|
|`$orange-7`|`#d46b08`<input type="color" disabled value="#d46b08" />|×|色板色，由`$orange`生成|
|`$orange-8`|`#ad4e00`<input type="color" disabled value="#ad4e00" />|×|色板色，由`$orange`生成|
|`$orange-9`|`#873800`<input type="color" disabled value="#873800" />|×|色板色，由`$orange`生成|
|`$orange-10`|`#612500`<input type="color" disabled value="#612500" />|×|色板色，由`$orange`生成|
|`$orange-reverse`|`#d87a16`<input type="color" disabled value="#d87a16" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-1-reverse`|`#2b1d11`<input type="color" disabled value="#2b1d11" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-2-reverse`|`#442a11`<input type="color" disabled value="#442a11" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-3-reverse`|`#593815`<input type="color" disabled value="#593815" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-4-reverse`|`#7c4a15`<input type="color" disabled value="#7c4a15" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-5-reverse`|`#aa6215`<input type="color" disabled value="#aa6215" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-6-reverse`|`#d87a16`<input type="color" disabled value="#d87a16" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-7-reverse`|`#e89a3c`<input type="color" disabled value="#e89a3c" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-8-reverse`|`#f3b765`<input type="color" disabled value="#f3b765" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-9-reverse`|`#f8cf8d`<input type="color" disabled value="#f8cf8d" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$orange-10-reverse`|`#fae3b7`<input type="color" disabled value="#fae3b7" />|×|色板色，由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$gold`|`#faad14`<input type="color" disabled value="#faad14" />|√|色板色|
|`$gold-1`|`#fffbe6`<input type="color" disabled value="#fffbe6" />|×|色板色，由`$gold`生成|
|`$gold-2`|`#fff1b8`<input type="color" disabled value="#fff1b8" />|×|色板色，由`$gold`生成|
|`$gold-3`|`#ffe58f`<input type="color" disabled value="#ffe58f" />|×|色板色，由`$gold`生成|
|`$gold-4`|`#ffd666`<input type="color" disabled value="#ffd666" />|×|色板色，由`$gold`生成|
|`$gold-5`|`#ffc53d`<input type="color" disabled value="#ffc53d" />|×|色板色，由`$gold`生成|
|`$gold-6`|`#faad14`<input type="color" disabled value="#faad14" />|×|色板色，由`$gold`生成|
|`$gold-7`|`#d48806`<input type="color" disabled value="#d48806" />|×|色板色，由`$gold`生成|
|`$gold-8`|`#ad6800`<input type="color" disabled value="#ad6800" />|×|色板色，由`$gold`生成|
|`$gold-9`|`#874d00`<input type="color" disabled value="#874d00" />|×|色板色，由`$gold`生成|
|`$gold-10`|`#613400`<input type="color" disabled value="#613400" />|×|色板色，由`$gold`生成|
|`$gold-reverse`|`#d89614`<input type="color" disabled value="#d89614" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-1-reverse`|`#2b2111`<input type="color" disabled value="#2b2111" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-2-reverse`|`#443111`<input type="color" disabled value="#443111" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-3-reverse`|`#594214`<input type="color" disabled value="#594214" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-4-reverse`|`#7c5914`<input type="color" disabled value="#7c5914" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-5-reverse`|`#aa7714`<input type="color" disabled value="#aa7714" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-6-reverse`|`#d89614`<input type="color" disabled value="#d89614" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-7-reverse`|`#e8b339`<input type="color" disabled value="#e8b339" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-8-reverse`|`#f3cc62`<input type="color" disabled value="#f3cc62" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-9-reverse`|`#f8df8b`<input type="color" disabled value="#f8df8b" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$gold-10-reverse`|`#faedb5`<input type="color" disabled value="#faedb5" />|×|色板色，由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$yellow`|`#fadb14`<input type="color" disabled value="#fadb14" />|√|色板色|
|`$yellow-1`|`#feffe6`<input type="color" disabled value="#feffe6" />|×|色板色，由`$yellow`生成|
|`$yellow-2`|`#ffffb8`<input type="color" disabled value="#ffffb8" />|×|色板色，由`$yellow`生成|
|`$yellow-3`|`#fffb8f`<input type="color" disabled value="#fffb8f" />|×|色板色，由`$yellow`生成|
|`$yellow-4`|`#fff566`<input type="color" disabled value="#fff566" />|×|色板色，由`$yellow`生成|
|`$yellow-5`|`#ffec3d`<input type="color" disabled value="#ffec3d" />|×|色板色，由`$yellow`生成|
|`$yellow-6`|`#fadb14`<input type="color" disabled value="#fadb14" />|×|色板色，由`$yellow`生成|
|`$yellow-7`|`#d4b106`<input type="color" disabled value="#d4b106" />|×|色板色，由`$yellow`生成|
|`$yellow-8`|`#ad8b00`<input type="color" disabled value="#ad8b00" />|×|色板色，由`$yellow`生成|
|`$yellow-9`|`#876800`<input type="color" disabled value="#876800" />|×|色板色，由`$yellow`生成|
|`$yellow-10`|`#614700`<input type="color" disabled value="#614700" />|×|色板色，由`$yellow`生成|
|`$yellow-reverse`|`#d8bd14`<input type="color" disabled value="#d8bd14" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-1-reverse`|`#2b2611`<input type="color" disabled value="#2b2611" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-2-reverse`|`#443b11`<input type="color" disabled value="#443b11" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-3-reverse`|`#595014`<input type="color" disabled value="#595014" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-4-reverse`|`#7c6e14`<input type="color" disabled value="#7c6e14" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-5-reverse`|`#aa9514`<input type="color" disabled value="#aa9514" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-6-reverse`|`#d8bd14`<input type="color" disabled value="#d8bd14" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-7-reverse`|`#e8d639`<input type="color" disabled value="#e8d639" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-8-reverse`|`#f3ea62`<input type="color" disabled value="#f3ea62" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-9-reverse`|`#f8f48b`<input type="color" disabled value="#f8f48b" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$yellow-10-reverse`|`#fafab5`<input type="color" disabled value="#fafab5" />|×|色板色，由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$lime`|`#a0d911`<input type="color" disabled value="#a0d911" />|√|色板色|
|`$lime-1`|`#fcffe6`<input type="color" disabled value="#fcffe6" />|×|色板色，由`$lime`生成|
|`$lime-2`|`#f4ffb8`<input type="color" disabled value="#f4ffb8" />|×|色板色，由`$lime`生成|
|`$lime-3`|`#eaff8f`<input type="color" disabled value="#eaff8f" />|×|色板色，由`$lime`生成|
|`$lime-4`|`#d3f261`<input type="color" disabled value="#d3f261" />|×|色板色，由`$lime`生成|
|`$lime-5`|`#bae637`<input type="color" disabled value="#bae637" />|×|色板色，由`$lime`生成|
|`$lime-6`|`#a0d911`<input type="color" disabled value="#a0d911" />|×|色板色，由`$lime`生成|
|`$lime-7`|`#7cb305`<input type="color" disabled value="#7cb305" />|×|色板色，由`$lime`生成|
|`$lime-8`|`#5b8c00`<input type="color" disabled value="#5b8c00" />|×|色板色，由`$lime`生成|
|`$lime-9`|`#3f6600`<input type="color" disabled value="#3f6600" />|×|色板色，由`$lime`生成|
|`$lime-10`|`#254000`<input type="color" disabled value="#254000" />|×|色板色，由`$lime`生成|
|`$lime-reverse`|`#8bbb11`<input type="color" disabled value="#8bbb11" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-1-reverse`|`#1f2611`<input type="color" disabled value="#1f2611" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-2-reverse`|`#2e3c10`<input type="color" disabled value="#2e3c10" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-3-reverse`|`#3e4f13`<input type="color" disabled value="#3e4f13" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-4-reverse`|`#536d13`<input type="color" disabled value="#536d13" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-5-reverse`|`#6f9412`<input type="color" disabled value="#6f9412" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-6-reverse`|`#8bbb11`<input type="color" disabled value="#8bbb11" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-7-reverse`|`#a9d134`<input type="color" disabled value="#a9d134" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-8-reverse`|`#c9e75d`<input type="color" disabled value="#c9e75d" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-9-reverse`|`#e4f88b`<input type="color" disabled value="#e4f88b" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$lime-10-reverse`|`#f0fab5`<input type="color" disabled value="#f0fab5" />|×|色板色，由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$green`|`#52c41a`<input type="color" disabled value="#52c41a" />|√|色板色|
|`$green-1`|`#f6ffed`<input type="color" disabled value="#f6ffed" />|×|色板色，由`$green`生成|
|`$green-2`|`#d9f7be`<input type="color" disabled value="#d9f7be" />|×|色板色，由`$green`生成|
|`$green-3`|`#b7eb8f`<input type="color" disabled value="#b7eb8f" />|×|色板色，由`$green`生成|
|`$green-4`|`#95de64`<input type="color" disabled value="#95de64" />|×|色板色，由`$green`生成|
|`$green-5`|`#73d13d`<input type="color" disabled value="#73d13d" />|×|色板色，由`$green`生成|
|`$green-6`|`#52c41a`<input type="color" disabled value="#52c41a" />|×|色板色，由`$green`生成|
|`$green-7`|`#389e0d`<input type="color" disabled value="#389e0d" />|×|色板色，由`$green`生成|
|`$green-8`|`#237804`<input type="color" disabled value="#237804" />|×|色板色，由`$green`生成|
|`$green-9`|`#135200`<input type="color" disabled value="#135200" />|×|色板色，由`$green`生成|
|`$green-10`|`#092b00`<input type="color" disabled value="#092b00" />|×|色板色，由`$green`生成|
|`$green-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-1-reverse`|`#162312`<input type="color" disabled value="#162312" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-2-reverse`|`#1d3712`<input type="color" disabled value="#1d3712" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-3-reverse`|`#274916`<input type="color" disabled value="#274916" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-4-reverse`|`#306317`<input type="color" disabled value="#306317" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-5-reverse`|`#3c8618`<input type="color" disabled value="#3c8618" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-6-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-7-reverse`|`#6abe39`<input type="color" disabled value="#6abe39" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-8-reverse`|`#8fd460`<input type="color" disabled value="#8fd460" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-9-reverse`|`#b2e58b`<input type="color" disabled value="#b2e58b" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$green-10-reverse`|`#d5f2bb`<input type="color" disabled value="#d5f2bb" />|×|色板色，由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用
||||||
|`$cyan`|`#13c2c2`<input type="color" disabled value="#13c2c2" />|√|色板色|
|`$cyan-1`|`#e6fffb`<input type="color" disabled value="#e6fffb" />|×|色板色，由`$cyan`生成|
|`$cyan-2`|`#b5f5ec`<input type="color" disabled value="#b5f5ec" />|×|色板色，由`$cyan`生成|
|`$cyan-3`|`#87e8de`<input type="color" disabled value="#87e8de" />|×|色板色，由`$cyan`生成|
|`$cyan-4`|`#5cdbd3`<input type="color" disabled value="#5cdbd3" />|×|色板色，由`$cyan`生成|
|`$cyan-5`|`#36cfc9`<input type="color" disabled value="#36cfc9" />|×|色板色，由`$cyan`生成|
|`$cyan-6`|`#13c2c2`<input type="color" disabled value="#13c2c2" />|×|色板色，由`$cyan`生成|
|`$cyan-7`|`#08979c`<input type="color" disabled value="#08979c" />|×|色板色，由`$cyan`生成|
|`$cyan-8`|`#006d75`<input type="color" disabled value="#006d75" />|×|色板色，由`$cyan`生成|
|`$cyan-9`|`#00474f`<input type="color" disabled value="#00474f" />|×|色板色，由`$cyan`生成|
|`$cyan-10`|`#002329`<input type="color" disabled value="#002329" />|×|色板色，由`$cyan`生成|
|`$cyan-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-1-reverse`|`#162312`<input type="color" disabled value="#162312" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-2-reverse`|`#1d3712`<input type="color" disabled value="#1d3712" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-3-reverse`|`#274916`<input type="color" disabled value="#274916" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-4-reverse`|`#306317`<input type="color" disabled value="#306317" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-5-reverse`|`#3c8618`<input type="color" disabled value="#3c8618" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-6-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-7-reverse`|`#6abe39`<input type="color" disabled value="#6abe39" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-8-reverse`|`#8fd460`<input type="color" disabled value="#8fd460" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-9-reverse`|`#b2e58b`<input type="color" disabled value="#b2e58b" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$cyan-10-reverse`|`#d5f2bb`<input type="color" disabled value="#d5f2bb" />|×|色板色，由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|`$blue`|`#1890ff`<input type="color" disabled value="#1890ff" />|√|色板色|
|`$blue-1`|`#e6f7ff`<input type="color" disabled value="#e6f7ff" />|×|色板色，由`$blue`生成|
|`$blue-2`|`#bae7ff`<input type="color" disabled value="#bae7ff" />|×|色板色，由`$blue`生成|
|`$blue-3`|`#91d5ff`<input type="color" disabled value="#91d5ff" />|×|色板色，由`$blue`生成|
|`$blue-4`|`#69c0ff`<input type="color" disabled value="#69c0ff" />|×|色板色，由`$blue`生成|
|`$blue-5`|`#40a9ff`<input type="color" disabled value="#40a9ff" />|×|色板色，由`$blue`生成|
|`$blue-6`|`#1890ff`<input type="color" disabled value="#1890ff" />|×|色板色，由`$blue`生成|
|`$blue-7`|`#096dd9`<input type="color" disabled value="#096dd9" />|×|色板色，由`$blue`生成|
|`$blue-8`|`#0050b3`<input type="color" disabled value="#0050b3" />|×|色板色，由`$blue`生成|
|`$blue-9`|`#003a8c`<input type="color" disabled value="#003a8c" />|×|色板色，由`$blue`生成|
|`$blue-10`|`#002766`<input type="color" disabled value="#002766" />|×|色板色，由`$blue`生成|
|`$blue-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-1-reverse`|`#111d2c`<input type="color" disabled value="#111d2c" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-2-reverse`|`#112a45`<input type="color" disabled value="#112a45" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-3-reverse`|`#15395b`<input type="color" disabled value="#15395b" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-4-reverse`|`#164c7e`<input type="color" disabled value="#164c7e" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-5-reverse`|`#1765ad`<input type="color" disabled value="#1765ad" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-6-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-7-reverse`|`#3c9ae8`<input type="color" disabled value="#3c9ae8" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-8-reverse`|`#65b7f3`<input type="color" disabled value="#65b7f3" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-9-reverse`|`#8dcff8`<input type="color" disabled value="#8dcff8" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$blue-10-reverse`|`#b7e3fa`<input type="color" disabled value="#b7e3fa" />|×|色板色，由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|`$geek-blue`|`#2f54eb`<input type="color" disabled value="#2f54eb" />|√|色板色|
|`$geek-blue-1`|`#f0f5ff`<input type="color" disabled value="#f0f5ff" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-2`|`#d6e4ff`<input type="color" disabled value="#d6e4ff" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-3`|`#adc6ff`<input type="color" disabled value="#adc6ff" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-4`|`#85a5ff`<input type="color" disabled value="#85a5ff" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-5`|`#597ef7`<input type="color" disabled value="#597ef7" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-6`|`#2f54eb`<input type="color" disabled value="#2f54eb" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-7`|`#1d39c4`<input type="color" disabled value="#1d39c4" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-8`|`#10239e`<input type="color" disabled value="#10239e" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-9`|`#061178`<input type="color" disabled value="#061178" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-10`|`#030852`<input type="color" disabled value="#030852" />|×|色板色，由`$geek-blue`生成|
|`$geek-blue-reverse`|`#2b4acb`<input type="color" disabled value="#2b4acb" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-1-reverse`|`#131629`<input type="color" disabled value="#131629" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-2-reverse`|`#161d40`<input type="color" disabled value="#161d40" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-3-reverse`|`#1c2755`<input type="color" disabled value="#1c2755" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-4-reverse`|`#203175`<input type="color" disabled value="#203175" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-5-reverse`|`#263ea0`<input type="color" disabled value="#263ea0" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-6-reverse`|`#2b4acb`<input type="color" disabled value="#2b4acb" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-7-reverse`|`#5273e0`<input type="color" disabled value="#5273e0" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-8-reverse`|`#7f9ef3`<input type="color" disabled value="#7f9ef3" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-9-reverse`|`#a8c1f8`<input type="color" disabled value="#a8c1f8" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$geek-blue-10-reverse`|`#d2e0fa`<input type="color" disabled value="#d2e0fa" />|×|色板色，由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|`$purple`|`#722ed1`<input type="color" disabled value="#722ed1" />|√|色板色|
|`$purple-1`|`#f9f0ff`<input type="color" disabled value="#f9f0ff" />|×|色板色，由`$purple`生成|
|`$purple-2`|`#efdbff`<input type="color" disabled value="#efdbff" />|×|色板色，由`$purple`生成|
|`$purple-3`|`#d3adf7`<input type="color" disabled value="#d3adf7" />|×|色板色，由`$purple`生成|
|`$purple-4`|`#b37feb`<input type="color" disabled value="#b37feb" />|×|色板色，由`$purple`生成|
|`$purple-5`|`#9254de`<input type="color" disabled value="#9254de" />|×|色板色，由`$purple`生成|
|`$purple-6`|`#722ed1`<input type="color" disabled value="#722ed1" />|×|色板色，由`$purple`生成|
|`$purple-7`|`#531dab`<input type="color" disabled value="#531dab" />|×|色板色，由`$purple`生成|
|`$purple-8`|`#391085`<input type="color" disabled value="#391085" />|×|色板色，由`$purple`生成|
|`$purple-9`|`#22075e`<input type="color" disabled value="#22075e" />|×|色板色，由`$purple`生成|
|`$purple-10`|`#120338`<input type="color" disabled value="#120338" />|×|色板色，由`$purple`生成|
|`$purple-reverse`|`#642ab5`<input type="color" disabled value="#642ab5" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-1-reverse`|`#1a1325`<input type="color" disabled value="#1a1325" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-2-reverse`|`#24163a`<input type="color" disabled value="#24163a" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-3-reverse`|`#301c4d`<input type="color" disabled value="#301c4d" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-4-reverse`|`#3e2069`<input type="color" disabled value="#3e2069" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-5-reverse`|`#51258f`<input type="color" disabled value="#51258f" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-6-reverse`|`#642ab5`<input type="color" disabled value="#642ab5" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-7-reverse`|`#854eca`<input type="color" disabled value="#854eca" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-8-reverse`|`#ab7ae0`<input type="color" disabled value="#ab7ae0" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-9-reverse`|`#cda8f0`<input type="color" disabled value="#cda8f0" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$purple-10-reverse`|`#ebd7fa`<input type="color" disabled value="#ebd7fa" />|×|色板色，由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|`$magenta`|`#eb2f96`<input type="color" disabled value="#eb2f96" />|√|色板色|
|`$magenta-1`|`#fff0f6`<input type="color" disabled value="#fff0f6" />|×|色板色，由`$magenta`生成|
|`$magenta-2`|`#ffd6e7`<input type="color" disabled value="#ffd6e7" />|×|色板色，由`$magenta`生成|
|`$magenta-3`|`#ffadd2`<input type="color" disabled value="#ffadd2" />|×|色板色，由`$magenta`生成|
|`$magenta-4`|`#ff85c0`<input type="color" disabled value="#ff85c0" />|×|色板色，由`$magenta`生成|
|`$magenta-5`|`#f759ab`<input type="color" disabled value="#f759ab" />|×|色板色，由`$magenta`生成|
|`$magenta-6`|`#eb2f96`<input type="color" disabled value="#eb2f96" />|×|色板色，由`$magenta`生成|
|`$magenta-7`|`#c41d7f`<input type="color" disabled value="#c41d7f" />|×|色板色，由`$magenta`生成|
|`$magenta-8`|`#9e1068`<input type="color" disabled value="#9e1068" />|×|色板色，由`$magenta`生成|
|`$magenta-9`|`#780650`<input type="color" disabled value="#780650" />|×|色板色，由`$magenta`生成|
|`$magenta-10`|`#520339`<input type="color" disabled value="#520339" />|×|色板色，由`$magenta`生成|
|`$magenta-reverse`|`#cb2b83`<input type="color" disabled value="#cb2b83" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-1-reverse`|`#291321`<input type="color" disabled value="#291321" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-2-reverse`|`#40162f`<input type="color" disabled value="#40162f" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-3-reverse`|`#551c3b`<input type="color" disabled value="#551c3b" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-4-reverse`|`#75204f`<input type="color" disabled value="#75204f" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-5-reverse`|`#a02669`<input type="color" disabled value="#a02669" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-6-reverse`|`#cb2b83`<input type="color" disabled value="#cb2b83" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-7-reverse`|`#e0529c`<input type="color" disabled value="#e0529c" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-8-reverse`|`#f37fb7`<input type="color" disabled value="#f37fb7" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-9-reverse`|`#f8a8cc`<input type="color" disabled value="#f8a8cc" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$magenta-10-reverse`|`#fad2e3`<input type="color" disabled value="#fad2e3" />|×|色板色，由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||
|`$color-primary`|`$blue-6`<input type="color" disabled value="#1890ff" />|√|功能色，修改`$blue`会连锁修改该变量，也可以单独修改|
|`$color-success`|`$green-6`<input type="color" disabled value="#52c41a" />|√|功能色，修改`$green`会连锁修改该变量，也可以单独修改|
|`$color-warning`|`$gold-6`<input type="color" disabled value="#faad14" />|√|功能色，修改`$gold`会连锁修改该变量，也可以单独修改|
|`$color-error`|`$red-6`<input type="color" disabled value="#f5222d" />|√|功能色，默认修改`$red`会连锁修改该变量，也可以单独修改|
|`$color-info`|`$blue-6`<input type="color" disabled value="#1890ff" />|√|功能色，默认修改`$blue`会连锁修改该变量，也可以单独修改|
|`$color-primary-reverse`|`$blue-6-reverse`<input type="color" disabled value="#177ddc" />|×|功能色，由`$color-primary`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$color-success-reverse`|`$green-6-reverse`<input type="color" disabled value="#49aa19" />|×|功能色，由`$color-success`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$color-warning-reverse`|`$gold-6-reverse`<input type="color" disabled value="#d89614" />|×|功能色，由`$color-warning`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$color-error-reverse`|`$red-6-reverse`<input type="color" disabled value="#d32029" />|×|功能色，由`$color-error`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|`$color-info-reverse`|`$blue-6-reverse`<input type="color" disabled value="#177ddc" />|×|功能色，由`$color-info`与`$color-bg-container-reverse`生成，暗黑模式下使用|

除了以上列写的可直接使用的变量之外，还提供了 2 个主题映射，合起来包含了以上所有变量。

浅色主题的映射有：

- 色板色：`$palette-colors-light`
- 功能色：`$m-functional-color-light`，增加了映射键和映射值均为`transparent`的键值对
- 文字色：`$m-text-color-light`
- 背景色：`$m-background-color-light`
- 边框色：`$m-border-color-light`

暗黑主题的映射有：

- 色板色：`$m-palette-color-dark`
- 功能色：`$m-functional-color-dark`，增加了映射键和映射值均为`transparent`的键值对
- 文字色：`$m-text-color-dark`
- 背景色：`$m-background-color-dark`
- 边框色：`$m-border-color-dark`

篇幅原因，不再列举这部分映射的具体内容。

具体代码见 [variables/colors](https://github.com/ModyQyW/mp-scss/tree/master/variables/colors)。

### 什么时候会提供可直接使用的变量

可直接使用的变量往往能免去开发者只能使用映射时的不方便，如颜色、比例、长度等。

映射一般都会提供，目的是遍历映射批量生成样式。

## 比例 ratio

内置一些常用的比例，免去自己算一算的烦恼。详细的变量名和变量值的对应可参考下表。

|变量名|变量值|
|:-:|:-:|
|`$ratio-1-24`|`4.16666667%`|
|`$ratio-1-20`|`5%`|
|`$ratio-1-12`|`8.33333333%`|
|`$ratio-1-10`|`10%`|
|`$ratio-1-8`|`12.5%`|
|`$ratio-3-20`|`15%`|
|`$ratio-1-6`|`16.66666667%`|
|`$ratio-1-5`|`20%`|
|`$ratio-5-24`|`20.83333333%`|
|`$ratio-1-4`|`25%`|
|`$ratio-7-24`|`29.16666667%`|
|`$ratio-3-10`|`30%`|
|`$ratio-1-3`|`33.33333333%`|
|`$ratio-7-20`|`35%`|
|`$ratio-3-8`|`37.5%`|
|`$ratio-2-5`|`40%`|
|`$ratio-5-12`|`41.66666667%`|
|`$ratio-9-20`|`45%`|
|`$ratio-11-24`|`45.83333333%`|
|`$ratio-1-2`|`50%`|
|`$ratio-13-24`|`54.16666667%`|
|`$ratio-11-20`|`55%`|
|`$ratio-7-12`|`58.33333333%`|
|`$ratio-3-5`|`60%`|
|`$ratio-5-8`|`62.5%`|
|`$ratio-13-20`|`65%`|
|`$ratio-2-3`|`66.66666667%`|
|`$ratio-7-10`|`70%`|
|`$ratio-17-24`|`70.83333333%`|
|`$ratio-3-4`|`75%`|
|`$ratio-19-24`|`79.16666667%`|
|`$ratio-4-5`|`80%`|
|`$ratio-5-6`|`83.33333333%`|
|`$ratio-17-20`|`85%`|
|`$ratio-7-8`|`87.5%`|
|`$ratio-9-10`|`90%`|
|`$ratio-11-12`|`91.66666667%`|
|`$ratio-19-20`|`95%`|
|`$ratio-23-24`|`95.83333333%`|
|`$ratio-half`|`50%`|
|`$ratio-full`|`100%`|

除了以上列写的可直接使用的变量之外，还提供了一个映射`$m-ratio`，它的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-1-24`|`$ratio-1-24`|
|`-1-20`|`$ratio-1-20`|
|`-1-12`|`$ratio-1-12`|
|`-1-10`|`$ratio-1-10`|
|`-1-8`|`$ratio-1-8`|
|`-3-20`|`$ratio-3-20`|
|`-1-6`|`$ratio-1-6`|
|`-1-5`|`$ratio-1-5`|
|`-5-24`|`$ratio-5-24`|
|`-1-4`|`$ratio-1-4`|
|`-7-24`|`$ratio-7-24`|
|`-3-10`|`$ratio-3-10`|
|`-1-3`|`$ratio-1-3`|
|`-7-20`|`$ratio-7-20`|
|`-3-8`|`$ratio-3-8`|
|`-2-5`|`$ratio-2-5`|
|`-5-12`|`$ratio-5-12`|
|`-9-20`|`$ratio-9-20`|
|`-11-24`|`$ratio-11-24`|
|`-1-2`|`$ratio-1-2`|
|`-13-24`|`$ratio-13-24`|
|`-11-20`|`$ratio-11-20`|
|`-7-12`|`$ratio-7-12`|
|`-3-5`|`$ratio-3-5`|
|`-5-8`|`$ratio-5-8`|
|`-13-20`|`$ratio-13-20`|
|`-2-3`|`$ratio-2-3`|
|`-7-10`|`$ratio-7-10`|
|`-17-24`|`$ratio-17-24`|
|`-3-4`|`$ratio-3-4`|
|`-19-24`|`$ratio-19-24`|
|`-4-5`|`$ratio-4-5`|
|`-5-6`|`$ratio-5-6`|
|`-17-20`|`$ratio-17-20`|
|`-7-8`|`$ratio-7-8`|
|`-9-10`|`$ratio-9-10`|
|`-11-12`|`$ratio-11-12`|
|`-19-20`|`$ratio-19-20`|
|`-23-24`|`$ratio-23-24`|
|`-half`|`$ratio-half`|
|`-full`|`$ratio-full`|
|`-auto`|`auto`|

具体代码见 [variables/ratio](https://github.com/ModyQyW/mp-scss/tree/master/variables/ratio/_index.scss)。

## 长度 length

内置一些常用的处理过的长度，免去自己算一算的烦恼。详细的变量名和变量值的对应可参考下表。

|变量名|变量值|
|:-:|:-:|
|`$length-1024-reverse`|`-1024 * $scale + $unit`|
|...|...|
|`$length-3-reverse`|`-3 * $scale + $unit`|
|`$length-2-reverse`|`-2 * $scale + $unit`|
|`$length-1-real-reverse`|`-1 + $unit`|
|`$length-1-reverse`|`-3 * $scale + $unit`|
|`$length-1`|`1 * $scale + $unit`|
|`$length-1-real`|`1 + $unit`|
|`$length-2`|`2 * $scale + $unit`|
|`$length-3`|`3 * $scale + $unit`|
|...|...|
|`$length-1024`|`1024 * $scale + $unit`|

**注意**：只提供了可直接使用的变量，没有提供映射。

**注意**：没有提供变量`$length-0`。

**注意**：`$length-1-real-reverse`和`$length-1-real`的数值不会受`$scale`影响。

具体代码见 [variables/length](https://github.com/ModyQyW/mp-scss/tree/master/variables/length/_index.scss)。

## 尺寸 sizing

尺寸没有提供可直接使用的变量，只提供了基于长度进行封装的、用于 width 和 height 的映射`$m-sizing`，它的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-1-real`|`$length-1-real`|
|`-1`|`$length-1`|
|`-2`|`$length-2`|
|`-4`|`$length-4`|
|`-5`|`$length-5`|
|`-8`|`$length-8`|
|`-10`|`$length-10`|
|`-12`|`$length-12`|
|`-15`|`$length-15`|
|`-16`|`$length-16`|
|`-20`|`$length-20`|
|`-24`|`$length-24`|
|`-25`|`$length-25`|
|`-28`|`$length-28`|
|`-30`|`$length-30`|
|`-32`|`$length-32`|
|`-35`|`$length-35`|
|`-36`|`$length-36`|
|`-40`|`$length-40`|
|`-44`|`$length-44`|
|`-45`|`$length-45`|
|`-48`|`$length-48`|
|`-50`|`$length-50`|
|`-52`|`$length-52`|
|`-55`|`$length-55`|
|`-56`|`$length-56`|
|`-60`|`$length-60`|
|`-64`|`$length-64`|
|`-65`|`$length-65`|
|`-70`|`$length-70`|
|`-72`|`$length-72`|
|`-75`|`$length-75`|
|`-80`|`$length-80`|
|`-85`|`$length-85`|
|`-88`|`$length-88`|
|`-90`|`$length-90`|
|`-95`|`$length-95`|
|`-96`|`$length-96`|
|`-100`|`$length-100`|
|`-104`|`$length-104`|
|`-105`|`$length-105`|
|`-110`|`$length-110`|
|`-112`|`$length-112`|
|`-115`|`$length-115`|
|`-120`|`$length-120`|
|`-125`|`$length-125`|
|`-128`|`$length-128`|
|`-130`|`$length-130`|
|`-135`|`$length-135`|
|`-136`|`$length-136`|
|`-140`|`$length-140`|
|`-144`|`$length-144`|
|`-145`|`$length-145`|
|`-150`|`$length-150`|
|`-152`|`$length-152`|
|`-155`|`$length-155`|
|`-160`|`$length-160`|
|`-165`|`$length-165`|
|`-168`|`$length-168`|
|`-170`|`$length-170`|
|`-175`|`$length-175`|
|`-176`|`$length-176`|
|`-180`|`$length-180`|
|`-184`|`$length-184`|
|`-185`|`$length-185`|
|`-190`|`$length-190`|
|`-192`|`$length-192`|
|`-195`|`$length-195`|
|`-200`|`$length-200`|
|`-205`|`$length-205`|
|`-208`|`$length-208`|
|`-210`|`$length-210`|
|`-215`|`$length-215`|
|`-216`|`$length-216`|
|`-220`|`$length-220`|
|`-224`|`$length-224`|
|`-225`|`$length-225`|
|`-230`|`$length-230`|
|`-232`|`$length-232`|
|`-235`|`$length-235`|
|`-240`|`$length-240`|
|`-245`|`$length-245`|
|`-248`|`$length-248`|
|`-250`|`$length-250`|
|`-255`|`$length-255`|
|`-256`|`$length-256`|

具体代码见 [variables/sizing](https://github.com/ModyQyW/mp-scss/tree/master/variables/sizing/_index.scss)。

## 间距 spacing

间距没有提供可直接使用的变量，只提供了基于长度进行封装的、用于 padding 和 margin 的映射`$m-spacing`，它的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-1-real`|`$length-1-real`|
|`-1-real-reverse`|`$length-1-real-reverse`|
|`-1`|`$length-1`|
|`-1-reverse`|`$length-1-reverse`|
|`-2`|`$length-2`|
|`-2-reverse`|`$length-2-reverse`|
|`-4`|`$length-4`|
|`-4-reverse`|`$length-4-reverse`|
|`-5`|`$length-5`|
|`-5-reverse`|`$length-5-reverse`|
|`-8`|`$length-8`|
|`-8-reverse`|`$length-8-reverse`|
|`-10`|`$length-10`|
|`-10-reverse`|`$length-10-reverse`|
|`-12`|`$length-12`|
|`-12-reverse`|`$length-12-reverse`|
|`-15`|`$length-15`|
|`-15-reverse`|`$length-15-reverse`|
|`-16`|`$length-16`|
|`-16-reverse`|`$length-16-reverse`|
|`-20`|`$length-20`|
|`-20-reverse`|`$length-20-reverse`|
|`-24`|`$length-24`|
|`-24-reverse`|`$length-24-reverse`|
|`-25`|`$length-25`|
|`-25-reverse`|`$length-25-reverse`|
|`-28`|`$length-28`|
|`-28-reverse`|`$length-28-reverse`|
|`-30`|`$length-30`|
|`-30-reverse`|`$length-30-reverse`|
|`-32`|`$length-32`|
|`-32-reverse`|`$length-32-reverse`|
|`-35`|`$length-35`|
|`-35-reverse`|`$length-35-reverse`|
|`-36`|`$length-36`|
|`-36-reverse`|`$length-36-reverse`|
|`-40`|`$length-40`|
|`-40-reverse`|`$length-40-reverse`|
|`-44`|`$length-44`|
|`-44-reverse`|`$length-44-reverse`|
|`-45`|`$length-45`|
|`-45-reverse`|`$length-45-reverse`|
|`-48`|`$length-48`|
|`-48-reverse`|`$length-48-reverse`|
|`-50`|`$length-50`|
|`-50-reverse`|`$length-50-reverse`|
|`-52`|`$length-52`|
|`-52-reverse`|`$length-52-reverse`|
|`-55`|`$length-55`|
|`-55-reverse`|`$length-55-reverse`|
|`-56`|`$length-56`|
|`-56-reverse`|`$length-56-reverse`|
|`-60`|`$length-60`|
|`-60-reverse`|`$length-60-reverse`|
|`-64`|`$length-64`|
|`-64-reverse`|`$length-64-reverse`|
|`-65`|`$length-65`|
|`-65-reverse`|`$length-65-reverse`|
|`-70`|`$length-70`|
|`-70-reverse`|`$length-70-reverse`|
|`-72`|`$length-72`|
|`-72-reverse`|`$length-72-reverse`|
|`-75`|`$length-75`|
|`-75-reverse`|`$length-75-reverse`|
|`-80`|`$length-80`|
|`-80-reverse`|`$length-80-reverse`|
|`-85`|`$length-85`|
|`-85-reverse`|`$length-85-reverse`|
|`-88`|`$length-88`|
|`-88-reverse`|`$length-88-reverse`|
|`-90`|`$length-90`|
|`-90-reverse`|`$length-90-reverse`|
|`-95`|`$length-95`|
|`-95-reverse`|`$length-95-reverse`|
|`-96`|`$length-96`|
|`-96-reverse`|`$length-96-reverse`|
|`-100`|`$length-100`|
|`-100-reverse`|`$length-100-reverse`|
|`-104`|`$length-104`|
|`-104-reverse`|`$length-104-reverse`|
|`-105`|`$length-105`|
|`-105-reverse`|`$length-105-reverse`|
|`-110`|`$length-110`|
|`-110-reverse`|`$length-110-reverse`|
|`-112`|`$length-112`|
|`-112-reverse`|`$length-112-reverse`|
|`-115`|`$length-115`|
|`-115-reverse`|`$length-115-reverse`|
|`-120`|`$length-120`|
|`-120-reverse`|`$length-120-reverse`|
|`-125`|`$length-125`|
|`-125-reverse`|`$length-125-reverse`|
|`-128`|`$length-128`|
|`-128-reverse`|`$length-128-reverse`|
|`-130`|`$length-130`|
|`-130-reverse`|`$length-130-reverse`|
|`-135`|`$length-135`|
|`-135-reverse`|`$length-135-reverse`|
|`-136`|`$length-136`|
|`-136-reverse`|`$length-136-reverse`|
|`-140`|`$length-140`|
|`-140-reverse`|`$length-140-reverse`|
|`-144`|`$length-144`|
|`-144-reverse`|`$length-144-reverse`|
|`-145`|`$length-145`|
|`-145-reverse`|`$length-145-reverse`|
|`-150`|`$length-150`|
|`-150-reverse`|`$length-150-reverse`|
|`-152`|`$length-152`|
|`-152-reverse`|`$length-152-reverse`|
|`-155`|`$length-155`|
|`-155-reverse`|`$length-155-reverse`|
|`-160`|`$length-160`|
|`-160-reverse`|`$length-160-reverse`|
|`-165`|`$length-165`|
|`-165-reverse`|`$length-165-reverse`|
|`-168`|`$length-168`|
|`-168-reverse`|`$length-168-reverse`|
|`-170`|`$length-170`|
|`-170-reverse`|`$length-170-reverse`|
|`-175`|`$length-175`|
|`-175-reverse`|`$length-175-reverse`|
|`-176`|`$length-176`|
|`-176-reverse`|`$length-176-reverse`|
|`-180`|`$length-180`|
|`-180-reverse`|`$length-180-reverse`|
|`-184`|`$length-184`|
|`-184-reverse`|`$length-184-reverse`|
|`-185`|`$length-185`|
|`-185-reverse`|`$length-185-reverse`|
|`-190`|`$length-190`|
|`-190-reverse`|`$length-190-reverse`|
|`-192`|`$length-192`|
|`-192-reverse`|`$length-192-reverse`|
|`-195`|`$length-195`|
|`-195-reverse`|`$length-195-reverse`|
|`-200`|`$length-200`|
|`-200-reverse`|`$length-200-reverse`|
|`-205`|`$length-205`|
|`-205-reverse`|`$length-205-reverse`|
|`-208`|`$length-208`|
|`-208-reverse`|`$length-208-reverse`|
|`-210`|`$length-210`|
|`-210-reverse`|`$length-210-reverse`|
|`-215`|`$length-215`|
|`-215-reverse`|`$length-215-reverse`|
|`-216`|`$length-216`|
|`-216-reverse`|`$length-216-reverse`|
|`-220`|`$length-220`|
|`-220-reverse`|`$length-220-reverse`|
|`-224`|`$length-224`|
|`-224-reverse`|`$length-224-reverse`|
|`-225`|`$length-225`|
|`-225-reverse`|`$length-225-reverse`|
|`-230`|`$length-230`|
|`-230-reverse`|`$length-230-reverse`|
|`-232`|`$length-232`|
|`-232-reverse`|`$length-232-reverse`|
|`-235`|`$length-235`|
|`-235-reverse`|`$length-235-reverse`|
|`-240`|`$length-240`|
|`-240-reverse`|`$length-240-reverse`|
|`-245`|`$length-245`|
|`-245-reverse`|`$length-245-reverse`|
|`-248`|`$length-248`|
|`-248-reverse`|`$length-248-reverse`|
|`-250`|`$length-250`|
|`-250-reverse`|`$length-250-reverse`|
|`-255`|`$length-255`|
|`-255-reverse`|`$length-255-reverse`|
|`-256`|`$length-256`|
|`-256-reverse`|`$length-256-reverse`|
|`-auto`|`auto`|

具体代码见 [variables/spacing](https://github.com/ModyQyW/mp-scss/tree/master/variables/spacing/_index.scss)。

## 定位 positioning

### 属性`position`相关

属性`position`相关没有提供可直接使用的变量，只提供了 2 个映射。

`$m-position`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`relative`|`relative`|
|`absolute`|`absolute`|
|`fixed`|`fixed`|
|`static`|`static`|

`$m-position-value`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-auto`|`auto`|

具体代码见 [variables/positioning/position](https://github.com/ModyQyW/mp-scss/tree/master/variables/positioning/_position.scss)。

### 属性`z-index`

属性`z-index`没有提供可直接使用的变量，只提供了 1 个映射`$m-z-index`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-10`|`10`|
|`-20`|`20`|
|`-30`|`30`|
|`-40`|`40`|
|`-50`|`50`|
|`-60`|`60`|
|`-70`|`70`|
|`-80`|`80`|
|`-90`|`90`|
|`-100`|`100`|
|`-120`|`120`|
|`-140`|`140`|
|`-160`|`160`|
|`-180`|`180`|
|`-200`|`200`|
|`-220`|`220`|
|`-240`|`240`|
|`-auto`|`auto`|

具体代码见 [variables/positioning/z-index](https://github.com/ModyQyW/mp-scss/tree/master/variables/positioning/_z-index.scss)。

### 属性`box-sizing`

属性`box-sizing`没有提供可直接使用的变量，只提供了 1 个映射`$m-box-sizing`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-content`|`content-box`|
|`-border`|`border-box`|

具体代码见 [variables/positioning/box-sizing](https://github.com/ModyQyW/mp-scss/tree/master/variables/positioning/_box-sizing.scss)。

## 盒模型 box-model

### 属性`display`

属性`display`没有提供可直接使用的变量，只提供了 1 个映射`$m-display`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`block`|`block`|
|`inline-block`|`inline-block`|
|`inline`|`inline`|
|`flex`|`flex`|
|`inline-flex`|`inline-flex`|
|`none`|`none`|

具体代码见 [variables/box-model/display](https://github.com/ModyQyW/mp-scss/tree/master/variables/box-model/_display.scss)。

### 属性`flex`相关

属性`flex`相关没有提供可直接使用的变量，只提供了 8 个映射。

`$m-flex`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-init`|`0 1 auto`|
|`-auto`|`1 1 auto`|
|`-none`|`0 0 auto`|

`$m-flex-direction`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-row`|`row`|
|`-row-reverse`|`row-reverse`|
|`-col`|`column`|
|`-col-reverse`|`column-reverse`|

`$m-flex-wrap`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-nowrap`|`nowrap`|
|`-wrap`|`warp`|
|`-wrap-reverse`|`wrap-reverse`|

`$m-flex-shrink`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|` `(空字符串)|`1`|
|`-0`|`0`|

`$m-flex-grow`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|` `(空字符串)|`1`|
|`-0`|`0`|

`$m-align-content`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-start`|`flex-start`|
|`-end`|`flex-end`|
|`-center`|`center`|
|`-between`|`space-between`|
|`-around`|`space-around`|
|`-evenly`|`space-evenly`|
|`-stretch`|`stretch`|

`$m-align-items`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-start`|`flex-start`|
|`-end`|`flex-end`|
|`-center`|`center`|
|`-baseline`|`baseline`|
|`-stretch`|`stretch`|

`$m-align-self`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-auto`|`auto`|
|`-start`|`start`|
|`-end`|`end`|
|`-center`|`center`|
|`-stretch`|`stretch`|

`$m-justify-content`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-start`|`flex-start`|
|`-end`|`flex-end`|
|`-center`|`center`|
|`-between`|`space-between`|
|`-around`|`space-around`|
|`-evenly`|`space-evenly`|
|`-stretch`|`stretch`|

`$m-order`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-init`|`0`|
|`-first`|`-9999`|
|`-last`|`9999`|

具体代码见 [variables/box-model/flex](https://github.com/ModyQyW/mp-scss/tree/master/variables/box-model/_flex.scss)。

### 属性`overflow`

属性`overflow`没有提供可直接使用的变量，只提供了 1 个映射`$m-overflow`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-auto`|`auto`|
|`-hidden`|`hidden`|
|`-visible`|`visible`|
|`-scroll`|`scroll`|

具体代码见 [variables/box-model/overflow](https://github.com/ModyQyW/mp-scss/tree/master/variables/box-model/_overflow.scss)。

## 排版 typography

### 属性`font-family`

详细的变量名和变量值的对应可参考下表。

|变量名|变量值|是否可覆盖|
|:-:|:-:|:-:|
|`$font-family`|`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`|√|

**注意**：只提供了可直接使用的变量，没有提供映射。

具体代码见 [variables/typography/font-family](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-family.scss)。

### 属性`font-size`

详细的变量名和变量值的对应可参考下表。

|变量名|变量值|是否可覆盖|备注|
|:-:|:-:|:-:|---|
|`$font-size-benchmark`|`14`|√|基准数值|
|`$font-size-base`|`$font-size-benchmark * $scale + $unit`|×|基准字体大小|
|`$font-size-s-10`|`($font-size-benchmark - 10) * $scale + $unit`|×|小 10 号的字体大小|
|`$font-size-s-9`|`($font-size-benchmark - 9) * $scale + $unit`|×|小 9 号的字体大小|
|`$font-size-s-8`|`($font-size-benchmark - 8) * $scale + $unit`|×|小 8 号的字体大小|
|`$font-size-s-7`|`($font-size-benchmark - 7) * $scale + $unit`|×|小 7 号的字体大小|
|`$font-size-s-6`|`($font-size-benchmark - 6) * $scale + $unit`|×|小 6 号的字体大小|
|`$font-size-s-5`|`($font-size-benchmark - 5) * $scale + $unit`|×|小 5 号的字体大小|
|`$font-size-s-4`|`($font-size-benchmark - 4) * $scale + $unit`|×|小 4 号的字体大小|
|`$font-size-s-3`|`($font-size-benchmark - 3) * $scale + $unit`|×|小 3 号的字体大小|
|`$font-size-s-2`|`($font-size-benchmark - 2) * $scale + $unit`|×|小 2 号的字体大小|
|`$font-size-s-1`|`($font-size-benchmark - 1) * $scale + $unit`|×|小 1 号的字体大小|
|`$font-size-a-1`|`($font-size-benchmark + 1) * $scale + $unit`|×|大 1 号的字体大小|
|`$font-size-a-2`|`($font-size-benchmark + 2) * $scale + $unit`|×|大 2 号的字体大小|
|`$font-size-a-3`|`($font-size-benchmark + 3) * $scale + $unit`|×|大 3 号的字体大小|
|`$font-size-a-4`|`($font-size-benchmark + 4) * $scale + $unit`|×|大 4 号的字体大小|
|`$font-size-a-5`|`($font-size-benchmark + 5) * $scale + $unit`|×|大 5 号的字体大小|
|`$font-size-a-6`|`($font-size-benchmark + 6) * $scale + $unit`|×|大 6 号的字体大小|
|`$font-size-a-7`|`($font-size-benchmark + 7) * $scale + $unit`|×|大 7 号的字体大小|
|`$font-size-a-8`|`($font-size-benchmark + 8) * $scale + $unit`|×|大 8 号的字体大小|
|`$font-size-a-9`|`($font-size-benchmark + 9) * $scale + $unit`|×|大 9 号的字体大小|
|`$font-size-a-10`|`($font-size-benchmark + 10) * $scale + $unit`|×|大 10 号的字体大小|
|`$font-size-a-11`|`($font-size-benchmark + 11) * $scale + $unit`|×|大 11 号的字体大小|
|`$font-size-a-12`|`($font-size-benchmark + 12) * $scale + $unit`|×|大 12 号的字体大小|
|`$font-size-a-13`|`($font-size-benchmark + 13) * $scale + $unit`|×|大 13 号的字体大小|
|`$font-size-a-14`|`($font-size-benchmark + 14) * $scale + $unit`|×|大 14 号的字体大小|
|`$font-size-a-15`|`($font-size-benchmark + 15) * $scale + $unit`|×|大 15 号的字体大小|
|`$font-size-a-16`|`($font-size-benchmark + 16) * $scale + $unit`|×|大 16 号的字体大小|
|`$font-size-a-17`|`($font-size-benchmark + 17) * $scale + $unit`|×|大 17 号的字体大小|
|`$font-size-a-18`|`($font-size-benchmark + 18) * $scale + $unit`|×|大 18 号的字体大小|
|`$font-size-a-19`|`($font-size-benchmark + 19) * $scale + $unit`|×|大 19 号的字体大小|
|`$font-size-a-20`|`($font-size-benchmark + 20) * $scale + $unit`|×|大 20 号的字体大小|
|`$font-size-a-21`|`($font-size-benchmark + 21) * $scale + $unit`|×|大 21 号的字体大小|
|`$font-size-a-22`|`($font-size-benchmark + 22) * $scale + $unit`|×|大 22 号的字体大小|
|`$font-size-a-23`|`($font-size-benchmark + 23) * $scale + $unit`|×|大 23 号的字体大小|
|`$font-size-a-24`|`($font-size-benchmark + 24) * $scale + $unit`|×|大 24 号的字体大小|

除了以上列写的可直接使用的变量之外，还提供了 1 个映射`$m-font-size`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-4xs`|`$font-size-s-10`|
|`-3xs`|`$font-size-s-8`|
|`-2xs`|`$font-size-s-6`|
|`-xs`|`$font-size-s-4`|
|`-sm`|`$font-size-s-2`|
|`-md`|`$font-size-base`|
|`-lg`|`$font-size-a-2`|
|`-xl`|`$font-size-a-4`|
|`-2xl`|`$font-size-a-6`|
|`-3xl`|`$font-size-a-8`|
|`-4xl`|`$font-size-a-10`|

具体代码见 [variables/typography/font-size](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-size.scss)。

### 属性`font-style`

属性`font-style`没有提供可直接使用的变量，只提供了 1 个映射`$m-font-style`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`italic`|`italic`|
|`oblique`|`oblique`|

具体代码见 [variables/typography/font-style](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-style.scss)。

### 属性`font-weight`

属性`font-weight`没有提供可直接使用的变量，只提供了 1 个映射`$m-font-weight`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-thin`|`100`|
|`-extra-light`|`200`|
|`-ultra-light`|`200`|
|`-light`|`300`|
|`-default`|`400`|
|`-normal`|`400`|
|`-regular`|`400`|
|`-medium`|`500`|
|`-semi-bold`|`600`|
|`-bold`|`700`|
|`-extra-bold`|`800`|
|`-ultra-bold`|`800`|
|`-black`|`900`|
|`-heavy`|`900`|

具体代码见 [variables/typography/font-weight](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-weight.scss)。

### 属性`font-variant`

属性`font-variant`没有提供可直接使用的变量，只提供了 1 个映射`$m-font-variant`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`tabular-nums`|`tabular-nums`|

具体代码见 [variables/typography/font-variant](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-variant.scss)。

### 属性`line-height`

详细的变量名和变量值的对应可参考下表。

|变量名|变量值|是否可覆盖|备注|
|:-:|:-:|:-:|---|
|`$line-height-benchmark`|`22`|√|基准数值|
|`$line-height-base`|`$line-height-benchmark * $scale + $unit`|×|基准行高|
|`$line-height-s-10`|`($line-height-benchmark - 10) * $scale + $unit`|×|小 10 号的行高|
|`$line-height-s-9`|`($line-height-benchmark - 9) * $scale + $unit`|×|小 9 号的行高|
|`$line-height-s-8`|`($line-height-benchmark - 8) * $scale + $unit`|×|小 8 号的行高|
|`$line-height-s-7`|`($line-height-benchmark - 7) * $scale + $unit`|×|小 7 号的行高|
|`$line-height-s-6`|`($line-height-benchmark - 6) * $scale + $unit`|×|小 6 号的行高|
|`$line-height-s-5`|`($line-height-benchmark - 5) * $scale + $unit`|×|小 5 号的行高|
|`$line-height-s-4`|`($line-height-benchmark - 4) * $scale + $unit`|×|小 4 号的行高|
|`$line-height-s-3`|`($line-height-benchmark - 3) * $scale + $unit`|×|小 3 号的行高|
|`$line-height-s-2`|`($line-height-benchmark - 2) * $scale + $unit`|×|小 2 号的行高|
|`$line-height-s-1`|`($line-height-benchmark - 1) * $scale + $unit`|×|小 1 号的行高|
|`$line-height-a-1`|`($line-height-benchmark + 1) * $scale + $unit`|×|大 1 号的行高|
|`$line-height-a-2`|`($line-height-benchmark + 2) * $scale + $unit`|×|大 2 号的行高|
|`$line-height-a-3`|`($line-height-benchmark + 3) * $scale + $unit`|×|大 3 号的行高|
|`$line-height-a-4`|`($line-height-benchmark + 4) * $scale + $unit`|×|大 4 号的行高|
|`$line-height-a-5`|`($line-height-benchmark + 5) * $scale + $unit`|×|大 5 号的行高|
|`$line-height-a-6`|`($line-height-benchmark + 6) * $scale + $unit`|×|大 6 号的行高|
|`$line-height-a-7`|`($line-height-benchmark + 7) * $scale + $unit`|×|大 7 号的行高|
|`$line-height-a-8`|`($line-height-benchmark + 8) * $scale + $unit`|×|大 8 号的行高|
|`$line-height-a-9`|`($line-height-benchmark + 9) * $scale + $unit`|×|大 9 号的行高|
|`$line-height-a-10`|`($line-height-benchmark + 10) * $scale + $unit`|×|大 10 号的行高|
|`$line-height-a-11`|`($line-height-benchmark + 11) * $scale + $unit`|×|大 11 号的行高|
|`$line-height-a-12`|`($line-height-benchmark + 12) * $scale + $unit`|×|大 12 号的行高|
|`$line-height-a-13`|`($line-height-benchmark + 13) * $scale + $unit`|×|大 13 号的行高|
|`$line-height-a-14`|`($line-height-benchmark + 14) * $scale + $unit`|×|大 14 号的行高|
|`$line-height-a-15`|`($line-height-benchmark + 15) * $scale + $unit`|×|大 15 号的行高|
|`$line-height-a-16`|`($line-height-benchmark + 16) * $scale + $unit`|×|大 16 号的行高|
|`$line-height-a-17`|`($line-height-benchmark + 17) * $scale + $unit`|×|大 17 号的行高|
|`$line-height-a-18`|`($line-height-benchmark + 18) * $scale + $unit`|×|大 18 号的行高|
|`$line-height-a-19`|`($line-height-benchmark + 19) * $scale + $unit`|×|大 19 号的行高|
|`$line-height-a-20`|`($line-height-benchmark + 20) * $scale + $unit`|×|大 20 号的行高|
|`$line-height-a-21`|`($line-height-benchmark + 21) * $scale + $unit`|×|大 21 号的行高|
|`$line-height-a-22`|`($line-height-benchmark + 22) * $scale + $unit`|×|大 22 号的行高|
|`$line-height-a-23`|`($line-height-benchmark + 23) * $scale + $unit`|×|大 23 号的行高|
|`$line-height-a-24`|`($line-height-benchmark + 24) * $scale + $unit`|×|大 24 号的行高|
|`$line-height-none`|`1`|×|1 倍行高|
|`$line-height-tight`|`1.25`|×|1.25 倍行高|
|`$line-height-snug`|`1.375`|×|1.375 倍行高|
|`$line-height-normal`|`1.5`|×|1.5 倍行高|
|`$line-height-relaxed`|`1.625`|×|1.625 倍行高|
|`$line-height-loose`|`2`|×|2 倍行高|
|`$line-height-default`|`1.15`|×|1.15 倍行高|

除了以上列写的可直接使用的变量之外，还提供了 1 个映射`$m-line-height`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-4xs`|`$line-height-s-10`|
|`-3xs`|`$line-height-s-8`|
|`-2xs`|`$line-height-s-6`|
|`-xs`|`$line-height-s-4`|
|`-sm`|`$line-height-s-2`|
|`-md`|`$line-height-base`|
|`-lg`|`$line-height-a-2`|
|`-xl`|`$line-height-a-4`|
|`-2xl`|`$line-height-a-6`|
|`-3xl`|`$line-height-a-8`|
|`-4xl`|`$line-height-a-10`|

具体代码见 [variables/typography/font-size](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_font-size.scss)。

### 属性`text-align`

属性`text-align`没有提供可直接使用的变量，只提供了 1 个映射`$m-text-align`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-left`|`left`|
|`-right`|`right`|
|`-center`|`center`|
|`-justify`|`justify`|

具体代码见 [variables/typography/text-align](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_text-align.scss)。

### 属性`text-decoration`

属性`text-decoration`没有提供可直接使用的变量，只提供了 1 个映射`$m-text-transform`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`underline`|`underline`|
|`line-through`|`line-through`|

具体代码见 [variables/typography/text-decoration](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_text-decoration.scss)。

### 属性`text-transform`

属性`text-transform`没有提供可直接使用的变量，只提供了 1 个映射`$m-text-transform`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`capitalize`|`capitalize`|
|`upper`|`uppercase`|
|`uppercase`|`uppercase`|
|`lower`|`lowercase`
|`lowercase`|`lowercase`|

具体代码见 [variables/typography/text-transform](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_text-transform.scss)。

### 属性`vertical-align`

属性`vertical-align`没有提供可直接使用的变量，只提供了 1 个映射`$m-vertical-align`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-baseline`|`baseline`|
|`-sub`|`sub`|
|`-super`|`super`|
|`-text-top`|`text-top`|
|`-text-bottom`|`text-bottom`|
|`-top`|`top`|
|`-bottom`|`bottom`|
|`-middle`|`middle`|

具体代码见 [variables/typography/vertical-align](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_vertical-align.scss)。

### 属性`visibility`

属性`visibility`没有提供可直接使用的变量，只提供了 1 个映射`$m-visibility`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`visible`|`visible`|
|`invisible`|`hidden`|

具体代码见 [variables/typography/visibility](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_visibility.scss)。

### 属性`resize`

属性`resize`没有提供可直接使用的变量，只提供了 1 个映射`$m-resize`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-none`|`none`|
|` `(空字符串)|`both`|
|`-both`|`both`|
|`-y`|`vertical`|
|`-x`|`horizontal`|

具体代码见 [variables/typography/resize](https://github.com/ModyQyW/mp-scss/tree/master/variables/typography/_resize.scss)。

## 视觉 visual

### 属性`background-repeat`

属性`background-repeat`没有提供可直接使用的变量，只提供了 1 个映射`$m-background-repeat`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-repeat`|`repeat`|
|`-repeat-y`|`repeat-y`|
|`-repeat-x`|`repeat-x`|
|`-repeat-space`|`space`|
|`-repeat-round`|`round`|
|`-no-repeat`|`no-repeat`|

具体代码见 [variables/visual/background-repeat](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_background-repeat.scss)。

### 属性`background-attachment`

属性`background-attachment`没有提供可直接使用的变量，只提供了 1 个映射`$m-background-attachment`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-fixed`|`fixed`|
|`-local`|`local`|
|`-scroll`|`scroll`|

具体代码见 [variables/visual/background-attachment](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_background-attachment.scss)。

### 属性`background-position`

属性`background-position`没有提供可直接使用的变量，只提供了 1 个映射`$m-background-position`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-top`|`top`|
|`-right`|`right`|
|`-bottom`|`bottom`|
|`-left`|`left`|
|`-right-top`|`right top`|
|`-right-bottom`|`right bottom`|
|`-left-top`|`left top`|
|`-left-bottom`|`left bottom`|
|`-center`|`center`|

具体代码见 [variables/visual/background-position](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_background-position.scss)。

### 属性`background-size`

属性`background-size`没有提供可直接使用的变量，只提供了 1 个映射`$m-background-size`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-contain`|`contain`|
|`-cover`|`cover`|
|`-auto`|`auto`|

具体代码见 [variables/visual/background-size](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_background-size.scss)。

### 属性`border-style`

属性`border-style`没有提供可直接使用的变量，只提供了 1 个映射`$m-border-style`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-solid`|`solid`|
|`-dashed`|`dashes`|
|`-dotted`|`dotted`|
|`-none`|`none`|

具体代码见 [variables/visual/border-style](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_border-style.scss)。

### 属性`border-width`

属性`border-width`没有提供可直接使用的变量，只提供了 1 个映射`$m-border-width`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-1-real`|`1 + $unit`|
|`-1`|`$length-1`|
|`-2`|`$length-2`|
|`-4`|`$length-4`|

具体代码见 [variables/visual/border-width](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_border-width.scss)。

### 属性`border-radius`

属性`border-radius`没有提供可直接使用的变量，只提供了 1 个映射`$m-border-radius`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-half`|`50%`|
|`-none`|`0`|
|`-xs`|`$length-1`|
|`-sm`|`$length-2`|
|`-md`|`$length-4`|
|` `(空字符串)|`$length-4`|
|`-lg`|`$length-5`|
|`-xl`|`$length-76`|

具体代码见 [variables/visual/border-radius](https://github.com/ModyQyW/mp-scss/tree/master/variables/visual/_border-radius.scss)。

## 杂项 misc

### 属性`opacity`

属性`opacity`没有提供可直接使用的变量，只提供了 1 个映射`$m-opacity`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`-0`|`0`|
|`-25`|`.25`|
|`-50`|`.5`|
|`-75`|`.75`|
|`-100`|`1`|

具体代码见 [variables/misc/opacity](https://github.com/ModyQyW/mp-scss/tree/master/variables/misc/_opacity.scss)。
