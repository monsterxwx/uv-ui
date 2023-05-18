<template>
  <div class="uv-skeleton">
    <div v-if="loading" class="uv-skeleton-content" :class="[animate?'uv-skeleton-animate':'']">
      <slot name="template">
        <uvSkeletonAvatar :avatar-shape="avatarShape" v-if="avatar" />
        <div class="uv-skeleton-content-right">
          <uvSkeletonTitle :round="round" v-if="title" :title-width="titleWidth" />
          <uvSkeletonParagraph
            :round="round"
            v-for="(item,index) in Array(row).fill('')"
            :key="index"
            :row-width="addUnit(getRowWidth(index))"
          />
        </div>
      </slot>
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script setup>
import uvSkeletonParagraph from '../skeleton-paragraph'
import uvSkeletonTitle from '../skeleton-title'
import uvSkeletonAvatar from '../skeleton-avatar'
import { addUnit } from '../../utils'

const DEFAULT_LAST_ROW_WIDTH = '60%'

const props = defineProps({
  row: {
    type: Number,
    default: 0
  },
  title: {
    type: Boolean,
    default: false
  },
  titleWidth: {
    type: String,
    default: '40%'
  },
  animate: {
    type: Boolean,
    default: true
  },
  round: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: Boolean,
    default: false
  },
  avatarShape: {
    type: String,
    default: 'round' // round square
  },
  rowWidth: {
    type: [Number, String, Array],
    default: '100%'
  },
  loading: {
    type: Boolean,
    default: true
  }
})

const getRowWidth = (index) => {
  const { rowWidth } = props

  if (rowWidth === '100%' && index === +props.row - 1) {
    return DEFAULT_LAST_ROW_WIDTH
  }

  if (Array.isArray(rowWidth)) {
    return rowWidth[index]
  }

  return rowWidth
}

</script>
<script>
export default {
  name: 'UvSkeleton'
}
</script>

<style lang="scss">
:root {
  --uv-skeleton-duration: 1.2s;
  --uv-skeleton-border-radius: 999px;
  --uv-skeleton-blink-opacity: 0.6;
}
.uv-skeleton {
  .uv-skeleton-content {
    display: flex;
    .uv-skeleton-content-right {
      flex: 1 0;
    }
  }
  &-animate {
    animation:
      uv-skeleton-blink var(--uv-skeleton-duration) ease-in-out
      infinite;
  }
}

@keyframes uv-skeleton-blink {
  50% {
    opacity: var(--uv-skeleton-blink-opacity);
  }
}

</style>
