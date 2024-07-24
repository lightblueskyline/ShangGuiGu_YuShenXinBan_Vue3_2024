<template>
    <div class="grandChild">
        <h3>孫组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <h5>由 祖 -> 孫</h5>
        <h4>摩托車：{{ moto.brand }} {{ moto.color }}</h4>
        <h4>賬目：{{ account }}</h4>
        <button @click="updateAccount(10)">減少賬目</button>
    </div>
</template>

<script setup lang="ts" name="GrandChild">
import { ref, inject } from 'vue'

let toy = ref('霸天虎.威震天')
// let account = inject('account', '未收到時的默認值：999')
let { account, updateAccount } = inject('accountContext', {
    account: 0, updateAccount: (param: number) => {
        console.log(param)
    }
})
let moto = inject('moto', {
    brand: '未知',
    color: '未知',
    price: '未知'
})
</script>

<style scoped>
.grandChild {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>