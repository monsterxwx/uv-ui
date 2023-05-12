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

<style lang="scss">
:root {
  --uv-nav-bar-height: 46px;
  --uv-nav-bar-center-max-width: 60%;
  --uv-nav-bar-center-font-size: 16px;
  --uv-nav-bar-center-font-weight: 700;
  --uv-nav-bar-center-color: #323233;
  --uv-nav-bar-left-right-padding: 0 16px;
  --uv-nav-bar-left-right-font-size: 14px;
  --uv-nav-bar-left-text-padding-left: 5px;
}
.uv-nav-bar {
  position: relative;
  .uv-nav-bar-placeholder {
    height: var(--uv-nav-bar-height);
  }
  .uv-nav-bar-content {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--uv-nav-bar-height);
    .uv-nav-bar-center {
      margin: 0 auto;
      max-width: var(--uv-nav-bar-center-max-width);
      font-size: var(--uv-nav-bar-center-font-size);
      font-weight: var(--uv-nav-bar-center-font-weight);
      white-space: nowrap;
      color: var(--uv-nav-bar-center-color);
    }
    .uv-nav-bar-left,
    .uv-nav-bar-right {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: var(--uv-nav-bar-left-right-padding);
      font-size: var(--uv-nav-bar-left-right-font-size);
    }
    .uv-nav-bar-left {
      left: 0;
      .uv-nav-bar-left-text {
        padding-left: var(--uv-nav-bar-left-text-padding-left);
      }
    }
    .uv-nav-bar-right {
      right: 0;
    }
  }
}
.uv-nav-bar-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
