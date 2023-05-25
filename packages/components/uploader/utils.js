
import { isFunction } from '../../utils'

export const toArray = (item) => Array.isArray(item) ? item : [item]

export function readFileContent (file, resultType) {
  return new Promise((resolve) => {
    if (resultType === 'file') {
      resolve()
      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      resolve((event.target).result)
    }

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file)
    } else if (resultType === 'text') {
      reader.readAsText(file)
    }
  })
}

// 用于判断是否超出设定的图片大小
export function isOversize (items, maxSize) {
  return toArray(items).some((item) => {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file)
      }
      return item.file.size > +maxSize
    }
    return false
  })
}

export function filterFiles (items, maxSize) {
  const valid = []
  const invalid = []

  items.forEach((item) => {
    if (isOversize(item, maxSize)) {
      invalid.push(item)
    } else {
      valid.push(item)
    }
  })

  return { valid, invalid }
}
