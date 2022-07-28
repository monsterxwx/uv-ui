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

<style lang="scss" scoped>
.uv-cell-group {
  overflow: hidden;
  margin: 0 auto;
  border-top: 1px solid #f5f6f7;
  border-bottom: 1px solid #f5f6f7;
  background-color: #ffffff;
}
.uv-cell-group-card {
  border-radius: 8px;
}
</style>
