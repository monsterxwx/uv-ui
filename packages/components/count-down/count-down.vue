<template>
  <div class="uv-count-down">
    <slot :time-data="current">
      {{ timeText }}
    </slot>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useCountDown } from '../../hooks'

const props = defineProps({
  autoStart: {
    type: Boolean,
    default: true
  },
  time: {
    type: [Number, String],
    default: 0
  },
  format: {
    type: String,
    default: 'HH:mm:ss'
  },
  millisecond: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['change', 'finish'])

function spliceNum (num, targetLength = 2) {
  let str = num + ''

  while (str.length < targetLength) {
    str = '0' + str
  }

  return str
}

function parseFormat (format, currentTime) {
  const { days } = currentTime
  let { hours, minutes, seconds, milliseconds } = currentTime

  if (format.includes('DD')) {
    format = format.replace('DD', spliceNum(days))
  } else {
    hours += days * 24
  }

  if (format.includes('HH')) {
    format = format.replace('HH', spliceNum(hours))
  } else {
    minutes += hours * 60
  }

  if (format.includes('mm')) {
    format = format.replace('mm', spliceNum(minutes))
  } else {
    seconds += minutes * 60
  }

  if (format.includes('ss')) {
    format = format.replace('ss', spliceNum(seconds))
  } else {
    milliseconds += seconds * 1000
  }

  if (format.includes('S')) {
    const ms = spliceNum(milliseconds, 3)

    if (format.includes('SSS')) {
      format = format.replace('SSS', ms)
    } else if (format.includes('SS')) {
      format = format.replace('SS', ms.slice(0, 2))
    } else {
      format = format.replace('S', ms.charAt(0))
    }
  }

  return format
}

const { start, pause, reset, current } = useCountDown({
  time: +props.time,
  millisecond: props.millisecond,
  onChange: (current) => emit('change', current),
  onFinish: () => emit('finish')
})

const timeText = computed(() => parseFormat(props.format, current.value))

const resetTime = () => {
  reset(+props.time)

  if (props.autoStart) {
    start()
  }
}

watch(() => props.time, resetTime, { immediate: true })

defineExpose({
  start,
  pause,
  reset: resetTime
})

</script>
<script>
export default {
  name: 'UvCountDown'
}
</script>

<style lang="scss">
:root {
  --uv-count-down-font-size: 14px;
  --uv-count-down-color: #323233;
  --uv-count-down-line-height: 1.5;
}
.uv-count-down {
  font-size: var(--uv-count-down-font-size);
  color: var(--uv-count-down-color);
  line-height: var(--uv-count-down-line-height);
}

</style>
