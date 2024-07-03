// 引入 createApp 用於創建應用
import { createApp } from 'vue'
// 引入 App 根組件
import App from './App.vue'

// #app => code\vue3_test\index.html => <div id="app"></div>
const app = createApp(App)
app.mount('#app')