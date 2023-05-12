<template>
  <div class="demo-block">
    <div class="demo-block-title">
      {{ title }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="scss" scoped>
.demo-block {
  display: flex;
  padding: 0 16px 16px;
  flex-direction: column;
  .demo-block-title {
    padding: 16px 0;
    font-size: 14px;
    color: #969799;
  }
}
</style>
