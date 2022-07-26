<template>
  <div
    :class="uvClass"
    :style="{backgroundColor:bgColor,fontSize:size+'px',borderRadius:radius}"
  >
    <div
      class="cell"
      :style="{border:noBorder?'none':''}"
    >
      <div class="cell-title">
        <slot name="title">
          <span
            v-if="icon!==''"
            style="margin-right: 5px;"
          ><svgIcon
            :name="icon"
            :color="iconColor"
            :icon-size="iconSize"
          /></span> {{ title }}
        </slot>
      </div>
      <div class="cell-value">
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
  </div>
</template>

<script setup>
import svgIcon from '@/components/svgIcon'
import { computed } from 'vue'
const props = defineProps({
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
  noBorder: {
    type: Boolean,
    default: false
  },
  size: {
    type: [String, Number],
    default: '14'
  },
  card: {
    type: Boolean,
    default: false
  },
  radius: {
    type: String,
    default: ''
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
  }
})
const uvClass = computed(() => {
  return [
    'uv-cell',
    props.card ? 'card' : ''
  ]
})
</script>
<script>
export default {
  name: 'UvCell'
}
</script>

<style lang="scss" scoped>
.uv-cell {
  padding: 0 10px;
  .cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 1px solid #f5f6f7;
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
.card {
  margin: 0 auto;
  width: 95%;
  border-radius: 8px;
}

</style>
