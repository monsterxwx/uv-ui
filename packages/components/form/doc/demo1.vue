<template>
  <div>
    <uv-form
      ref="formRef"
      :model="formInfo"
      :label-width="80"
      :rules="rules"
      card
      gap
    >
      <uv-form-item bg-color="#eee">
        <template #label>
          <div style="color: red;">
            表单标题
          </div>
        </template>
      </uv-form-item>
      <uv-form-item label="描述文本">
        <div>无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。</div>
      </uv-form-item>

      <uv-form-item label="无边框">
        <uv-input
          v-model="formInfo.input1"
        />
      </uv-form-item>
      <uv-form-item
        label="文本域"
        label-position="top"
        prop="textarea"
      >
        <uv-input
          type="textarea"
          border
          v-model="formInfo.textarea"
        />
      </uv-form-item>
      <uv-form-item
        label="滑块"
      >
        <uv-slider
          style="width: 100%;"
          v-model="formInfo.test1"
        />
      </uv-form-item>
      <uv-form-item
        label="输入框"
        prop="input"
      >
        <uv-input
          border
          v-model="formInfo.input"
        />
      </uv-form-item>
      <uv-form-item label="开关">
        <uv-switch
          size="20"
          v-model="formInfo.test2"
        />
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
        prop="select"
      >
        <div>
          请选择人员
        </div>
      </uv-form-item>
    </uv-form>
    <uv-button
      style="margin-top: 10px;padding: 0 10px;"
      type="primary"
      block
      @click="submit"
    >
      提交
    </uv-button>
    <uv-button
      style="margin-top: 10px;padding: 0 10px;"
      type="primary"
      block
      @click="clear"
    >
      重置
    </uv-button>
    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formInfo = reactive({
  input: '11',
  input1: '11',
  textarea: '',
  test1: 4,
  test2: false,
  test3: 1,
  test4: 3,
  select: ''
})
const rules = reactive({
  input: [
    {
      required: true,
      message: '此项必填！！！',
      trigger: 'blur'
    }
  ],
  textarea: [
    {
      required: true,
      message: '该项必填哦'
    }
  ],
  select: [
    {
      required: true,
      message: 'select没值'
    }
  ]
})

const formRef = ref(null)
const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('验证成功')
  } catch (error) {
    console.log('验证失败')
  }
}
const clear = () => {
  formRef.value.clearValidate()
}
</script>

<style lang="scss" scoped>

</style>
