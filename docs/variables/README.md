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

|分类|变量名|变量值|是否可覆盖|备注|
|:-:|:-:|:-:|:-:|---|
|色板色|`$gray`|`#8c8c8c`<input type="color" disabled value="#8c8c8c" />|√||
|色板色|`$gray-1`|`#fff`<input type="color" disabled value="#ffffff" />|√|白色，默认页面背景色|
|色板色|`$gray-2`|`#fafafa`<input type="color" disabled value="#fafafa" />|√||
|色板色|`$gray-3`|`#f5f5f5`<input type="color" disabled value="#f5f5f5" />|√||
|色板色|`$gray-4`|`#f0f0f0`<input type="color" disabled value="#f0f0f0" />|√||
|色板色|`$gray-5`|`#d9d9d9`<input type="color" disabled value="#d9d9d9" />|√||
|色板色|`$gray-6`|`#d9d9d9`<input type="color" disabled value="#d9d9d9" />|√||
|色板色|`$gray-7`|`#8c8c8c`<input type="color" disabled value="#8c8c8c" />|√||
|色板色|`$gray-8`|`#595959`<input type="color" disabled value="#595959" />|√||
|色板色|`$gray-9`|`#434343`<input type="color" disabled value="#434343" />|√||
|色板色|`$gray-10`|`#262626`<input type="color" disabled value="#262626" />|√||
|色板色|`$gray-11`|`#1f1f1f`<input type="color" disabled value="#1f1f1f" />|√||
|色板色|`$gray-12`|`#141414`<input type="color" disabled value="#141414" />|√|暗黑模式下默认页面背景色|
|色板色|`$gray-13`|`#000`<input type="color" disabled value="#000000" />|√|黑色|
||||||
|文字色|`$color-title`|`rgba(0, 0, 0, .85)`<input type="color" disabled value="rgba(0,0,0,.85)" />|√|标题颜色|
|文字色|`$color-title-small`|`rgba(0, 0, 0, .75)`<input type="color" disabled value="rgba(0,0,0,.75)" />|√|子标题颜色|
|文字色|`$color-main`|`rgba(0, 0, 0, .65)`<input type="color" disabled value="rgba(0,0,0,.65)" />|√|正常字号主要文字颜色|
|文字色|`$color-main-small`|`rgba(0, 0, 0, .55)`<input type="color" disabled value="rgba(0,0,0,.55)" />|√|较小字号主要文字颜色|
|文字色|`$color-secondary`|`rgba(0, 0, 0, .45)`<input type="color" disabled value="rgba(0,0,0,.45)" />|√|次要文字颜色|
|文字色|`$color-disabled`|`rgba(0, 0, 0, .25)`<input type="color" disabled value="rgba(0,0,0,.25)" />|√|禁用文字颜色|
|文字色|`$color-title-reverse`|`rgba(255, 255, 255, .85)`<input type="color" disabled value="rgba(255, 255, 255, .85)" />|√|标题颜色，暗黑模式下使用|
|文字色|`$color-title-small-reverse`|`rgba(255, 255, 255, .75)`<input type="color" disabled value="rgba(255, 255, 255, .75)" />|√|子标题颜色，暗黑模式下使用|
|文字色|`$color-main-reverse`|`rgba(255, 255, 255, .65)`<input type="color" disabled value="rgba(255, 255, 255, .65)" />|√|正常字号主要文字颜色，暗黑模式下使用|
|文字色|`$color-main-small-reverse`|`rgba(255, 255, 255, .55)`<input type="color" disabled value="rgba(255, 255, 255, .55)" />|√|较小字号主要文字颜色，暗黑模式下使用|
|文字色|`$color-secondary-reverse`|`rgba(255, 255, 255, .45)`<input type="color" disabled value="rgba(255, 255, 255, .45)" />|√|次要文字颜色，暗黑模式下使用|
|文字色|`$color-disabled-reverse`|`rgba(255, 255, 255, .3)`<input type="color" disabled value="rgba(255, 255, 255, .3)" />|√|禁用文字颜色，暗黑模式下使用|
||||||
|背景色|`$color-bg-container`|`$gray-1`<input type="color" disabled value="#ffffff" />|√|容器类背景色|
|背景色|`$color-bg-default`|`rgba(0, 0, 0, .04)`<input type="color" disabled value="rgba(0, 0, 0, .04)" />|√|组件背景色|
|背景色|`$color-bg-mask`|`rgba(0, 0, 0, .45)`<input type="color" disabled value="rgba(0, 0, 0, .45)" />|√|遮罩背景色|
|背景色|`$color-bg-shadow`|`rgba(0, 0, 0, .45)`<input type="color" disabled value="rgba(0, 0, 0, .45)" />|√|遮罩背景色|
|背景色|`$color-bg-divider`|`rgba(0, 0, 0, .06)`<input type="color" disabled value="rgba(0, 0, 0, .06)" />|√|分割线背景色|
|背景色|`$color-bg-container-reverse`|`$gray-12`<input type="color" disabled value="#141414" />|√|容器类背景色，暗黑模式下使用|
|背景色|`$color-bg-default-reverse`|`rgba(255, 255, 255, .08)`<input type="color" disabled value="rgba(255, 255, 255, .08)" />|√|组件背景色，暗黑模式下使用|
|背景色|`$color-bg-mask-reverse`|`rgba(255, 255, 255, .55)`<input type="color" disabled value="rgba(255, 255, 255, .55)" />|√|遮罩背景色，暗黑模式下使用|
|背景色|`$color-bg-shadow-reverse`|`rgba(255, 255, 255, .55)`<input type="color" disabled value="rgba(255, 255, 255, .55)" />|√|遮罩背景色，暗黑模式下使用|
|背景色|`$color-bg-divider-reverse`|`rgba(255, 255, 255, .12)`<input type="color" disabled value="rgba(255, 255, 255, .12)" />|√|分割线背景色，暗黑模式下使用|
||||||
|边框色|`$color-border-default`|`rgba(0, 0, 0, .15)`<input type="color" disabled value="rgba(0, 0, 0, .15)" />|√|边框色|
|边框色|`$color-border-default`|`rgba(255, 255, 255, .2)`<input type="color" disabled value="rgba(255, 255, 255, .2)" />|√|边框色，暗黑模式下使用|
||||||
|色板色|`$red`|`#f5222d`<input type="color" disabled value="#f5222d" />|√||
|色板色|`$red-1`|`#fff1f0`<input type="color" disabled value="#fff1f0" />|×|由`$red`生成|
|色板色|`$red-2`|`#ffccc7`<input type="color" disabled value="#ffccc7" />|×|由`$red`生成|
|色板色|`$red-3`|`#ffa39e`<input type="color" disabled value="#ffa39e" />|×|由`$red`生成|
|色板色|`$red-4`|`#ff7875`<input type="color" disabled value="#ff7875" />|×|由`$red`生成|
|色板色|`$red-5`|`#ff4d4f`<input type="color" disabled value="#ff4d4f" />|×|由`$red`生成|
|色板色|`$red-6`|`#f5222d`<input type="color" disabled value="#f5222d" />|×|由`$red`生成|
|色板色|`$red-7`|`#cf1322`<input type="color" disabled value="#cf1322" />|×|由`$red`生成|
|色板色|`$red-8`|`#a8071a`<input type="color" disabled value="#a8071a" />|×|由`$red`生成|
|色板色|`$red-9`|`#820014`<input type="color" disabled value="#820014" />|×|由`$red`生成|
|色板色|`$red-10`|`#5c0011`<input type="color" disabled value="#5c0011" />|×|由`$red`生成|
|色板色|`$red-reverse`|`#d32029`<input type="color" disabled value="#d32029" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-1-reverse`|`#2a1215`<input type="color" disabled value="#2a1215" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-2-reverse`|`#431418`<input type="color" disabled value="#431418" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-3-reverse`|`#58181c`<input type="color" disabled value="#58181c" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-4-reverse`|`#791a1f`<input type="color" disabled value="#791a1f" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-5-reverse`|`#a61d24`<input type="color" disabled value="#a61d24" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-6-reverse`|`#d32029`<input type="color" disabled value="#d32029" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-7-reverse`|`#e84749`<input type="color" disabled value="#e84749" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-8-reverse`|`#f37370`<input type="color" disabled value="#f37370" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-9-reverse`|`#f89f9a`<input type="color" disabled value="#f89f9a" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$red-10-reverse`|`#fac8c3`<input type="color" disabled value="#fac8c3" />|×|由`$red`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$volcano`|`#fa541c`<input type="color" disabled value="#fa541c" />|√||
|色板色|`$volcano-1`|`#fff2e8`<input type="color" disabled value="#fff2e8" />|×|由`$volcano`生成|
|色板色|`$volcano-2`|`#ffd8bf`<input type="color" disabled value="#ffd8bf" />|×|由`$volcano`生成|
|色板色|`$volcano-3`|`#ffbb96`<input type="color" disabled value="#ffbb96" />|×|由`$volcano`生成|
|色板色|`$volcano-4`|`#ff9c6e`<input type="color" disabled value="#ff9c6e" />|×|由`$volcano`生成|
|色板色|`$volcano-5`|`#ff7a45`<input type="color" disabled value="#ff7a45" />|×|由`$volcano`生成|
|色板色|`$volcano-6`|`#fa541c`<input type="color" disabled value="#fa541c" />|×|由`$volcano`生成|
|色板色|`$volcano-7`|`#d4380d`<input type="color" disabled value="#d4380d" />|×|由`$volcano`生成|
|色板色|`$volcano-8`|`#ad2102`<input type="color" disabled value="#ad2102" />|×|由`$volcano`生成|
|色板色|`$volcano-9`|`#871400`<input type="color" disabled value="#871400" />|×|由`$volcano`生成|
|色板色|`$volcano-10`|`#610b00`<input type="color" disabled value="#610b00" />|×|由`$volcano`生成|
|色板色|`$volcano-reverse`|`#d84a1b`<input type="color" disabled value="#d84a1b" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-1-reverse`|`#2b1611`<input type="color" disabled value="#2b1611" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-2-reverse`|`#441d12`<input type="color" disabled value="#441d12" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-3-reverse`|`#592716`<input type="color" disabled value="#592716" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-4-reverse`|`#7c3118`<input type="color" disabled value="#7c3118" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-5-reverse`|`#aa3e19`<input type="color" disabled value="#aa3e19" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-6-reverse`|`#d84a1b`<input type="color" disabled value="#d84a1b" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-7-reverse`|`#e87040`<input type="color" disabled value="#e87040" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-8-reverse`|`#f3956a`<input type="color" disabled value="#f3956a" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-9-reverse`|`#f8b692`<input type="color" disabled value="#f8b692" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$volcano-10-reverse`|`#fad4bc`<input type="color" disabled value="#fad4bc" />|×|由`$volcano`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$orange`|`#fa8c16`<input type="color" disabled value="#fa8c16" />|√||
|色板色|`$orange-1`|`#fff7e6`<input type="color" disabled value="#fff7e6" />|×|由`$orange`生成|
|色板色|`$orange-2`|`#ffe7ba`<input type="color" disabled value="#ffe7ba" />|×|由`$orange`生成|
|色板色|`$orange-3`|`#ffd591`<input type="color" disabled value="#ffd591" />|×|由`$orange`生成|
|色板色|`$orange-4`|`#ffc069`<input type="color" disabled value="#ffc069" />|×|由`$orange`生成|
|色板色|`$orange-5`|`#ffa940`<input type="color" disabled value="#ffa940" />|×|由`$orange`生成|
|色板色|`$orange-6`|`#fa8c16`<input type="color" disabled value="#fa8c16" />|×|由`$orange`生成|
|色板色|`$orange-7`|`#d46b08`<input type="color" disabled value="#d46b08" />|×|由`$orange`生成|
|色板色|`$orange-8`|`#ad4e00`<input type="color" disabled value="#ad4e00" />|×|由`$orange`生成|
|色板色|`$orange-9`|`#873800`<input type="color" disabled value="#873800" />|×|由`$orange`生成|
|色板色|`$orange-10`|`#612500`<input type="color" disabled value="#612500" />|×|由`$orange`生成|
|色板色|`$orange-reverse`|`#d87a16`<input type="color" disabled value="#d87a16" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-1-reverse`|`#2b1d11`<input type="color" disabled value="#2b1d11" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-2-reverse`|`#442a11`<input type="color" disabled value="#442a11" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-3-reverse`|`#593815`<input type="color" disabled value="#593815" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-4-reverse`|`#7c4a15`<input type="color" disabled value="#7c4a15" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-5-reverse`|`#aa6215`<input type="color" disabled value="#aa6215" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-6-reverse`|`#d87a16`<input type="color" disabled value="#d87a16" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-7-reverse`|`#e89a3c`<input type="color" disabled value="#e89a3c" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-8-reverse`|`#f3b765`<input type="color" disabled value="#f3b765" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-9-reverse`|`#f8cf8d`<input type="color" disabled value="#f8cf8d" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$orange-10-reverse`|`#fae3b7`<input type="color" disabled value="#fae3b7" />|×|由`$orange`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$gold`|`#faad14`<input type="color" disabled value="#faad14" />|√||
|色板色|`$gold-1`|`#fffbe6`<input type="color" disabled value="#fffbe6" />|×|由`$gold`生成|
|色板色|`$gold-2`|`#fff1b8`<input type="color" disabled value="#fff1b8" />|×|由`$gold`生成|
|色板色|`$gold-3`|`#ffe58f`<input type="color" disabled value="#ffe58f" />|×|由`$gold`生成|
|色板色|`$gold-4`|`#ffd666`<input type="color" disabled value="#ffd666" />|×|由`$gold`生成|
|色板色|`$gold-5`|`#ffc53d`<input type="color" disabled value="#ffc53d" />|×|由`$gold`生成|
|色板色|`$gold-6`|`#faad14`<input type="color" disabled value="#faad14" />|×|由`$gold`生成|
|色板色|`$gold-7`|`#d48806`<input type="color" disabled value="#d48806" />|×|由`$gold`生成|
|色板色|`$gold-8`|`#ad6800`<input type="color" disabled value="#ad6800" />|×|由`$gold`生成|
|色板色|`$gold-9`|`#874d00`<input type="color" disabled value="#874d00" />|×|由`$gold`生成|
|色板色|`$gold-10`|`#613400`<input type="color" disabled value="#613400" />|×|由`$gold`生成|
|色板色|`$gold-reverse`|`#d89614`<input type="color" disabled value="#d89614" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-1-reverse`|`#2b2111`<input type="color" disabled value="#2b2111" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-2-reverse`|`#443111`<input type="color" disabled value="#443111" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-3-reverse`|`#594214`<input type="color" disabled value="#594214" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-4-reverse`|`#7c5914`<input type="color" disabled value="#7c5914" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-5-reverse`|`#aa7714`<input type="color" disabled value="#aa7714" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-6-reverse`|`#d89614`<input type="color" disabled value="#d89614" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-7-reverse`|`#e8b339`<input type="color" disabled value="#e8b339" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-8-reverse`|`#f3cc62`<input type="color" disabled value="#f3cc62" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-9-reverse`|`#f8df8b`<input type="color" disabled value="#f8df8b" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$gold-10-reverse`|`#faedb5`<input type="color" disabled value="#faedb5" />|×|由`$gold`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$yellow`|`#fadb14`<input type="color" disabled value="#fadb14" />|√||
|色板色|`$yellow-1`|`#feffe6`<input type="color" disabled value="#feffe6" />|×|由`$yellow`生成|
|色板色|`$yellow-2`|`#ffffb8`<input type="color" disabled value="#ffffb8" />|×|由`$yellow`生成|
|色板色|`$yellow-3`|`#fffb8f`<input type="color" disabled value="#fffb8f" />|×|由`$yellow`生成|
|色板色|`$yellow-4`|`#fff566`<input type="color" disabled value="#fff566" />|×|由`$yellow`生成|
|色板色|`$yellow-5`|`#ffec3d`<input type="color" disabled value="#ffec3d" />|×|由`$yellow`生成|
|色板色|`$yellow-6`|`#fadb14`<input type="color" disabled value="#fadb14" />|×|由`$yellow`生成|
|色板色|`$yellow-7`|`#d4b106`<input type="color" disabled value="#d4b106" />|×|由`$yellow`生成|
|色板色|`$yellow-8`|`#ad8b00`<input type="color" disabled value="#ad8b00" />|×|由`$yellow`生成|
|色板色|`$yellow-9`|`#876800`<input type="color" disabled value="#876800" />|×|由`$yellow`生成|
|色板色|`$yellow-10`|`#614700`<input type="color" disabled value="#614700" />|×|由`$yellow`生成|
|色板色|`$yellow-reverse`|`#d8bd14`<input type="color" disabled value="#d8bd14" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-1-reverse`|`#2b2611`<input type="color" disabled value="#2b2611" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-2-reverse`|`#443b11`<input type="color" disabled value="#443b11" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-3-reverse`|`#595014`<input type="color" disabled value="#595014" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-4-reverse`|`#7c6e14`<input type="color" disabled value="#7c6e14" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-5-reverse`|`#aa9514`<input type="color" disabled value="#aa9514" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-6-reverse`|`#d8bd14`<input type="color" disabled value="#d8bd14" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-7-reverse`|`#e8d639`<input type="color" disabled value="#e8d639" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-8-reverse`|`#f3ea62`<input type="color" disabled value="#f3ea62" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-9-reverse`|`#f8f48b`<input type="color" disabled value="#f8f48b" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$yellow-10-reverse`|`#fafab5`<input type="color" disabled value="#fafab5" />|×|由`$yellow`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$lime`|`#a0d911`<input type="color" disabled value="#a0d911" />|√||
|色板色|`$lime-1`|`#fcffe6`<input type="color" disabled value="#fcffe6" />|×|由`$lime`生成|
|色板色|`$lime-2`|`#f4ffb8`<input type="color" disabled value="#f4ffb8" />|×|由`$lime`生成|
|色板色|`$lime-3`|`#eaff8f`<input type="color" disabled value="#eaff8f" />|×|由`$lime`生成|
|色板色|`$lime-4`|`#d3f261`<input type="color" disabled value="#d3f261" />|×|由`$lime`生成|
|色板色|`$lime-5`|`#bae637`<input type="color" disabled value="#bae637" />|×|由`$lime`生成|
|色板色|`$lime-6`|`#a0d911`<input type="color" disabled value="#a0d911" />|×|由`$lime`生成|
|色板色|`$lime-7`|`#7cb305`<input type="color" disabled value="#7cb305" />|×|由`$lime`生成|
|色板色|`$lime-8`|`#5b8c00`<input type="color" disabled value="#5b8c00" />|×|由`$lime`生成|
|色板色|`$lime-9`|`#3f6600`<input type="color" disabled value="#3f6600" />|×|由`$lime`生成|
|色板色|`$lime-10`|`#254000`<input type="color" disabled value="#254000" />|×|由`$lime`生成|
|色板色|`$lime-reverse`|`#8bbb11`<input type="color" disabled value="#8bbb11" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-1-reverse`|`#1f2611`<input type="color" disabled value="#1f2611" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-2-reverse`|`#2e3c10`<input type="color" disabled value="#2e3c10" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-3-reverse`|`#3e4f13`<input type="color" disabled value="#3e4f13" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-4-reverse`|`#536d13`<input type="color" disabled value="#536d13" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-5-reverse`|`#6f9412`<input type="color" disabled value="#6f9412" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-6-reverse`|`#8bbb11`<input type="color" disabled value="#8bbb11" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-7-reverse`|`#a9d134`<input type="color" disabled value="#a9d134" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-8-reverse`|`#c9e75d`<input type="color" disabled value="#c9e75d" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-9-reverse`|`#e4f88b`<input type="color" disabled value="#e4f88b" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$lime-10-reverse`|`#f0fab5`<input type="color" disabled value="#f0fab5" />|×|由`$lime`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|色板色|`$green`|`#52c41a`<input type="color" disabled value="#52c41a" />|√||
|色板色|`$green-1`|`#f6ffed`<input type="color" disabled value="#f6ffed" />|×|由`$green`生成|
|色板色|`$green-2`|`#d9f7be`<input type="color" disabled value="#d9f7be" />|×|由`$green`生成|
|色板色|`$green-3`|`#b7eb8f`<input type="color" disabled value="#b7eb8f" />|×|由`$green`生成|
|色板色|`$green-4`|`#95de64`<input type="color" disabled value="#95de64" />|×|由`$green`生成|
|色板色|`$green-5`|`#73d13d`<input type="color" disabled value="#73d13d" />|×|由`$green`生成|
|色板色|`$green-6`|`#52c41a`<input type="color" disabled value="#52c41a" />|×|由`$green`生成|
|色板色|`$green-7`|`#389e0d`<input type="color" disabled value="#389e0d" />|×|由`$green`生成|
|色板色|`$green-8`|`#237804`<input type="color" disabled value="#237804" />|×|由`$green`生成|
|色板色|`$green-9`|`#135200`<input type="color" disabled value="#135200" />|×|由`$green`生成|
|色板色|`$green-10`|`#092b00`<input type="color" disabled value="#092b00" />|×|由`$green`生成|
|色板色|`$green-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-1-reverse`|`#162312`<input type="color" disabled value="#162312" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-2-reverse`|`#1d3712`<input type="color" disabled value="#1d3712" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-3-reverse`|`#274916`<input type="color" disabled value="#274916" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-4-reverse`|`#306317`<input type="color" disabled value="#306317" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-5-reverse`|`#3c8618`<input type="color" disabled value="#3c8618" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-6-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-7-reverse`|`#6abe39`<input type="color" disabled value="#6abe39" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-8-reverse`|`#8fd460`<input type="color" disabled value="#8fd460" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-9-reverse`|`#b2e58b`<input type="color" disabled value="#b2e58b" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$green-10-reverse`|`#d5f2bb`<input type="color" disabled value="#d5f2bb" />|×|由`$green`与`$color-bg-container-reverse`生成，暗黑模式下使用
|||||||
|色板色|`$cyan`|`#13c2c2`<input type="color" disabled value="#13c2c2" />|√||
|色板色|`$cyan-1`|`#e6fffb`<input type="color" disabled value="#e6fffb" />|×|由`$cyan`生成|
|色板色|`$cyan-2`|`#b5f5ec`<input type="color" disabled value="#b5f5ec" />|×|由`$cyan`生成|
|色板色|`$cyan-3`|`#87e8de`<input type="color" disabled value="#87e8de" />|×|由`$cyan`生成|
|色板色|`$cyan-4`|`#5cdbd3`<input type="color" disabled value="#5cdbd3" />|×|由`$cyan`生成|
|色板色|`$cyan-5`|`#36cfc9`<input type="color" disabled value="#36cfc9" />|×|由`$cyan`生成|
|色板色|`$cyan-6`|`#13c2c2`<input type="color" disabled value="#13c2c2" />|×|由`$cyan`生成|
|色板色|`$cyan-7`|`#08979c`<input type="color" disabled value="#08979c" />|×|由`$cyan`生成|
|色板色|`$cyan-8`|`#006d75`<input type="color" disabled value="#006d75" />|×|由`$cyan`生成|
|色板色|`$cyan-9`|`#00474f`<input type="color" disabled value="#00474f" />|×|由`$cyan`生成|
|色板色|`$cyan-10`|`#002329`<input type="color" disabled value="#002329" />|×|由`$cyan`生成|
|色板色|`$cyan-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-1-reverse`|`#162312`<input type="color" disabled value="#162312" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-2-reverse`|`#1d3712`<input type="color" disabled value="#1d3712" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-3-reverse`|`#274916`<input type="color" disabled value="#274916" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-4-reverse`|`#306317`<input type="color" disabled value="#306317" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-5-reverse`|`#3c8618`<input type="color" disabled value="#3c8618" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-6-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-7-reverse`|`#6abe39`<input type="color" disabled value="#6abe39" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-8-reverse`|`#8fd460`<input type="color" disabled value="#8fd460" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-9-reverse`|`#b2e58b`<input type="color" disabled value="#b2e58b" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$cyan-10-reverse`|`#d5f2bb`<input type="color" disabled value="#d5f2bb" />|×|由`$cyan`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||||
|色板色|`$blue`|`#1890ff`<input type="color" disabled value="#1890ff" />|√||
|色板色|`$blue-1`|`#e6f7ff`<input type="color" disabled value="#e6f7ff" />|×|由`$blue`生成|
|色板色|`$blue-2`|`#bae7ff`<input type="color" disabled value="#bae7ff" />|×|由`$blue`生成|
|色板色|`$blue-3`|`#91d5ff`<input type="color" disabled value="#91d5ff" />|×|由`$blue`生成|
|色板色|`$blue-4`|`#69c0ff`<input type="color" disabled value="#69c0ff" />|×|由`$blue`生成|
|色板色|`$blue-5`|`#40a9ff`<input type="color" disabled value="#40a9ff" />|×|由`$blue`生成|
|色板色|`$blue-6`|`#1890ff`<input type="color" disabled value="#1890ff" />|×|由`$blue`生成|
|色板色|`$blue-7`|`#096dd9`<input type="color" disabled value="#096dd9" />|×|由`$blue`生成|
|色板色|`$blue-8`|`#0050b3`<input type="color" disabled value="#0050b3" />|×|由`$blue`生成|
|色板色|`$blue-9`|`#003a8c`<input type="color" disabled value="#003a8c" />|×|由`$blue`生成|
|色板色|`$blue-10`|`#002766`<input type="color" disabled value="#002766" />|×|由`$blue`生成|
|色板色|`$blue-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-1-reverse`|`#111d2c`<input type="color" disabled value="#111d2c" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-2-reverse`|`#112a45`<input type="color" disabled value="#112a45" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-3-reverse`|`#15395b`<input type="color" disabled value="#15395b" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-4-reverse`|`#164c7e`<input type="color" disabled value="#164c7e" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-5-reverse`|`#1765ad`<input type="color" disabled value="#1765ad" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-6-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-7-reverse`|`#3c9ae8`<input type="color" disabled value="#3c9ae8" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-8-reverse`|`#65b7f3`<input type="color" disabled value="#65b7f3" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-9-reverse`|`#8dcff8`<input type="color" disabled value="#8dcff8" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$blue-10-reverse`|`#b7e3fa`<input type="color" disabled value="#b7e3fa" />|×|由`$blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||||
|色板色|`$geek-blue`|`#2f54eb`<input type="color" disabled value="#2f54eb" />|√||
|色板色|`$geek-blue-1`|`#f0f5ff`<input type="color" disabled value="#f0f5ff" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-2`|`#d6e4ff`<input type="color" disabled value="#d6e4ff" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-3`|`#adc6ff`<input type="color" disabled value="#adc6ff" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-4`|`#85a5ff`<input type="color" disabled value="#85a5ff" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-5`|`#597ef7`<input type="color" disabled value="#597ef7" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-6`|`#2f54eb`<input type="color" disabled value="#2f54eb" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-7`|`#1d39c4`<input type="color" disabled value="#1d39c4" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-8`|`#10239e`<input type="color" disabled value="#10239e" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-9`|`#061178`<input type="color" disabled value="#061178" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-10`|`#030852`<input type="color" disabled value="#030852" />|×|由`$geek-blue`生成|
|色板色|`$geek-blue-reverse`|`#2b4acb`<input type="color" disabled value="#2b4acb" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-1-reverse`|`#131629`<input type="color" disabled value="#131629" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-2-reverse`|`#161d40`<input type="color" disabled value="#161d40" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-3-reverse`|`#1c2755`<input type="color" disabled value="#1c2755" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-4-reverse`|`#203175`<input type="color" disabled value="#203175" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-5-reverse`|`#263ea0`<input type="color" disabled value="#263ea0" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-6-reverse`|`#2b4acb`<input type="color" disabled value="#2b4acb" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-7-reverse`|`#5273e0`<input type="color" disabled value="#5273e0" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-8-reverse`|`#7f9ef3`<input type="color" disabled value="#7f9ef3" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-9-reverse`|`#a8c1f8`<input type="color" disabled value="#a8c1f8" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$geek-blue-10-reverse`|`#d2e0fa`<input type="color" disabled value="#d2e0fa" />|×|由`$geek-blue`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||||
|色板色|`$purple`|`#722ed1`<input type="color" disabled value="#722ed1" />|√||
|色板色|`$purple-1`|`#f9f0ff`<input type="color" disabled value="#f9f0ff" />|×|由`$purple`生成|
|色板色|`$purple-2`|`#efdbff`<input type="color" disabled value="#efdbff" />|×|由`$purple`生成|
|色板色|`$purple-3`|`#d3adf7`<input type="color" disabled value="#d3adf7" />|×|由`$purple`生成|
|色板色|`$purple-4`|`#b37feb`<input type="color" disabled value="#b37feb" />|×|由`$purple`生成|
|色板色|`$purple-5`|`#9254de`<input type="color" disabled value="#9254de" />|×|由`$purple`生成|
|色板色|`$purple-6`|`#722ed1`<input type="color" disabled value="#722ed1" />|×|由`$purple`生成|
|色板色|`$purple-7`|`#531dab`<input type="color" disabled value="#531dab" />|×|由`$purple`生成|
|色板色|`$purple-8`|`#391085`<input type="color" disabled value="#391085" />|×|由`$purple`生成|
|色板色|`$purple-9`|`#22075e`<input type="color" disabled value="#22075e" />|×|由`$purple`生成|
|色板色|`$purple-10`|`#120338`<input type="color" disabled value="#120338" />|×|由`$purple`生成|
|色板色|`$purple-reverse`|`#642ab5`<input type="color" disabled value="#642ab5" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-1-reverse`|`#1a1325`<input type="color" disabled value="#1a1325" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-2-reverse`|`#24163a`<input type="color" disabled value="#24163a" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-3-reverse`|`#301c4d`<input type="color" disabled value="#301c4d" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-4-reverse`|`#3e2069`<input type="color" disabled value="#3e2069" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-5-reverse`|`#51258f`<input type="color" disabled value="#51258f" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-6-reverse`|`#642ab5`<input type="color" disabled value="#642ab5" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-7-reverse`|`#854eca`<input type="color" disabled value="#854eca" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-8-reverse`|`#ab7ae0`<input type="color" disabled value="#ab7ae0" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-9-reverse`|`#cda8f0`<input type="color" disabled value="#cda8f0" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$purple-10-reverse`|`#ebd7fa`<input type="color" disabled value="#ebd7fa" />|×|由`$purple`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|||||||
|色板色|`$magenta`|`#eb2f96`<input type="color" disabled value="#eb2f96" />|√||
|色板色|`$magenta-1`|`#fff0f6`<input type="color" disabled value="#fff0f6" />|×|由`$magenta`生成|
|色板色|`$magenta-2`|`#ffd6e7`<input type="color" disabled value="#ffd6e7" />|×|由`$magenta`生成|
|色板色|`$magenta-3`|`#ffadd2`<input type="color" disabled value="#ffadd2" />|×|由`$magenta`生成|
|色板色|`$magenta-4`|`#ff85c0`<input type="color" disabled value="#ff85c0" />|×|由`$magenta`生成|
|色板色|`$magenta-5`|`#f759ab`<input type="color" disabled value="#f759ab" />|×|由`$magenta`生成|
|色板色|`$magenta-6`|`#eb2f96`<input type="color" disabled value="#eb2f96" />|×|由`$magenta`生成|
|色板色|`$magenta-7`|`#c41d7f`<input type="color" disabled value="#c41d7f" />|×|由`$magenta`生成|
|色板色|`$magenta-8`|`#9e1068`<input type="color" disabled value="#9e1068" />|×|由`$magenta`生成|
|色板色|`$magenta-9`|`#780650`<input type="color" disabled value="#780650" />|×|由`$magenta`生成|
|色板色|`$magenta-10`|`#520339`<input type="color" disabled value="#520339" />|×|由`$magenta`生成|
|色板色|`$magenta-reverse`|`#cb2b83`<input type="color" disabled value="#cb2b83" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-1-reverse`|`#291321`<input type="color" disabled value="#291321" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-2-reverse`|`#40162f`<input type="color" disabled value="#40162f" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-3-reverse`|`#551c3b`<input type="color" disabled value="#551c3b" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-4-reverse`|`#75204f`<input type="color" disabled value="#75204f" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-5-reverse`|`#a02669`<input type="color" disabled value="#a02669" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-6-reverse`|`#cb2b83`<input type="color" disabled value="#cb2b83" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-7-reverse`|`#e0529c`<input type="color" disabled value="#e0529c" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-8-reverse`|`#f37fb7`<input type="color" disabled value="#f37fb7" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-9-reverse`|`#f8a8cc`<input type="color" disabled value="#f8a8cc" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|色板色|`$magenta-10-reverse`|`#fad2e3`<input type="color" disabled value="#fad2e3" />|×|由`$magenta`与`$color-bg-container-reverse`生成，暗黑模式下使用|
||||||
|功能色|`$color-primary`|`$blue-6`<input type="color" disabled value="#1890ff" />|√|修改`$blue`会连锁修改该变量，也可以单独修改|
|功能色|`$color-success`|`$green-6`<input type="color" disabled value="#52c41a" />|√|修改`$green`会连锁修改该变量，也可以单独修改|
|功能色|`$color-warning`|`$gold-6`<input type="color" disabled value="#faad14" />|√|修改`$gold`会连锁修改该变量，也可以单独修改|
|功能色|`$color-error`|`$red-6`<input type="color" disabled value="#f5222d" />|√|默认修改`$red`会连锁修改该变量，也可以单独修改|
|功能色|`$color-info`|`$blue-6`<input type="color" disabled value="#1890ff" />|√|默认修改`$blue`会连锁修改该变量，也可以单独修改|
|功能色|`$color-primary-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|由`$color-primary`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|功能色|`$color-success-reverse`|`#49aa19`<input type="color" disabled value="#49aa19" />|×|由`$color-success`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|功能色|`$color-warning-reverse`|`#d89614`<input type="color" disabled value="#d89614" />|×|由`$color-warning`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|功能色|`$color-error-reverse`|`#d32029`<input type="color" disabled value="#d32029" />|×|由`$color-error`与`$color-bg-container-reverse`生成，暗黑模式下使用|
|功能色|`$color-info-reverse`|`#177ddc`<input type="color" disabled value="#177ddc" />|×|由`$color-info`与`$color-bg-container-reverse`生成，暗黑模式下使用|

除了以上列写的可直接使用的变量之外，还提供了两个主题映射，合起来包含了以上所有变量，变量名即为映射键，变量值即为映射值。

浅色主题的映射有：

- 色板色：`$palette-colors-light`
- 功能色：`$m-functional-color-light`，增加了映射键和映射值均为`transparent`的键值对
- 文字色：`$m-text-color-light`
- 背景色：`$m-background-color-light`
- 边框色：`$m-border-color-light`

暗黑主题的映射有：

- 色板色：`$palette-colors-dark`
- 功能色：`$m-functional-color-dark`，增加了映射键和映射值均为`transparent`的键值对
- 文字色：`$m-text-color-dark`
- 背景色：`$m-background-color-dark`
- 边框色：`$m-border-color-dark`

具体代码见 [variables/colors](https://github.com/ModyQyW/mp-scss/tree/master/variables/colors)。

### 什么时候会提供可直接使用的变量

可直接使用的变量往往能免去开发者只能使用映射时的不方便，如颜色、比例、长度等。

映射一般都会提供，目的是遍历映射批量生成样式。

## 比例 ratio

内置一些常用的比例，免去自己算一算的烦恼。详细的变量名和变量值的对应可参考下表。

|变量名|变量值|
|:-:|:-:|
|`$ratio-1-24`|4.16666667%|
|`$ratio-1-20`|5%|
|`$ratio-1-12`|8.33333333%|
|`$ratio-1-10`|10%|
|`$ratio-1-8`|12.5%|
|`$ratio-3-20`|15%|
|`$ratio-1-6`|16.66666667%|
|`$ratio-1-5`|20%|
|`$ratio-5-24`|20.83333333%|
|`$ratio-1-4`|25%|
|`$ratio-7-24`|29.16666667%|
|`$ratio-3-10`|30%|
|`$ratio-1-3`|33.33333333%|
|`$ratio-7-20`|35%|
|`$ratio-3-8`|37.5%|
|`$ratio-2-5`|40%|
|`$ratio-5-12`|41.66666667%|
|`$ratio-9-20`|45%|
|`$ratio-11-24`|45.83333333%|
|`$ratio-1-2`|50%|
|`$ratio-13-24`|54.16666667%|
|`$ratio-11-20`|55%|
|`$ratio-7-12`|58.33333333%|
|`$ratio-3-5`|60%|
|`$ratio-5-8`|62.5%|
|`$ratio-13-20`|65%|
|`$ratio-2-3`|66.66666667%|
|`$ratio-7-10`|70%|
|`$ratio-17-24`|70.83333333%|
|`$ratio-3-4`|75%|
|`$ratio-19-24`|79.16666667%|
|`$ratio-4-5`|80%|
|`$ratio-5-6`|83.33333333%|
|`$ratio-17-20`|85%|
|`$ratio-7-8`|87.5%|
|`$ratio-9-10`|90%|
|`$ratio-11-12`|91.66666667%|
|`$ratio-19-20`|95%|
|`$ratio-23-24`|95.83333333%|
|`$ratio-half`|50%|
|`$ratio-full`|100%|

除了以上列写的可直接使用的变量之外，还提供了一个映射`$m-ratio`，包含了以上所有变量，变量名即为映射键，变量值即为映射值。

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
|`0`|`0`|
|`1-real`|`$length-1-real`|
|`1`|`$length-1`|
|`2`|`$length-2`|
|`4`|`$length-4`|
|`5`|`$length-5`|
|`8`|`$length-8`|
|`10`|`$length-10`|
|`12`|`$length-12`|
|`15`|`$length-15`|
|`16`|`$length-16`|
|`20`|`$length-20`|
|`24`|`$length-24`|
|`25`|`$length-25`|
|`28`|`$length-28`|
|`30`|`$length-30`|
|`32`|`$length-32`|
|`35`|`$length-35`|
|`36`|`$length-36`|
|`40`|`$length-40`|
|`44`|`$length-44`|
|`45`|`$length-45`|
|`48`|`$length-48`|
|`50`|`$length-50`|
|`52`|`$length-52`|
|`55`|`$length-55`|
|`56`|`$length-56`|
|`60`|`$length-60`|
|`64`|`$length-64`|
|`65`|`$length-65`|
|`70`|`$length-70`|
|`72`|`$length-72`|
|`75`|`$length-75`|
|`80`|`$length-80`|
|`85`|`$length-85`|
|`88`|`$length-88`|
|`90`|`$length-90`|
|`95`|`$length-95`|
|`96`|`$length-96`|
|`100`|`$length-100`|
|`104`|`$length-104`|
|`105`|`$length-105`|
|`110`|`$length-110`|
|`112`|`$length-112`|
|`115`|`$length-115`|
|`120`|`$length-120`|
|`125`|`$length-125`|
|`128`|`$length-128`|
|`130`|`$length-130`|
|`135`|`$length-135`|
|`136`|`$length-136`|
|`140`|`$length-140`|
|`144`|`$length-144`|
|`145`|`$length-145`|
|`150`|`$length-150`|
|`152`|`$length-152`|
|`155`|`$length-155`|
|`160`|`$length-160`|
|`165`|`$length-165`|
|`168`|`$length-168`|
|`170`|`$length-170`|
|`175`|`$length-175`|
|`176`|`$length-176`|
|`180`|`$length-180`|
|`184`|`$length-184`|
|`185`|`$length-185`|
|`190`|`$length-190`|
|`192`|`$length-192`|
|`195`|`$length-195`|
|`200`|`$length-200`|
|`205`|`$length-205`|
|`208`|`$length-208`|
|`210`|`$length-210`|
|`215`|`$length-215`|
|`216`|`$length-216`|
|`220`|`$length-220`|
|`224`|`$length-224`|
|`225`|`$length-225`|
|`230`|`$length-230`|
|`232`|`$length-232`|
|`235`|`$length-235`|
|`240`|`$length-240`|
|`245`|`$length-245`|
|`248`|`$length-248`|
|`250`|`$length-250`|
|`255`|`$length-255`|
|`256`|`$length-256`|

具体代码见 [variables/sizing](https://github.com/ModyQyW/mp-scss/tree/master/variables/sizing/_index.scss)。

## 间距 spacing

间距没有提供可直接使用的变量，只提供了基于长度进行封装的、用于 padding 和 margin 的映射`$m-spacing`，它的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`0`|`0`|
|`1-real`|`$length-1-real`|
|`1-real-reverse`|`$length-1-real-reverse`|
|`1`|`$length-1`|
|`1-reverse`|`$length-1-reverse`|
|`2`|`$length-2`|
|`2-reverse`|`$length-2-reverse`|
|`4`|`$length-4`|
|`4-reverse`|`$length-4-reverse`|
|`5`|`$length-5`|
|`5-reverse`|`$length-5-reverse`|
|`8`|`$length-8`|
|`8-reverse`|`$length-8-reverse`|
|`10`|`$length-10`|
|`10-reverse`|`$length-10-reverse`|
|`12`|`$length-12`|
|`12-reverse`|`$length-12-reverse`|
|`15`|`$length-15`|
|`15-reverse`|`$length-15-reverse`|
|`16`|`$length-16`|
|`16-reverse`|`$length-16-reverse`|
|`20`|`$length-20`|
|`20-reverse`|`$length-20-reverse`|
|`24`|`$length-24`|
|`24-reverse`|`$length-24-reverse`|
|`25`|`$length-25`|
|`25-reverse`|`$length-25-reverse`|
|`28`|`$length-28`|
|`28-reverse`|`$length-28-reverse`|
|`30`|`$length-30`|
|`30-reverse`|`$length-30-reverse`|
|`32`|`$length-32`|
|`32-reverse`|`$length-32-reverse`|
|`35`|`$length-35`|
|`35-reverse`|`$length-35-reverse`|
|`36`|`$length-36`|
|`36-reverse`|`$length-36-reverse`|
|`40`|`$length-40`|
|`40-reverse`|`$length-40-reverse`|
|`44`|`$length-44`|
|`44-reverse`|`$length-44-reverse`|
|`45`|`$length-45`|
|`45-reverse`|`$length-45-reverse`|
|`48`|`$length-48`|
|`48-reverse`|`$length-48-reverse`|
|`50`|`$length-50`|
|`50-reverse`|`$length-50-reverse`|
|`52`|`$length-52`|
|`52-reverse`|`$length-52-reverse`|
|`55`|`$length-55`|
|`55-reverse`|`$length-55-reverse`|
|`56`|`$length-56`|
|`56-reverse`|`$length-56-reverse`|
|`60`|`$length-60`|
|`60-reverse`|`$length-60-reverse`|
|`64`|`$length-64`|
|`64-reverse`|`$length-64-reverse`|
|`65`|`$length-65`|
|`65-reverse`|`$length-65-reverse`|
|`70`|`$length-70`|
|`70-reverse`|`$length-70-reverse`|
|`72`|`$length-72`|
|`72-reverse`|`$length-72-reverse`|
|`75`|`$length-75`|
|`75-reverse`|`$length-75-reverse`|
|`80`|`$length-80`|
|`80-reverse`|`$length-80-reverse`|
|`85`|`$length-85`|
|`85-reverse`|`$length-85-reverse`|
|`88`|`$length-88`|
|`88-reverse`|`$length-88-reverse`|
|`90`|`$length-90`|
|`90-reverse`|`$length-90-reverse`|
|`95`|`$length-95`|
|`95-reverse`|`$length-95-reverse`|
|`96`|`$length-96`|
|`96-reverse`|`$length-96-reverse`|
|`100`|`$length-100`|
|`100-reverse`|`$length-100-reverse`|
|`104`|`$length-104`|
|`104-reverse`|`$length-104-reverse`|
|`105`|`$length-105`|
|`105-reverse`|`$length-105-reverse`|
|`110`|`$length-110`|
|`110-reverse`|`$length-110-reverse`|
|`112`|`$length-112`|
|`112-reverse`|`$length-112-reverse`|
|`115`|`$length-115`|
|`115-reverse`|`$length-115-reverse`|
|`120`|`$length-120`|
|`120-reverse`|`$length-120-reverse`|
|`125`|`$length-125`|
|`125-reverse`|`$length-125-reverse`|
|`128`|`$length-128`|
|`128-reverse`|`$length-128-reverse`|
|`130`|`$length-130`|
|`130-reverse`|`$length-130-reverse`|
|`135`|`$length-135`|
|`135-reverse`|`$length-135-reverse`|
|`136`|`$length-136`|
|`136-reverse`|`$length-136-reverse`|
|`140`|`$length-140`|
|`140-reverse`|`$length-140-reverse`|
|`144`|`$length-144`|
|`144-reverse`|`$length-144-reverse`|
|`145`|`$length-145`|
|`145-reverse`|`$length-145-reverse`|
|`150`|`$length-150`|
|`150-reverse`|`$length-150-reverse`|
|`152`|`$length-152`|
|`152-reverse`|`$length-152-reverse`|
|`155`|`$length-155`|
|`155-reverse`|`$length-155-reverse`|
|`160`|`$length-160`|
|`160-reverse`|`$length-160-reverse`|
|`165`|`$length-165`|
|`165-reverse`|`$length-165-reverse`|
|`168`|`$length-168`|
|`168-reverse`|`$length-168-reverse`|
|`170`|`$length-170`|
|`170-reverse`|`$length-170-reverse`|
|`175`|`$length-175`|
|`175-reverse`|`$length-175-reverse`|
|`176`|`$length-176`|
|`176-reverse`|`$length-176-reverse`|
|`180`|`$length-180`|
|`180-reverse`|`$length-180-reverse`|
|`184`|`$length-184`|
|`184-reverse`|`$length-184-reverse`|
|`185`|`$length-185`|
|`185-reverse`|`$length-185-reverse`|
|`190`|`$length-190`|
|`190-reverse`|`$length-190-reverse`|
|`192`|`$length-192`|
|`192-reverse`|`$length-192-reverse`|
|`195`|`$length-195`|
|`195-reverse`|`$length-195-reverse`|
|`200`|`$length-200`|
|`200-reverse`|`$length-200-reverse`|
|`205`|`$length-205`|
|`205-reverse`|`$length-205-reverse`|
|`208`|`$length-208`|
|`208-reverse`|`$length-208-reverse`|
|`210`|`$length-210`|
|`210-reverse`|`$length-210-reverse`|
|`215`|`$length-215`|
|`215-reverse`|`$length-215-reverse`|
|`216`|`$length-216`|
|`216-reverse`|`$length-216-reverse`|
|`220`|`$length-220`|
|`220-reverse`|`$length-220-reverse`|
|`224`|`$length-224`|
|`224-reverse`|`$length-224-reverse`|
|`225`|`$length-225`|
|`225-reverse`|`$length-225-reverse`|
|`230`|`$length-230`|
|`230-reverse`|`$length-230-reverse`|
|`232`|`$length-232`|
|`232-reverse`|`$length-232-reverse`|
|`235`|`$length-235`|
|`235-reverse`|`$length-235-reverse`|
|`240`|`$length-240`|
|`240-reverse`|`$length-240-reverse`|
|`245`|`$length-245`|
|`245-reverse`|`$length-245-reverse`|
|`248`|`$length-248`|
|`248-reverse`|`$length-248-reverse`|
|`250`|`$length-250`|
|`250-reverse`|`$length-250-reverse`|
|`255`|`$length-255`|
|`255-reverse`|`$length-255-reverse`|
|`256`|`$length-256`|
|`256-reverse`|`$length-256-reverse`|
|`auto`|`auto`|

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
|`0`|`0`|
|`auto`|`auto`|

具体代码见 [variables/positioning/position](https://github.com/ModyQyW/mp-scss/tree/master/variables/positioning/_position.scss)。

### 属性`z-index`

属性`z-index`没有提供可直接使用的变量，只提供了 1 个映射`$m-z-index`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`0`|`0`|
|`10`|`10`|
|`20`|`20`|
|`30`|`30`|
|`40`|`40`|
|`50`|`50`|
|`60`|`60`|
|`70`|`70`|
|`80`|`80`|
|`90`|`90`|
|`100`|`100`|
|`120`|`120`|
|`140`|`140`|
|`160`|`160`|
|`180`|`180`|
|`200`|`200`|
|`220`|`220`|
|`240`|`240`|
|`auto`|`auto`|

具体代码见 [variables/positioning/z-index](https://github.com/ModyQyW/mp-scss/tree/master/variables/positioning/_z-index.scss)。

### 属性`box-sizing`

属性`box-sizing`没有提供可直接使用的变量，只提供了 1 个映射`$m-box-sizing`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`content`|`content-box`|
|`border`|`border-box`|

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
|`init`|`0 1 auto`|
|`auto`|`1 1 auto`|
|`none`|`0 0 auto`|

`$m-flex-direction`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`row`|`row`|
|`row-reverse`|`row-reverse`|
|`col`|`column`|
|`col-reverse`|`column-reverse`|

`$m-flex-wrap`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`nowrap`|`nowrap`|
|`wrap`|`warp`|
|`wrap-reverse`|`wrap-reverse`|

`$m-align-content`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`start`|`flex-start`|
|`end`|`flex-end`|
|`center`|`center`|
|`between`|`space-between`|
|`around`|`space-around`|
|`evenly`|`space-evenly`|
|`stretch`|`stretch`|

`$m-align-items`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`start`|`flex-start`|
|`end`|`flex-end`|
|`center`|`center`|
|`baseline`|`baseline`|
|`stretch`|`stretch`|

`$m-align-self`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`auto`|`auto`|
|`start`|`start`|
|`end`|`end`|
|`center`|`center`|
|`stretch`|`stretch`|

`$m-justify-content`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`start`|`flex-start`|
|`end`|`flex-end`|
|`center`|`center`|
|`between`|`space-between`|
|`around`|`space-around`|
|`evenly`|`space-evenly`|
|`stretch`|`stretch`|

`$m-order`的键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`init`|`0`|
|`first`|`-9999`|
|`last`|`9999`|

具体代码见 [variables/box-model/flex](https://github.com/ModyQyW/mp-scss/tree/master/variables/box-model/_flex.scss)。

### 属性`overflow`

属性`overflow`没有提供可直接使用的变量，只提供了 1 个映射`$m-overflow`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`auto`|`auto`|
|`hidden`|`hidden`|
|`visible`|`visible`|
|`scroll`|`scroll`|

具体代码见 [variables/box-model/overflow](https://github.com/ModyQyW/mp-scss/tree/master/variables/box-model/_overflow.scss)。

## 排版 typography

### 属性`font-family`

### 属性`font-size`

### 属性`font-style`

### 属性`font-weight`

### 属性`font-variant`

### 属性`line-height`

### 属性`text-align`

### 属性`text-decoration`

### 属性`text-transform`

### 属性`vertical-align`

### 属性`visibility`

### 属性`resize`

## 视觉 visual

### 属性`background-repeat`

### 属性`background-attachment`

### 属性`background-position`

### 属性`background-size`

### 属性`border-style`

### 属性`border-width`

### 属性`border-radius`

## 杂项 misc

### 属性`opacity`

属性`opacity`没有提供可直接使用的变量，只提供了 1 个映射`$m-opacity`，键值对可参考下表。

|映射键|映射值|
|:-:|:-:|
|`0`|`0`|
|`25`|`.25`|
|`50`|`.5`|
|`75`|`.75`|
|`100`|`1`|

具体代码见 [variables/misc/opacity](https://github.com/ModyQyW/mp-scss/tree/master/variables/misc/_opacity.scss)。
