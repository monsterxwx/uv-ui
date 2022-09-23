import { get, set } from 'lodash-es'
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

// 重置表单
export const getProp = (obj, path, defaultValue) => {
  return {
    get value () {
      return get(obj, path, defaultValue)
    },
    set value (val) {
      set(obj, path, val)
    }
  }
}
