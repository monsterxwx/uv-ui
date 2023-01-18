<template>
  <div
    class="uv-side-bar"
  >
    <div class="uv-side-bar-left">
      <div
        class="uv-side-bar-left-cotent"
        ref="contentRef"
      >
        <div
          ref="lineRef"
          class="uv-side-bar-item-line"
          :style="{width:lineWidth,backgroundColor:lineColor}"
        />
        <div
          @click="itemClick(index)"
          class="uv-side-bar-left-cotent-item"
          :class="modelValue===index?'uv-side-bar-left-cotent-item-active':''"
          v-for="(item,index) in list"
          :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="uv-side-bar-right">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
 
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  lineWidth: {
    type: String,
    default: '4px'
  },
  lineColor: {
    type: String,
    default: '#1989fa'
  },
  list: {
    type: Array
  }
})

const emit = defineEmits(['update:modelValue'])

const itemClick = (idx) => {
  emit('update:modelValue', idx)
  const { offsetHeight, offsetTop } = contentItemListDom.value[idx]
  setLine(offsetHeight, offsetTop)
}

const contentRef = ref(null)
const contentItemListDom = ref(null)
const lineRef = ref(null)

const setLine = (height, top) => {
  lineRef.value.style.height = `${height / 2}px`
  lineRef.value.style.transform = `translateY(${top + (height / 4)}px)`
}

onMounted(() => {
  initLine()
})

const initLine = () => {
  contentItemListDom.value = contentRef.value.querySelectorAll('.uv-side-bar-left-cotent-item')
  const { offsetHeight, offsetTop } = contentItemListDom.value[props.modelValue]
  setTimeout(() => {
    lineRef.value.style.transition = 'transform 0.3s'
  }, 300)
  setLine(offsetHeight, offsetTop)
}
</script>
<script>
export default {
  name: 'UvSideBar'
}
</script>

