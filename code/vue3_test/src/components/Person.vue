<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年齡：{{ age }}</h2>
        <hr>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel">查看聯係方式 </button>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    // setup() {
    //     // 數據
    //     let name = '瘦毛毛' // 此時變量非響應式
    //     let age = 33 // 此時變量非響應式
    //     let tel = '13888888888' // 此時變量非響應式

    //     // 方法
    //     function changeName() {
    //         name = 'M_0v0_M' // 如此修改變量，頁面沒有變化
    //     }
    //     function changeAge() {
    //         age += 1
    //     }
    //     function showTel() {
    //         alert(tel)
    //     }

    //     // 暴露
    //     return { name, age, changeName, changeAge, showTel }
    //     // setup 的返回值也可以為一個渲染函數
    //     // return () => { '哈哈' }
    // }
}
</script>
<!--setup 語法糖 自動返回暴露-->
<script setup lang="ts">
import { ref } from 'vue';

// 數據
// let name = '瘦毛毛' // 此時變量非響應式
let name = ref('瘦毛毛') // ref 基本類型的響應式變量
// let age = 11 // 此時變量非響應式
let age = ref(11) // ref 基本類型的響應式變量
let tel = '13888888888' // 此時變量非響應
// 方法
function changeName() {
    name.value = 'M_0v0_M' // 如此修改變量，頁面沒有變化
}
function changeAge() {
    age.value += 1
}
function showTel() {
    alert(tel)
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}
</style>