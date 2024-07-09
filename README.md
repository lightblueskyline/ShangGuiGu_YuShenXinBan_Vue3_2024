# [尚硅谷 禹神新版 Vue3 (2024)](https://www.youtube.com/watch?v=M4SgtHLpmPU&list=PLmOn9nNkQxJEnGM4Jf0liBcyedAtuQq-O)

## [Vite](https://vitejs.cn/)

### [搭建 Vite 項目](https://cn.vitejs.dev/guide/)

```ps
# 美化 GIT Log
git config --global alias.adog "log --all --decorate --oneline --graph"
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
# reactive 只能定義對象類型數據的響應式變量；重新分配對象之後，會失去響應式(需要使用 Object.assign(car, { brand: '奧拓', price: 6 }) 重新分派，才會保持響應式)
```

## toRefs & toRef

```javascript
let person = reactive({
    name: 'Name.33',
    age: 33
})
let { name, age } = toRefs(person)
let age1 = toRef(person, 'age')
```

## computed 計算屬性

```javascript
// v-model 雙向綁定 (姓：<input type="text" v-model="firstName">)

// computed 計算屬性
let firstName = ref('張')
let lastName = ref('三')
// 如此定義的計算屬性，只可讀，不可修改
// let fullName = computed(() => {
//     return firstName.value + '-' + lastName.value
// })
//
let fullName = computed({
    get() {
        return `${firstName.value}-${lastName.value}`
    },
    set(newValue) {
        const [str1, str2] = newValue.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})
```

## watch 監視數據的變化

```javascript
/**
 * 1. ref 定義的數據
 * 2. reactive 定義的數據
 * 3. 函數返回一個值
 * 4. 一個包含上述内容的數組
 */
```
