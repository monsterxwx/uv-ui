<template>
  <div class="uv-skeleton-paragraph" :class="round?'uv-skeleton-paragraph-round':''" :style="{width:rowWidth}" />
</template>

<script setup>
defineProps({
  round: {
    type: Boolean,
    default: false
  },
  rowWidth: {
    type: String,
    default: '100%'
  }
})
</script>
<script>
export default {
  name: 'UvSkeletonParagraph'
}
</script>

<style lang="scss">
:root {
  --uv-skeleton-paragraph-height: 16px;
  --uv-skeleton-paragraph-bg-color: #f2f3f5;
  --uv-skeleton-paragraph-margin-top: 12px;
}
.uv-skeleton-paragraph {
  height: var(--uv-skeleton-paragraph-height);
  background-color: var(--uv-skeleton-paragraph-bg-color);
  &-round {
    border-radius: var(--uv-skeleton-border-radius);
  }
  &:not(:first-child) {
    margin-top: var(--uv-skeleton-paragraph-margin-top);
  }
}

</style>
