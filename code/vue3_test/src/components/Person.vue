<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年齡：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel">查看聯係方式 </button>
        <hr>
        <h2>一輛越野車：{{ car.brand }}，價格：{{ car.price }} 萬圓</h2>
        <button @click="changeCarPrice">修改越野車價格</button>
        <hr>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改第一個游戲的名稱</button>
        <hr>
        <h2>一輛越野車：{{ car1.brand }}，價格：{{ car1.price }} 萬圓</h2>
        <button @click="changeCarPrice">修改越野車價格</button>
    </div>
</template>

<!--setup 語法糖 自動返回暴露-->
<!--通過安裝插件 npm install vite-plugin-vue-setup-extend -D-->
<!--無需再書寫 export default -> name:"Person"-->
<script setup lang="ts" name="Person">
import { ref, reactive } from 'vue';

// 數據
// let name = '瘦毛毛' // 此時變量非響應式
let name = ref('瘦毛毛') // ref 基本類型的響應式變量
// let age = 11 // 此時變量非響應式
let age = ref(11) // ref 基本類型的響應式變量
let tel = '13888888888' // 此時變量非響應
//
let car = reactive({ brand: '長城-TANK300', price: 33 })
console.log(car)
//
let games = reactive([
    { id: '00001', name: 'GAME_00001' },
    { id: '00003', name: 'GAME_00002' },
    { id: '00003', name: 'GAME_00003' }
])
console.log(games)
//
let car1 = ref({ brand: '長城-TANK300', price: 33 })
console.log(car1)

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
/** 改變越野車價格 */
function changeCarPrice() {
    car.price += 1
    //
    car1.value.brand = '長城-TANK400'
    car1.value.price += 1
    //
    // Object.assign(car, { brand: '奧拓', price: 6 })
}
/** 修改第一個游戲的名稱 */
function changeFirstGameName() {
    games[0].name = '魔獸爭霸III - 冰封王座'
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