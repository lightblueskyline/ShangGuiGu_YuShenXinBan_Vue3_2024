# [尚硅谷 禹神新版 Vue3 (2024)](https://www.youtube.com/watch?v=M4SgtHLpmPU&list=PLmOn9nNkQxJEnGM4Jf0liBcyedAtuQq-O)

## [Vite](https://vitejs.cn/)

### [搭建 Vite 項目](https://cn.vitejs.dev/guide/)

```ps
# 安裝 Node.js
node -v
npm -v
#
npm create vite@latest
# .\vue3_test\index.html (Vite 項目的入口文件)
# 進入工程根目錄
npm install
npm run dev

# Install the TypeScript compiler
npm install -g typescript
```

## setup

```ps
# 插件，可在 <script setup lang="ts"> 中定義組件名稱 <script setup lang="ts" name="***">
# -D, --save-dev: Package will appear in your devDependencies.
npm install vite-plugin-vue-setup-extend -D

# ref 基本類型數據的響應式變量
# reactive 只能定義對象類型數據的響應式變量；重新分配對象之後，會失去響應式(需要使用 Object.assign(car, { brand: '奧拓', price: 6 }) 重新分派)
```
