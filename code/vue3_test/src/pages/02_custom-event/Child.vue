<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref, onMounted } from 'vue'

let toy = ref('霸天虎.威震天')

/**
 * 聲明自定義時間
 */
const emit = defineEmits(['sendToy'])

onMounted(() => {
    setTimeout(() => {
        emit('sendToy', toy.value)
    }, 3000)
})
</script>

<style scoped>
.child {
    margin-top: 10px;
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>