<template>
    <h2>我是 App 組件</h2>
    <Count></Count>
    <br>
    <hr>
    <br>
    <LoveTalk></LoveTalk>
</template>

<script setup lang="ts" name="App">
// import { ref } from "vue";
import Count from "./components/Count.vue";
import LoveTalk from "./components/LoveTalk.vue";
</script>

<style scoped></style>