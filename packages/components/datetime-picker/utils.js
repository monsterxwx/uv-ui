
export const getCurrentTime = (mode) => {
  const today = new Date()
  const year = today.getFullYear()
  const month = padZero(today.getMonth() + 1) // 月份从0开始，需要加1
  const day = padZero(today.getDate())
  const hours = padZero(today.getHours())
  const minutes = padZero(today.getMinutes())
  if (mode === 'date') {
    return `${year}-${month}-${day}`
  } else if (mode === 'year-month') {
    return `${year}-${month}`
  } else if (mode === 'time') {
    return `${hours}-${minutes}`
  } else if (mode === 'datetime') {
    return `${year}-${month}-${day} ${hours}:${minutes}`
  }
  return ''
}

export function times (n, iteratee) {
  if (n < 0) {
    return []
  }

  const result = Array(n)

  let index = -1
  while (++index < n) {
    result[index] = iteratee(index)
  }

  return result
}

export function padZero (num, targetLength = 2) {
  let str = num + ''

  while (str.length < targetLength) {
    str = '0' + str
  }

  return str
}

export const getOptions = (
  min,
  max,
  type,
  formatter,
  filter
) => {
  const options = times(max - min + 1, (index) => {
    const value = padZero(min + index)
    return formatter(type, {
      label: value,
      value
    })
  })
  return filter ? filter(type, options) : options
}

export const getMonthEndDay = (year, month) =>
  32 - new Date(year, month - 1, 32).getDate()
