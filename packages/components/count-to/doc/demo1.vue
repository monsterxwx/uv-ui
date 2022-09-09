<template>
  <div>
    <div class="title">
      配置设置
    </div>
    <div class="tip">
      <div>通过<span class="code">start</span> 设置开始的数字</div>
      <div>通过<span class="code">end</span> 设置结束数字</div>
      <div>通过<span class="code">autoPlay</span> 是否自动播放</div>
      <div>通过<span class="code">duration</span> 持续时间</div>
      <div>通过<span class="code">prefix</span> 设置字体前置符号</div>
      <div>通过<span class="code">suffix</span> 设置字体后置符号</div>
      <div>通过<span class="code">useEasing</span> 设置滚动结束后是否开启拖尾</div>
      <div>通过<span class="code">separator</span> 设置千分位分隔符，默认,</div>
    </div>
    <uv-count-to
      :start="0"
      :end="endCount"
      :auto-play="true"
      :duration="2000"
      prefix="￥"
      suffix="RMB"
      font-size="30px"
      color="#f56c6c"
    />
    <div class="title">
      字体属性
    </div>
    <div class="tip">
      <div>通过<span class="code">fontSize</span> 设置字体大小</div>
      <div>通过<span class="code">bold</span> 设置字体加粗</div>
      <div>通过<span class="code">color</span> 设置字体颜色</div>
    </div>
    <uv-count-to
      :start="0"
      :end="endCount"
      :auto-play="true"
      :duration="2000"
      font-size="30px"
      color="#f56c6c"
      bold
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const endCount = ref(9033)
</script>

<style lang="scss" scoped>

</style>
