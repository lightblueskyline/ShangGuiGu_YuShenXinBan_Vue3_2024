<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot>搭建中...</slot>
    </div>
</template>

<script setup lang="ts" name="Category">
import { reactive, ref } from 'vue'

defineProps(['title'])
</script>

<style scoped>
.category {
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
    width: 200px;
    height: 300px;
}

h2 {
    text-align: center;
    background-color: orange;
    border-radius: 5px;
    padding: 5px 0;
    color: black;
    font-size: 20px;
    font-weight: 666;
}
</style>