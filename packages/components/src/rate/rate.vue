<template>
  <div
    class="uv-rate"
    :style="{gap:gutter+'px'}"
  >
    <template
      v-for="item in count"
      :key="item"
    >
      <uv-icon
        @click="itemClick(item)"
        :size="size"
        :name="icon"
        :color="item <=modelValue? color:voidColor"
      />
    </template>
  </div>
</template>

<script setup>

import uvIcon from '../icon'
const props = defineProps({
  modelValue: {
    type: Number
  },
  count: {
    type: Number,
    default: 5
  },
  gutter: {
    type: Number,
    default: 2
  },
  readonly: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: 'star-fill'
  },
  size: {
    type: [String, Number],
    default: 22
  },
  color: {
    type: String,
    default: '#ffd21e'
  },
  voidColor: {
    type: String,
    default: '#c8c9cc'
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const itemClick = (item) => {
  if (props.readonly) return
  emit('update:modelValue', item)
  emit('change', item)
}
</script>
<script>
export default {
  name: 'UvRate'
}
</script>
<style lang="scss">
.uv-rate {
  display: flex;
}
</style>
