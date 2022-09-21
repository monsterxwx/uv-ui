<template>
  <div>
    <uv-form
      :model="formInfo"
      label-width="80px"
      card
      gap
    >
      <uv-form-item label="描述文本">
        <div>无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。</div>
      </uv-form-item>
      <uv-form-item
        label="滑块"
      >
        <uv-slider
          style="width: 200px;"
          v-model="formInfo.test1"
        />
      </uv-form-item>
      <uv-form-item label="开关">
        <uv-switch v-model="formInfo.test2" />
      </uv-form-item>
      <uv-form-item label="步进器">
        <uv-stepper v-model="formInfo.test3" />
      </uv-form-item>
      <uv-form-item label="评分">
        <uv-rate v-model="formInfo.test4" />
      </uv-form-item>
      <uv-form-item
        label="选择器"
        arrow
        clickable
      >
        <div>请选择人员</div>
      </uv-form-item>
      <uv-form-item
        label="箭头位置"
        arrow
        arrow-direction="down"
        clickable
      >
        <div>请选择人员</div>
      </uv-form-item>
    </uv-form>

    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formInfo = reactive({
  test1: 4,
  test2: false,
  test3: 1,
  test4: 3
})
</script>

<style lang="scss" scoped>

</style>
