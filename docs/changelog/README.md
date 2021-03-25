---
sidebar: 'auto'
---

# 改动日志

## 2.4

- 新增 - badge 组件类增加 `.is-white`。
- 修复 - 修复 `.m-n{lg|xl}` 表现不正确的问题。
- 修复 - `$box-shadow` -> `$m-box-shadow`，修复命名未遵循规范的问题。
- 新增 - 新增 `$has-export`，控制是否导出给 JavaScript 使用。

## 2.3

### 2.3.1

- 修复 - 修复 `input-wrapper` 下的 `.input` 字体大小不正确的问题

### 2.3.0

- 调整 - 组件变量统一放到 `@modyqyw/mp-scss/variables/components.scss`。
- 新增 - `.static`。
- 新增 - `.{top|right|bottom|left|inset|inset-y|inset-x}-auto`。
- 调整 - `$z-index-min` 0 -> -50。
- 新增 - `.z-auto`。
- 新增 - `.box-content`。
- 新增 - `.d-inline`。
- 新增 - `.flex-initial`。
- 调整 - `$flex-shrink-max` 1 -> 4。
- 调整 - `$flex-grow-max` 1 -> 4。
- 调整 - `$width-max` 40 -> 80。
- 调整（可能导致破坏性更新） - `$width-step` 1 -> 2。
- 新增 - `.w-auto`。
- 调整 - `$height-max` 40 -> 80。
- 调整（可能导致破坏性更新） - `$height-step` 1 -> 2。
- 新增 - `.h-auto`。
- 新增 - `$padding-base`，`$padding-diff`，`.p-{xs|sm|md|lg|xl}`。
- 调整 - `$padding-max` 40 -> 80。
- 调整（可能导致破坏性更新） - `$padding-step` 1 -> 2。
- 调整（可能导致破坏性更新） - 移除 `$padding-has-1-real`，不再生成 `.p-1-real`。
- 修复 - 移除 padding 类不合理的负值支持。
- 新增 - `$margin-base`，`$margin-diff`，`.m-{nxs|nsm|nmd|nlg|nxl|xs|sm|md|lg|xl}`。
- 调整 - `$margin-min` 0 -> -80。
- 调整 - `$margin-max` 40 -> 80。
- 调整（可能导致破坏性更新） - `$margin-step` 1 -> 2。
- 调整（可能导致破坏性更新） - 移除 `$margin-has-1-real`，不再生成 `.m-1-real`。
- 新增 - `.overflow-visible`。
- 调整 - `$font-size-max` 40 -> 64。
- 新增 - `.text-oblique`。
- 调整 - `$line-height-max` 48 -> 72。
- 新增 - `.text-{xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl}`。
- 调整（可能导致破坏性更新） - `.leading-{none|tight|normal|relaxed|loose}` -> `.leading-{xs|sm|md|lg|xl}`。
- 新增 - `.text-justify`。
- 新增 - `.text-{overline|line-through}`。
- 新增 - `.text-capitalize`。
- 新增 - `.bg-scroll`。
- 新增 - `.bg-auto`。
- 新增 - `.border-{dotted|dashed}`。
- 调整 - `$border-width-max` 1 -> 4。
- 新增 - `$border-radius-diff`，`.rounded-{pill|xs|sm|md|lg|xl|2xl|3xl}`。
- 调整 - `$border-radius-max` 1 -> 8。
- 修复 - 修复无法自定义 `$m-outline` 的问题。
- 新增 - `.opacity-{25|50|75}`。
- 调整（可能导致破坏性更新） - `$navbar-height-base` 36 -> 32。
- 调整（可能导致破坏性更新） - `$aside-width-base` 120 -> 100。
- 优化 - 移除多余变量。
- 调整 - `$gutter-min` 4 -> 0。
- 调整 - `$gutter-max` 20 -> 24。
- 调整（可能导致破坏性更新） - button 组件类默认表现移除 `overflow: hidden`。
- 调整（可能导致破坏性更新） - button 组件类 `.is-rounded` 调整为 `.is-pill`。
- 修复 - 修复 card 组件类部分样式优先级的问题。

## 2.2

### 2.2.5

- 修复 - 修复布局类内使用了错误变量的问题。

### 2.2.4

- 修复 - 修复 card 组件类部分样式优先级的问题。

### 2.2.3

- 调整（可能导致破坏性更新） - 调整 `.row` 样式，使用 `wrap` 作为 `flex-wrap` 属性的默认值。

### 2.2.2

- 调整 - 调整字体颜色，背景颜色和边框颜色的类的顺序，现在使用默认颜色生成的类会被使用色板颜色生成的类覆盖样式。

### 2.2.1

- 调整 - 修改 `.npmignore`，移除了非必要的内容。

### 2.2.0

- 新增 - 新增 `.w-*-12`。
- 新增 - 新增 `.w-25`，`.w-26`，……，`.w-40`。
- 新增 - 新增 `.h-*-12`。
- 新增 - 新增 `.h-25`，`.h-26`，……，`.h-40`。
- 新增 - 新增 `.p-25`，`.p-26`，`.p-40`。
- 新增 - 新增 `.m-25`，`.p-26`，`.m-40`。
- 新增 - 新增 `.text-38` 和 `.text-40`。
- 新增 - 新增 `.leading-{none|tight|normal|relaxed|loose}`，`leading-46` 和 `leading-48` 。
- 新增 - 新增 `.rounded-5` 和 `rounded-6` 。
- 新增 - 所有组件类均可自定义部分变量。
- 新增 - button 组件类增加两个尺寸类 `.is-xs` 和 `.is-xl`。
- 新增 - divider 组件类增加 `.divider-content`。
- 新增 - icon 组件类增加两个尺寸类 `.is-xs` 和 `.is-xl`。
- 新增 - input 组件类增加两个尺寸类 `.is-xs` 和 `.is-xl`。
- 新增 - loader 组件类增加 `.is-black`。
- 调整 - 调整 `$font-family-default`。
- 调整 - 调整 `$border-radius-base`。
- 调整（可能导致破坏性更新） - 禁止修改 `$white` 和 `$black`。
- 调整（可能导致破坏性更新） - 移除 `.w-*-6`。
- 调整（可能导致破坏性更新） - 移除 `.h-*-6`。
- 调整（可能导致破坏性更新） - 移除 `.p-*-{6|8|10}`。
- 调整（可能导致破坏性更新） - 移除 `.p-{xs|sm|md|lg|xl}`。
- 调整（可能导致破坏性更新） - 移除 `.m-*-{6|8|10}`。
- 调整（可能导致破坏性更新） - 移除 `.m-{xs|sm|md|lg|xl}`。
- 调整（可能导致破坏性更新） - 移除 `.text-{xs|sm|md|lg|xl}`。
- 调整（可能导致破坏性更新） - 移除 `.leading-{xs|sm|md|lg|xl}`。
- 调整（可能导致破坏性更新） - 移除 `.border-{md|lg|xl}`。
- 调整（可能导致破坏性更新） - 移除 `.rounded-{xs|sm|md|lg|xl}`。
- 调整 - 调整所有组件类的默认表现。
- 调整（可能导致破坏性更新） - 移除 `.divider-text`。
- 修复 - 修复 `.right-*`，`.bottom-*` 和 `.left-*` 生成错误的问题。
- 修复 - 修复 `.border-l-*` 生成错误的问题。
- 修复 - 修复 button 组件类使用了错误变量的问题。
- 修复 - 修复 button 组件类暗黑模式下水波纹预设颜色错误的问题。
- 修复 - 修复 input 组件类使用了错误变量的问题。
- 修复 - 修复 input 组件类聚焦时表现不正常的问题。

## 2.1

### 2.1.1

- 修复 - 修复 `width`，`height`，`padding`，`margin`，`.col-*` 相关类缺失的问题。

### 2.1.0

- 新增 - `overlay` 组件支持 `.is-hidden` 类，用于设置 `overlay` 显隐时的动画效果。
- 调整 - 调整 `$transition-default` 的默认值。
- 调整 - 默认支持 `android >= 4.4` 和 `ios >= 10`。

## 2.0

### 2.0.3

- 修复 - 修复部分组件样式，尽可能统一它们在不同平台的表现。

### 2.0.2

- 修复 - 修复部分组件样式，尽可能统一它们在不同平台的表现。

### 2.0.1

- 调整 - 调整 `line-height` 两个相关变量的默认值（`$line-height-default: 1.5 !default;`，`$line-height-diff: 0.25 !default;`），以避免某些情况下使用多位小数作为 `line-height` 导致的问题。
- 修复 - 修复了 `.text` 表现不正确的问题。
- 修复 - 修复 `.row.gutter-*` 表现不正确的问题。
- 修复 - 修复部分组件样式，尽可能统一它们在不同平台的表现。

### 2.0.0

- 重置 reset - 用于重置小程序元素默认样式。
- 通用类 classes - 基本覆盖了常用属性的类。
- 布局类 layout - 包含页面布局类和栅格系统类。
- 组件类 components - 快速确定组件样式。
- 可自定义 - 提供可自定义的内容和对应的修改指南。
