<template>
  <Layout>
    <template #aside-outline-before>
      <div class="uv-ui-iframe">
        <iframe width="100%" height="100%" frameborder="0" :src="iframeSrc"></iframe>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import useCompStore from '../store/copname.js'
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const compStore =useCompStore()

const iframeSrc = computed(() => {
  let src = `https://monsterwx.gitee.io/uv-ui`
  if (compStore.currentName) {
    src += '#' + compStore.currentName
  }
  
  console.log(src);
  return src
})
</script>

<style lang="scss" scoped>
.uv-ui-iframe {
  position: fixed;
  z-index: 9999;
  right: 10%;
  top: 15%;
  width: 375px;
  height: 667px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}
</style>
