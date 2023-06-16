export function clone (params) {
  // 基本类型直接返回
  if (!params || typeof params !== 'object') return params

  // 根据 params 的类型判断是新建一个数组还是对象
  const newObject = Array.isArray(params) ? [] : {}

  // 遍历 params 并判断是 params 的属性才拷贝
  for (const key in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(key)) {
      newObject[key] = params[key]
    }
  }

  return newObject
}

const arrTag = '[object Array]'
const objTag = '[object Object]'
const mapTag = '[object Map]'
const setTag = '[object Set]'
const argTag = '[object Arguments]'
const strTag = '[object String]'
const dateTag = '[object Date]'
const regexpTag = '[object RegExp]'

const traversalArr = [arrTag, objTag, mapTag, setTag, argTag, strTag]

function checkType (source) {
  return Object.prototype.toString.call(source)
}

// 拷贝RegExp的方法
function cloneReg (source) {
  const reFlags = /\w*$/
  const result = new source.constructor(source.source, reFlags.exec(source))
  result.lastIndex = source.lastIndex
  return result
}

// 拷贝Date的方法
function cloneDate (source) {
  return new source.constructor(source.valueOf())
}

export function cloneDeep (source, map = new Map()) {
  if (source instanceof Object === false) return source
  const target = Array.isArray(source) ? [] : {}
  if (map.get(source)) return map.get(source)
  map.set(source, target)
  const type = checkType(source)

  let emptyObj
  if (traversalArr.includes(type)) {
    emptyObj = new source.constructor()
  }

  // 处理Map类型
  if (type === mapTag) {
    source.forEach((value, key) => {
      emptyObj.set(key, cloneDeep(value, map))
    })
    return emptyObj
  }

  // 处理Set类型
  if (type === setTag) {
    source.forEach(value => {
      emptyObj.add(cloneDeep(value, map))
    })
    return emptyObj
  }

  // 处理Date类型
  if (type === dateTag) return cloneDate(source)

  // 处理Reg类型
  if (type === regexpTag) return cloneReg(source)
  for (const item in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(item)) {
    // if (source[item] instanceof Object) {
      // eslint-disable-next-line valid-typeof
      if (typeof source[item] === 'obejct') {
        target[item] = cloneDeep(source[item], map)
      } else {
        target[item] = source[item]
      }
    }
  }
  return target
}
