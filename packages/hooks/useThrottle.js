export function useThrottle (cb, duration = 100) {
  let start = +new Date()
  return function () {
    const args = arguments
    const context = this
    const now = +new Date()
    if (now - start >= duration) {
      cb.apply(context, args)
      start = now
    }
  }
}
