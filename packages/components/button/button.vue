<template>
  <div>
    <button
      :class="uvClass"
      :disabled="disabled"
      :style="{backgroundColor:bgColor,color:color}"
      @click="clickEvent"
    >
      <div class="uv-button-content">
        <div
          v-if="icon && iconPosition==='left'"
          class="uv-button-content-icon-left"
        >
          <uv-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
        </div>
        <div
          v-if="loading"
          class="uv-button-content-loading"
        /><slot />
        <div
          v-if="icon && iconPosition==='right'"
          class="uv-button-content-icon-right"
        >
          <uv-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          />
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import uvIcon from '../icon'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  bgColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  square: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal'
  },
  block: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: 16
  },
  iconPosition: {
    type: String,
    default: 'left'
  }
})
const emit = defineEmits(['click'])
const uvClass = computed(() => {
  return [
    'uv-button',
    props.type ? (props.disabled ? '' : `uv-button-${props.type}`) : '',
    props.disabled ? `uv-button-${props.type}-disabled` : '',
    props.round ? 'uv-button-round' : '',
    props.square ? 'uv-button-square' : '',
    props.size ? `uv-button-size-${props.size}` : '',
    props.block ? 'uv-button-block' : ''
  ]
})
const clickEvent = () => {
  emit('click')
}
</script>
<script>
export default {
  name: 'UvButton'
}
</script>

<style lang="scss">
:root {
  --uv-button-primary: #409eff;
  --uv-button-success: #67c23a;
  --uv-button-warning: #e6a23c;
  --uv-button-error: #f56c6c;
  --uv-button-info: #909399;
  --uv-button-text: #303133;
  --uv-button-border-radius: 4px;
  --uv-button-font-size: 13px;
  --uv-button-default-border: 1px solid #d9d9d9;
  --uv-button-default-color: #333333;
  --uv-button-default-hover-color: #0e80eb;
  --uv-button-default-bg-color: #ffffff;
  --uv-button-default-hover-bg-color: #ecf5ff;
  --uv-button-loading-size: 15px;
  --uv-button-size-mini-padding: 2px;
  --uv-button-size-small-padding: 5px;
  --uv-button-size-normal-padding: 10px;
}

$primary: var(--uv-button-primary);
$success: var(--uv-button-success);
$warning: var(--uv-button-warning) ;
$error: var(--uv-button-error) ;
$info: var(--uv-button-info) ;
$text: var(--uv-button-text) ;
.uv-button {
  font-size: var(--uv-button-font-size);
  border: 0;
  border-radius: var(--uv-button-border-radius);
  white-space: nowrap;
  color: #ffffff;
  background: none;
  outline: none;
  cursor: pointer;
  &-default {
    border: var(--uv-button-default-border);
    color: var(--uv-button-default-color);
    background: var(--uv-button-default-bg-color);
    &:hover {
      color: var(--uv-button-default-hover-color);
      background-color: var(--uv-button-default-hover-bg-color);
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
  &-default-disabled {
    border: var(--uv-button-default-border);
    color: var(--uv-button-default-color);
    background: var(--uv-button-default-bg-color);
    opacity: 0.5;
    cursor: no-drop;
  }
  &-round {
    border-radius: 999px;
  }
  &-square {
    border-radius: 0;
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
  &-size-normal {
    padding: var(--uv-button-size-normal-padding);
  }
  &-size-small {
    padding: var(--uv-button-size-small-padding);
    font-size: 12px;
  }
  &-size-mini {
    padding: var(--uv-button-size-mini-padding);
    font-size: 12px;
  }
  &-block {
    width: 100%;
    button {
      display: block;
      margin: 0 auto;
      width: 95%;
    }
  }
  .uv-button-content {
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon-left {
      margin-right: 5px;
    }
    &-icon-right {
      margin-left: 5px;
    }
    &-loading {
      position: relative;
      margin-right: 5px;
      width: var(--uv-button-loading-size);
      height: var(--uv-button-loading-size);
      border: 2px solid #ffffff;
      border-top-color: #ffffff;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-radius: 100%;
      animation: circle infinite  0.75s linear;
    }
  }

  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
