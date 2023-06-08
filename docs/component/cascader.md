<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('cascader')
})

</script>

## 基本使用

通过监听 `finish` 事件可以获取到最终选择的结果，通过绑定 `ref` 调用`open`可以打开弹框，弹框的标题通过 `popup-props` 透传

```vue
<template>
      <div> {{ currentData }}</div>
      <uvButton @click="open">
        打开
      </uvButton>
      <uvCascader
        ref="cascaderRef"
        :list="list"
        :popup-props="{title:'请选择数据'}"
        @finish="finish"
      />
</template>

<script setup>
import { uvButton, uvCascader, Toast } from 'uv-ui'
import { ref } from 'vue'

const cascaderRef = ref(null)

const open = () => {
  cascaderRef.value.open()
}

const finish = (e) => {
  console.log(e)
  currentData.value = e
}

const list = [
  {
    value: '1',
    label: 'Level1',
    children: [
      {
        value: '1-1',
        label: 'Level1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level1-1-1'
          }
        ]
      },
      {
        value: '1-2',
        label: 'Level1-2'
      },
      {
        value: '1-3',
        label: 'Level1-3'
      }
    ]
  },
  {
    value: '2',
    label: 'Level2',
    children: [
      {
        value: '2-1',
        label: 'Level2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level2-2-1'
          }
        ]
      }
    ]
  }
]
</script>
```

## 异步加载

通过 `change` 事件可以实现异步加载数据

```vue
<template>
      <uvButton @click="open1">
        打开
      </uvButton>
      <uvCascader
        ref="cascaderRef1"
        :list="list1"
        :popup-props="{title:'请选择数据'}"
        @change="change"
      />
</template>

<script setup>
import { uvButton, uvCascader, Toast } from 'uv-ui'
import { ref } from 'vue'

const cascaderRef1 = ref(null)

const open1 = () => {
  cascaderRef1.value.open()
}

const change = (e) => {
  const toast = Toast({
    message: '加载中',
    type: 'loading',
    duration: 0
  })
  setTimeout(() => {
    list1.value[0].children = [
      {
        value: '1-1',
        label: 'Level1-1'
      },
      {
        value: '1-2',
        label: 'Level1-2'
      },
      {
        value: '1-3',
        label: 'Level1-3'
      }
    ]

    toast.clear()
  }, 2000)
}

const list1 = ref([
  {
    value: '1',
    label: 'Level1',
    children: []
  }
])
</script>
```

## props

| 属性        |             含义             |  类型  |   默认值 |
| ----------- | :--------------------------: | :----: | -------: |
| popupProps  |       popup的props透传       | Object |       {} |
| tabProps    |        tab的props透传        | Object |       {} |
| list        |          渲染的列表          | Array  |       [] |
| labelKey    |   渲染的列表中显示的字段名   | String |    label |
| valueKey    |  渲染的列表中value的字段名   | String |    value |
| childrenKey | 渲染的列表中children的字段名 | String | children |
| placeholder |        tab选择的文字         | String | '请选择' |

## events

| 事件名称 |      含义      |                     参数 |
| -------- | :------------: | -----------------------: |
| finish   | 选择完成后触发 | 返回所选的value和label值 |
| change   |  选项改变触发  |        返回所选的value值 |
| close    |  关闭弹框触发  |                        - |

## css变量

```css
  --uv-cascader-height: 70vh;
  --uv-cascader-content-padding: 10px 0;
  --uv-cascader-content-item-padding: 10px 16px;
  --uv-cascader-content-item-font-size: 14px;
  --uv-cascader-content-item-color: #323233;
  --uv-cascader-content-item-acitve-bg-color: #f2f3f5;
```
