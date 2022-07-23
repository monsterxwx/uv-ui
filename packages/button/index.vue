<template>
  <div :class="uvClass">
    <button><slot /></button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
const uvClass = computed(() => {
  return ['uv-button', `uv-button-${props.type}`]
})
</script>
<script>
export default {
  name: 'UvButton'
}
</script>
<style lang="scss" scoped>
button {
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
}
.uv-button {
  button {
    padding: 12px 24px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
  &-default {
    button {
      background-color: #b4b0b0;
    }
  }
  &-success {
    button {
      background-color: #0eac77;
    }
  }
}
</style>
