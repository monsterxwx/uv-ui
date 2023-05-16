import { ref, onMounted, unref } from 'vue'

const overflowScrollReg = /scroll|auto|overlay/i
const defaultRoot = typeof window !== 'undefined' ? window : undefined

function isElement (node) {
  const ELEMENT_NODE_TYPE = 1
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  )
}

export function getScrollParent (el, root = defaultRoot) {
  let node = el

  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode
  }

  return root
}

export function useScrollParent (el, root = defaultRoot) {
  const scrollParent = ref()

  onMounted(() => {
    if (unref(el)) {
      scrollParent.value = getScrollParent(unref(el), root)
    }
  })

  return scrollParent
}
