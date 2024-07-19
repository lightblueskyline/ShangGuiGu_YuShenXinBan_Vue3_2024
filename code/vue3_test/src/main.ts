// 引入 createApp 用於創建應用
import { createApp } from 'vue'
// 引入 App 根組件
import App from './App.vue'
// 引入 router
import router from './router'
// 第一步：引入 pinia
import { createPinia } from 'pinia'

// #app => code\vue3_test\index.html => <div id="app"></div>
// 創建應用
const app = createApp(App)
// 第二步：創建 pinia 實例
const pinia = createPinia()
// 使用路由器
app.use(router)
// 第三步：安裝 pinia
app.use(pinia)
// 挂載應用
app.mount('#app')