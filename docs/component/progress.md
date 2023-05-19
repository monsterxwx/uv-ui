<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('progress')
})

</script>

## 基本使用

通过 `percent` 传入数字

```html
<uvProgress :percent="60" />
```

## 不显示百分比

通过 `show-percent`关闭

```html
<uvProgress :percent="60" :show-percent="false" />
```

## 外部百分比显示

通过 `inset-percent`关闭内部百分比显示外部

```html
<uvProgress :percent="60" :inset-percent="false" />
```

## 修改颜色和高度

通过 `height` 修改进度条高度，通过 `track-color` 修改轨道的背景颜色，通过 `progress-color`修改进度条的颜色

```html
<uvProgress
  :percent="60"
  height="15px"
  track-color="#fff"
  progress-color="#1989fa"
/>
```

## props

| 属性          |           含义           |  类型   | 默认值 |
| ------------- | :----------------------: | :-----: | -----: |
| percent       |       进度条百分比       | Number  |      0 |
| showPercent   | 是否显示进度条百分比文字 | Boolean |   true |
| insetPercent  |       文字内部显示       | Boolean |   true |
| trackColor    |       轨道背景颜色       | String  |      - |
| progressColor |        进度条颜色        | String  |      - |
| height        |        进度条高度        | String  |      - |



## css变量

```css
  --uv-progress-height: 12px;
  --uv-progress-content-border-radius: 100px;
  --uv-progress-content-length-bg-color: #19be6b;
  --uv-progress-transition-time: 0.3s;
  --uv-progress-inset-num-color: #ffffff;
  --uv-progress-inset-num-padding-right: 5px;
  --uv-progress-inset-num-font-size: 12px;
  --uv-progress-out-num-font-size: 14px;
  --uv-progress-out-num-width: 40px;
  --uv-progress-out-num-padding: 0 10px;
  --uv-progress-out-num-color: #c8c9cc;
```
