import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions 中放置動作函數，用於響應組件中的動作
    actions: {
        increment(param: number) {
            // 修改數據
            if (this.sum < 33) {
                this.sum += param
            }
        }
    },
    // 存儲數據的地方
    state() {
        return {
            sum: 3,
            school: 'atguigu',
            address: '北京.宏福科技園'
        }
    },
    getters: {
        sumPlus: (state) => state.sum * 10,
        sumPlus1(): number {
            return this.sum + 10
        }
    }
})