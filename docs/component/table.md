<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('table')
})

</script>

## 基本使用


```vue
<template>
  <div>
    <uv-table
      :data="tableData"
      :columns="columns"
    >
      <template #Date="scope">
        <uv-button
          type="warning"
          size="mini"
        >
          {{ scope.data.title }}
        </uv-button>
      </template>
      <template #name="scope">
        <uv-button
          type="primary"
          size="mini"
        >
          {{ scope.data }}
        </uv-button>
      </template>
    </uv-table>
    <div class="title">
      标题
    </div>
    <div class="tip">
      通过<span class="code">shape</span> 设置
    </div>
  </div>
</template>

<script setup>
const columns = [
  {
    title: 'Date',
    prop: 'date',
    titleSlot: 'Date'
  }, {
    title: 'Name',
    prop: 'name'
  }, {
    title: 'State',
    prop: 'state'
  }, {
    title: 'Zip',
    prop: 'zip'
  }
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-11',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-31',
    name: 'Tom',
    state: 'California',
    zip: 'CA 90036'
  }
]
</script>
```


 ## props

| 属性    |     含义     | 类型  | 默认值 |
| ------- | :----------: | :---: | -----: |
| data    |   表格数据   | Array |      - |
| columns | 表格列表配置 | Array |      - |

## events


## css变量

```css

```