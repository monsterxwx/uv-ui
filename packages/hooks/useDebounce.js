import { ref } from 'vue'

export function useDebounce (cb, delay = 100) {
  const timer = ref(null)

  const handler = function () {
    clearTimeout(timer.value)
    const args = arguments
    const context = this
    timer.value = setTimeout(() => {
      cb.apply(context, args)
    }, delay)
  }

  const cancel = () => {
    clearTimeout(timer)
    timer.value = null
  }

  return {
    handler,
    cancel
  }
}
