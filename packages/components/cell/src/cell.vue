<template>
  <div
    class="uv-cell"

    :style="{backgroundColor:bgColor,fontSize:size+'px'}"
  >
    <div
      class="uv-cell-content"
      :class="clickable?'uv-cell-clickable':''"
    >
      <div
        class="uv-cell-content-title"
        :style="{width:labelWidth}"
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
import uvIcon from '../../icon/src/icon.vue'
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
  },
  labelWidth: {
    type: String
  }
})

</script>
<script>
export default {
  name: 'UvCell'
}
</script>

<style>
:root {
  --uv-cell-after-right: 15px;
  --uv-cell-after-left: 15px;
  --uv-cell-after-border-bottom: 1px solid #f5f6f7;
  --uv-cell-clickable-bg-color: #f2f3f5;
  --uv-cell-content-padding: 10px 15px;
  --uv-cell-content-title-margin-right: 20px;
  --uv-cell-content-value-color: #969799;
  --uv-cell-content-justify-content: space-between;
  --uv-cell-tips-margin-left: 96px;
}
</style>

<style lang="scss" scoped>
.uv-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &::after {
    position: absolute;
    right: var(--uv-cell-after-right);
    bottom: 0;
    left: var(--uv-cell-after-left);
    border-bottom: var(--uv-cell-after-border-bottom);
    content: "";
    pointer-events: none;

    // transform: scaleY(0.5);
  }
  &:last-child::after {
    display: none;
  }
  .uv-cell-clickable {
    &:active {
      background-color: var(--uv-cell-clickable-bg-color);
    }
  }
  .uv-cell-content {
    display: flex;
    justify-content: var(--uv-cell-content-justify-content);
    align-items: center;
    padding: var(--uv-cell-content-padding);
    .uv-cell-content-title {
      margin-right: var(--uv-cell-content-title-margin-right);
    }
    .uv-cell-content-value {
      position: relative;
      display: flex;
      white-space: wrap;
      color: var(--uv-cell-content-value-color);
      .uv-cell-content-value-slot {
        flex: 1;
      }
      .uv-cell-arrow {
        position: absolute;
        right: 0;
      }
    }
  }
}
.uv-cell-tips {
  display: flex;
  margin-left: var(--uv-cell-tips-margin-left);
}
</style>
