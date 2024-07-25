import { customRef } from "vue";

export default function useMsgRef(initValue: string, delayTime: number) {
    // 使用 customRef
    let timer: number;
    let msg = customRef((track, trigger) => {
        return {
            // msg 被讀取時調用
            get() {
                track() // 通知 Vue 數據 msg 需要持續關注跟蹤其變化
                return initValue;
            },
            // msg 被設置時調用
            set(value) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    console.log("set value", value);
                    initValue = value;
                    trigger() // 通知 Vue 數據 msg 變化，需要重新渲染，觸發更新
                }, delayTime);
            }
        }
    })

    return { msg };
}