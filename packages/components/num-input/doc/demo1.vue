<template>
  <div>
    <div>
      diy最后一个值为：{{ value2 }}
    </div>
    <div>
      限制最大长度当前值为：{{ value1 }}
    </div>
    <div>
      当前值为：{{ value }}
    </div>
    <div class="title">
      是否显示数字键盘
    </div>
    <div class="tip">
      通过<span class="code">v-model:show</span> 进行绑定显示还是隐藏
    </div>
    <uv-button @click="show=true">
      打开数字键盘
    </uv-button>
    <uv-num-input
      v-model:show="show"
    />
    <div class="title">
      绑定值
    </div>
    <div class="tip">
      通过<span class="code">v-model</span> 进行双向绑定
    </div>
    <uv-button @click="show1=true">
      打开数字键盘
    </uv-button>

    <uv-num-input
      v-model:show="show1"
      v-model="value"
    />
    <div class="title">
      限制最大长度
    </div>
    <div class="tip">
      通过<span class="code">maxlength</span> 设置
    </div>
    <uv-button @click="show2=true">
      打开数字键盘
    </uv-button>

    <uv-num-input
      v-model:show="show2"
      v-model="value1"
      :maxlength="6"
    />
    <div class="title">
      替换最后一个按键
    </div>
    <div class="tip">
      通过<span class="code">extraKey</span> 替换'.'，可用作身份证键盘
    </div>
    <uv-button @click="show3=true">
      打开数字键盘
    </uv-button>

    <uv-num-input
      v-model:show="show3"
      v-model="value2"
      extra-key="x"
    />
    <div class="title">
      替换键盘内容
    </div>
    <div class="tip">
      通过<span class="code">diyArr</span> 替换默认数字键盘
    </div>
    <uv-button @click="show4=true">
      打开数字键盘
    </uv-button>

    <uv-num-input
      v-model:show="show4"
      v-model="value3"
      :diy-arr="['东', '西', '南', '北', '中', '发', '白', '一', '二', '三' ]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>

<style lang="scss" scoped>

</style>
