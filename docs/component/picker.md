<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('picker')
})

</script>

## 基本使用

通过 `v-model:show` 控制是否显示，通过 `v-model` 绑定值，通过 `title` 修改标题，通过 `list` 绑定显示的列表，通过 `keyName` 控制显示的字段

```vue
<template>
  <uv-picker
    round
    v-model:show="openPicker"
    v-model="value"
    title="标题"
    :list="list"
    key-name="value"
    @change="change"
  />
</template>

<script setup>
import { ref } from "vue";
const openPicker = ref(false);
const value = ref("");
const list = ref([
  { key: 1, value: "杭州" },
  { key: 2, value: "宁波" },
  { key: 3, value: "温州" },
  { key: 3, value: "肇庆" },
  { key: 3, value: "湖州" },
  { key: 3, value: "广州" },
]);
function change(value) {
  console.log(value);
}
</script>
```

## props

| 属性       |       含义       |  类型   | 默认值 |
| ---------- | :--------------: | :-----: | -----: |
| show       | 双向绑定是否显示 | Boolean |  false |
| modelValue |   双向绑定的值   | String  |      - |
| title      |       标题       | String  |      - |
| leftName   |  左边按钮的名字  | String  | '取消' |
| rightName  |  右边按钮的名字  | String  | '确定' |
| list       |     渲染列表     |  Array  |      - |
| keyName    |   显示的字段名   | String  |      - |

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
--uv-picker-content-item-font-size: 16px;
```
