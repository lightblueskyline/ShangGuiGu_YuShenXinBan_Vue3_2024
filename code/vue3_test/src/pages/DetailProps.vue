<template>
    <ul class="news-list">
        <li>編號：{{ id }}</li>
        <li>標題：{{ title }}</li>
        <li>内容：{{ content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
defineProps(['id', 'title', 'content'])
// defineProps({
//     id: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     content: {
//         type: String,
//         required: true
//     }
// })
</script>

<style scoped></style>