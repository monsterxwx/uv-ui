<template>
  <div
    class="uv-water-waves"
    :style="waterWavesStyles"
  >
    <div
      class="uv-water-waves-inner"
      :style="waterWavesInnerStyles"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 600 140"
        class="waves-item"
      >
        <path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 600 140"
        class="waves-item"
      >
        <path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        viewBox="0 0 600 140"
        class="waves-item"
      >
        <path d="M 0 70 Q 75 20,150 70 T 300 70 T 450 70 T 600 70 L 600 140 L 0 140 L 0 70Z" />
      </svg>
    </div>
    <div
      class="uv-water-waves-content"
      :style="{color:color}"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import './index.scss'
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: String,
    default: '200px'
  },
  progress: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: '#fff'
  }
})

const waterWavesStyles = computed(() => {
  return {
    width: props.size,
    height: props.size
  }
})

const waterWavesInnerStyles = computed(() => {
  let progress = props.progress
  if (progress === 0) {
    progress = -4
  } else if (progress === 100) {
    progress = 115
  }
  return {
    '--progress': `${progress}%`
  }
})

</script>
<script>
export default {
  name: 'UvWaterWaves'
}
</script>
