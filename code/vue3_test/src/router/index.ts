// 創建路由器，並向外暴露
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
// import About from '../pages/About.vue'

const router = createRouter({
    history: createWebHistory(), // 路由器的工作模式
    routes: [ // 路由規則
        {
            name: 'mainPage', // 命名路由
            path: '/home',
            component: Home
        },
        {
            name: 'newsPage',
            path: '/news',
            component: News,
            // 嵌套路由
            children: [
                // {
                //     path: 'detail', // 子級無需 '/'
                //     component: () => import("../pages/DetailQuery.vue")
                // },
                {
                    name: 'detailParamsPage', // 此情形，只能使用命名路由
                    path: 'detail/:id/:title/:content?', // 子級無需 '/'
                    component: () => import("../pages/DetailParams.vue")
                },
            ]
        },
        {
            path: '/about',
            component: () => import("../pages/About.vue")
        }
    ]
})

// 暴露路由
export default router