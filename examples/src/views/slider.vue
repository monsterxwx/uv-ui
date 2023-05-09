<template>
  <div style="padding: 20px;">
    <uvSlider v-model="test1" />
    <uv-form
      :model="formInfo"
      :label-width="80"
      card
      gap
    >
      <uv-form-item label="滑块">
        <uv-slider style="width: 100%;" v-model="formInfo.test1" />
      </uv-form-item>
    </uv-form>
  </div>
</template>

<script setup>
import { uvSlider, uvForm, uvFormItem } from 'uv-ui'
import { ref, reactive } from 'vue'
const test1 = ref(22)

const formInfo = reactive({
  test1: 50
})
</script>

<style lang="scss" scoped>

</style>
