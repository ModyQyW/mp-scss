# 改动日志

## 2.1

### 2.1.1

- 修复 - classes - 修复 width，height，padding，margin，col 相关类缺失的问题。

### 2.1.0

- 新增 - components - overlay 支持 is-hidden 类，用于设置 overlay 显隐时的动画效果。
- 调整 - 默认支持 android >= 4.4 和 ios >= 10。
- 调整 - 把 sass 从 1.32.4 更新到 1.32.5。
- 调整 - variables - 调整 transition 的默认值，加入`all`。
- 调整 - docs - 调整部分描述。

## 2.0

### 2.0.4

- 调整 - 把 sass 从 1.30.0 更新到 1.32.4。

### 2.0.3

- 修复 - components - 修复部分组件样式，尽可能统一它们在不同平台的表现。

### 2.0.2

- 修复 - components - 修复部分组件样式，尽可能统一它们在不同平台的表现。

### 2.0.1

- 调整 - variables - 调整了`line-height`两个相关变量的默认值（`$line-height-default: 1.5 !default;`，`$line-height-diff: 0.25 !default;`），以避免某些情况下使用多位小数作为`line-height`导致的问题。
- 修复 - classes - 修复了`.text`表现不正确的问题。
- 修复 - layout - 修复了`.row.gutter-*`表现不正确的问题。
- 修复 - components - 修复部分组件样式，尽可能统一它们在不同平台的表现。
- 修复 - docs - 修复部分描述。

### 2.0.0

- 重置 reset - 用于重置小程序元素默认样式
- 通用类 classes - 基本覆盖了常用属性的类
- 布局类 layout - 包含页面布局类和栅格系统类
- 组件类 components - 快速确定组件样式
- 可自定义 - 提供可自定义的内容和对应的修改指南
