<template>
    <div class="father">
        <h3>父组件</h3>
        <!-- <h4>{{ str }}</h4> -->
        <!-- <button @click="str = '哈哈'">點我</button> -->
        <Child @send-toy="getToy"></Child>
    </div>
</template>

<script setup lang="ts" name="Father">
// import { ref } from 'vue'C
import Child from './Child.vue'

// let str = ref('你好')

/**
 * 自定義事件
 */
const getToy = (value: string) => {
    console.log('父組件收到子組件的值：', value)
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>