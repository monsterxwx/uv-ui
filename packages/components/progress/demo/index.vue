<template>
  <div>
    <demoBlock title="基本使用">
      <uvProgress :percent="60" />
    </demoBlock>
    <demoBlock title="不显示百分比">
      <uvProgress :percent="60" :show-percent="false" />
    </demoBlock>
    <demoBlock title="外部百分比显示">
      <uvProgress :percent="60" :inset-percent="false" />
    </demoBlock>
    <demoBlock title="修改颜色和高度">
      <uvProgress
        :percent="60"
        height="15px"
        track-color="#fff"
        progress-color="#1989fa"
      />
    </demoBlock>
    <demoBlock title="手动增减">
      <uvProgress :percent="curPercent" />
      <div class="action-demo">
        <div class="action-item" @click="change('-')">
          减少
        </div>
        <div class="action-item" @click="change('+')">
          增加
        </div>
      </div>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvProgress } from 'uv-ui'
import { ref } from 'vue'

const curPercent = ref(30)

const change = (str) => {
  let temNum = curPercent.value
  if (str === '-') {
    temNum -= 5
    if (temNum <= 0) {
      curPercent.value = 0
    } else {
      curPercent.value = temNum
    }
  } else if (str === '+') {
    temNum += 5

    if (temNum >= 100) {
      curPercent.value = 100
    } else {
      curPercent.value = temNum
    }
  }
}

</script>

<style lang="scss" scoped>
.action-demo {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  .action-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 14px;
    border-radius: 50%;
    color: #19be6b;
    background-color: #dbfbdb;
  }
}
</style>
