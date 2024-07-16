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
                // {
                //     name: 'detailParamsPage', // 此情形，只能使用命名路由
                //     path: 'detail/:id/:title/:content?', // 子級無需 '/'
                //     component: () => import("../pages/DetailParams.vue")
                // },
                // {
                //     // 路由的 Props 配置
                //     name: 'detailPropsPage', // 此情形，只能使用命名路由
                //     path: 'detail/:id/:title/:content?', // 子級無需 '/'
                //     component: () => import("../pages/DetailProps.vue"),
                //     // 第一種寫法：將路由收到的所有 params 參數作爲 props 傳遞給路由組件
                //     // props: true // props: true，將路由參數傳遞給子組件
                // },
                {
                    // 路由的 Props 配置
                    name: 'detailPropsPage', // 此情形，只能使用命名路由
                    path: 'detail', // 子級無需 '/'
                    component: () => import("../pages/DetailProps.vue"),
                    // 第二種寫法：自行決定將什麽作爲 props 傳遞給路由組件
                    props(route) {
                        return route.query
                    }
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