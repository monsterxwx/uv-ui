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
import './index.scss'
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


