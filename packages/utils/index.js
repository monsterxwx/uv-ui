
let debounceTimer, throttleTimer

// 防抖
export const debounce = (fn, delay) => {
  return (...args) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    debounceTimer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
// 节流
export const throttle = (fn, delay) => {
  return (...args) => {
    if (throttleTimer) {
      return
    }
    throttleTimer = setTimeout(() => {
      fn.apply(this, args)
      throttleTimer = null
    }, delay)
  }
}
