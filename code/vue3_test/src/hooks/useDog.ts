// hooks
import { onMounted, reactive } from 'vue'
import axios from 'axios'

export default function () {
    let dogList = reactive([''])

    async function getAnotherDog() {
        debugger
        try {
            // 剔除數組中空白元素
            let emptyIndex = dogList.findIndex((element) => element === '')
            if (emptyIndex >= 0) {
                dogList.splice(emptyIndex, 1)
            }

            let response = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            if (response.status === 200) {
                dogList.push(response.data.message)
            }
        } catch (error) {
            alert(error)
        }
    }

    // onMounted(() => {
    //     getAnotherDog()
    // })

    // 向外部提供
    return {
        dogList,
        getAnotherDog
    }
}