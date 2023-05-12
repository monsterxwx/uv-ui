<template>
  <div>
    <demoBlock title="通过v-model绑定开启或关闭的属性">
      <uv-button
        type="primary"
        @click="show=true"
      >
        显示popup
      </uv-button>
      <uv-popup v-model="show">
        dde
      </uv-popup>
    </demoBlock>
    <demoBlock title="显示位置">
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
    </demoBlock>
    <demoBlock title="设置圆角">
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
    </demoBlock>
    <demoBlock title="开启关闭图标">
      <uv-button
        type="primary"
        @click="show33=true"
      >
        打开
      </uv-button>
      <uv-popup
        round
        close
        position="bottom"
        v-model="show33"
      >
        <div>标标题标标题标题标标标标标题标标题标标题标题</div>
      </uv-popup>
    </demoBlock>
    <demoBlock title="是否显示遮罩">
      <uv-button
        type="primary"
        @click="show11=true"
      >
        打开
      </uv-button>
      <uv-popup
        round
        close
        :overlay="false"
        position="bottom"
        v-model="show11"
      >
        <div>标标题标标题标题标标标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题标标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
      </uv-popup>
    </demoBlock>
    <demoBlock title="允许点击遮罩后关闭popup">
      <uv-button
        type="primary"
        @click="show22=true"
      >
        打开
      </uv-button>
      <uv-popup
        round
        close
        :click-overlay-close="false"
        position="bottom"
        v-model="show22"
      >
        <div>标标题标标题标题标标标标标题标标题标题标标标题标标标标题标标题标题标标标题标标题标题标标标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标标题标题标题</div>
      </uv-popup>
    </demoBlock>
    <demoBlock title="是否开启操作按钮">
      <uv-button
        type="primary"
        @click="show44=true"
      >
        打开
      </uv-button>
      <uv-popup
        round
        action
        position="bottom"
        v-model="show44"
      >
        <div>标标题标标题标题标标标标标题标标题标标题标题</div>
      </uv-popup>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvPopup, uvButton } from 'uv-ui'
import { ref } from 'vue'
const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)

const show11 = ref(false)
const show22 = ref(false)
const show33 = ref(false)
const show44 = ref(false)
</script>

<style lang="scss" scoped>

</style>
