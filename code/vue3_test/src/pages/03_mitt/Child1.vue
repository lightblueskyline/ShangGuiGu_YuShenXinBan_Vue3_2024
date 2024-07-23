<template>
    <div class="child">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>Child 組件傳遞來的信息 {{ toy1 }}</h4>
    </div>
</template>

<script setup lang="ts" name="Child1">
import { ref, onUnmounted } from 'vue'
import emitter from '../../tools/emitter';

let toy = ref('霸天虎.威震天')
let toy1 = ref('')

// 給 emitter 綁定 send-toy 事件
emitter.on('send-toy', (param: string) => {
    console.log('send-toy')
    toy1.value = param
})

onUnmounted(() => {
    // 組件卸載時，解綁事件
    emitter.off('send-toy')
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