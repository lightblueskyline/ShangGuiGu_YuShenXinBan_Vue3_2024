<template>
    <div class="count">
        <h3>當前求和為：{{ sum }}</h3>
        <h3>{{ school }} {{ address }}</h3>
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
import { storeToRefs } from 'pinia'
// pinia
import { useCountStore } from '../store/count'

const countStore = useCountStore();

// 數據
let params = ref(1);
// storeToRefs 只關注倉庫中的數據
const { sum, school, address, sumPlus, sumPlus1 } = storeToRefs(countStore);
console.log('@_', sumPlus.value)
console.log('@_', sumPlus1.value)

// 方法
function handleAdd() {
    // 第一種修改方式
    // countStore.sum += params.value;

    // 第二種修改方式，多個數據批量變更
    // countStore.$patch({
    //     sum: 666,
    //     school: '尚硅谷',
    //     address: '北京'
    // })

    // 第三種修改方式
    countStore.increment(params.value)
}

function handleMinus() {
    countStore.sum -= params.value;
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