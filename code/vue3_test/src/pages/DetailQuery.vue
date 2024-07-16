<template>
    <ul class="news-list">
        <li>編號：{{ query.id }}</li>
        <li>標題：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { toRefs } from 'vue'
import { useRoute } from 'vue-router'

let route = useRoute()
// let { query } = route // 解構之後，丟失響應性，需要使用 toRefs
let { query } = toRefs(route)
</script>

<style scoped></style>