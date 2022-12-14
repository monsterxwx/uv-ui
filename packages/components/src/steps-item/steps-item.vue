<template>
  <div
    class="uv-steps-item "

    @click="clickItem"
    ref="itemRef"
  >
    <div
      class="uv-steps-item-icon"
    >
      <slot name="icon">
        <div
          class="uv-steps-item-icon-default"
          :style="{borderColor:context.isActive?activeColor:inactiveColor}"
        />
      </slot>
    </div>

    <div
      class="uv-steps-item-text"
      :style="{color:context.isActive?activeColor:inactiveColor}"
    >
      <slot>{{ title }}</slot>
    </div>
    <div
      class="uv-steps-item-line"
      :style="{backgroundColor:context.lineActive?activeColor:''}"
    />
  </div>
</template>

<script setup>
import './index.scss'
import { ref, reactive, onMounted } from 'vue'
import { useParent } from '@uv-ui/hooks'

defineProps({
  title: {
    type: String
  }
})

const itemRef = ref(null)

const context = reactive({
  $el: itemRef,
  isActive: false,
  lineActive: false
})

const { props: parentProps, acitveItemUpdate, index } = useParent('steps', context)

onMounted(() => {
  if (parentProps.modelValue === index.value) {
    context.isActive = true
  }
})

const { activeColor, inactiveColor } = parentProps

const clickItem = () => {
  if (parentProps.isAbleClick) {
    acitveItemUpdate(index.value)
  }
}

</script>
<script>
export default {
  name: 'UvStepsItem'
}
</script>


