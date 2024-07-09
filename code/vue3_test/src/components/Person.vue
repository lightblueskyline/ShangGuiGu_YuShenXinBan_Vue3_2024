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
        <hr>
        <h2>人員姓名：{{ person.name }}，人員年齡：{{ person.age }}</h2>
        <button @click="changePersonInfo">修改人員信息</button>
        <h2>toRefs 人員姓名：{{ name }}，人員年齡：{{ age }}</h2>
        <hr>
        <div>
            姓：<input type="text" v-model="firstName">
            名：<input type="text" v-model="lastName">
            全名：<span>{{ fullName }}</span>
            <button @click="changeFullName">修改全名</button>
        </div>
        <hr>
        <h1>情況一：監視 ref 定義的基本類型數據</h1>
        <h2>當前求和為：{{ sum }}</h2>
        <button type="button" @click="changeSum">SUM + 1</button>
    </div>
</template>

<!--setup 語法糖 自動返回暴露-->
<!--通過安裝插件 npm install vite-plugin-vue-setup-extend -D-->
<!--無需再書寫 export default -> name:"Person"-->
<script setup lang="ts" name="Person">
import { ref, reactive, toRefs, toRef, computed, watch } from 'vue';

// 數據
// let name = 'Name' // 此時變量非響應式
// let name = ref('Name') // ref 基本類型的響應式變量
// let age = 11 // 此時變量非響應式
// let age = ref(11) // ref 基本類型的響應式變量
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
//
let person = reactive({
    name: 'Name.33',
    age: 33
})
let { name, age } = toRefs(person)
let age1 = toRef(person, 'age')
// computed 計算屬性
let firstName = ref('張')
let lastName = ref('三')
// 如此定義的計算屬性，只可讀，不可修改
// let fullName = computed(() => {
//     return firstName.value + '-' + lastName.value
// })
//
let fullName = computed({
    get() {
        return `${firstName.value}-${lastName.value}`
    },
    set(newValue) {
        const [str1, str2] = newValue.split('-')
        firstName.value = str1
        lastName.value = str2
    }
})
// watch
let sum = ref(0)

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
/** 修改人員信息 */
function changePersonInfo() {
    // person.age += 1
    // person.name = 'Name.' + person.age.toString()
    //
    // person 對象中的 name & age 值會同步變更
    age.value += 1
    name.value = 'Name.' + age.value.toString()
    // person 對象中的 age 值會同步變更
    console.log(age1.value)
    age1.value = 111
}
/** 修改全名 */
function changeFullName() {
    fullName.value = 'Li-si'
}
/** watch 監視 */
function changeSum() {
    sum.value += 1
}
let stopWatch = watch(sum, (newValue, oldValue) => {
    console.log(`原始值：${oldValue} 新值：${newValue}`)
    if (newValue >= 10) {
        // 停止監視
        stopWatch()
    }
})
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