<template>
    <div class="child">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>書籍：{{ book }} 本</h4>
        <button @click="minusParentBook($parent)">獲取父組件實例對象</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'

let toy = ref('汽車人.擎天柱')
let book = ref(3)

function minusParentBook(paramParent: any) {
    debugger
    console.log(paramParent)
    paramParent.book -= 1
}

// 把數據交給外部
defineExpose({
    toy,
    book
})
</script>

<style scoped>
.child {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>