

<p align="center">
  <a href="https://monsterxwx.github.io/uv-ui/">
    <img src="https://monsterxwx.github.io/uv-ui/images/logo.png" alt="uv-ui logo" width="120">
  </a>
</p>

<h1 align="center">uv-ui</h1>

<p align="center">
  一款基于 <b>Vue 3</b> 的轻量级移动端组件库。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/uv-ui">
    <img src="https://img.shields.io/npm/v/uv-ui.svg" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/uv-ui">
    <img src="https://img.shields.io/npm/dt/uv-ui.svg" alt="npm downloads">
  </a>
  <a href="https://github.com/monsterxwx/uv-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/monsterxwx/uv-ui.svg" alt="license">
  </a>
  <a href="https://monsterxwx.github.io/uv-ui/">
    <img src="https://img.shields.io/badge/docs-online-blue" alt="docs">
  </a>
</p>

<p align="center">
  <a href="https://monsterxwx.github.io/uv-ui/">📚 文档网站</a> | 
  <a href="https://github.com/monsterxwx/uv-ui/issues">🐛 提交 Issue</a>
</p>

## ✨ 特性 (Features)

- 🚀 **Vue 3**: 基于 Vue 3 Setup 语法糖开发，紧跟最新技术栈。
- 📱 **移动优先**: 专为移动端 H5 页面设计，交互体验流畅。
- ⚡ **按需引入**: 支持组件按需加载，减少打包体积。

## 📦 安装 (Install)

使用 npm 或 yarn 安装：

```bash
# npm
npm install uv-ui

# yarn
yarn add uv-ui

# pnpm
pnpm add uv-ui
```

## 🔨 快速上手 (Usage)

### 全量使用

在 `main.ts` 或 `main.js` 中引入并注册：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// 引入 uv-ui
import uvUI from 'uv-ui'
import 'uv-ui/es/style.css'

const app = createApp(App)

app.use(uvUI)
app.mount('#app')
```

### 在页面中使用

```html
<template>
  <uv-button type="primary">主要按钮</uv-button>
</template>
```

> 💡 更多组件用法请参考 [在线文档](https://monsterxwx.github.io/uv-ui/)。

### 按需引入

在 `main.ts` 或 `main.js` 中确保引入样式文件：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import 'uv-ui/es/style.css'

app.mount('#app')
```



### 在页面中使用（用什么导入什么）

```vue
<template>
  <uv-button type="primary">主要按钮</uv-button>
</template>

<script setup>
import { uvButton } from 'uv-ui'
</script>
```

## 🔗 链接 (Links)

- **文档地址**: https://monsterxwx.github.io/uv-ui/
- **GitHub 仓库**: https://github.com/monsterxwx/uv-ui
- **更新日志**: [CHANGELOG.md](./CHANGELOG.md)

## 🤝 贡献 (Contributing)

欢迎提交 Pull Request 或 Issue！

1. Fork 本仓库
2. 新建分支 `Feat_xxx`
3. 提交代码
4. 新建 Pull Request

## 📄 开源协议 (License)

本项目遵循 [MIT License](https://github.com/monsterxwx/uv-ui/blob/main/LICENSE) 协议。


