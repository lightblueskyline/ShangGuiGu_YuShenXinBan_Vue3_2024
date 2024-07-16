<template>
    <div class="news">
        <ul>
            <li v-for="item in newsList" :key="item.ID">
                <!--第一種寫法-->
                <!-- <router-link :to="`/news/detail?id=${item.ID}&title=${item.title}&content=${item.content}`">{{ item.title }}</router-link> -->
                <!--第二種寫法-->
                <!-- <router-link :to="{
                    path: '/news/detail',
                    query: {
                        id: item.ID,
                        title: item.title,
                        content: item.content
                    }
                }">
                    {{ item.title }}
                </router-link> -->
                <!--第一種寫法-->
                <!-- <router-link :to="`/news/detail/${item.ID}/${item.title/${item.content}`">{{ item.title }}</router-link> -->
                <!--第二種寫法 params-->
                <!-- <router-link :to="{
                    name: 'detailParamsPage',
                    params: {
                        id: item.ID,
                        title: item.title,
                        content: item.content
                    }
                }">
                    {{ item.title }}
                </router-link> -->
                <!-- 路由的 Props - query 配置 -->
                <router-link :to="{
                    name: 'detailPropsPage',
                    query: {
                        id: item.ID,
                        title: item.title,
                        content: item.content
                    }
                }">
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
        <!--展示區-->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const newsList = reactive([
    { ID: '0001', title: '新聞標題一', content: '新聞內容一' },
    { ID: '0002', title: '新聞標題二', content: '新聞內容二' },
    { ID: '0003', title: '新聞標題三', content: '新聞內容三' },
    { ID: '0004', title: '新聞標題四', content: '新聞內容四' },
])
</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li::marker {
    color: #64967E;
}

.news li>a {
    text-decoration: none;
    color: #64967E;
    font-size: 18px;
    line-height: 40px;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>