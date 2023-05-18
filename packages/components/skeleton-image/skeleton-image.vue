<template>
  <div class="uv-skeleton-image">
    <uv-icon
      :size="iconSize"
      name="photo"
      :color="iconColor"
    />
  </div>
</template>

<script setup>
import uvIcon from '../icon'
defineProps({
  iconSize: {
    type: String,
    default: '48'
  },
  iconColor: {
    type: String,
    default: '#c8c9cc'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonImage'
}
</script>

<style lang="scss">
:root {
  --uv-skeleton-image-size: 96px;
  --uv-skeleton-image-bg-color: #f2f3f5;
}
.uv-skeleton-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--uv-skeleton-image-size);
  height: var(--uv-skeleton-image-size);
  background-color: var(--uv-skeleton-image-bg-color);
}

</style>
