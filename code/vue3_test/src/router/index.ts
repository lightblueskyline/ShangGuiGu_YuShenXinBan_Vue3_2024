// 創建路由器，並向外暴露
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
// import About from '../pages/About.vue'

const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 路由規則
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News
        },
        {
            path: '/about',
            component: () => import("../pages/About.vue")
        }
    ]
})

// 暴露路由
export default router