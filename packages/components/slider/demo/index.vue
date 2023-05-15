<template>
  <div>
    <demoBlock title="基本使用">
      <div style="font-size: 14px;">
        当前值: {{ test }}
      </div>
      <uv-slider v-model="test" />
    </demoBlock>
    <demoBlock title="进度条激活态和非激活态颜色">
      <uv-slider
        active-color="red"
        v-model="test"
      />
    </demoBlock>
    <demoBlock title="进度条高度和按钮大小">
      <uv-slider
        bar-height="6"
        button-size="28"
        v-model="test"
      />
    </demoBlock>
    <demoBlock title="禁用滑块">
      <uv-slider
        disabled
        v-model="test"
      />
    </demoBlock>
    <demoBlock title="最大最小值">
      <div style="font-size: 14px;">
        最大60，最小30，当前值：{{ test1 }}
      </div>
      <uv-slider
        :max="60"
        :min="30"
        v-model="test1"
      />
    </demoBlock>
    <demoBlock title="自定义滑块按钮">
      <uv-slider
        v-model="test"
      >
        <template #button>
          <div class="diy-button">
            {{ test }}
          </div>
        </template>
      </uv-slider>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvSlider } from 'uv-ui'
import { ref } from 'vue'
const test = ref(33)
const test1 = ref(33)
</script>

<style lang="scss" scoped>
.diy-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 25px;
  height: 25px;
  font-size: 12px;
  border-radius: 10px;
  color: #ffffff;
  background-color: #1989fa;
  box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
}
</style>
