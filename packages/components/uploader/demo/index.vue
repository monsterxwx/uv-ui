<template>
  <div style="overflow: auto;width: 100%;height: 100%;background-color: #ffffff;">
    <demoBlock title="基本使用">
      <uvUploader />
    </demoBlock>
    <demoBlock title="文件预览">
      <uvUploader v-model="picList" />
    </demoBlock>
    <demoBlock title="限制上传数量">
      <uvUploader v-model="picList2" :max-count="2" />
    </demoBlock>
    <demoBlock title="限制上传大小">
      <uvUploader v-model="picList3" :max-size="500 * 1024" @oversize="onOversize" />
    </demoBlock>
    <demoBlock title="上传状态">
      <uvUploader v-model="picList1" />
    </demoBlock>
    <demoBlock title="上传前置处理">
      <uvUploader :before-read="beforeRead" />
    </demoBlock>
    <demoBlock title="禁用文件上传">
      <uvUploader disabled />
    </demoBlock>
    <demoBlock title="自定义上传样式">
      <uvUploader class="diy-uploader" v-model="picList4">
        <img
          src="https://cdn.uviewui.com/uview/demo/upload/positive.png"
          mode="widthFix"
          style="width: 250px;height: 150px;"
        >
      </uvUploader>
    </demoBlock>
    <demoBlock title="自定义预览样式">
      <uvUploader v-model="picList5">
        <template #preview-cover="{file,item}">
          <div class="diy-cover">
            {{ item?.name ||file?.name }}
          </div>
        </template>
      </uvUploader>
    </demoBlock>
  </div>
</template>

<script setup>
import demoBlock from '../../../demo/demo-block.vue'
import { uvUploader, Toast } from 'uv-ui'
import { ref } from 'vue'

const picList = ref([
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
    name: 'leaf.jpeg'
  },
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
    name: 'tree.jpeg'
  }
])
const picList1 = ref([{
  url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
  status: 'uploading',
  message: '上传中...'
},
{
  url: 'https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg',
  status: 'failed',
  message: '上传失败'
}])
const picList2 = ref([])
const picList3 = ref([])
const picList4 = ref([])
const picList5 = ref([
  {
    url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg',
    name: 'leaf.jpeg'
  }
])

const beforeRead = (file) => {
  if (file.type !== 'image/jpeg') {
    Toast({
      message: '请上传 jpg 格式图片'
    })
    return false
  }
  return true
}

const onOversize = (file) => {
  Toast({
    message: '文件大小不能超过 500kb'
  })
}

</script>

<style lang="scss" scoped>
.diy-uploader {
  --uv-uploader-upload-size-width: 250px;
  --uv-uploader-upload-size-height: 150px;
}
.diy-cover {
  position: absolute;
  bottom: 0;
  padding: 4px;
  width: 100%;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
  background: rgb(0 0 0 / 30%);
  box-sizing: border-box;
}
</style>
