<template>
  <div class="uv-skeleton-title" :class="round?'uv-skeleton-title-round':''" :style="{width:titleWidth}" />
</template>

<script setup>
defineProps({
  round: {
    type: Boolean,
    default: false
  },
  titleWidth: {
    type: String,
    default: '40%'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonTitle'
}
</script>

<style lang="scss">
:root {
  --uv-skeleton-title-height: 16px;
  --uv-skeleton-title-bg-color: #f2f3f5;
  --uv-skeleton-title-margin-bottom: 12px;
}
.uv-skeleton-title {
  margin-bottom: var(--uv-skeleton-title-margin-bottom);
  height: var(--uv-skeleton-title-height);
  background-color: var(--uv-skeleton-title-bg-color);
  &-round {
    border-radius: var(--uv-skeleton-border-radius);
  }
}

</style>
