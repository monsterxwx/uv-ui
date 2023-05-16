import { unref, watch, getCurrentScope, onScopeDispose } from 'vue'

export function tryOnScopeDispose (fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}

export function useEventListener (...args) {
  let target
  let events
  let listeners
  let options

  if (typeof args[0] === 'string' || Array.isArray(args[0])) {
    [events, listeners, options] = args
    target = typeof window !== 'undefined' ? window : undefined
  } else {
    [target, events, listeners, options] = args
  }

  if (!target) {
    return () => {}
  }

  if (!Array.isArray(events)) { events = [events] }
  if (!Array.isArray(listeners)) { listeners = [listeners] }

  const cleanups = []
  const cleanup = () => {
    cleanups.forEach(fn => fn())
    cleanups.length = 0
  }

  const register = (el, event, listener, options) => {
    el.addEventListener(event, listener, options)
    return () => el.removeEventListener(event, listener, options)
  }

  const stopWatch = watch(
    () => [unref(target), unref(options)],
    ([el, options]) => {
      cleanup()
      if (!el) { return }

      cleanups.push(
        ...(events).flatMap((event) => {
          return (listeners).map(listener => register(el, event, listener, options))
        })
      )
    },
    { immediate: true, flush: 'post' }
  )

  const stop = () => {
    stopWatch()
    cleanup()
  }

  tryOnScopeDispose(stop)

  return stop
}
