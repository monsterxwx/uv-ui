<template>
  <div
    class="uv-form"
  >
    <uvCellGroup
      :card="card"
      :gap="gap"
    >
      <slot />
    </uvCellGroup>
  </div>
</template>

<script setup>
import { provide } from 'vue'
import uvCellGroup from '../../cell-group'
const props = defineProps({
  model: Object,
  rules: {
    type: Object
  },
  labelPosition: { // 标题对齐方式,默认向右对齐
    type: String,
    default: 'right'
  },
  labelWidth: {
    type: Number
  },
  card: {
    type: Boolean,
    default: false
  },
  gap: {
    type: Boolean,
    default: false
  }
})

provide('form', { props })
</script>
<script>
export default {
  name: 'UvForm'
}
</script>

<style lang="scss" scoped>

</style>
