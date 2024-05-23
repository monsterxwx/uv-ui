<template>
  <div class="uv-calendar">
    <div class="uv-calendar-header">
      <div class="uv-calendar-header-action">
        <div class="uv-calendar-pre" @click="MonthHandle(-1)">
          <uv-icon size="16" name="arrow-left" />
        </div>
        <div class="uv-calendar-title">
          {{ calendarProps.target.year+ '年' +Number(calendarProps.target.month+1) +'月' }}
        </div>
        <div class="uv-calendar-next" @click="MonthHandle(1)">
          <uv-icon size="16" name="arrow-right" />
        </div>
      </div>
      <div class="uv-calendar-header-week">
        <div class=" uv-calendar-header-week-item" v-for="item in dayNameList" :key="item.shortName">
          {{ item.chineseShortName }}
        </div>
      </div>
    </div>
    <div class="uv-calendar-content">
      <div
        v-for="item,index in calendarData"
        :key="index"
        class="uv-calendar-item"
        @click="selectItemHandle(item)"
      >
        <div
          :class="[
            item.dateType==='previous'||item.dateType==='next'?'uv-calendar-disabled':'',
            item.dateNumber ===calendarProps.target.date && !['previous','next'].includes(item.dateType)?'uv-calendar-selected':''
          ]"
          class="uv-calendar-item-label"
        >
          {{ item.dateNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import uvIcon from '../icon'
import { ref, reactive, onMounted } from 'vue'
const props = defineProps({
  modelValue: {
    type: Date
  }
})
const emits = defineEmits(['update:modelValue'])

// 最小年份
const MIN_YEAR = 1900

// 最大年份
const MAX_YEAR = 9999

// 目标日期
const targetDate = ref(props.modelValue)

// 有关月度的名称列表
const monthNameList = {
  chineseFullName: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  fullName: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  mmm: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
}
// 有关周几的名称列表
const dayNameList = [
  {
    chineseFullName: '周日',
    chineseShortName: '日',
    fullName: 'Sunday',
    shortName: 'Sun',
    dayNumber: 0
  },
  {
    chineseFullName: '周一',
    chineseShortName: '一',
    fullName: 'Monday',
    shortName: 'Mon',
    dayNumber: 1
  },
  {
    chineseFullName: '周二',
    chineseShortName: '二',
    fullName: 'Tuesday',
    shortName: 'Tue',
    dayNumber: 2
  },
  {
    chineseFullName: '周三',
    chineseShortName: '三',
    fullName: 'Wednesday',
    shortName: 'Wed',
    dayNumber: 3
  },
  {
    chineseFullName: '周四',
    chineseShortName: '四',
    fullName: 'Thursday',
    shortName: 'Thu',
    dayNumber: 4
  },
  {
    chineseFullName: '周五',
    chineseShortName: '五',
    fullName: 'Friday',
    shortName: 'Fri',
    dayNumber: 5
  },
  {
    chineseFullName: '周六',
    chineseShortName: '六',
    fullName: 'Saturday',
    shortName: 'Sat',
    dayNumber: 6
  }
]

// 今日
const today = new Date()

// 日历的各项属性
const calendarProps = reactive({
  target: {
    year: null,
    month: null,
    date: null,
    day: null,
    monthShortName: null,
    monthFullName: null,
    monthChineseFullName: null,
    firstDay: null,
    firstDayIndex: null,
    totalDays: null
  },
  previous: {
    totalDays: null
  }
})
// 用于展现的日历数据
const calendarData = ref([])

// 获取日历的各个属性
function setCalendarProps () {
  if (!targetDate.value) {
    targetDate.value = today
  }
  // 获取目标日期的年月日星期几数据
  calendarProps.target.year = targetDate.value.getFullYear()
  calendarProps.target.month = targetDate.value.getMonth()
  calendarProps.target.date = targetDate.value.getDate()
  calendarProps.target.day = targetDate.value.getDay()

  if (
    calendarProps.target.year < MIN_YEAR ||
    calendarProps.target.year > MAX_YEAR
  ) {
    console.error('无效的年份，请检查传入的数据是否是正常')
    return
  }

  // 获取到目标日期的月份【中文】名称
  let dateString = ''
  dateString = targetDate.value.toString().split(' ')
  calendarProps.target.monthShortName = dateString[1]
  calendarProps.target.monthFullName =
    monthNameList.fullName[calendarProps.target.month]
  calendarProps.target.monthChineseFullName =
    monthNameList.chineseFullName[calendarProps.target.month]
  // 获取目标月份的第一天是星期几，和在星期几中的索引值
  const targetMonthFirstDay = new Date(
    calendarProps.target.year,
    calendarProps.target.month,
    1
  )
  calendarProps.target.firstDay = targetMonthFirstDay.getDay()
  calendarProps.target.firstDayIndex = dayNameList.findIndex(
    (day) => day.dayNumber === calendarProps.target.firstDay
  )

  // 获取目标月份总共多少天
  const targetMonthLastDay = new Date(
    calendarProps.target.year,
    calendarProps.target.month + 1,
    0
  )
  calendarProps.target.totalDays = targetMonthLastDay.getDate()

  // 获取目标月份的上个月总共多少天
  const previousMonth = new Date(
    calendarProps.target.year,
    calendarProps.target.month,
    0
  )
  calendarProps.previous.totalDays = previousMonth.getDate()
}
// 生成日历的数据
function setCalendarData () {
  let i
  let date = 1
  const originData = []
  const firstRow = []
  // 设置第一行数据
  for (i = 0; i <= 6; i++) {
    // 设置目标月份之前月份的日期数据
    if (i < calendarProps.target.firstDayIndex) {
      const previousDate =
        calendarProps.previous.totalDays -
        calendarProps.target.firstDayIndex +
        (i + 1)
      firstRow.push({
        dateObj: new Date(
          calendarProps.target.year,
          calendarProps.target.month - 1,
          previousDate
        ),
        dateNumber: previousDate,
        dateType: 'previous'
      })
    } else {
      // 设置目标月份当月的日期数据
      firstRow.push({
        dateObj: new Date(
          calendarProps.target.year,
          calendarProps.target.month,
          date
        ),
        dateNumber: date,
        dateType: 'current'
      })
      date++
    }
  }
  let jTotal = 3
  if (findIdx > -1) {
    // 判断是否4行可以显示完全
    const yushu = 7 * 5 - (calendarProps.target.totalDays + findIdx)
    if (yushu < 0) {
      jTotal = 4
    }
  }
  originData.push(...firstRow)
  // 设置后面五行的数据
  for (let j = 0; j <= jTotal; j++) {
    const rowData = []
    for (let k = 0; k <= 6; k++) {
      // 设置目标月份剩下的日期数据
      if (date <= calendarProps.target.totalDays) {
        rowData.push({
          dateObj: new Date(
            calendarProps.target.year,
            calendarProps.target.month,
            date
          ),
          dateNumber: date,
          dateType: 'current'
        })
      } else {
        // 设置目标月份下个月的日期数据
        const nextDate = date - calendarProps.target.totalDays
        rowData.push({
          dateObj: new Date(
            calendarProps.target.year,
            calendarProps.target.month + 1,
            nextDate
          ),
          dateNumber: nextDate,
          dateType: 'next'
        })
      }
      date++
    }
    originData.push(...rowData)
  }
  calendarData.value = originData
}

// 切换月份
function MonthHandle (num) {
  let curMonth = calendarProps.target.month + num
  let curYear = calendarProps.target.year
  if (curMonth > 11) {
    curMonth = 0
    curYear += 1
  } else if (curMonth < 0) {
    curMonth = 11
    curYear -= 1
  }
  targetDate.value = new Date(curYear, curMonth, 1)
  setCalendarProps()
  setCalendarData()
}

// 选中子项
function selectItemHandle (item) {
  if (['previous', 'next'].includes(item.dateType)) return
  console.log(item)
  calendarProps.target.date = item.dateNumber
  emits('update:modelValue', item.dateObj)
}

onMounted(() => {
  setCalendarProps()
  setCalendarData()
  console.log(calendarProps)
  console.log(calendarData.value)
})
</script>
<script>
export default {
  name: 'UvCalendar'
}

</script>
<style lang="scss">
:root {
  --uv-calendar-bg-color: #ffffff;
  --uv-calendar-header-shadow: 0 2px 10px rgb(125 126 128 / 16%);
}
.uv-calendar {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 14px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  .uv-calendar-header {
    display: flex;
    flex-direction: column;
    box-shadow: var(--uv-calendar-header-shadow);
    .uv-calendar-header-action {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      .uv-calendar-pre,
      .uv-calendar-next {
        padding: 10px;
        font-weight: 700;
        border-radius: 50%;
        color: #3f3f41;
        background-color: #f9faff;
      }
    }
    .uv-calendar-title {
      font-weight: 700;
    }
    .uv-calendar-header-week {
      display: flex;
      .uv-calendar-header-week-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        width: calc(100% / 7);
      }
    }
  }
  .uv-calendar-content {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0;
    gap: 5px 0;
  }
  .uv-calendar-item {
    width: calc(100% / 7);
    height: 50px;
    .uv-calendar-item-label {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #495067;
    }
    .uv-calendar-disabled {
      color: #92a5aa;
    }
    .uv-calendar-selected {
      border-radius: 4px;
      color: #ffffff;
      background-color: #1989fa;
    }
  }
}
</style>
