<template>
  <svg
    :class="['svg-icon', $attrs.class]"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
    aria-hidden="true"
  >
    <use
      :xlink:href="'#icon-' + name"
      :fill="color"
    />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 14
  }
})

</script>

<style lang="scss" scope>
.svg-icon {
  vertical-align: middle;
  fill: currentcolor;
}
</style>
