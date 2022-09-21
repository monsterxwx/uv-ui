<template>
  <uvCell
    class="uv-form-item"
    :arrow="arrow"
    :arrow-direction="arrowDirection"
    :title="label"
    :label-width="labelWidth"
    :clickable="clickable"
  >
    <template #title>
      <slot name="label" />
    </template>
    <template #value>
      <slot />
    </template>
  </uvCell>
</template>

<script setup>
import { inject } from 'vue'
import uvCell from '../../cell'
defineProps({
  label: {
    type: String
  },
  arrow: {
    type: Boolean,
    default: false
  },
  arrowDirection: {
    type: String
  },
  clickable: {
    type: Boolean,
    default: false
  }
})
const { props: parentProps } = inject('form')
const { labelWidth } = parentProps
</script>
<script>
export default {
  name: 'UvFormItem'
}
</script>

<style>
:root {
  --uv-test: 1px;
}
</style>

<style lang="scss" scoped>
  .uv-form-item {
    --uv-cell-content-justify-content: flex-start;
    :deep() {
      .uv-cell-content-value {
        width: 100%;
      }
    }
  }

</style>
