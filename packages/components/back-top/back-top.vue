<template>
  <Transition name="back-top">
    <div
      class="uv-back-top"
      v-show="isShow"
      ref="backtopRef"
      @click="handleClick"
    >
      <slot>
        <div class="uv-back-top-icon">
          <uv-icon
            name="bottom"
            :size="22"
            color="#fff"
          />
        </div>
      </slot>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import uvIcon from '../icon'
import { useScrollParent, useEventListener, useThrottle } from '../../hooks'
import { getScrollTop } from '../../utils'

const props = defineProps({
  immediate: {
    type: Boolean,
    default: false
  },
  offset: {
    type: Number,
    default: 200
  }
})

const emit = defineEmits(['click'])

const backtopRef = ref(null)

const isShow = ref(false)

const scrollParent = useScrollParent(backtopRef)

const handleClick = (event) => {
  emit('click', event)
  scrollParent.value?.scrollTo({
    top: 0,
    behavior: props.immediate ? 'auto' : 'smooth'
  })
}

const scroll = () => {
  isShow.value = scrollParent.value ? getScrollTop(scrollParent.value) >= +props.offset : false
}

useEventListener(scrollParent, 'scroll', useThrottle(scroll))

</script>
<script>
export default {
  name: 'UvBackTop'
}
</script>

<style lang="scss">
:root {
  --uv-back-top-bg-color: #1989fa;
  --uv-back-top-border-radius: 50%;
  --uv-back-top-transition-time: 0.3s;
  --uv-back-top-width: 40px;
  --uv-back-top-height: 40px;
  --uv-back-top-z-index: 100;
  --uv-back-top-position-right: 30px;
  --uv-back-top-position-bottom: 40px;
  --uv-back-top-transform: scale(0);
}
.uv-back-top {
  position: fixed;
  right: var(--uv-back-top-position-right);
  bottom: var(--uv-back-top-position-bottom);
  z-index: var(--uv-back-top-z-index);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--uv-back-top-width);
  height: var(--uv-back-top-height);
  border-radius: var(--uv-back-top-border-radius);
  background-color: var(--uv-back-top-bg-color);
  transition: transform var(--uv-back-top-transition-time);
  .uv-back-top-icon {
    transform: rotate(-180deg);
  }
}
.back-top-leave-to,
.back-top-enter-from {
  transform: var(--uv-back-top-transform);
}
</style>
