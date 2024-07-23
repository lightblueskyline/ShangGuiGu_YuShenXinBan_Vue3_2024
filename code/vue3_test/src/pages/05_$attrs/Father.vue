<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ car }}</h4>
        <h4>A: {{ a }}</h4>
        <hr>
        <Child :a="a" :b="b" :c="c" v-bind="{ x: 100, y: 200 }" :updateA="updateA"></Child>
        <br>
        <button type="button" @click="addParamA">A++</button>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import Child from './Child.vue'

let car = ref('Honda CB650R')
let a = ref(1)
let b = ref(2)
let c = ref(3)

function addParamA() {
    a.value++
}

function updateA(param: number) {
    a.value += param
}
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>