<template>
  <div>
    <demoBlock title="基本使用">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value }}
      </div>
      <uv-button @click="openPicker">
        打开picker
      </uv-button>
      <uv-picker
        round
        ref="pickerRef"
        v-model="value"
        title="标题"
        :list="list"
        label-name="value"
        @change="change"
      />
    </demoBlock>
    <demoBlock title="多列选择">
      {{ value1 }}
      <uv-button @click="openPicker1">
        打开picker
      </uv-button>
      <uv-picker
        round
        ref="pickerRef1"
        v-model="value1"
        title="标题"
        :list="list1"
        label-name="value"
      />
    </demoBlock>
    <demoBlock title="级联选择">
      {{ value2 }}
      <uv-button @click="openPicker2">
        打开picker
      </uv-button>
      <uv-picker
        round
        ref="pickerRef2"
        v-model="value2"
        title="标题"
        :list="list2"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPicker, uvButton } from 'uv-ui'
import { ref } from 'vue'

const pickerRef = ref(null)
const pickerRef1 = ref(null)
const pickerRef2 = ref(null)
const openPicker = () => {
  pickerRef.value.open()
}

const openPicker1 = () => {
  pickerRef1.value.open()
}
const openPicker2 = () => {
  pickerRef2.value.open()
}
const value = ref('温州')
const value1 = ref('')
const value2 = ref('')
// const value2 = ref('浙江,温州,瓯海区')
// const value2 = ref('福建,厦门,海沧区')
const list = ref(
  [
    { value: '杭州' },
    { value: '宁波' },
    { value: '温州' },
    { value: '肇庆' },
    { value: '湖州' },
    { value: '广州' }
  ])
function change (value) {
  console.log(value)
}

const list1 = ref(
  [
    [
      { value: '星期一' },
      { value: '星期二' },
      { value: '星期三' },
      { value: '星期四' },
      { value: '星期五' },
      { value: '星期六' },
      { value: '星期日' }
    ],
    [
      { value: '早上' },
      { value: '中午' },
      { value: '晚上' }
    ]
  ])

const list2 = [
  {
    label: '浙江',
    value: '浙江',
    children: [
      {
        label: '杭州',
        value: '杭州',
        children: [
          { label: '西湖区', value: '西湖区' },
          { label: '余杭区', value: '余杭区' }
        ]
      },
      {
        label: '温州',
        value: '温州',
        children: [
          { label: '鹿城区', value: '鹿城区' },
          { label: '瓯海区', value: '瓯海区' }
        ]
      }
    ]
  },
  {
    label: '福建',
    value: '福建',
    children: [
      {
        label: '福州',
        value: '福州',
        children: [
          { label: '鼓楼区', value: '鼓楼区' },
          { label: '台江区', value: '台江区' }
        ]
      },
      {
        label: '厦门',
        value: '厦门',
        children: [
          { label: '思明区', value: '思明区' },
          { label: '海沧区', value: '海沧区' }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped>

</style>
