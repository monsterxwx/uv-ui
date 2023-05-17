<template>
  <div>
    <demoBlock title="基本使用">
      <uvCellGroup card>
        <uvCell title="primary 类型">
          <template #value>
            <uvTag>标签</uvTag>
          </template>
        </uvCell>
        <uvCell title="success 类型">
          <template #value>
            <uvTag type="success">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="danger 类型">
          <template #value>
            <uvTag type="danger">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="warning 类型">
          <template #value>
            <uvTag type="warning">
              标签
            </uvTag>
          </template>
        </uvCell>
      </uvCellGroup>
    </demoBlock>
    <demoBlock title="样式风格">
      <uvCellGroup card>
        <uvCell title="空心样式 primary 类型">
          <template #value>
            <uvTag plain>
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心样式 success 类型">
          <template #value>
            <uvTag plain type="success">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心样式 danger 类型">
          <template #value>
            <uvTag plain type="danger">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心样式 warning 类型">
          <template #value>
            <uvTag plain type="warning">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="圆角样式">
          <template #value>
            <uvTag round>
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心圆角样式">
          <template #value>
            <uvTag round plain>
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="标记样式">
          <template #value>
            <uvTag mark>
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心标记样式">
          <template #value>
            <uvTag mark plain>
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="可关闭">
          <template #value>
            <uvTag :show="show" closeable @close="close">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心样式可关闭">
          <template #value>
            <uvTag
              :show="show1"
              plain
              color="#1989fa"
              closeable
              @close="close1"
            >
              标签
            </uvTag>
          </template>
        </uvCell>
      </uvCellGroup>
    </demoBlock>
    <demoBlock title="标签大小">
      <uvCellGroup card>
        <uvCell title="小号标签">
          <template #value>
            <uvTag>标签</uvTag>
          </template>
        </uvCell>
        <uvCell title="中号标签">
          <template #value>
            <uvTag size="medium">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="大号标签">
          <template #value>
            <uvTag size="large">
              标签
            </uvTag>
          </template>
        </uvCell>
      </uvCellGroup>
    </demoBlock>
    <demoBlock title="自定义颜色">
      <uvCellGroup card>
        <uvCell title="背景颜色">
          <template #value>
            <uvTag bg-color="#7232dd">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="文字颜色">
          <template #value>
            <uvTag color="#ad0000" bg-color="#ffe1e1">
              标签
            </uvTag>
          </template>
        </uvCell>
        <uvCell title="空心颜色">
          <template #value>
            <uvTag color="green" plain>
              标签
            </uvTag>
          </template>
        </uvCell>
      </uvCellGroup>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvTag, uvCellGroup, uvCell } from 'uv-ui'
import { ref } from 'vue'
const show = ref(true)
const show1 = ref(true)
const close = () => {
  show.value = false
}
const close1 = () => {
  show1.value = false
}
</script>

<style lang="scss" scoped>

</style>
