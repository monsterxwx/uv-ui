<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('action-sheet')
})

</script>

## 基本使用

通过 `v-model` 绑定选择的值 ，通过 `list` 传入需要显示的子项列表

```vue
<template>
    <uv-action-sheet
      v-model:show="show"
      v-model="value"
      :list="list"
    />
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const list = ref([
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
])
</script>
```

##  选项状态

通过 `color` 和 `disabled` 可以设置子项的字体颜色和是否为禁用状态

```vue
<template>
    <uv-action-sheet
      v-model:show="show"
      v-model="value"
      :list="list"
    />
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const list = ref([
  { name: '着色选项', color: '#ee0a24' },
  { name: '禁用选项', disabled: true },
  { name: '正常选项' }
])
</script>
```

## 展示取消按钮

通过 `cancelText`设置该属性后开启，并且设置取消按钮的名称

```html
<uv-action-sheet
  v-model:show="show2"
  v-model="value1"
  :list="list1"
  cancel-text="取消"
/>
```

 ## props

| 属性       |          含义          |  类型   | 默认值 |
| ---------- | :--------------------: | :-----: | -----: |
| show       |  双向绑定的显示和隐藏  | Boolean |  false |
| modelValue | 双向绑定的当前选中的值 | String  |      - |
| list       |        选项列表        |  Array  |      - |
| keyName    |    显示文字的字段名    | String  | 'name' |
| cancelText |     取消的文字名称     | String  |      - |

## events

| 事件名称 |    含义    |       参数 |
| -------- | :--------: | ---------: |
| change   | 选项改变时 | 当前的子项 |
| close    |   关闭时   |          - |

## css变量

```css
  --uv-action-sheet-item-bg-color: #ffffff;
  --uv-action-sheet-item-padding: 14px 16px;
  --uv-action-able-click-bg-color: #f2f3f5;
  --uv-action-cancle-item-margin-top: 10px;
```