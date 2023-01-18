<template>
  <div
    class="uv-divider"
    :class="[hairline?'uv-divider-hairline':'',dashed?'uv-divider-dashed':'',position==='left'?'uv-divider-left':'',position==='right'?'uv-divider-right':'']"
  >
    <slot />
  </div>
</template>

<script setup>
 
defineProps({
  // 0.5px线
  hairline: {
    type: Boolean,
    default: false
  },
  // 虚线
  dashed: {
    type: Boolean,
    default: false
  },
  // 位置left和right可选
  position: {
    type: String
  }
})
</script>
<script>
export default {
  name: 'UvDivider'
}
</script>

