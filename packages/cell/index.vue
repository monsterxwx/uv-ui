<template>
  <div
    class="uv-cell"

    :style="{backgroundColor:bgColor,fontSize:size+'px'}"
  >
    <div
      class="uv-cell-content"
      :class="clickable?'uv-cell-clickable':''"
    >
      <div class="uv-cell-content-title">
        <slot name="title">
          <span
            v-if="icon!==''"
            style="margin-right: 5px;"
          ><svgIcon
            :name="icon"
            :color="iconColor"
            :size="iconSize"
          /></span> {{ title }}
        </slot>
      </div>
      <div class="uv-cell-content-value">
        <slot name="value">
          {{ value }} <span
            v-if="arrow"
            style="margin-left: 2px;"
          ><svgIcon
            :name="'arrow-'+arrowDirection"
            color="#9699a6"
          /></span>
        </slot>
      </div>
    </div>

    <div
      v-if="tips"
      class="uv-cell-tips"
    >
      <slot name="tips" />
    </div>
  </div>
</template>

<script setup>
import svgIcon from '@/components/svgIcon'
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
  clickable: {
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

<style lang="scss" scoped>
.uv-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &::after {
    position: absolute;
    right: 15px;
    bottom: 0;
    left: 15px;
    border-bottom: 1px solid #f5f6f7;
    content: "";
    pointer-events: none;

    // transform: scaleY(0.5);
  }
  &:last-child::after {
    display: none;
  }
  .uv-cell-clickable {
    &:active {
      background-color: #f2f3f5;
    }
  }
  .uv-cell-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    &-title {
      margin-right: 20px;
      white-space: nowrap;
    }
    &-value {
      white-space: wrap;
      color: #969799;
    }
  }
}
.uv-cell-tips {
  display: flex;
  margin-left: 96px;
}
</style>
