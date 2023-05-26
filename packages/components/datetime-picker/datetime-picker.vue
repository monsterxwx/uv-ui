<template>
  <uvPicker
    ref="uvPickerRef"
    title="日期选择"
    :list="columns"
    v-bind="$attrs"
    v-model="currentValue"
    @confim="confim"
    @cancle="cancle"
    @change="change"
    @column-change="columnsChange"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import uvPicker from '../picker'
import { getOptions, getCurrentTime, getMonthEndDay } from './utils.js'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  minDate: {
    type: Date,
    default: () => new Date(new Date().getFullYear() - 10, 0, 1)
  },
  maxDate: {
    type: Date,
    default: () => new Date(new Date().getFullYear() + 10, 11, 31)
  },
  // datetime为完整日期 date为日期选择，time为时间选择，year-month为年月选择
  mode: {
    type: String,
    default: 'date'
  },
  formatter: {
    type: Function,
    default: (type, option) => option
  },
  filter: {
    type: Function
  },
  dateConnector: {
    type: String,
    default: '-'
  },
  timeConnector: {
    type: String,
    default: ':'
  }
})

const emit = defineEmits(['update:modelValue', 'cancle', 'confim', 'change'])

const uvPickerRef = ref(null)

const open = () => uvPickerRef.value.open()

const close = () => uvPickerRef.value.close()

const cancle = () => emit('cancle')

const change = (e) => emit('change', e)

const confim = (e) => {
  if (props.mode === 'time') {
    emit('update:modelValue', e.replace(/,/g, props.timeConnector))
  } else if (props.mode === 'date' || props.mode === 'year-month') {
    emit('update:modelValue', e.replace(/,/g, props.dateConnector))
  } else if (props.mode === 'datetime') {
    const timeArr = e.split(',')
    const date = timeArr.slice(0, 3).join(props.dateConnector)
    const time = timeArr.slice(3).join(props.timeConnector)
    emit('update:modelValue', `${date} ${time}`)
  } else {
    emit('update:modelValue', e)
  }
  emit('confim', e)
}

const currentValue = ref(props.modelValue || getCurrentTime(props.mode))

const curYear = ref(currentValue.value.slice(0, 4))
const curMonth = ref(currentValue.value[1])
const columnsChange = (e) => {
  if (props.mode === 'date' || props.mode === 'datetime') {
    if (e.index === 0) {
      curYear.value = e.value
    } else if (e.index === 1) {
      curMonth.value = e.value
    }
  }
}

const getYearOptions = () => {
  const minYear = props.minDate.getFullYear()
  const maxYear = props.maxDate.getFullYear()
  return getOptions(
    minYear,
    maxYear,
    'year',
    props.formatter,
    props.filter
  )
}

const getMonthOptions = () => {
  const minMonth = 1
  const maxMonth = 12

  return getOptions(
    minMonth,
    maxMonth,
    'month',
    props.formatter,
    props.filter
  )
}

const getDayOptions = () => {
  const minDate = 1
  const maxDate = getMonthEndDay(curYear.value, curMonth.value)
  return getOptions(minDate, maxDate, 'day', props.formatter, props.filter)
}

const getHoursOptions = () => {
  const minHours = 0
  const maxHours = 23
  return getOptions(minHours, maxHours, 'hours', props.formatter, props.filter)
}
const getMinutesOptions = () => {
  const minMinutes = 0
  const maxMinutes = 59
  return getOptions(minMinutes, maxMinutes, 'minutes', props.formatter, props.filter)
}

const columns = computed(() => {
  if (props.mode === 'date') {
    return [getYearOptions(), getMonthOptions(), getDayOptions()]
  } else if (props.mode === 'year-month') {
    return [getYearOptions(), getMonthOptions()]
  } else if (props.mode === 'time') {
    return [getHoursOptions(), getMinutesOptions()]
  } else if (props.mode === 'datetime') {
    return [getYearOptions(), getMonthOptions(), getDayOptions(), getHoursOptions(), getMinutesOptions()]
  }
  return []
})

defineExpose({
  open,
  close
})
</script>
<script>
export default {
  name: 'UvDatetimePicker'
}
</script>

<style lang="scss">

</style>
