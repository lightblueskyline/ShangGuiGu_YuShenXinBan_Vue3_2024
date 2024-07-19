import { defineStore } from 'pinia'
import axios from "axios";
import { nanoid } from 'nanoid'

export const useLoveTalkStore = defineStore('loveTalk', {
    // actions 中放置動作函數，用於響應組件中的動作
    actions: {
        async getOneLoveTalk() {
            // 連續解構、賦值、重命名
            let { data: { content: message } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let tempObj = { ID: nanoid(), content: message }
            this.loveTalkList.unshift(tempObj)
        }
    },
    // 存儲數據的地方
    state() {
        return {
            // loveTalkList: [
            //     { ID: nanoid(), content: '今天你有點兒怪，哪裏怪？怪好看的！' },
            //     { ID: nanoid(), content: '草莓、藍莓、蔓越莓，今天想我了沒？' },
            //     { ID: nanoid(), content: '心裏給你留了一塊兒地，我的死心塌地！' },
            // ]
            // loveTalkList: JSON.parse(localStorage.getItem('loveTalkList') || '[]')
            loveTalkList: JSON.parse(localStorage.getItem('loveTalkList') as string) || []
        }
    }
})