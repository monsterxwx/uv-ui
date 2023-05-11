<template>
  <div class="uv-water-mark" :class="full?'uv-water-mark-full':''" :style="{backgroundImage:`url(${watermarkUrl})` }">
    <div class="uv-water-mark-warp" ref="svgElRef">
      <svg
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        :width="svgWidth"
        :height="svgHeight"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        :style="{
          padding: `0 ${gapX}px ${gapY}px 0`,
          opacity: opacity
        }"
      >
        <image
          v-if="image"
          :href="imageBase64"
          :xlink:href="imageBase64"
          x="0"
          y="0"
          :width="width"
          :height="height"
          :style="rotateStyle"
        />
        <foreignObject
          v-else
          x="0"
          y="0"
          :width="width"
          :height="height"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            :style="rotateStyle"
          >
            <slot>
              <span :style="{ color: textColor }">{{ content }}</span>
            </slot>
          </div>
        </foreignObject>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect, nextTick, watch } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  rotate: {
    type: Number,
    default: -22
  },
  image: {
    type: String
  },
  textColor: {
    type: String,
    default: '#dcdee0'
  },
  content: {
    type: String
  },
  full: {
    type: Boolean,
    default: false
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0.3
  }
})
const imageBase64 = ref('')
const watermarkUrl = ref('')
const rotateStyle = {
  transformOrigin: 'center',
  transform: `rotate(${props.rotate}deg)`
}
const svgWidth = props.width + props.gapX
const svgHeight = props.height + props.gapY

const makeImageToBase64 = (url) => {
  const canvas = document.createElement('canvas')
  const image = new Image()
  image.crossOrigin = 'anonymous'
  image.referrerPolicy = 'no-referrer'
  image.onload = () => {
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(image, 0, 0)
    imageBase64.value = canvas.toDataURL()
  }
  image.src = url
}

const makeSvgToBlobUrl = (svgStr) => {
  const svgBlob = new Blob([svgStr], {
    type: 'image/svg+xml'
  })
  return URL.createObjectURL(svgBlob)
}

watchEffect(() => {
  if (props.image) {
    makeImageToBase64(props.image)
  }
})
const svgElRef = ref(null)
watch(
  () => [
    imageBase64.value,
    props.content,
    props.textColor,
    props.height,
    props.width,
    props.rotate,
    props.gapX,
    props.gapY
  ],
  () => {
    nextTick(() => {
      if (svgElRef.value) {
        if (watermarkUrl.value) {
          URL.revokeObjectURL(watermarkUrl.value)
        }
        watermarkUrl.value = makeSvgToBlobUrl(svgElRef.value.innerHTML)
      }
    })
  },
  {
    immediate: true
  }
)

</script>

<script>
export default {
  name: 'UvWaterMark'
}
</script>

<style lang="scss">
:root {
  --uv-water-mark-z-index: 100;
}
.uv-water-mark {
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--uv-water-mark-z-index);
  width: 100%;
  height: 100%;
  background-repeat: repeat;
  pointer-events: none;
  .uv-water-mark-warp {
    display: none;
  }
}
.uv-water-mark-full {
  position: fixed;
}

 </style>
