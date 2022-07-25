<template>
  <div class="header-block-box">
    <div class="logoBox">
      <!-- <img
        src="../assets/logo.png"
        @click="toHome"
      > -->
      <a
        @click="toHome"
      >UV UI</a>
      <span>V 0.0.4</span>
      <div class="toolsBox">
        <a
          v-for="(item, index) in tools"
          :key="index"
          :class="store.tabIndex===index?'active':''"
          @click="pageView(item, index)"
        >{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import useStore from '@/store/common'
const router = useRouter()
const store = useStore()

const toHome = () => {
  store.updateIndex(0)
  router.push('/')
}

const tools = reactive([
  {
    name: '首页',
    path: '/'
  },
  {
    name: '组件',
    path: '/components'
  }
])
const pageView = (item, index) => {
  store.updateIndex(index)
  router.push(item.path)
}
</script>

<style scoped lang="scss">
.header-block-box {
  width: 100%;
  height: 64px;
  background: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  .logoBox {
    position: relative;
    overflow: hidden;
    padding: 0 40px;
    height: 64px;
    img {
      float: left;
      margin: 20px 10px 0 0;
      width: 22px;
      height: 22px;
      cursor: pointer;
    }
    a {
      float: left;
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      white-space: nowrap;
      color: #4a5264;
      line-height: 64px;
      letter-spacing: -0.18px;
      cursor: pointer;
    }
    span {
      position: absolute;
      top: 6px;
      padding: 3px 8px;
      font-size: 12px;
      font-weight: 700;
      border-radius: 4px;
      color: #ffffff;
      background-color: #0e80eb;
    }
    .toolsBox {
      float: right;
      line-height: 64px;
      a {
        cursor: pointer;
        display: inline-block;
        float: none;
        margin-left: 25px;
        padding: 8px 3px;
        font-size: 16px;
        font-weight: normal;
        border-bottom: 2px solid #ffffff;
        transition: all 0.2s ease;
        line-height: normal;
        &:hover {
          border-color: #0e80eb;
          color: #0e80eb;
        }
      }
      a.active {
        border-color: #0e80eb;
        color: #0e80eb;
      }
    }
  }
}
</style>
