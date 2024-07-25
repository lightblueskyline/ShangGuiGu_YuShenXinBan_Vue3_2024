<template>
    <h2>我是 App 組件</h2>
    <h3>{{ msg }}</h3>
    <input type="text" v-model="msg">
</template>

<script setup lang="ts" name="App">
// import { ref, customRef } from "vue";
import useMsgRef from "./hooks/useMsgRef";

// let msg = ref("Hello Vue3");

// 使用 customRef
// let initValue = "Hello Vue3"
// let timer: number;
// let msg1 = customRef((track, trigger) => {
//     return {
//         // msg1 被讀取時調用
//         get() {
//             // console.log("get value");
//             track() // 通知 Vue 數據 msg1 需要持續關注跟蹤其變化
//             return initValue;
//         },
//         // msg1 被設置時調用
//         set(value) {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 console.log("set value", value);
//                 initValue = value;
//                 trigger() // 通知 Vue 數據 msg1 變化，需要重新渲染，觸發更新
//             }, 3000);
//         }
//     }
// })

// 使用 useMsgRef
let { msg } = useMsgRef("Hello Vue3", 3000);
</script>

<style scoped></style>