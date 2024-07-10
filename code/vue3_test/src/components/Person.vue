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
        <h1>情況一：監視 ref 定義的 基本類型 數據</h1>
        <h2>當前求和為：{{ sum }}</h2>
        <button type="button" @click="changeSum">SUM + 1</button>
        <hr>
        <h1>情況二：監視 ref 定義的 對象類型 數據</h1>
        <h2>姓名：{{ refPerson.name }}</h2>
        <h2>年齡：{{ refPerson.age }}</h2>
        <button type="button" @click="changeRefPersonName">修改 refPerson 姓名</button>
        <button type="button" @click="changeRefPersonAge">修改 refPerson 年齡</button>
        <button type="button" @click="changeRefPerson">修改 refPerson</button>
        <hr>
        <h1>情況三：監視 reactive 定義的 對象類型 數據，且默認開啓深度監聽</h1>
        <h2>姓名：{{ reactivePerson.name }}</h2>
        <h2>年齡：{{ reactivePerson.age }}</h2>
        <button type="button" @click="changeReactivePersonName">修改 reactivePerson 姓名</button>
        <button type="button" @click="changeReactivePersonAge">修改 reactivePerson 年齡</button>
        <button type="button" @click="changeReactivePerson">修改 reactivePerson</button>
        <hr>
        <h1>情況四：監視 ref / reactive 定義的 對象類型 數據中的某個屬性</h1>
        <h3>1.若該屬性值不是 對象類型，需要寫成函數形式</h3>
        <h3>2.若該屬性值依然是 對象類型，可直接編寫，也可寫成函數，建議寫成函數</h3>
        <h2>姓名：{{ reactivePerson1.name }}</h2>
        <h2>年齡：{{ reactivePerson1.age }}</h2>
        <h2>汽車：{{ reactivePerson1.car.car1 }}、{{ reactivePerson1.car.car2 }}、{{ reactivePerson1.car.car3 }}</h2>
        <button type="button" @click="changeReactivePerson1Name">修改 reactivePerson1 姓名</button>
        <button type="button" @click="changeReactivePerson1Age">修改 reactivePerson1 年齡</button>
        <button type="button" @click="changeReactivePerson1Car1">修改 reactivePerson1 第一臺車</button>
        <button type="button" @click="changeReactivePerson1Car2">修改 reactivePerson1 第二臺車</button>
        <button type="button" @click="changeReactivePerson1Car">修改 reactivePerson1 汽車</button>
        <hr>
        <h1>情況五：監視上述多個數據</h1>
        <hr>
        <h1>watchEffect</h1>
        <h2>當前水溫：{{ waterTemperature }} 攝氏度</h2>
        <h2>當前水位：{{ waterLevel }} 厘米</h2>
        <button type="button" @click="changeWaterTemperature">修改水溫 +2</button>
        <button type="button" @click="changeWaterLevel">修改水位 +1</button>
        <hr>
        <h1>中國</h1>
        <h2 ref="title2">陝西</h2>
        <h3>西安</h3>
        <button type="button" @click="showLogH2">輸出 H2 元素</button>
        <hr>
        <ul>
            <li v-for="item in personList" :key="item.ID">{{ item.Name }} -- {{ item.Age }}</li>
        </ul>
    </div>
</template>

<!--setup 語法糖 自動返回暴露-->
<!--通過安裝插件 npm install vite-plugin-vue-setup-extend -D-->
<!--無需再書寫 export default -> name:"Person"-->
<script setup lang="ts" name="Person">
import {
    ref, reactive, toRefs, toRef, computed, watch, watchEffect,
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
} from 'vue';
import { type IPerson, type PersonList } from '../types';
import axios from 'axios';

// 生命周期
console.log('創建')
onBeforeMount(() => {
    console.log('onBeforeMount')
})
onMounted(() => {
    console.log('onMounted')
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})
onUpdated(() => {
    console.log('onUpdated')
})

// 接收
// let propsValue = defineProps(['personList']);
// 接受 & 限制類型
// defineProps<{ personList: PersonList }>()
// 接受 & 限制類型 & 限制必要性 & 指定默認值
withDefaults(defineProps<{ personList?: PersonList }>(), {
    personList: () => [{ ID: '0001', Name: '康師傅·王麻子·特侖蘇', Age: 11 }]
})
// 數據
// let name = 'Name' // 此時變量非響應式
// let name = ref('Name') // ref 基本類型的響應式變量
// let age = 11 // 此時變量非響應式
// let age = ref(11) // ref 基本類型的響應式變量
let tel = '13888888888' // 此時變量非響應
//
let car = reactive({ brand: '長城-TANK300', price: 33 })
// console.log(car)
//
let games = reactive([
    { id: '00001', name: 'GAME_00001' },
    { id: '00003', name: 'GAME_00002' },
    { id: '00003', name: 'GAME_00003' }
])
// console.log(games)
//
let car1 = ref({ brand: '長城-TANK300', price: 33 })
// console.log(car1)
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
// watch 情況一
let sum = ref(0)
// watch 情況二
let refPerson = ref({
    name: '張三',
    age: 33
})
// watch 情況三
let reactivePerson = reactive({
    name: '張三',
    age: 33
})
// watch 情況四
let reactivePerson1 = reactive({
    name: '張三',
    age: 33,
    car: {
        car1: '奔馳',
        car2: '寶馬',
        car3: '奧迪'
    }
})
// watchEffect
let waterTemperature = ref(10)
let waterLevel = ref(0)
// 標簽的 ref 屬性，創建 title2 用於存儲 ref 標記的内容
let title2 = ref()
//
let tsPerson: IPerson = { ID: '0001', Name: 'Name.33', Age: 33 }
let tsPersonList: Array<IPerson> = [
    { ID: '0001', Name: 'Name.33', Age: 33 },
    { ID: '0002', Name: 'Name.33', Age: 33 },
    { ID: '0003', Name: 'Name.33', Age: 33 }
]
let tsPersonList1: PersonList = [
    { ID: '0001', Name: 'Name.33', Age: 33 },
    { ID: '0002', Name: 'Name.33', Age: 33 },
    { ID: '0003', Name: 'Name.33', Age: 33 }
]
//
let dogList = reactive([])

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
    // console.log(age1.value)
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
    // console.log(`原始值：${oldValue} 新值：${newValue}`)
    if (newValue >= 10) {
        // 停止監視
        stopWatch()
    }
})
/** 修改 refPerson 姓名 */
function changeRefPersonName() {
    refPerson.value.name += '~'
}
/** 修改 refPerson 年齡 */
function changeRefPersonAge() {
    refPerson.value.age += 1
}
/** 修改 refPerson */
function changeRefPerson() {
    refPerson.value = { name: '李四', age: 55 }
}
/**
* 情況二：監視 ref 定義的 對象類型 數據
* 監視的是對象的地址值
* 若想監視對象内部屬性的變化，需要手動開啓深度監視 { deep: true }
* 深层侦听器 -> 谨慎使用
* 深度侦听需要遍历被侦听对象中的所有嵌套的属性，当用于大型数据结构时，开销很大。因此请只在必要时才使用它，并且要留意性能。
*/
watch(refPerson, (newValue, oldValue) => {
    // console.log('refPerson 變化了 ', newValue, oldValue)
}, { deep: true, immediate: true })
/** 修改 reactivePerson 姓名 */
function changeReactivePersonName() {
    // 一直是操作源對象
    reactivePerson.name += '~'
}
/** 修改 reactivePerson 年齡 */
function changeReactivePersonAge() {
    // 一直是操作源對象
    reactivePerson.age += 1
}
/** 修改 reactivePerson */
function changeReactivePerson() {
    // 一直是操作源對象
    Object.assign(reactivePerson, { name: '李四', age: 55 }) // 只替換對象中同名的屬性的值
}
/**
* 情況三：監視 reactive 定義的 對象類型 數據，且默認開啓深度監聽
* 隱式創建了深層監聽，此種監聽不可關閉
*/
watch(reactivePerson, (newValue, oldValue) => {
    // console.log('reactivePerson 變化了 ', newValue, oldValue);
})
/** 修改 reactivePerson1 姓名 */
function changeReactivePerson1Name() {
    // 一直是操作源對象
    reactivePerson1.name += '~'
}
/** 修改 reactivePerson1 年齡 */
function changeReactivePerson1Age() {
    // 一直是操作源對象
    reactivePerson1.age += 1
}
/** 修改 reactivePerson1 第一臺車 */
function changeReactivePerson1Car1() {
    reactivePerson1.car.car1 += '~'
}
/** 修改 reactivePerson1 第二臺車 */
function changeReactivePerson1Car2() {
    reactivePerson1.car.car2 += '~'
}
/** 修改 reactivePerson1 汽車 */
function changeReactivePerson1Car() {
    reactivePerson1.car = {
        car1: '小牛',
        car2: '雅迪',
        car3: '愛瑪'
    }
}
/**
* 情況四：監視 ref / reactive 定義的 對象類型 數據中的某個屬性
* 該屬性為基本類型，需要寫成函數類型
*/
watch(() => { return reactivePerson1.name }, (newValue, oldValue) => {
    // console.log('reactivePerson1.name 變化了 ', newValue, oldValue)
})
// () => reactivePerson1.car 監視對象的地址值，需要關注細節，需要手動開啓深度監視 { deep: true }
watch(() => reactivePerson1.car, (newValue, oldValue) => {
    // console.log('reactivePerson1.car 變化了 ', newValue, oldValue)
}, { deep: true })
/**
* 情況五：監視上述多個數據
*/
watch([() => reactivePerson1.age, () => reactivePerson1.car], (newValue, oldValue) => {
    // console.log('情況五：監視上述多個數據', newValue, oldValue)
}, { deep: true })
/** watchEffect 修改水溫 +2 */
function changeWaterTemperature() {
    waterTemperature.value += 2
}
/** 修改水位 +1 */
function changeWaterLevel() {
    waterLevel.value += 1
}
/**
* 自動分析被監聽的對象
*/
watchEffect(() => {
    // console.log('@ watchEffect 啓動立即運行')
    if (waterTemperature.value >= 20 || waterLevel.value >= 10) {
        // console.log('向服務器發送請求')
    }
})
/** 標簽的 ref 屬性 */
function showLogH2() {
    // console.log(title2.value)
}
defineExpose({ reactivePerson })
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