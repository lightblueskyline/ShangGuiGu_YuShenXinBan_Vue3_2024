<template>
    <div class="child">
        <h3>孫组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>x: {{ x }}</h4>
        <h4>y: {{ y }}</h4>
        <h5>attrs: {{ $attrs }}</h5>
        <br>
        <button @click="updateA(6)">點擊更新 A</button>
    </div>
</template>

<script setup lang="ts" name="GrandChild">
import { ref } from 'vue'

defineProps(['a', 'b', 'c', 'x', 'y', 'updateA'])

let toy = ref('霸天虎.威震天')
</script>

<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>