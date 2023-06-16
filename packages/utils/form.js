import { isDef } from './type.js'
function nextSplit (key) {
  const cartfulIndexs = []
  const regx = /\[(\d+)\]/g
  let wholeKey = key
  let matchResult
  while ((matchResult = regx.exec(key))) {
    cartfulIndexs.push(matchResult[1])
  }
  if (cartfulIndexs.length) {
    wholeKey = wholeKey.substring(0, wholeKey.indexOf(cartfulIndexs[0]) - 1)
  }
  return [wholeKey, ...cartfulIndexs]
}

export function get (target, keyStrs, defaultValue) {
  if (!isDef(target)) return defaultValue

  const keyParts = keyStrs
    .split('.')
    .map(nextSplit)
    .flat()

  let value = target

  for (let index = 0; index < keyParts.length; index++) {
    const key = keyParts[index]
    if (isDef(value[key])) {
      value = value[key]
    } else {
      return defaultValue
    }
  }
  return value
}

function toArrayPath (path) {
  if (Array.isArray(path)) return path
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
}

export function set (source, path, value) {
  if (typeof source !== 'object') return source
  toArrayPath(path).reduce((cur, pre, index, arr) => {
    if (index === arr.length - 1) {
      cur[pre] = value
      return null
    } else if (pre in cur) {
      return cur[pre]
    } else {
      cur[pre] = /^[0-9]{1,}$/.test(arr[index + 1]) ? [] : {}
      return cur[pre]
    }
  }, source)
  return source
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
