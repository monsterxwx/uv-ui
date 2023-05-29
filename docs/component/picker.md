<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('picker')
})

</script>

## 基本使用

通过绑定ref拿到 `open` 方法打开，使用 `close` 手动关闭

通过 `v-model` 绑定值，通过 `title` 修改标题，通过 `list` 绑定显示的列表

通过 `keyName` 确定value值，默认为 `value` ,通过 `labelName` 确定显示的值，默认为 `label`，通过 `change` 事件监听值改变

```vue
<template>
  <uv-picker
    round
    ref="pickerRef"
    v-model="value"
    title="标题"
    :list="list"
    key-name="value"
    label-name="value"
    @change="change"
  />
</template>

<script setup>
import { ref } from "vue"

const pickerRef = ref(null)
const value = ref("")
const list = ref(
  [
    { value: '杭州' },
    { value: '宁波' },
    { value: '温州' },
    { value: '肇庆' },
    { value: '湖州' },
    { value: '广州' }
  ])

const openPicker = () => {
  pickerRef.value.open()
}

function change(value) {
  console.log(value)
}
</script>
```

## 多列选择

通过传入多维数组实现多列选择

```vue
<template>
<uv-picker
  round
  ref="pickerRef1"
  v-model="value1"
  title="标题"
  :list="list1"
/>
</template>

<script setup>
import { ref } from "vue"

const pickerRef1 = ref(null)
const value1 = ref("")

const openPicker = () => {
  pickerRef1.value.open()
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

</script>
```

## 级联选择

数组格式带有 `children` 字段开启级联选择，可以通过 `childrenName`属性 修改默认的 `children` 字段 

```vue
<template>
<uv-picker
  round
  ref="pickerRef2"
  v-model="value2"
  title="标题"
  :list="list2"
/>
</template>

<script setup>
import { ref } from "vue"

const pickerRef2 = ref(null)

const openPicker = () => {
  pickerRef2.value.open()
}

const value2 = ref("")
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
```

## props

| 属性         |      含义      |  类型  |     默认值 |
| ------------ | :------------: | :----: | ---------: |
| modelValue   |  双向绑定的值  | String |          - |
| title        |      标题      | String |          - |
| leftName     | 左边按钮的名字 | String |     '取消' |
| rightName    | 右边按钮的名字 | String |     '确定' |
| list         |    渲染列表    | Array  |          - |
| keyName      |  绑定的字段名  | String |    'value' |
| labelName    |  显示的字段名  | String |    'label' |
| childrenName |  子项的字段名  | String | 'children' |

## events

| 事件名称 |    含义    |       参数 |
| -------- | :--------: | ---------: |
| change   | 选项改变时 | 当前的子项 |
| cancle   | 点击取消时 |          - |
| confim   | 点击确定时 |          - |

## css 变量

```css
  --uv-picker-title-btn-font-size: 14px;
  --uv-picker-title-font-size: 16px;
  --uv-picker-title-font-weight: 700;
  --uv-picker-title-color: #323233;
  --uv-picker-title-padding: 2px 0 12px;
  --uv-picker-title-left-text-color: #969799;
  --uv-picker-title-right-text-color: #576b95;
  --uv-picker-content-height: 230px;
  --uv-picker-content-wrapper-border-top-and-bottom: 1px solid #f7f8f9;
  --uv-picker-content-wrapper-box-shadow: 0 0 5px #f7f8f9;
```
