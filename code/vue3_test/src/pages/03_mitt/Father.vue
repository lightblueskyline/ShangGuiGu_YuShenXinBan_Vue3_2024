<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ car }}</h4>
        <h4 v-show="toy">子組件傳入值：{{ toy }}</h4>
        <Child :car="car" :sendToy="getToyFromChild"></Child>
        <br>
        <Child1></Child1>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue'
import Child1 from './Child1.vue'

let car = ref('Honda CB650R')
let toy = ref('')

/**
 * props 子傳父
 */
function getToyFromChild(param: string) {
    console.log('子傳父：', param)
    toy.value = param
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>