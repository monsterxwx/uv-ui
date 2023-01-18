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
 
import { useChildren } from '@uv-ui/hooks'
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

useChildren('grid', { props })
</script>
<script>
export default {
  name: 'UvGrid'
}
</script>


