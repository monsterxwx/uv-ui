<template>
  <div class="pre-code-box">
    <span
      style="margin-top: 10px;"
      class="m-copy"
      v-if="showCode"
      @click="copyCode"
    ><svgIcon
      name="copy"
      icon-size="25"
      color="#8e8e8e"
    /></span>
    <transition name="slide-fade">
      <pre
        class="language-html"
        v-if="showCode"
        v-highlight
      ><code class="language-html">{{ sourceCode }}</code></pre>
    </transition>
    <div
      class="showCode"
      @click="showOrhideCode"
    >
      <span style="margin-right: 5px;">{{ showCode ? "隐藏代码" : "显示代码" }}</span>
      <svgIcon name="code" />
    </div>
    <textarea id="inputCopy" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import Message from '../../packages/message/index'
const props = defineProps({
  compName: {
    type: String,
    default: '',
    require: true
  },
  demoName: {
    type: String,
    default: '',
    require: true
  }
})

const showCode = ref(false)
const border = ref('1px solid rgba(0,0,0,.06)')
const showOrhideCode = () => {
  showCode.value = !showCode.value
  if (showCode.value) {
    border.value = '0'
  } else {
    border.value = '1px solid rgba(0,0,0,.06)'
  }
}
const sourceCode = ref('')
async function getSourceCode () {
  const isDev = import.meta.env.MODE === 'development'
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/packages/${props.compName}/doc/${props.demoName}.vue?raw`
      )
    ).default
  } else {
    sourceCode.value = await fetch(
      `/packages/${props.compName}/doc/${props.demoName}.vue`
    ).then((res) => res.text())
  }
}
const copyCode = () => {
  const input = document.getElementById('inputCopy')
  input.value = sourceCode.value
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    // Message({
    //   type: 'success',
    //   text: '代码复制成功'
    // })
  } else {
    // Message({
    //   type: 'error',
    //   text: '代码复制成功'
    // })
  }
}
onMounted(() => {
  getSourceCode()
})
</script>

<style scoped lang="scss">
/* stylelint-disable-next-line selector-id-pattern */
#inputCopy {
  position: fixed;
  z-index: -99999999;
  height: 0;
  border: 0;
  opacity: 0;
  outline: none;
}
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box {
  position: relative;
  overflow: hidden;
  margin: 0 0 15px;
  width: 100%;
  height: auto;
  border-top: 0;
  transition: all 0.15s ease-out;
  .m-copy {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    i {
      font-size: 22px;
      color: #b7b3b3;
      &:hover {
        color: #000000;
      }
    }
  }
  /* stylelint-disable-next-line selector-class-pattern */
  .showCode {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
    border-radius: 4px;
    text-align: center;
    color: #505050;
    background-color: #ffffff !important;
    box-shadow: 0 16px 15px -16px rgb(0 0 0 / 10%);
    line-height: 40px;
    cursor: pointer;
    i {
      margin-left: 10px;
    }
    i.rotate {
      transform: rotate(180deg);
    }
    &:hover {
      color: #0e80eb;
      background: #f9f9f9;
    }
  }
  &:hover {
    box-shadow: 0 16px 15px -16px rgb(0 0 0 / 10%);
  }
  .language-html {
    font-size: 14px;
    line-height: 22px;
    font-family: "JetBrains Mono";
    border-radius: 20px;
    background-color: fff;
  }
}
</style>
