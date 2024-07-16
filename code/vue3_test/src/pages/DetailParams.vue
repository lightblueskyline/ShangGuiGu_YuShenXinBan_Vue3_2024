<template>
    <ul class="news-list">
        <li>編號：{{ route.params.id }}</li>
        <li>標題：{{ route.params.title }}</li>
        <li>内容：{{ route.params.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router'

let route = useRoute()
</script>

<style scoped></style>