<template>
  <div
    class="uv-grid"
    :style="{paddingLeft:gutter+'px' }"
    ref="uvGridRef"
  >
    <slot />
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue'
const props = defineProps({
  clickable: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  },
  gutter: {
    type: [String, Number],
    default: 0
  },
  columnNum: {
    type: [String, Number],
    default: 4
  },
  direction: {
    type: String,
    default: 'column'
  },
  reverse: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  color: {
    type: String
  }
})
const uvGridRef = ref(null)
const index = ref(0)
onMounted(() => {
  index.value = uvGridRef.value.children.length
})

provide('grid', { props, index })
</script>
<script>
export default {
  name: 'UvGrid'
}
</script>

<style lang="scss" scoped>
.uv-grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
