<template>
  <div>
    <button
      :class="uvClass"
      :disabled="disabled"
      @click="clickEvent"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const uvClass = computed(() => {
  return ['uv-button', props.type ? (props.disabled ? '' : `uv-button-${props.type}`) : '', props.disabled ? `uv-button-${props.type}-disabled` : '']
})

const clickEvent = () => {
  console.log('ee')
}
</script>
<script>
export default {
  name: 'UvButton'
}
</script>
<style lang="scss" scoped>
.uv-button {
  padding: 10px;
  font-size: 13px;
  border: 0;
  border-radius: 4px;
  white-space: nowrap;
  color: #ffffff;
  background: none;
  outline: none;
  cursor: pointer;
  &-default {
    border: 1px solid #d9d9d9;
    color: #333333;
    background: #ffffff;
    &:hover {
      color: #0e80eb;
      background-color: #ecf5ff;
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }

  @mixin base($type) {
    border: 1px solid $type;
    background-color: $type;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  &-primary {
    @include base($primary);
  }
  &-success {
    @include base($success);
  }
  &-warning {
    @include base($warning);
  }
  &-error {
    @include base($error);
  }
  &-info {
    @include base($info);
  }
  &-default-disabled {
    border: 1px solid #d9d9d9;
    color: #333333;
    background: #ffffff;
    opacity: 0.5;
    cursor: no-drop;
  }

  @mixin disabled($type) {
    border: 1px solid $type;
    background-color: $type;
    opacity: 0.5;
    cursor: no-drop;
  }
  &-primary-disabled {
    @include disabled($primary);
  }
  &-success-disabled {
    @include disabled($success);
  }
  &-info-disabled {
    @include disabled($info);
  }
  &-error-disabled {
    @include disabled($error);
  }
  &-warning-disabled {
    @include disabled($warning);
  }
}
</style>
