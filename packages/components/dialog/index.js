import Dialog from './dialog.vue'
import { createVNode, render } from 'vue'

const DialogVNode = (options) => {
  const container = document.createElement('div')
  document.body.appendChild(container) // 添加到body上
  return new Promise((resolve, reject) => {
    // 点击确定按钮
    const submitCallback = (fn) => {
      const isTrue = fn('confim')
      if (isTrue) {
        setTimeout(() => {
          render(null, container)
          document.body.removeChild(container)
        }, 300)
        resolve()
      }
    }
    // 点击取消按钮
    const cancelCallback = (fn) => {
      const isTrue = fn('cancle')
      if (isTrue) {
        setTimeout(() => {
          render(null, container)
          document.body.removeChild(container)
        }, 300)
        reject(new Error('cancle'))
      }
    }
    const vm = createVNode(Dialog, { ...options, submitCallback, cancelCallback }) // 创建vNode
    render(vm, container)
  })
}

DialogVNode.install = app => {
  app.component(Dialog.name, DialogVNode)
}

export default DialogVNode
