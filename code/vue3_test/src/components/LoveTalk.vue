<template>
    <div class="love-talk">
        <button @click="getLoveTalk">獲取一句土味情話</button>
        <ul>
            <li v-for="item in loveTalkList" :key="item.ID">{{ item.content }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
// import { reactive } from "vue";
// import axios from "axios";
// import { nanoid } from 'nanoid'
import { storeToRefs } from 'pinia'

// pinia
import { useLoveTalkStore } from '../store/loveTalk'

const loveTalkStore = useLoveTalkStore()

// 數據
// let loveTalkList = reactive([
//     { ID: '0001', content: '今天你有點兒怪，哪裏怪？怪好看的！' },
//     { ID: '0002', content: '草莓、藍莓、蔓越莓，今天想我了沒？' },
//     { ID: '0003', content: '心裏給你留了一塊兒地，我的死心塌地！' },
// ])
const { loveTalkList } = storeToRefs(loveTalkStore)

// 方法
function getLoveTalk() {
    // // 連續解構、賦值、重命名
    // let { data: { content: message } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // let tempObj = { ID: nanoid(), content: message }
    // loveTalkList.unshift(tempObj)

    loveTalkStore.getOneLoveTalk()
}

// 倉庫中保存的數據發生變化，就會被調用
loveTalkStore.$subscribe((mutate, state) => {
    console.log('loveTalkStore.$subscribe', mutate, state)
    localStorage.setItem('loveTalkList', JSON.stringify(state.loveTalkList))
})
</script>

<style scoped>
.love-talk {
    background-color: olivedrab;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

button {
    border-radius: 5px;
}
</style>