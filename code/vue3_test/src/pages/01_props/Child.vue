<template>
    <div class="child">
        <h3>我是子组件</h3>
        <h4>玩具：{{ toy }}</h4>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

let toy = ref('汽車人.擎天柱')
</script>

<style scoped>
.father {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>