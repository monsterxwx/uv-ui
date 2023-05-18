<template>
  <div class="uv-skeleton-avatar" :class="avatarShape==='round'?'uv-skeleton-avatar-round':''" />
</template>

<script setup>
defineProps({
  avatarShape: {
    type: String,
    default: 'round'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonAvatar'
}
</script>

<style lang="scss">
:root {
  --uv-skeleton-avatar-size: 32px;
  --uv-skeleton-avatar-bg-color: #f2f3f5;
  --uv-skeleton-avatar-margin-right: 12px;
}
.uv-skeleton-avatar {
  margin-right: var(--uv-skeleton-avatar-margin-right);
  width: var(--uv-skeleton-avatar-size);
  height: var(--uv-skeleton-avatar-size);
  background-color: var(--uv-skeleton-avatar-bg-color);
  flex-shrink: 0;
  &-round {
    border-radius: 50%;
  }
}

</style>
