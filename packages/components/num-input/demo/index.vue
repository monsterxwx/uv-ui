<template>
  <div>
    <demoBlock title="基本使用">
      <uv-button @click="show=true">
        打开数字键盘
      </uv-button>
      <uv-num-input
        v-model:show="show"
      />
    </demoBlock>
    <demoBlock :title="`绑定值:${ value }`">
      <uv-button @click="show1=true">
        打开数字键盘
      </uv-button>

      <uv-num-input
        v-model:show="show1"
        v-model="value"
      />
    </demoBlock>
    <demoBlock title="限制最大长度">
      <div style="margin-bottom: 10px;font-size: 14px;color: #333333;">
        限制最大长度当前值为6：{{ value1 }}
      </div>
      <uv-button @click="show2=true">
        打开数字键盘
      </uv-button>

      <uv-num-input
        v-model:show="show2"
        v-model="value1"
        :maxlength="6"
      />
    </demoBlock>
    <demoBlock title="替换最后一个按键">
      <div style="margin-bottom: 10px;font-size: 14px;color: #333333;">
        替换最后一个值为x
      </div>
      <uv-button @click="show3=true">
        打开数字键盘
      </uv-button>

      <uv-num-input
        v-model:show="show3"
        v-model="value2"
        extra-key="x"
      />
    </demoBlock>
    <demoBlock title="替换键盘内容">
      <uv-button @click="show4=true">
        打开数字键盘
      </uv-button>

      <uv-num-input
        v-model:show="show4"
        v-model="value3"
        :diy-arr="['东', '西', '南', '北', '中', '发', '白', '一', '二', '三' ]"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvNumInput, uvButton } from 'uv-ui'
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
