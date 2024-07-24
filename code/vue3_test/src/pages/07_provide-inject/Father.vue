<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ moto.brand }} {{ moto.color }}</h4>
        <h4>賬目：{{ account }}</h4>
        <hr>
        <Child></Child>
    </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref, provide } from 'vue'
import Child from './Child.vue'

let account = ref(100000)
let moto = reactive({
    brand: 'HONDA CB650R',
    color: 'Red',
    price: 100000
})
// 向後代提供數據
// provide('account', account)
provide('accountContext', { account, updateAccount })
// 向後代提供數據
provide('moto', moto)

function updateAccount(param: number) {
    account.value -= param
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>