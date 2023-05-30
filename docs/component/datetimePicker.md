<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('datetime-picker')
})

</script>

## 年月日(date)

`mode` 默认为 `date` ，通过 `v-model` 双向绑定数据，通过 `ref` 拿到 `open` 和 `close` 方法进行打开和关闭

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef"
      v-model="value"
      title="日期选择"
    />
</template>

<script setup>
const uvdateRef = ref(null)
const value = ref('')
</script>

```

## 年月(year-month)

将 `mode` 设置为 `year-month` 显示年月选择

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef1"
      v-model="value1"
      title="选择年月"
      mode="year-month"
    />
</template>

<script setup>
const uvdateRef1 = ref(null)
const value1 = ref('')
</script>

```

## 时间(time)

将 `mode` 设置为 `time` 显示时间选择

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef2"
      v-model="value2"
      title="选择时间"
      mode="time"
    />
</template>

<script setup>
const uvdateRef2 = ref(null)
const value2 = ref('')
</script>

```

## 完整时间(datetime)

将 `mode` 设置为 `datetime` 显示完整年月日时分

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef3"
      v-model="value3"
      title="选择日期时间"
      mode="datetime"
    />
</template>

<script setup>
const uvdateRef3 = ref(null)
const value3 = ref('')
</script>

```

## 格式化

通过传入 `formatter` 进行格式化

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef4"
      v-model="value4"
      title="日期选择"
      :formatter="formatter"
    />
</template>

<script setup>
const uvdateRef4 = ref(null)
const value4 = ref('')

const formatter = (type, option) => {
  if (type === 'year') {
    option.label += '年'
  }
  if (type === 'month') {
    option.label += '月'
  }
  if (type === 'day') {
    option.label += '日'
  }
  return option
}

</script>

```

## 过滤选项

通过传入 `filter` 进行过滤数据

```vue
<template>
    <uvDatetimePicker
      round
      ref="uvdateRef5"
      v-model="value5"
      title="日期选择"
      :filter="filter"
    />
</template>

<script setup>
const uvdateRef5 = ref(null)
const value5 = ref('')

const filter = (type, options) => {
  if (type === 'month') {
    return options.filter((option) => Number(option.value) % 6 === 0)
  }
  return options
}

</script>

```


## props

| 属性          |                                       含义                                        |   类型   |                   默认值 |
| ------------- | :-------------------------------------------------------------------------------: | :------: | -----------------------: |
| modelValue    |                                   双向绑定的值                                    |  String  |                        - |
| minDate       |                                  可选的最小时间                                   |   Date   |                   十年前 |
| maxDate       |                                  可选的最大时间                                   |   Date   |                   十年后 |
| mode          | 日期模式，datetime为完整日期 date为日期选择，time为时间选择，year-month为年月选择 |  String  |                   'date' |
| formatter     |                                    日期格式化                                     | Function | (type, option) => option |
| filter        |                                   日期数据过滤                                    | Function |                        - |
| dateConnector |                                  日期连接字符串                                   |  String  |                      '-' |
| timeConnector |                                  时间连接字符串                                   |  String  |                      ':' |

## events

| 事件名称 |    含义    |       参数 |
| -------- | :--------: | ---------: |
| change   | 选项改变时 | 当前的子项 |
| cancle   | 点击取消时 |          - |
| confim   | 点击确定时 |          - |

## css变量

```css
 
```
