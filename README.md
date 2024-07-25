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

## [生命周期](https://cn.vuejs.org/guide/essentials/lifecycle.html)

### [組合式 API: 生命周期鈎子](https://cn.vuejs.org/api/composition-api-lifecycle.html#onmounted)

```javascript
/**
 * 
 */
```

## axios

```ps
# 安裝
npm install axios

# axios 的攔截器
```

## 路由

```ps
# 安裝
npm install vue-router

# 路由組件：依靠路由規則渲染出的組件 放置於： ./pages or ./views
# 一般組件：依靠手寫標簽渲染出的組件 放置於： ./components

# 路由器的工作模式 1.history 2.hash

# 路由的 replace 屬性，默認為 push 模式
# <RouterLink replace to="/home" active-class="">首頁</RouterLink>

# 編程式導航：脫離 <RouterLink> 實現路由跳轉
```

## 狀態管理工具 [pinia](https://pinia.vuejs.org/)

```ps
# 搭建 pinia 環境
# 安裝
npm install pinia
# // 第一步：引入 pinia
# import { createPinia } from 'pinia'
# // 創建應用
# const app = createApp(App)
# // 第二步：創建 pinia 實例
# const pinia = createPinia()
# // 第三步：安裝 pinia
# app.use(pinia)

# 使用庫，生成 ID
npm install uuid
npm install nanoid
```

## mitt 組件之間通信

```ps
# 安裝
npm install mitt
```

## slot

```ps
# 默認插槽
# 具名插槽
# 作用域插槽
```

## shallowRef & shallowReactive

```javascript
// 關注整體修改；修改時，只能修改第一層數據
// shallowRef 只能監視 ref 定義的數據，不能監視 reactive 定義的數據
// shallowReactive 只能監視 reactive 定義的數據，不能監視 ref 定義的數據
```

## readonly & shallowReadonly

```javascript
// readonly 只能讀取，不能修改
// shallowReadonly 淺層次只讀，第一層不可修改，之後層次可修改
```

## toRaw & markRaw

```javascript
// toRaw：獲取響應式對象的原始對象
// markRaw：標記一個對象，使其永遠不會變成響應式的，使用第三方庫，例如使用：mockjs
```

## customRef

```javascript
// 自定義 ref
// v-model -> 雙向綁定
```
