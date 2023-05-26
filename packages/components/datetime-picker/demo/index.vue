<template>
  <div>
    <demoBlock title="年月日(date)">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value }}
      </div>
      <uv-button @click="openPicker">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef"
        v-model="value"
        title="日期选择"
      />
    </demoBlock>
    <demoBlock title="年月(year-month)">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value1 }}
      </div>
      <uv-button @click="openPicker1">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef1"
        v-model="value1"
        title="选择年月"
        mode="year-month"
      />
    </demoBlock>
    <demoBlock title="时间(time)">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value2 }}
      </div>
      <uv-button @click="openPicker2">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef2"
        v-model="value2"
        title="选择时间"
        mode="time"
      />
    </demoBlock>
    <demoBlock title="完整时间(datetime)">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value3 }}
      </div>
      <uv-button @click="openPicker3">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef3"
        v-model="value3"
        title="选择日期时间"
        mode="datetime"
      />
    </demoBlock>
    <demoBlock title="格式化">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value4 }}
      </div>
      <uv-button @click="openPicker4">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef4"
        v-model="value4"
        title="日期选择"
        :formatter="formatter"
      />
    </demoBlock>
    <demoBlock title="过滤选项">
      <div style="margin-bottom: 10px;font-size: 14px;">
        当前值：{{ value5 }}
      </div>
      <uv-button @click="openPicker5">
        打开picker
      </uv-button>
      <uvDatetimePicker
        round
        ref="uvdateRef5"
        v-model="value5"
        title="日期选择"
        :filter="filter"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvDatetimePicker, uvButton } from 'uv-ui'
import { ref } from 'vue'
const uvdateRef = ref(null)
const uvdateRef1 = ref(null)
const uvdateRef2 = ref(null)
const uvdateRef3 = ref(null)
const uvdateRef4 = ref(null)
const uvdateRef5 = ref(null)
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const openPicker = () => uvdateRef.value.open()
const openPicker1 = () => uvdateRef1.value.open()
const openPicker2 = () => uvdateRef2.value.open()
const openPicker3 = () => uvdateRef3.value.open()
const openPicker4 = () => uvdateRef4.value.open()
const openPicker5 = () => uvdateRef5.value.open()

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

const filter = (type, options) => {
  if (type === 'month') {
    return options.filter((option) => Number(option.value) % 6 === 0)
  }
  return options
}

</script>

<style lang="scss" scoped>

</style>
