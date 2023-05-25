<template>
  <div class="uv-uploader">
    <div class="uv-uploader-wrapper">
      <template v-for="(item,index) in modelValue">
        <div
          class="uv-uploader-img-wrapper"
          v-if="modelValue && previewImage"
          :key="index"
        >
          <img
            @click="clickPreview(item)"
            :src="item.content || item.url"
            class="uv-uploader-img"
          >
          <div v-if="item.status === 'uploading' || item.status === 'failed'" class="uv-uploader-mask">
            <div v-if="item.status === 'uploading'" class="uv-uploader-uploading-wrapper">
              <div class="uv-uploader-uploading" />
              <div>
                {{ item.message || '上传中...' }}
              </div>
            </div>
            <div v-if="item.status === 'failed'" class="uv-uploader-failed-wrapper">
              <uv-icon
                size="22"
                name="close"
                color="#fff"
              />
              <div>
                {{ item.message || '上传失败' }}
              </div>
            </div>
          </div>
          <div @click="deleteFile(item,index)" class="uv-uploader-delete" v-if="item.status !== 'uploading' && deletable">
            <slot name="preview-delete">
              <div class="uv-uploader-delete-shadow" />
              <uv-icon
                class="uv-uploader-delete-icon"
                size="16"
                name="close"
                color="#fff"
              />
            </slot>
          </div>
          <slot name="preview-cover" :item="item" :file="item.file" />
        </div>
      </template>
      <div v-show="!(modelValue.length >= +maxCount)" class="uv-uploader-upload-wrapper" @click="clickUpload">
        <slot>
          <div class="uv-uploader-upload">
            <uv-icon
              size="26"
              name="photograph"
              :color="disabled? '#edeeef':'#dcdee0'"
            />
          </div>
        </slot>
        <input
          ref="inputRef"
          class="uv-uploader-input"
          type="file"
          :disabled="disabled"
          @change="change"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import uvIcon from '../icon'
import { readFileContent, isOversize, toArray, filterFiles } from './utils.js'
import { isPromise } from '../../utils'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  deletable: {
    type: Boolean,
    default: true
  },
  maxCount: {
    type: [Number, String, Function],
    default: Infinity
  },
  maxSize: {
    type: Number,
    default: Infinity
  },
  beforeRead: {
    type: Function
  },
  afterRead: {
    type: Function
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  // 文件读取结果类型，可选值为 file text
  resultType: {
    type: String,
    default: 'dataUrl'
  },
  // 是否在上传完成后展示预览图
  previewImage: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['oversize', 'clickUpload', 'clickPreview', 'delete', 'update:modelValue'])

const clickUpload = (event) => emit('clickUpload', event)
const clickPreview = (item) => emit('clickPreview', item)

const inputRef = ref()

const reuploadIndex = ref(-1)

const resetInput = () => {
  if (inputRef.value) {
    inputRef.value.value = ''
  }
}
const getDetail = (index = props.modelValue.length) => ({
  name: props.name,
  index
})

const onAfterRead = (items) => {
  resetInput()

  if (isOversize(items, props.maxSize)) {
    if (Array.isArray(items)) {
      const result = filterFiles(items, props.maxSize)
      items = result.valid
      emit('oversize', result.invalid, getDetail())

      if (!items.length) {
        return
      }
    } else {
      emit('oversize', items, getDetail())
      return
    }
  }
  items = reactive(items)
  if (reuploadIndex.value > -1) {
    const arr = [...props.modelValue]
    arr.splice(reuploadIndex.value, 1, items)
    emit('update:modelValue', arr)
    reuploadIndex.value = -1
  } else {
    emit('update:modelValue', [...props.modelValue, ...toArray(items)])
  }

  if (props.afterRead) {
    props.afterRead(items, getDetail())
  }
}

const readFile = (files) => {
  const { maxCount, modelValue, resultType } = props
  if (Array.isArray(files)) {
    const remainCount = +maxCount - modelValue.length
    console.log(remainCount)
    if (files.length > remainCount) {
      files = files.slice(0, remainCount)
    }
    Promise.all(
      files.map((file) => readFileContent(file, resultType))
    ).then((contents) => {
      const fileList = (files).map((file, index) => {
        const result = {
          file,
          status: '',
          message: ''
        }

        if (contents[index]) {
          result.content = contents[index]
        }

        return result
      })
      onAfterRead(fileList)
    })
  } else {
    readFileContent(files, resultType).then((content) => {
      const result = {
        file: files,
        status: '',
        message: ''
      }

      if (content) {
        result.content = content
      }
      onAfterRead(result)
    })
  }
}

const change = (event) => {
  const { files } = event.target
  if (props.disabled || !files || !files.length) {
    return
  }
  const file = files.length === 1 ? files[0] : [].slice.call(files)
  if (props.beforeRead) {
    const response = props.beforeRead(file, getDetail())

    if (!response) {
      resetInput()
      return
    }

    if (isPromise(response)) {
      response
        .then((data) => {
          if (data) {
            readFile(data)
          } else {
            readFile(file)
          }
        })
        .catch(resetInput)
      return
    }
  }
  readFile(file)
}

const deleteFile = (item, index) => {
  const fileList = props.modelValue.slice(0)
  fileList.splice(index, 1)

  emit('update:modelValue', fileList)
  emit('delete', item, getDetail(index))
}

</script>
<script>
export default {
  name: 'UvUploader'
}
</script>

<style lang="scss">
:root {
  --uv-uploader-upload-size-width: 80px;
  --uv-uploader-upload-size-height: 80px;
  --uv-uploader-upload-gap: 8px;
  --uv-uploader-delete-shadow-size: 14px;
  --uv-uploader-delete-shadow-border-radius: 0 0 0 12px;
  --uv-uploader-delete-shadow-background: rgb(0 0 0 / 70%);
  --uv-uploader-delete-icon-transform: scale(0.6) translate(20%, -30%);
  --uv-uploader-img-object-fit: cover;
  --uv-uploader-upload-wrapper-bg-color: #f7f8fa;
  --uv-uploader-mask-background: rgb(50 50 51 / 88%);
  --uv-uploader-mask-color: #ffffff;
  --uv-uploader-uploading-wrapper-gap: 10px;
  --uv-uploader-uploading-wrapper-font-size: 12px;
  --uv-uploader-uploading-size: 15px;
  --uv-uploader-uploading-margin-right: 5px;
}
.uv-uploader {
  position: relative;
  display: inline-block;
  .uv-uploader-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: var(--uv-uploader-upload-gap);
    .uv-uploader-img-wrapper {
      position: relative;
      width: var(--uv-uploader-upload-size-width);
      height: var(--uv-uploader-upload-size-height);
      .uv-uploader-delete {
        position: absolute;
        top: 0;
        right: 0;
        .uv-uploader-delete-shadow {
          width: var(--uv-uploader-delete-shadow-size);
          height: var(--uv-uploader-delete-shadow-size);
          border-radius: var(--uv-uploader-delete-shadow-border-radius);
          background: var(--uv-uploader-delete-shadow-background);
        }
        .uv-uploader-delete-icon {
          position: absolute;
          top: 0;
          right: 0;
          transform: var(--uv-uploader-delete-icon-transform);
        }
      }
      .uv-uploader-img {
        width: 100%;
        height: 100%;
        object-fit: var(--uv-uploader-img-object-fit);
      }
      .uv-uploader-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--uv-uploader-mask-color);
        background: var(--uv-uploader-mask-background);
        flex-direction: column;
        .uv-uploader-uploading-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--uv-uploader-uploading-wrapper-gap);
          font-size: var(--uv-uploader-uploading-wrapper-font-size);
          .uv-uploader-uploading {
            position: relative;
            margin-right: var(--uv-uploader-uploading-margin-right);
            width: var(--uv-uploader-uploading-size);
            height: var(--uv-uploader-uploading-size);
            border: 2px solid var(--uv-uploader-mask-color);
            border-top-color: var(--uv-uploader-mask-color);
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-radius: 100%;
            animation: circle infinite  0.75s linear;
          }
        }
        .uv-uploader-failed-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--uv-uploader-uploading-wrapper-gap);
          font-size: var(--uv-uploader-uploading-wrapper-font-size);
        }
      }
    }
    .uv-uploader-upload-wrapper {
      position: relative;
      display: inline-block;
      background-color: var(--uv-uploader-upload-wrapper-bg-color);
      .uv-uploader-upload {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--uv-uploader-upload-size-width);
        height: var(--uv-uploader-upload-size-height);
      }
      .uv-uploader-input {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
}

</style>
