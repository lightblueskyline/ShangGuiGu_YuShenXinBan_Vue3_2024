<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>摩托車：{{ moto.brand }} {{ moto.color }}</h4>
        <h5>摩托車價格：{{ moto.price }} 圓</h5>
        <h4>賬目：{{ account }}</h4>
        <hr>
        <div class="content">
            <Category title="游戲列表">
                <template v-slot:content>
                    <ul>
                        <li v-for="item in games" :key="item.ID">{{ item.name }}</li>
                    </ul>
                </template>
                <template v-slot:title>
                    <h2>游戲列表</h2>
                </template>
            </Category>
            <Category title="美食城市">
                <template v-slot:content>
                    <img :src="imageUrl" alt="">
                </template>
                <template v-slot:title>
                    <h2>美食城市</h2>
                </template>
            </Category>
            <Category title="影視推薦">
                <template #content>
                    <video :src="videoUrl" controls></video>
                </template>
                <template #title>
                    <h2>影視推薦</h2>
                </template>
            </Category>
        </div>
    </div>
</template>

<script setup lang="ts" name="Father">
import { reactive, ref } from 'vue'
import Category from './Category.vue';

let account = ref(100000)
let moto = reactive({
    brand: 'HONDA CB650R',
    color: 'Red',
    price: 100000
})
//
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
let imageUrl = ref('https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
let videoUrl = ref('https://www.youtube.com/watch?v=kTsA_IrtzEs')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

.content {
    display: flex;
    justify-content: space-evenly;
}

img,
video {
    width: 100%;
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