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
<style lang="scss">
:root {
  --uv-cell-after-right: 15px;
  --uv-cell-after-left: 15px;
  --uv-cell-after-border-bottom: 1px solid #f5f6f7;
  --uv-cell-clickable-bg-color: #f2f3f5;
  --uv-cell-content-padding: 10px 16px;
  --uv-cell-content-title-margin-right: 20px;
  --uv-cell-content-value-color: #969799;
  --uv-cell-content-value-slot-text-align: right;
  --uv-cell-content-justify-content: space-between;
  --uv-cell-tips-color: #ee0a24;
  --uv-cell-tips-font-size: 13px;
}
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

    // align-items: center;
    padding: var(--uv-cell-content-padding);
    .uv-cell-content-title {
      margin-right: var(--uv-cell-content-title-margin-right);
      font-size: 14px;
      white-space: nowrap;
      line-height: 24px;
    }
    .uv-cell-content-title-required {
      position: relative;
      &::before {
        position: absolute;
        left: -8px;
        color: #f67979;
        line-height: 24px;
        content: "*";
      }
    }
    .uv-cell-content-value-wrap {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-direction: column;
      .uv-cell-content-value {
        position: relative;
        display: flex;
        white-space: wrap;
        color: var(--uv-cell-content-value-color);
        line-height: 24px;
        .uv-cell-content-value-slot {
          flex: 1;
          text-align: var(--uv-cell-content-value-slot-text-align);
        }
        .uv-cell-arrow {
          position: absolute;
          right: 0;
        }
      }
      .uv-cell-tips {
        position: relative;
        display: flex;
        font-size: var(--uv-cell-tips-font-size);
        color: var(--uv-cell-tips-color);
        line-height: 24px;
      }
      .cell-tips-enter-active,
      .cell-tips-leave-active {
        transition: all 0.3s;
      }
      .cell-tips-enter-from,
      .cell-tips-leave-to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
  }
  .uv-cell-content-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .uv-cell-content-right {
    text-align: right;
  }
}
</style>
