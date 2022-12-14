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
  comp.install = (app)=>{
      //注册组件
      app.component(comp.name,comp)
  }
  return comp
}

let lastTime = 0
const prefixes = 'webkit moz ms o'.split(' ') // 各浏览器前缀

export let requestAnimationFrame
export let cancelAnimationFrame

// 判断是否是服务器环境
const inBrowser = typeof window === 'undefined'
if (inBrowser) {
  requestAnimationFrame = function () {

  }
  cancelAnimationFrame = function () {

  }
} else {
  requestAnimationFrame = window.requestAnimationFrame
  cancelAnimationFrame = window.cancelAnimationFrame
  let prefix
  // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
  for (let i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) { break }
    prefix = prefixes[i]
    requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame']
    cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame']
  }

  // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback) {
      const currTime = new Date().getTime()
      // 为了使setTimteout的尽可能的接近每秒60帧的效果
      const timeToCall = Math.max(0, 16 - (currTime - lastTime))
      const id = window.setTimeout(() => {
        // eslint-disable-next-line n/no-callback-literal
        callback(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }

    cancelAnimationFrame = function (id) {
      window.clearTimeout(id)
    }
  }
}

export const scrollLeftTo = (scroller, to, duration = 0.3) => {
  let count = 0
  const from = scroller.scrollLeft
  const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)
  function animate () {
    scroller.scrollLeft += (to - from) / frames
    if ((++count < frames) && inBrowser) {
      requestAnimationFrame(animate)
    }
  }
  animate()
}
