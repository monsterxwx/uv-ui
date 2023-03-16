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

<style lang="scss">
:root {
  --uv-cell-group-border-top: 1px solid #f5f6f7;
  --uv-cell-group-border-bottom: 1px solid #f5f6f7;
  --uv-cell-group-bg-color: #ffffff;
  --uv-cell-group-card-border-radius: 8px;
}
.uv-cell-group {
  overflow: hidden;
  margin: 0 auto;
  border-top: var(--uv-cell-group-border-top);
  border-bottom: var(--uv-cell-group-border-bottom);
  background-color: var(--uv-cell-group-bg-color);
}
.uv-cell-group-card {
  border-radius: var(--uv-cell-group-card-border-radius);
}
</style>
