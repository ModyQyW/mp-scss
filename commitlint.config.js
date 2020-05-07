// commitlint 配置
//
// angular 提交规范：https://github.com/angular/angular/blob/master/CONTRIBUTING.md
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) 影响构建系统或外部依赖的更改，如 webpack，gulp，rollup，lint-staged 等，包括但不限于配置和版本
// ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs) 对 CI 配置文件和脚本的更改
// docs: Documentation only changes 新增/修改文档
// feat: A new feature 新增功能
// fix: A bug fix 修复问题
// perf: A code change that improves performance 优化性能
// refactor: A code change that neither fixes a bug nor adds a feature 重构，理论上不影响当前功能
// revert: 回滚版本
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) 修改代码格式，不影响当前功能
// test: Adding missing tests or correcting existing tests 新增/修改测试
//
module.exports = {
  extends: ["@commitlint/config-angular"],
};
