<template>
  <div
    class="uv-nav-bar"
    :class="fixed?'uv-nav-bar-fixed':''"
    :style="{border:border?'1px solid #f7f8fa':'',zIndex:zIndex}"
  >
    <div
      v-if="placeholder && fixed"
      class="uv-nav-bar-placeholder"
    />
    <div
      class="uv-nav-bar-content"
      :style="{backgroundColor:bgColor}"
    >
      <div
        class="uv-nav-bar-left"
        @click="handleClickLeft"
      >
        <slot name="left">
          <uv-icon
            v-if="leftArrow"
            name="arrow-left-bold"
            size="18"
            :color="leftColor"
            v-bind="arrowProps"
          />
          <div
            :style="{color:leftColor}"
            class="uv-nav-bar-left-text"
          >
            {{ leftTitle }}
          </div>
        </slot>
      </div>
      <div class="uv-nav-bar-center">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div
        class="uv-nav-bar-right"
        @click="handleClickRight"
      >
        <slot name="right">
          <div>{{ rightTitle }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
 
import uvIcon from '../icon'

defineProps({
  title: {
    type: String
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  leftTitle: {
    type: String
  },
  leftColor: {
    type: String,
    default: '#419dfb'
  },
  rightTitle: {
    type: String
  },
  leftArrow: {
    type: Boolean,
    default: false
  },
  arrowProps: {
    type: Object
  },
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click-left', 'click-right'])

const handleClickLeft = () => {
  emit('click-left')
}
const handleClickRight = () => {
  emit('click-right')
}
</script>
<script>
export default {
  name: 'UvNavBar'
}
</script>

