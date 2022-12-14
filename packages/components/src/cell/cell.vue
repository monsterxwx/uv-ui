<template>
  <div
    class="uv-cell"

    :style="{backgroundColor:bgColor,fontSize:size+'px'}"
  >
    <div
      class="uv-cell-content"
      :class="[clickable?'uv-cell-clickable':'',labelPosition==='top'?'uv-cell-content-top':'',labelPosition==='right'?'uv-cell-content-right':'']"
    >
      <div
        class="uv-cell-content-title"
        :class="required?'uv-cell-content-title-required':''"
        :style="{width:labelWidth+'px'}"
      >
        <slot name="title">
          <span
            v-if="icon!==''"
            style="margin-right: 5px;"
          ><uv-icon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          /></span> {{ title }}
        </slot>
      </div>
      <div class="uv-cell-content-value-wrap">
        <div class="uv-cell-content-value">
          <div
            class="uv-cell-content-value-slot"
            :style="{paddingRight:arrow? '20px':''}"
          >
            <slot name="value">
              {{ value }}
            </slot>
          </div>
          <span
            class="uv-cell-arrow"
            v-if="arrow"
          ><uv-icon
            :name="'arrow-'+arrowDirection"
            color="#9699a6"
          /></span>
        </div>
        <Transition name="cell-tips">
          <div
            v-if="tips"
            class="uv-cell-tips"
          >
            <slot name="tips">
              {{ errorMsg }}
            </slot>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import './index.scss'
import uvIcon from '../icon'
defineProps({
  title: {
    type: String,
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  size: {
    type: [String, Number],
    default: '14'
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
  arrow: {
    type: Boolean,
    default: false
  },
  arrowDirection: {
    type: String,
    default: 'right'
  },
  tips: {
    type: Boolean,
    default: false
  },
  errorMsg: {
    type: String
  },
  clickable: {
    type: Boolean,
    default: false
  },
  labelWidth: {
    type: Number
  },
  labelPosition: {
    type: String,
    default: 'left'
  },
  required: {
    type: Boolean,
    default: false
  }
})

</script>
<script>
export default {
  name: 'UvCell'
}
</script>
