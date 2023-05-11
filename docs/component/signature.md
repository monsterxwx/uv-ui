<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('signature')
})

</script>

## 基本使用

```html
<uvSignature @submit="submitImg" />
```

##  修改画笔宽度和颜色

通过 `lineWidth` 设置画笔宽度,通过 `pen-color` 设置画笔颜色

 ```html
<uvSignature pen-color="#bfa" :line-width="6" />
 ```
## 插槽
通过`footer`名称插槽可以替换操作按钮

## ref
通过ref可以拿到这两个方法 `clear` 、`submit`

 ## props

| 属性              |      含义      |  类型  |  默认值 |
| ----------------- | :------------: | :----: | ------: |
| width             |      宽度      | String |  '100%' |
| height            |      高度      | String | '200px' |
| lineWidth         |   画笔的宽度   | Number |       3 |
| penColor          |   画笔的颜色   | String |  '#000' |
| exportImgType     | 导出图片的类型 | String |   'png' |
| clearButtonText   |   清空的名字   | String |  '清空' |
| confirmButtonText |   确定的名字   | String |  '确认' |


## events

| 事件名称 |        含义        |                                               参数 |
| -------- | :----------------: | -------------------------------------------------: |
| start    |   开始签名时触发   |                                                  - |
| end      |   结束签名时触发   |                                                  - |
| signing  |   签名过程中触发   |                                  event: TouchEvent |
| submit   | 点击确定按钮时触发 | data: { image: string; canvas: HTMLCanvasElement } |
| clear    | 点击取消按钮时触发 |                                                  - |


## css变量

```css
  --uv-signature-default-gap: 5px;
  --uv-signature-content-border: 1px dotted #dadada;
  --uv-signature-content-border-radius: 8px;
  --uv-signature-content-bg-color: #ffffff;
  --uv-signature-footer-button-text-padding: 8px 16px;
  --uv-signature-footer-button-text-size: 12px;
  --uv-signature-footer-button-border-radius: 4px;
  --uv-signature-footer-clear-button-border: 1px solid #dcdee0;
  --uv-signature-footer-clear-button-color: #323233;
  --uv-signature-footer-clear-button-bg-color: #ffffff;
  --uv-signature-footer-confim-button-color: #ffffff;
  --uv-signature-footer-confim-button-bg-color: #1989fa;
```