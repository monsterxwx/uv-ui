export const _typeof = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

export const isObject = (obj) => _typeof(obj) === 'object'

export const isFunction = (val) => typeof val === 'function'

export const isPromise = (val) => isObject(val) && isFunction(val.then) && isFunction(val.catch)

export const isNumeric = (val) => {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export const isDef = (val) => {
  return val !== undefined && val !== null
}
