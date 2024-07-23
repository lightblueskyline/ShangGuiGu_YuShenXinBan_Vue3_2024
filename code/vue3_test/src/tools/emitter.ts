// 引入 mitt
import mitt from "mitt";

// 创建一个 mitt 实例 emitter 綁定事件、觸發事件
const emitter = mitt()

// 导出 emitter 实例
export default emitter;