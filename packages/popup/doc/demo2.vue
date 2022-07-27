<template>
  <div>
    <div class="title">
      是否显示遮罩
    </div>
    <div class="tip">
      通过 <span class="code">overlay</span>设置开启或关闭，默认开启
    </div>
    <uv-button
      type="primary"
      @click="show1=true"
    >
      打开
    </uv-button>
    <uv-popup
      round
      :overlay="false"
      position="bottom"
      v-model="show1"
    >
      <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
    </uv-popup>
    <div class="title">
      开启关闭图标
    </div>
    <div class="tip">
      通过 <span class="code">close</span>设置开启或关闭，默认关闭
    </div>
    <uv-button
      type="primary"
      @click="show3=true"
    >
      打开
    </uv-button>
    <uv-popup
      round
      close
      position="bottom"
      v-model="show3"
    >
      <div>标标题标标题标题标标标标标题标标题标标题标题</div>
    </uv-popup>
    <div class="title">
      允许点击遮罩后关闭popup
    </div>
    <div class="tip">
      通过 <span class="code">clickOverlayClose</span>设置开启或关闭，默认开启
    </div>
    <uv-button
      type="primary"
      @click="show2=true"
    >
      打开
    </uv-button>
    <uv-popup
      round
      close
      :click-overlay-close="false"
      position="bottom"
      v-model="show2"
    >
      <div>标标题标标题标题标标标标标题标标题标题标标标题标标标标题标标题标题标标标题标标题标题标标标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
    </uv-popup>

    <div class="title">
      是否开启操作按钮
    </div>
    <div class="tip">
      通过 <span class="code">aciton</span>设置开启或关闭，默认关闭。
    </div>
    <div class="tip">
      开启后可以通过 <span class="code">leftName</span>设置左边按钮名称，通过 <span class="code">rightName</span>设置右边按钮名称
    </div>
    <uv-button
      type="primary"
      @click="show4=true"
    >
      打开
    </uv-button>
    <uv-popup
      round
      action
      position="bottom"
      v-model="show4"
    >
      <div>标标题标标题标题标标标标标题标标题标标题标题</div>
    </uv-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>

<style lang="scss" scoped>

</style>
