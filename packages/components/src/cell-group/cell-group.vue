<template>
  <div
    class="uv-cell-group"
    :style="{width:gap?'95%':'100%'}"
    :class="card?'uv-cell-group-card':''"
  >
    <slot />
  </div>
</template>

<script setup>
 
defineProps({
  card: {
    type: Boolean,
    default: false
  },
  gap: {
    type: Boolean,
    default: false
  }
})
</script>
<script>
export default {
  name: 'UvCellGroup'
}
</script>


