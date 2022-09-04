<template>
  <div class="container">
    <div class="title">
      通过v-model绑定开启或关闭的属性
    </div>
    <uv-button
      type="primary"
      @click="show=true"
    >
      显示popup
    </uv-button>
    <uv-popup v-model="show">
      dde
    </uv-popup>
    <div class="title">
      显示位置
    </div>
    <div class="tip">
      通过 <span class="code">position</span>  设置,可选项为<span class="code">bottom</span><span class="code">top</span><span class="code">center</span><span class="code">left</span><span class="code">right</span>，默认底部显示
    </div>
    <uv-button
      type="primary"
      @click="show1=true"
    >
      底部显示
    </uv-button>
    <uv-popup
      position="bottom"

      v-model="show1"
    >
      <div class="test">
        标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题
      </div>
    </uv-popup>
    <div class="title">
      设置圆角
    </div>
    <div class="tip">
      通过 <span class="code">round</span>设置
    </div>
    <uv-button
      type="primary"
      @click="show2=true"
    >
      打开
    </uv-button>
    <uv-popup
      round
      position="center"
      v-model="show2"
    >
      <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
    </uv-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
</script>

<style lang="scss" scoped>

</style>
