
import { isDef, isNumeric } from './type.js'

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

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

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

export function nextTickFrame (fn) {
  requestAnimationFrame(() => {
    requestAnimationFrame(fn)
  })
}

export function call (fn, ...args) {
  if (Array.isArray(fn)) {
    return fn.map((f) => f(...args))
  }

  if (fn) {
    return fn(...args)
  }
}
