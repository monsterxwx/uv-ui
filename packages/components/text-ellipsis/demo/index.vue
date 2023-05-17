<template>
  <div>
    <demoBlock title="基本使用">
      <uvTextEllipsis content="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
    </demoBlock>
    <demoBlock title="自定义省略文字">
      <uvTextEllipsis dots="---" content="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
    </demoBlock>
    <demoBlock title="展开/收起">
      <uvTextEllipsis expand-text="展开" collapse-text="收起" content="似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。" />
    </demoBlock>
    <demoBlock title="自定义展示行数，设置3行">
      <uvTextEllipsis
        rows="3"
        expand-text="展开"
        collapse-text="收起"
        content="那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。"
      />
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvTextEllipsis } from 'uv-ui'

</script>

<style lang="scss" scoped>

</style>
