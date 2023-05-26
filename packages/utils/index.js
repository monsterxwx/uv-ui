import { get, set } from 'lodash-es'

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
  comp.install = (app) => {
    // 注册组件
    app.component(comp.name, comp)
  }
  return comp
}

export const scrollLeftTo = (scroller, to, duration = 0.3) => {
  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)
  function animate () {
    scroller.scrollLeft += (to - from) / frames
    if (++count < frames) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}

export const getScrollTop = (el) => {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset
  return Math.max(top, 0)
}

export const isDef = (val) => {
  return val !== undefined && val !== null
}

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

export const isNumeric = (val) => {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export const pxToNum = (value) => {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}

export const addUnit = (value) => {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value)
  }
  return undefined
}
export const inBrowser = typeof window !== 'undefined'

export const _typeof = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

export const isObject = (obj) => _typeof(obj) === 'object'

export const isFunction = (val) => typeof val === 'function'

export const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch)
