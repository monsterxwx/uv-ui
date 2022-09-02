
const inBrowser = typeof window !== 'undefined'

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
