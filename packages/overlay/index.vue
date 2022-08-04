<template>
  <Transition>
    <div
      class="uv-overlay"
      :style="{zIndex:zIndex,background:overlay?'rgba(0,0,0,.7)':'transparent'}"
      v-show="show"
    >
      <slot />
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  zIndex: {
    type: String,
    default: '1'
  },
  overlay: {
    type: Boolean,
    default: true
  }
})
</script>
<script>
export default {
  name: 'UvOverlay'
}
</script>

<style lang="scss" scoped>
.uv-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
