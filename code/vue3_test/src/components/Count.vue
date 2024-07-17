<template>
    <div class="count">
        <h3>當前求和為：{{ sum }}</h3>
        <select v-model.number="params">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <button @click="handleAdd">加</button>
        <button @click="handleMinus">減</button>
    </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from "vue";

// 數據
let sum = ref(0);
let params = ref(1);

// 方法
function handleAdd() {
    sum.value += Number(params.value);
}

function handleMinus() {
    sum.value -= Number(params.value);
}
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>