<template>
  <div>
    <uv-steps
      v-model="active"
      @change="changeAc"
    >
      <uv-steps-item>检查单信息</uv-steps-item>
      <uv-steps-item>整改信息</uv-steps-item>
      <uv-steps-item>复查信息</uv-steps-item>
      <uv-steps-item>处罚决定</uv-steps-item>
    </uv-steps>
    <div class="title">
      配置项
    </div>
    <div class="tip">
      <div>禁止点击，通过修改活跃值改变状态,将<span class="code">isAbleClick</span> 设置为false</div>
      <div>修改活跃时颜色，通过<span class="code">activeColor</span> 设置</div>
      <div>修改不活跃时颜色，通过<span class="code">inactiveColor</span> 设置</div>
    </div>
    <uv-steps
      :is-able-click="false"
      v-model="active1"
    >
      <uv-steps-item>检查单信息</uv-steps-item>
      <uv-steps-item>整改信息</uv-steps-item>
      <uv-steps-item>复查信息</uv-steps-item>
      <uv-steps-item>处罚决定</uv-steps-item>
    </uv-steps>
    <uv-button @click="change">
      下一步
    </uv-button>
    <div class="title">
      自定义图标
    </div>
    <div class="tip">
      <div>通过插槽<span class="code">icon</span> 设置</div>
    </div>
    <uv-steps
      v-model="active2"
    >
      <uv-steps-item title="检查单信息">
        <template #icon>
          <uv-icon
            size="16"
            :color="active2>=0?'#0078d4':'#666'"
            name="arrow-right"
          />
        </template>
      </uv-steps-item>
      <uv-steps-item title="整改信息">
        <template #icon>
          <uv-icon
            size="16"
            name="success"
            :color="active2>=1?'#0078d4':'#666'"
          />
        </template>
      </uv-steps-item>
      <uv-steps-item title="复查信息">
        <template #icon>
          <uv-icon
            size="16"
            name="love-fill"
            :color="active2>=2?'#0078d4':'#666'"
          />
        </template>
      </uv-steps-item>
      <uv-steps-item title="处罚决定">
        <template #icon>
          <uv-icon
            size="16"
            name="star-fill"
            :color="active2>=3?'#0078d4':'#666'"
          />
        </template>
      </uv-steps-item>
    </uv-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(0)
const active1 = ref(0)
const active2 = ref(0)

const changeAc = (idx) => {
  console.log(idx)
}

const change = () => {
  active1.value++
  if (active1.value > 3) {
    active1.value = 0
  }
}
</script>

<style lang="scss" scoped>

</style>
