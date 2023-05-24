<template>
  <div>
    <demoBlock title="基本使用">
      <uvCircleProgress text="30%" :current-rate="30" />
    </demoBlock>
    <demoBlock title="修改颜色">
      <uvCircleProgress color="#07c160" :current-rate="30" />
    </demoBlock>
    <demoBlock title="修改轨道颜色">
      <uvCircleProgress color="#07c160" layer-color="#3fecff" :current-rate="30" />
    </demoBlock>
    <demoBlock title="渐变色">
      <uvCircleProgress :current-rate="30" :color="gradientColor" />
    </demoBlock>
    <demoBlock title="逆时针">
      <uvCircleProgress :clockwise="false" :current-rate="30" />
    </demoBlock>
    <demoBlock title="修改宽度">
      <uvCircleProgress :stroke-width="60" :current-rate="30" />
    </demoBlock>
    <demoBlock title="修改大小">
      <uvCircleProgress text="120px" size="120" :current-rate="30" />
    </demoBlock>
    <demoBlock title="起始位置">
      <div style="display: flex;justify-content: space-between;">
        <uvCircleProgress text="左边" start-position="left" :current-rate="70" />
        <uvCircleProgress text="右边" start-position="right" :current-rate="70" />
        <uvCircleProgress text="底部" start-position="bottom" :current-rate="70" />
      </div>
    </demoBlock>
    <demoBlock title="进度条端点形状">
      <div style="display: flex;justify-content: space-between;">
        <uvCircleProgress text="默认" stroke-linecap="butt" :current-rate="70" />
        <uvCircleProgress text="正方形" stroke-linecap="square" :current-rate="70" />
        <uvCircleProgress text="圆型" stroke-linecap="round" :current-rate="70" />
      </div>
    </demoBlock>
    <demoBlock title="自定义内容">
      <div class="rate-num">
        {{ minute }}:{{ second }}
      </div>
      <div class="diy-bg" @click="startD">
        <uvCircleProgress
          v-model:current-rate="currentRate"
          :rate="rate"
          :speed="80"
          layer-color="none"
          color="#1ba082"
        >
          <div class="diy-content">
            <uvIcon name="notice" size="32" color="#fff" />
            <div>录音中</div>
          </div>
        </uvCircleProgress>
      </div>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvCircleProgress, uvIcon } from 'uv-ui'
import { ref } from 'vue'
const gradientColor = {
  '0%': '#3fecff',
  '100%': '#6149f6'
}

const currentRate = ref(0)

const rate = ref(0)

let timer = null

const second = ref(0)
const minute = ref(0)

function countTimeFn () {
  timer = setInterval(() => {
    second.value++
    if (second.value % 60 === 0) {
      minute.value++
      second.value = 0
    }
    rate.value = ((minute.value * 60 + second.value) / 3).toFixed(1)
  }, 1000)
}
const isStart = ref(false)
function startD () {
  isStart.value = !isStart.value
  if (isStart.value) {
    countTimeFn()
  } else {
    clearInterval(timer)
  }
}
</script>

<style lang="scss" scoped>
.diy-content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 98px;
  height: 98px;
  font-size: 14px;
  border-radius: 50%;
  color: #ffffff;
  background-color: #22c49e;
  flex-direction: column;
  gap: 5px;
  transform: translate(-50%, -50%);
}
.diy-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background-color: rgb(198 233 227 / 70%);

  --uv-circle-progress-svg-z-index: 10;
}
.rate-num {
  width: 107px;
  font-size: 18px;
  text-align: center;
  color: #22c49e;
}
</style>
