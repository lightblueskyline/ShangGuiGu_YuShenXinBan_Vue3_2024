<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ moto }}</h4>
        <h4>書籍：{{ book }} 本</h4>
        <button @click="changeChildToy">修改 子組件1 的玩具</button>
        <button @click="changeChild1Computer">修改 子組件2 的電腦</button>
        <button @click="getAllChild($refs)">獲取所有子組件實例對象</button>
        <br>
        <Child ref="C1"></Child>
        <br>
        <Child1 ref="C2"></Child1>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue'
import Child1 from './Child1.vue'

let moto = ref('Honda CB650R')
let book = ref(50)
let C1 = ref()
let C2 = ref()

function changeChildToy() {
    console.log(C1.value)
    C1.value.toy = '霸天虎.威震天'
}
function changeChild1Computer() {
    console.log(C2.value)
    C2.value.computer = '華碩'
}
function getAllChild(paramRefs: { [key: string]: any }) {
    console.log(paramRefs)
    for (let key in paramRefs) {
        console.log(paramRefs[key])
        paramRefs[key].book += 2
    }
}

// 把數據交給外部
defineExpose({
    book
})
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>