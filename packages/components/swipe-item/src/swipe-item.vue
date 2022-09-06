<template>
  <div
    class="uv-swipe-item"
  >
    <slot />
  </div>
</template>

<script setup>

</script>
<script>
export default {
  name: 'UvSwipeItem'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
.uv-swipe-item {
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
