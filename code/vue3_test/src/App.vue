<template>
    <div class="app">
        <h2 class="title">Hello, Vue 3</h2>
        <!--導航區-->
        <div class="navigation">
            <RouterLink to="/home" active-class="">首頁</RouterLink>
            <RouterLink :to="{ name: 'newsPage' }" active-class="">新聞</RouterLink>
            <router-link :to="{ path: '/about' }" active-class="">關於</router-link>
        </div>
        <!--展示區-->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="App">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
/* App */
.title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
}

.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigation a {
    display: inline-block;
    text-align: center;
    width: 100px;
    height: 40px;
    line-height: 40px;
    border-radius: 3px;
    background-color: #DDD;
    box-shadow: 0 0 2px;
    margin: 0 10px;
    text-decoration: none;
    color: black;
}
</style>