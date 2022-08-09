<template>
  <div>
    <uv-slider v-model="test" />
    <div>
      {{ test }}
    </div>
    <div class="title">
      进度条激活态和非激活态颜色
    </div>
    <div class="tip">
      通过<span class="code">activeColor</span><span class="code">inactiveColor</span> 设置
    </div>
    <uv-slider
      active-color="red"
      v-model="test"
    />
    <div class="title">
      进度条高度和按钮大小
    </div>
    <div class="tip">
      通过<span class="code">barHeight</span>和<span class="code">buttonSize</span>设置
    </div>
    <uv-slider
      bar-height="6"
      button-size="28"
      v-model="test"
    />
    <div class="title">
      禁用滑块
    </div>
    <div class="tip">
      通过<span class="code">disabled</span>设置
    </div>
    <uv-slider
      disabled
      v-model="test"
    />
    <div class="title">
      最大最小值
    </div>
    <div class="tip">
      通过<span class="code">max</span>和<span class="code">min</span>设置
    </div>
    <div>
      {{ test1 }}
    </div>
    <uv-slider
      :max="60"
      :min="30"
      v-model="test1"
    />
    <div class="title">
      自定义滑块按钮
    </div>
    <div class="tip">
      通过插槽名<span class="code">button</span>设置
    </div>
    <uv-slider
      v-model="test"
    >
      <template #button>
        <div class="diyButton">
          {{ test }}
        </div>
      </template>
    </uv-slider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const test = ref(33)
const test1 = ref(33)
</script>

<style lang="scss" scoped>
.diyButton {
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
