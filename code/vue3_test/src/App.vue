<template>
    <div>
        <Person :person-list="personList"></Person>
    </div>
</template>

<script setup lang="ts" name="App">
// JS TS
// export default {
//     name: 'App' // 組件名稱
// }

import Person from './components/Person.vue'
import { reactive, onMounted } from 'vue'
import { type PersonList } from './types'

let personList = reactive<PersonList>([
    { ID: '0001', Name: 'Name_0001', Age: 11 },
    { ID: '0002', Name: 'Name_0002', Age: 12 },
    { ID: '0003', Name: 'Name_0003', Age: 13, OptionalParam: 111 }
])

onMounted(() => {
    console.log('Father - onMounted')
})
</script>

<style scoped>
/* 樣式 */
.app {
    background-color: #DDD;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>