<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('uploader')
})

</script>

## 基本使用

```html
<uvUploader />
```

## 文件预览

通过 `v-model`绑定预览数组

```html
<uvUploader v-model="picList" />
```

## 限制上传数量

通过 `max-count`限制上传数量

```html
<uvUploader v-model="picList2" :max-count="2" />
```

## 限制上传大小

通过 `max-size`限制上传大小，可传入数字、字符串、函数（返回值为布尔值）

```html
<uvUploader v-model="picList3" :max-size="500 * 1024" @oversize="onOversize" />
```

## 上传状态

通过 `status` 设置 `uploading`表示上传中，设置 `failed`表示失败，传入 `message` 可自定义文字，一般通过 `after-read` 读取文件后调用上传接口来对状态进行处理

```vue
<uvUploader v-model="picList1" />

<script setup>
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
</script>
```

## 上传前置处理

```vue
<uvUploader :before-read="beforeRead" />

<script setup>
const beforeRead = (file) => {
  if (file.type !== 'image/jpeg') {
    Toast({
      message: '请上传 jpg 格式图片'
    })
    return false
  }
  return true
}
</script>
```

## 禁用文件上传

设置 `disabled`  为 `true` 禁用文件上传

```html
<uvUploader disabled />
```

## 自定义上传样式

通过默认插槽设置自定义样式

```html
<uvUploader class="diy-uploader" v-model="picList4">
  <img
    src="https://cdn.uviewui.com/uview/demo/upload/positive.png"
    mode="widthFix"
    style="width: 250px;height: 150px;"
  >
</uvUploader>
```

## 自定义预览样式

通过 `preview-cover` 插槽自定义预览样式，作用域插槽解构返回 `file` 和 `item` ，item为子项，file为文件对象

```html
<uvUploader v-model="picList5">
  <template #preview-cover="{file,item}">
    <div class="diy-cover">
      {{ item?.name ||file?.name }}
    </div>
  </template>
</uvUploader>
```

## props

| 属性         |                               含义                                |            类型            |    默认值 |
| ------------ | :---------------------------------------------------------------: | :------------------------: | --------: |
| v-model      |                         已上传的文件列表                          |           Array            |        [] |
| disabled     |                         是否禁用文件上传                          |          Boolean           |     false |
| deletable    |                         是否展示删除按钮                          |          Boolean           |      true |
| maxCount     |                         文件上传数量限制                          | [Number, String, Function] |  Infinity |
| maxSize      |                     文件大小限制，单位为 byte                     |           Number           |  Infinity |
| beforeRead   | 文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise |          Function          |         - |
| afterRead    |                     文件读取完成后的回调函数                      |          Function          |         - |
| resultType   |               文件读取结果类型，可选值为 file text                |           String           | 'dataUrl' |
| previewImage |                    是否在上传完成后展示预览图                     |          Boolean           |      true |


## 回调参数
before-read、after-read、before-delete 执行时会传递以下回调参数：

| 参数名 |               说明                |   类型 |
| ------ | :-------------------------------: | -----: |
| file   |             file 对象             | Object |
| detail | 额外信息，包含 name 和 index 字段 | Object |

## ResultType 可选值

`result-type` 字段表示文件读取结果的类型，上传大文件时，建议使用 file 类型，避免卡顿。

| 值      |                      描述                      |
| ------- | :--------------------------------------------: |
| file    |              结果仅包含 File 对象              |
| text    |     结果包含 File 对象，以及文件的文本内容     |
| dataUrl | 结果包含 File 对象，以及文件对应的 base64 编码 |

## events

| 事件名称      |          含义          |          参数 |
| ------------- | :--------------------: | ------------: |
| oversize      | 文件大小超过限制时触发 | 同 after-read |
| delete        |    点击预览图时触发    | 同 after-read |
| click-upload  |   点击上传区域时触发   |         event |
| click-preview |    点击预览图时触发    |          item |

## slots

| 名称           |              含义              |      参数 |
| -------------- | :----------------------------: | --------: |
| default        |         自定义上传区域         |         - |
| preview-delete |         自定义删除按钮         |         - |
| preview-cover  | 自定义覆盖在预览区域上方的内容 | item,file |

## css变量

```css
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
```
