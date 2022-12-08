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
import './index.scss'
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


