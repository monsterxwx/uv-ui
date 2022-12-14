import Toast from './toast.vue'
import { createVNode, render } from 'vue'

const defaultOpt = { // 创建默认参数
  duration: 1600
}

const ToastVNode = (options) => {
  const container = document.createElement('div')
  const opt = { ...defaultOpt, ...options }
  const vm = createVNode(Toast, opt) // 创建vNode
  render(vm, container)
  document.body.appendChild(container) // 添加到body上
  const clear = () => {
    const dom = vm.el
    if (dom.querySelector('.uv-toast-value')) {
      dom.querySelector('.uv-toast-value')?.classList.add('remove') // 销毁时添加淡入淡出效果
      const t = setTimeout(() => { // 淡入淡出效果之后删除dom节点
        render(null, container)
        document.body.removeChild(container)
        clearTimeout(t)
      }, 500)
    }
  }
  if (opt.duration) { // 如果传入的值为0可以持续保留在页面，需要手动销毁
    const timer = setTimeout(() => {
      clear()
      clearTimeout(timer)
    }, opt.duration)
  }
  return {
    clear
  }
}

ToastVNode.install = app => {
  app.component(Toast.name, ToastVNode)
}

export default ToastVNode
