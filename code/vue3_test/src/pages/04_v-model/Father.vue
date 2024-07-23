<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ car }}</h4>
        <h4>{{ userName }}</h4>
        <br>
        <!-- v-model 用在 html 標簽上 -->
        <!-- <input type="text" v-model="userName"> -->
        <!-- v-model 的底層實現方式 -->
        <!-- <input type="text" :value="userName" @input="userName = (<HTMLInputElement>$event.target).value"> -->
        <!-- 自定義 input 輸入框 v-model 的底層實現方式 -->
        <MyInput :modelValue="userName" @update:modelValue="userName = $event"></MyInput>
        <hr>
        <MyInput v-model="userName"></MyInput>
    </div>
</template>

<script setup lang="ts" name="Father">
import { ref } from 'vue'
import MyInput from './MyInput.vue';

let car = ref('Honda CB650R')
let userName = ref('張三')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>