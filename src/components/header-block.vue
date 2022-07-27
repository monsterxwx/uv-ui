<template>
  <div class="header-block-box">
    <div class="leftTitle">
      <a
        @click="toHome"
      >UV UI</a>
      <span>V 0.0.4</span>
    </div>
    <div class="toolsBox">
      <div
        v-for="(item, index) in tools"
        :key="index"
        class="item"
        :class="store.tabIndex===index?'active':''"
        @click.stop="pageView(item, index)"
      >
        {{ item.name }}
      </div>
      <div
        class="menu"
        @click.stop="menuChange"
      >
        <svgIcon
          name="modular"
          icon-size="20"
          :color="!store.openMenu?'#0e80eb':''"
        />
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
    path: '/components/button'
  }
])
const pageView = (item, index) => {
  store.updateIndex(index)
  router.push(item.path)
}
const menuChange = () => {
  store.changeMenu()
}
</script>

<style scoped lang="scss">
.header-block-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  .leftTitle {
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
  }
  .toolsBox {
    display: flex;
    gap: 20px;
    align-items: center;
    .item {
      cursor: pointer;
      font-size: 16px;
      border-bottom: 2px solid #ffffff;
      transition: all 0.2s ease;
      &:hover {
        border-color: #0e80eb;
        color: #0e80eb;
      }
    }
    .menu {
      cursor: pointer;
      font-size: 16px;
    }
    .active {
      border-color: #0e80eb;
      color: #0e80eb;
    }
  }
}
</style>
