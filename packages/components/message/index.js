import uvMessage from './message.vue'

import { createVNode, render } from 'vue'

const defaultOpt = { // 创建默认参数
  duration: 3000
}

const MessageVNode = (options) => {
  const container = document.createElement('div')
  const opt = { ...defaultOpt, ...options }
  const vm = createVNode(uvMessage, opt) // 创建vNode
  render(vm, container)
  document.body.appendChild(container) // 添加到body上

  const close = () => {
    const dom = vm.el
    if (dom.querySelector('.uv-message-value')) {
      dom.querySelector('.uv-message-value')?.classList.add('remove') // 执行移除动画
      const t = setTimeout(() => { // 动画效果之后删除dom节点
        render(null, container)
        document.body.removeChild(container)
        clearTimeout(t)
      }, 500)
    }
  }
  if (opt.duration) { // 传入0则手动关闭
    const timer = setTimeout(() => {
      close()
      clearTimeout(timer)
    }, opt.duration)
  }
  return {
    close
  }
}

MessageVNode.install = app => {
  app.component(uvMessage.name, MessageVNode)
}

export default MessageVNode
