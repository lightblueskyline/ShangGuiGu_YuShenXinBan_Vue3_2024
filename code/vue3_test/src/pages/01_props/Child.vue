<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>父組件傳入值：{{ car }}</h4>
        <button @click="sendToy(toy)">把玩具傳遞給父親</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

let toy = ref('汽車人.擎天柱')

/**
 * 聲明接收 props
 */
defineProps(['car', 'sendToy'])
// let props = defineProps(['car', 'sendToy'])

/**
 * 把玩具傳遞給父親
 */
// function sendToyToFatcher() {
//     props.sendToy(toy.value)
// }
</script>

<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>