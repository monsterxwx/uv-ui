<template>
  <div>
    <demoBlock title="基本使用">
      <uvCountDown :time="time" />
    </demoBlock>
    <demoBlock title="自定义格式">
      <uvCountDown :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
    </demoBlock>
    <demoBlock title="毫秒级渲染">
      <uvCountDown :time="time" format="HH:mm:ss:SS" millisecond />
    </demoBlock>
    <demoBlock title="自定义样式">
      <uvCountDown :time="time">
        <template #default="{ timeData }">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </uvCountDown>
    </demoBlock>
    <demoBlock title="手动控制">
      <uvCountDown
        ref="countDownRef"
        millisecond
        :time="9000"
        :auto-start="false"
        format="ss:SSS"
        @finish="onFinish"
      />
    </demoBlock>
    <uvGrid :column-num="3">
      <uvGridItem
        text="开始"
        icon-name="play-circle-o"
        @click="start"
      />
      <uvGridItem
        text="暂停"
        icon-name="pause-circle-o"
        @click="pause"
      />
      <uvGridItem
        text="重置"
        icon-name="refresh"
        @click="reset"
      />
    </uvGrid>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCountDown, Toast, uvGrid, uvGridItem } from 'uv-ui'
import { ref } from 'vue'

const time = ref(30 * 60 * 60 * 1000)

const countDownRef = ref(null)

const start = () => {
  countDownRef.value.start()
}
const pause = () => {
  countDownRef.value.pause()
}
const reset = () => {
  countDownRef.value.reset()
}
const onFinish = () => Toast({
  message: '倒计时结束'
})

</script>

<style lang="scss" scoped>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #1989fa;
}
.block {
  display: inline-block;
  width: 22px;
  font-size: 12px;
  border-radius: 4px;
  text-align: center;
  color: #ffffff;
  background-color: #1989fa;
}
</style>
