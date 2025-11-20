<template>
  <Layout>
    <template #aside-outline-before>
      <div class="uv-ui-iframe" :style="iframeStyle">
        <div class="phone-bg" />
        <div class="phone-time">
          {{ currentTime }}
        </div>
        <iframe
          class="iframe-class"
          frameborder="0"
          scrolling="no"
          :src="iframeSrc"
        />
      </div>
    </template>
  </Layout>
</template>

<script setup>
import useCompStore from '../store/copname.js'
import DefaultTheme from 'vitepress/theme'
import { computed, onMounted, ref } from 'vue'

const { Layout } = DefaultTheme
const compStore = useCompStore()

const iframeSrc = computed(() => {
  let src = 'https://monsterxwx.github.io/uv-ui-example'
  if (compStore.currentName) {
    src += '#' + compStore.currentName
  }
  return src
})

const firstScreenWidth = ref(null)
const screenWidth = ref(null)
const differenceWidth = ref(0)
const currentTime = ref('')

const updateTime = () => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  currentTime.value = `${hours}:${minutes}`
}

onMounted(() => {
  screenWidth.value = document.body.clientWidth
  firstScreenWidth.value = document.body.clientWidth

  // 初始化时间并设置定时器
  updateTime()
  setInterval(updateTime, 1000) // 每秒更新一次

  window.onresize = () => {
    // 屏幕尺寸变化
    return (() => {
      screenWidth.value = document.body.clientWidth
      differenceWidth.value = firstScreenWidth.value - screenWidth.value
    })()
  }
})

const iframeStyle = computed(() => {
  console.log(differenceWidth.value)
  const rightValue = `cale(20% - ${differenceWidth.value}px)`
  return {
    right: rightValue
  }
})

</script>

<style lang="scss" scoped>
.uv-ui-iframe {
  position: fixed;
  z-index: 9999;
  top: 15%;
  width: 375px;
  height: 667px;
  overflow: hidden;

  .phone-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../public/images/iphone.png') center top no-repeat;
    background-size: contain;
  }
  .iframe-class {
    position: absolute;
    z-index: 2;
    top: 7%;           /* 距离顶部约12%，对应手机上边框 */
    left: 50%;          /* 水平居中 */
    transform: translateX(-50%); /* 精确水平居中 */
    width: 81.3%;         /* 宽度占容器的88%，对应手机屏幕宽度 */
    height: 87.5%;        /* 高度占容器的75%，对应手机屏幕高度 */
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .phone-time {
    position: absolute;
    top: 2.5%;          /* 距离顶部2.5% */
    left: 15%;           /* 距离左侧8% */
    z-index: 3;         /* 显示在最上层 */
    color: #becde9;        /* 黑色文字 */
    font-size: 14px;    /* 小字体 */
    font-weight: 700;   /* 半粗体 */
    letter-spacing: -0.2px;
  }
}
</style>
