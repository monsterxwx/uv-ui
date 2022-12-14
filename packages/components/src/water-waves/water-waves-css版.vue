<template>
  <div
    class="uv-water-waves"
    :style="waterWavesStyles"
  >
    <div
      class="uv-water-waves-content"
      :style="{color:color}"
    >
      <slot />
    </div>
    <div
      class="uv-water-waves-item1"
      :style="{top:wavesTopList.item1}"
    />
    <div
      class="uv-water-waves-item2"
      :style="{top:wavesTopList.item2}"
    />
  </div>
</template>

<script setup>

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

const caleTopNumber = (progress) => {
  let item1 = 0; let item2 = 0; let item3 = 0
  if (progress === 0) {
    item1 = 200 + '%'
    item2 = 200 + '%'
    item3 = 200 + '%'
  } else if (progress >= 100) {
    item1 = 0
    item2 = 0
    item3 = 0
  } else {
    item1 = Number(100 - (progress)) + '%'
    item2 = Number(100 - (progress)) + '%'
    item3 = Number(100 - progress) + '%'
  }
  return {
    item1,
    item2,
    item3
  }
}

const wavesTopList = computed(() => {
  const { progress } = props
  const { item1, item2, item3 } = caleTopNumber(progress)
  return {
    item1,
    item2,
    item3
  }
})
</script>
<script>
export default {
  name: 'UvWaterWaves'
}
</script>

<style>
:root {
  --uv-water-waves-box-shadow: #00eef2 0 0 32px inset;
  --uv-water-waves-content-z-index: 10;
  --uv-water-waves-item1-bg-color: #33cfff;
  --uv-water-waves-item2-bg-color: #0eaffe;
  --uv-water-waves-animation-duration: 8s;
  --uv-water-waves-item1-opacity: 0.7;
  --uv-water-waves-item2-opacity: 0.5;
  --uv-water-waves-item1-border-radius: 42%;
  --uv-water-waves-item2-border-radius: 40%;
}
</style>

<style lang="scss" scoped>
.uv-water-waves {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  box-shadow: var(--uv-water-waves-box-shadow);
  animation: water-waves linear infinite;
  .uv-water-waves-content {
    position: relative;
    z-index: var(--uv-water-waves-content-z-index);
  }
  .uv-water-waves-item1 {
    position: absolute;
    top: 90%;
    left: -25%;
    width: 200%;
    height: 200%;
    border-radius: var(--uv-water-waves-item1-border-radius);
    background-color: var(--uv-water-waves-item1-bg-color);
    opacity: var(--uv-water-waves-item1-opacity);
    animation: inherit;
    animation-duration: var(--uv-water-waves-animation-duration);
  }
  .uv-water-waves-item2 {
    position: absolute;
    top: 95%;
    left: -35%;
    width: 200%;
    height: 200%;
    border-radius: var(--uv-water-waves-item2-border-radius);
    background-color: var(--uv-water-waves-item2-bg-color);
    opacity: var(--uv-water-waves-item2-opacity);
    animation: inherit;
    animation-duration: var(--uv-water-waves-animation-duration);
  }

  @keyframes water-waves {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
