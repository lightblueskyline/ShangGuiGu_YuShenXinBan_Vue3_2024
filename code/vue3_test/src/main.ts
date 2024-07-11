// 引入 createApp 用於創建應用
import { createApp } from 'vue'
// 引入 App 根組件
import App from './App.vue'
// 引入 router
import router from './router'

// #app => code\vue3_test\index.html => <div id="app"></div>
// 創建應用
const app = createApp(App)
// 使用路由器
app.use(router)
// 挂載應用
app.mount('#app')