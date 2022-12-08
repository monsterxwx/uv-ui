import { get, set } from 'lodash-es'

// 防抖
export const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
// 节流
export const throttle = (callback, delay = 20) => {
  let timer = null
  return function (args) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      callback(args)
      timer = null
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

export const trimExtraChar = (value, char, regExp) => {
  const index = value.indexOf(char)
  if (index === -1) {
    return value
  }
  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }
  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

export const formatNumber = (value, allowDot = true, allowMinus = true) => {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g)
  } else {
    value = value.split('.')[0]
  }
  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g)
  } else {
    value = value.replace(/-/, '')
  }
  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g
  return value.replace(regExp, '')
}

export const withInstall = (comp) => {
  comp.install = (app)=>{
      //注册组件
      app.component(comp.name,comp)
  }
  return comp
}
