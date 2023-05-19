import { computed, onActivated, onBeforeUnmount, onDeactivated, ref } from 'vue'
import { inBrowser } from '../utils'
import { useRequestAnimationFrame } from './useRequestAnimationFrame'

const { requestAnimationFrame, cancelAnimationFrame } = useRequestAnimationFrame()

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

function parseTime (time) {
  const days = Math.floor(time / DAY)
  const hours = Math.floor((time % DAY) / HOUR)
  const minutes = Math.floor((time % HOUR) / MINUTE)
  const seconds = Math.floor((time % MINUTE) / SECOND)
  const milliseconds = Math.floor(time % SECOND)

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

function isSameSecond (time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
}

export function useCountDown (options) {
  let rafId
  let endTime
  let counting
  let deactivated

  const remain = ref(options.time)
  const current = computed(() => parseTime(remain.value))

  const pause = () => {
    counting = false
    cancelAnimationFrame(rafId)
  }

  const getCurrentRemain = () => Math.max(endTime - Date.now(), 0)

  const setRemain = (value) => {
    remain.value = value
    options.onChange?.(current.value)

    if (value === 0) {
      pause()
      options.onFinish?.()
    }
  }

  const microTick = () => {
    rafId = requestAnimationFrame(() => {
      // in case of call reset immediately after finish
      if (counting) {
        setRemain(getCurrentRemain())

        if (remain.value > 0) {
          microTick()
        }
      }
    })
  }

  const macroTick = () => {
    rafId = requestAnimationFrame(() => {
      // in case of call reset immediately after finish
      if (counting) {
        const remainRemain = getCurrentRemain()

        if (!isSameSecond(remainRemain, remain.value) || remainRemain === 0) {
          setRemain(remainRemain)
        }

        if (remain.value > 0) {
          macroTick()
        }
      }
    })
  }

  const tick = () => {
    if (!inBrowser) {
      return
    }

    if (options.millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }

  const start = () => {
    if (!counting) {
      endTime = Date.now() + remain.value
      counting = true
      tick()
    }
  }

  const reset = (totalTime = options.time) => {
    pause()
    remain.value = totalTime
  }

  onBeforeUnmount(pause)

  onActivated(() => {
    if (deactivated) {
      counting = true
      deactivated = false
      tick()
    }
  })

  onDeactivated(() => {
    if (counting) {
      pause()
      deactivated = true
    }
  })

  return {
    start,
    pause,
    reset,
    current
  }
}
