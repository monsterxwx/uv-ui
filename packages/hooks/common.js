import { inject, onMounted, getCurrentInstance, onBeforeUnmount, provide } from 'vue'

const removeItem = (arr, item) => {
  if (arr.length) {
    const index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

function keyInProvides (key) {
  const instance = getCurrentInstance()

  return key in instance.provides
}

export function useChildren (name) {
  const childProviders = []

  const collect = (childProvider) => {
    childProviders.push(childProvider)
  }

  const clear = (childProvider) => {
    removeItem(childProviders, childProvider)
  }

  const bindChildren = (parentProvider) => {
    provide(name, {
      collect,
      clear,
      ...parentProvider
    })
  }

  return {
    childProviders,
    bindChildren
  }
}

export function useParent (key) {
  if (!keyInProvides(key)) {
    return {
      parentProvider: null,
      bindParent: null
    }
  }

  const rawParentProvider = inject(key)

  const { collect, clear, ...parentProvider } = rawParentProvider

  const bindParent = (childProvider) => {
    onMounted(() => collect(childProvider))
    onBeforeUnmount(() => clear(childProvider))
  }

  return {
    parentProvider,
    bindParent
  }
}
