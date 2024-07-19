<template>
    <div class="father">
        <h3>我是父组件</h3>
        <h4>汽車：{{ car }}</h4>
        <Child></Child>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue'

let car = ref('奔驰')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>