<template>
    <div class="game-category">
        <h2>游戲列表</h2>
        <slot name="gameCategory" :slotGames="games" :slotParam="'Hello'"></slot>
    </div>
</template>

<script setup lang="ts" name="GameCategory">
import { reactive } from 'vue'

defineProps(['title'])

let games = reactive([
    {
        ID: 1,
        name: '紅色警戒'
    },
    {
        ID: 2,
        name: '魔獸爭霸'
    },
    {
        ID: 3,
        name: '星際爭霸'
    },
    {
        ID: 4,
        name: '極品飛車'
    }])
</script>

<style scoped>
.game-category {
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