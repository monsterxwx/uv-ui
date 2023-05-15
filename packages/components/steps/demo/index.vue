<template>
  <div>
    <demoBlock title="基本使用">
      <uv-steps
        v-model="active"
        @change="changeAc"
      >
        <uv-steps-item>检查单信息</uv-steps-item>
        <uv-steps-item>整改信息</uv-steps-item>
        <uv-steps-item>复查信息</uv-steps-item>
        <uv-steps-item>处罚决定</uv-steps-item>
      </uv-steps>
    </demoBlock>
    <demoBlock title="禁止点击">
      <uv-steps
        :is-able-click="false"
        v-model="active1"
      >
        <uv-steps-item>检查单信息</uv-steps-item>
        <uv-steps-item>整改信息</uv-steps-item>
        <uv-steps-item>复查信息</uv-steps-item>
        <uv-steps-item>处罚决定</uv-steps-item>
      </uv-steps>
      <div style="margin-top: 10px;">
        <uv-button @click="change">
          下一步
        </uv-button>
      </div>
    </demoBlock>
    <demoBlock title="自定义图标">
      <uv-steps
        v-model="active2"
      >
        <uv-steps-item title="检查单信息">
          <template #icon>
            <uv-icon
              size="16"
              :color="active2>=0?'#0078d4':'#666'"
              name="arrow-right"
            />
          </template>
        </uv-steps-item>
        <uv-steps-item title="整改信息">
          <template #icon>
            <uv-icon
              size="16"
              name="success"
              :color="active2>=1?'#0078d4':'#666'"
            />
          </template>
        </uv-steps-item>
        <uv-steps-item title="复查信息">
          <template #icon>
            <uv-icon
              size="16"
              name="love-fill"
              :color="active2>=2?'#0078d4':'#666'"
            />
          </template>
        </uv-steps-item>
        <uv-steps-item title="处罚决定">
          <template #icon>
            <uv-icon
              size="16"
              name="star-fill"
              :color="active2>=3?'#0078d4':'#666'"
            />
          </template>
        </uv-steps-item>
      </uv-steps>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSteps, uvStepsItem, uvButton, uvIcon } from 'uv-ui'
import { ref } from 'vue'

const active = ref(0)
const active1 = ref(0)
const active2 = ref(0)

const changeAc = (idx) => {
  console.log(idx)
}

const change = () => {
  active1.value++
  if (active1.value > 3) {
    active1.value = 0
  }
}
</script>

<style lang="scss" scoped>

</style>
