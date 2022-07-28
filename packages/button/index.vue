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
          <svgIcon
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
          <svgIcon
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
import svgIcon from '@/components/svgIcon'
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
<style lang="scss" scoped>
.uv-button {
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
  &-size-normal {
    padding: 10px;
  }
  &-size-small {
    padding: 5px;
    font-size: 12px;
  }
  &-size-mini {
    padding: 2px;
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
      width: 15px;
      height: 15px;
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
