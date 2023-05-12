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

<style lang="scss">
:root {
  --uv-water-wave1-color: #a0edff;
  --uv-water-wave2-color: rgb(40 187 255 / 50%);
  --uv-water-wave3-color: #2084cc;
}
.uv-water-waves {
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 50%;
  background-clip: content-box, border-box;
  box-shadow: 0 2px 7px 0 #238fdb;
  background-image:
    linear-gradient(#021f40, #021f40),
    linear-gradient(180deg, rgb(36 144 220 / 41%), rgb(37 147 225 / 100%));
  background-origin: border-box;
  .uv-water-waves-content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
  }
  .uv-water-waves-inner {
    position: absolute;
    bottom: calc(-128% + var(--progress));
    left: 0;
    width: 100%;
    height: 100%;
    background: #a0edff;
    .waves-item {
      position: absolute;
      bottom: 100%;
      left: 0;
      width: 200%;
      stroke: none;
    }
    .waves-item:nth-child(1) {
      fill: var(--uv-water-wave1-color);
      transform: translate(-50%, 0);
      z-index: 3;
      animation: wave-move1 1.5s linear infinite;

      /* svg重合有一条线 */
      margin-bottom: -2px;
    }
    .waves-item:nth-child(2) {
      fill: var(--uv-water-wave2-color);
      transform: translate(0, 0);
      z-index: 2;
      animation: wave-move2 3s linear infinite;
    }
    .waves-item:nth-child(3) {
      fill: var(--uv-water-wave3-color);
      transform: translate(-50%, 0);
      z-index: 1;
      animation: wave-move1 3s linear infinite;
    }

    @keyframes wave-move1 {
      100% {
        transform: translate(0, 0);
      }
    }

    @keyframes wave-move2 {
      100% {
        transform: translate(-50%, 0);
      }
    }
  }
}
</style>
