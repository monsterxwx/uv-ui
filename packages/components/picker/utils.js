import { isDef, clamp } from '../../utils'

export function getColumnsType (columns, childrenName) {
  const firstColumn = columns[0]
  if (firstColumn) {
    if (Array.isArray(firstColumn)) {
      return 'multiple'
    }
    if (childrenName in firstColumn) {
      return 'cascade'
    }
  }
  return 'default'
}

export const getFirstEnabledOption = (options) => options.find((option) => !option.disabled) || options[0]

export function findIndexOfEnabledOption (
  options,
  index
) {
  index = clamp(index, 0, options.length)

  for (let i = index; i < options.length; i++) {
    if (!options[i].disabled) return i
  }
  for (let i = index - 1; i >= 0; i--) {
    if (!options[i].disabled) return i
  }

  return 0
}

export function findOptionByValue (
  options,
  value,
  fields
) {
  const index = options.findIndex((option) => option[fields.value] === value)
  const enabledIndex = findIndexOfEnabledOption(options, index)
  return options[enabledIndex]
}

export function formatCascadeColumns (
  columns,
  fields,
  selectedValues
) {
  const formatted = []

  let cursor = {
    [fields.children]: columns
  }
  let columnIndex = 0

  while (cursor && cursor[fields.children]) {
    const options = cursor[fields.children]
    const value = selectedValues.value[columnIndex]

    cursor = isDef(value)
      ? findOptionByValue(options, value, fields)
      : undefined

    if (!cursor && options.length) {
      const firstValue = getFirstEnabledOption(options)[fields.value]
      cursor = findOptionByValue(options, firstValue, fields)
    }

    columnIndex++
    formatted.push(options)
  }
  console.log('---cascade', formatted)
  return formatted
}
