<template>
    <div class="child">
        <h3>子组件2</h3>
        <h4>電腦：{{ computer }}</h4>
        <h4>書籍：{{ book }} 本</h4>
    </div>
</template>

<script setup lang="ts" name="Child1">
import { ref } from 'vue'

let computer = ref('聯想')
let book = ref(6)

// 把數據交給外部
defineExpose({
    computer,
    book
})
</script>

<style scoped>
.child {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>