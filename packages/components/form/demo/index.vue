<template>
  <div>
    <demoBlock title="基本使用">
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

        <uv-form-item
          label="无边框"
          prop="input1"
        >
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
          prop="test1"
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
        <uv-form-item
          label="开关"
          prop="test2"
        >
          <uv-switch
            size="20"
            v-model="formInfo.test2"
          />
        </uv-form-item>
        <uv-form-item
          label="步进器"
          prop="test3"
        >
          <uv-stepper v-model="formInfo.test3" />
        </uv-form-item>
        <uv-form-item
          label="评分"
          prop="test4"
        >
          <uv-rate v-model="formInfo.test4" />
        </uv-form-item>
        <uv-form-item
          label="选择器"
          prop="currentValue"
          arrow
          clickable
        >
          <div
            @click="openPicker=true"
          >
            {{ formInfo.currentValue||'请选择地点' }}
          </div>
          <uv-picker
            v-model:show="openPicker"
            v-model="formInfo.currentValue"
            title="地点选择"
            :list="list"
            key-name="value"
          />
        </uv-form-item>
        <uv-form-item
          label="单选框"
          prop="radioselect"
        >
          <uv-radio-group
            v-model="formInfo.radioselect"
          >
            <uv-radio label="test1" />
            <uv-radio label="test2" />
            <uv-radio label="test3" />
            <uv-radio label="test4" />
            <uv-radio label="test5" />
          </uv-radio-group>
        </uv-form-item>
        <uv-form-item
          label="多选框"
          prop="select"
        >
          <uv-checkbox-group
            v-model="formInfo.select"
            shape="square"
          >
            <uv-checkbox label="test1" />
            <uv-checkbox label="test2" />
            <uv-checkbox label="test3" />
            <uv-checkbox label="test4" />
            <uv-checkbox label="test5" />
          </uv-checkbox-group>
        </uv-form-item>
      </uv-form>
      <uv-button
        style="margin-top: 10px;padding: 0 10px;"
        type="success"
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
        清空验证
      </uv-button>
      <uv-button
        style="margin-top: 10px;padding: 0 10px;"
        type="error"
        block
        @click=" resetFields"
      >
        重置数据
      </uv-button>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvForm, uvFormItem, uvButton, uvInput, uvSlider, uvSwitch, uvStepper, uvCheckbox, uvCheckboxGroup, uvRadio, uvRadioGroup, uvPicker, uvRate } from 'uv-ui'
import { reactive, ref } from 'vue'

const formInfo = reactive({
  input: '11',
  input1: '222',
  textarea: '333',
  test1: 50,
  test2: false,
  test3: 5,
  test4: 3,
  radioselect: 'test1',
  select: [],
  currentValue: ''
})

const checkNum = (value) => {
  if (value.length >= 5 && value.length <= 14) {
    return true
  } else {
    return false
  }
}
const checkNum1 = (value) => {
  console.log('value', value)
  if (value >= 20 && value <= 70) {
    return true
  } else {
    return false
  }
}

const openPicker = ref(false)

const list = ref([{ key: 1, value: '杭州' }, { key: 2, value: '宁波' }, { key: 3, value: '温州' }, { key: 3, value: '肇庆' }, { key: 3, value: '湖州' }, { key: 3, value: '广州' }])

const rules = reactive({
  input: [
    {
      required: true,
      message: '此项必填！！！',
      trigger: 'blur'
    },
    // 自定义校验
    {
      validator: checkNum,
      message: '请输入长度在5~14之间',
      trigger: 'change'
    }
  ],
  textarea: [
    {
      required: true,
      message: '该项必填哦'
    }
  ],
  test1: [
    {
      validator: checkNum1,
      message: '选择范围在20-70之间',
      trigger: 'change'
    }
  ],
  currentValue: [
    {
      validator: (value) => {
        if (['广州', '温州'].includes(value)) {
          return true
        }
        return false
      },
      message: '只能选择广州或温州',
      trigger: 'blur'
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
const resetFields = () => {
  formRef.value.resetFields()
}
</script>

<style lang="scss" scoped>

</style>
