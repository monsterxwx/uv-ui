<template>
  <Transition name="overlay">
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
<style lang="scss">
:root {
  --uv-overlay-transition-time: 0.5s;
}
.uv-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity var(--uv-overlay-transition-time) ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
