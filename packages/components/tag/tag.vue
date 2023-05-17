<template>
  <Transition name="tag-face">
    <div
      v-show="show"
      class="uv-tag"
      :style="{backgroundColor:bgColor,color:color}"
      :class="[
        type,
        plain?'uv-tag-plain':'',
        round?'uv-tag-round':'',
        mark?'uv-tag-mark':'',
        size==='medium'?'uv-tag-medium':'',
        size==='large'?'uv-tag-large':''
      ]"
    >
      <slot />
      <div class="uv-tag-close" v-if="closeable" @click="handleClose">
        <uvIcon name="close" size="12" :color="color?color:'#fff'" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import uvIcon from '../icon'
defineProps({
  show: {
    type: Boolean,
    default: true
  },
  closeable: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'primary' // primary success danger warning
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  mark: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'mini' // mini medium large
  },
  bgColor: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>
<script>
export default {
  name: 'UvTag'
}
</script>

<style lang="scss">
:root {
  --uv-tag-primary-color: #1989fa;
  --uv-tag-success-color: #07c160;
  --uv-tag-danger-color: #ee0a24;
  --uv-tag-warning-color: #ff976a;
  --uv-tag-plain-bg-color: #ffffff;
  --uv-tag-mini-padding: 0 4px;
  --uv-tag-mini-font-size: 12px;
  --uv-tag-medium-padding: 2px 6px;
  --uv-tag-large-padding: 4px 8px;
  --uv-tag-large-font-size: 14px;
  --uv-tag-line-height: 1.5;
  --uv-tag-border-radius: 0;
  --uv-tag-round-border-radius: 999px;
  --uv-tag-transition-time: 0.3s;
  --uv-tag-text-color: #ffffff;
}
.uv-tag {
  display: inline-block;
  align-items: center;
  padding: var(--uv-tag-mini-padding);
  font-size: var(--uv-tag-mini-font-size);
  border-radius: var(--uv-tag-border-radius);
  color: var(--uv-tag-text-color);
  line-height: var(--uv-tag-line-height);
  transition: opacity var(--uv-tag-transition-time);
  &.primary {
    background-color: var(--uv-tag-primary-color);
    &.uv-tag-plain {
      color: var(--uv-tag-primary-color);
    }
  }
  &.success {
    background-color: var(--uv-tag-success-color);
    &.uv-tag-plain {
      color: var(--uv-tag-success-color);
    }
  }
  &.danger {
    background-color: var(--uv-tag-danger-color);
    &.uv-tag-plain {
      color: var(--uv-tag-danger-color);
    }
  }
  &.warning {
    background-color: var(--uv-tag-warning-color);
    &.uv-tag-plain {
      color: var(--uv-tag-warning-color);
    }
  }
  &.uv-tag-plain {
    border: 1px solid currentcolor;
    background: var(--uv-tag-plain-bg-color);
  }
  &.uv-tag-round {
    border-radius: var(--uv-tag-round-border-radius);
  }
  &.uv-tag-mark {
    border-radius: 0 var(--uv-tag-round-border-radius) var(--uv-tag-round-border-radius) 0;
    &::after {
      content: "";
      display: inline-block;
      width: 1px;
    }
  }
  &.uv-tag-medium {
    padding: var(--uv-tag-medium-padding);
  }
  &.uv-tag-large {
    padding: var(--uv-tag-large-padding);
    font-size: var(--uv-tag-large-font-size);
  }
  .uv-tag-close {
    display: inline-flex;
  }
}
.tag-face-leave-to {
  opacity: 0;
}

</style>
