<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('count-down')
})

</script>

## 基本使用

传入 `time` 数字

```html
<uvCountDown :time="time" />

const time = ref(30 * 60 * 60 * 1000)
```

## 自定义格式

通过 `format` 对数据进行格式化

```html
<uvCountDown :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
```

## 毫秒级渲染

通过 `millisecond` 启用毫秒级渲染

```html
<uvCountDown :time="time" format="HH:mm:ss:SS" millisecond />
```

## 自定义样式

通过 解构默认插槽拿到数据 `{ timeData }`

```html
<uvCountDown :time="time">
  <template #default="{ timeData }">
    <span class="block">{{ timeData.hours }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.minutes }}</span>
    <span class="colon">:</span>
    <span class="block">{{ timeData.seconds }}</span>
  </template>
</uvCountDown>
```

## 手动控制

通过 `ref` 可以拿到 `start` `pause` `reset` 方法

```html
<uvCountDown
  ref="countDownRef"
  millisecond
  :time="9000"
  :auto-start="false"
  format="ss:SSS"
  @finish="onFinish"
/>
```

## props

| 属性        |         含义         |       类型       |     默认值 |
| ----------- | :------------------: | :--------------: | ---------: |
| autoStart   |  是否自动开始倒计时  |     Boolean      |       true |
| millisecond |  是否开启毫秒级渲染  |     Boolean      |      false |
| format      |       时间格式       |      String      | 'HH:mm:ss' |
| time        | 倒计时时长，单位毫秒 | [Number, String] |          0 |

## format 格式

| 格式 |     说明     |
| ---- | :----------: |
| DD   |     天数     |
| HH   |     小时     |
| mm   |     分钟     |
| ss   |     秒数     |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

## events

| 事件名称 |       含义       |        参数 |
| -------- | :--------------: | ----------: |
| change   | 倒计时变化时触发 | currentTime |
| finish   | 倒计时结束时触发 |           - |

## slots

| 名称    |    含义    |     参数 |
| ------- | :--------: | -------: |
| default | 自定义内容 | timeData |


## timeData 格式

| 名称         |          说明          |   类型 |
| ------------ | :--------------------: | -----: |
| total        | 剩余总时间（单位毫秒） | number |
| days         |        剩余天数        | number |
| hours        |        剩余小时        | number |
| minutes      |        剩余分钟        | number |
| seconds      |        剩余秒数        | number |
| milliseconds |        剩余毫秒        | number |


## 方法

通过 ref 可以获取到 CountDown 实例并调用实例方法

| 方法名 |                           说明                            | 参数 |
| ------ | :-------------------------------------------------------: | ---: |
| start  |                        开始倒计时                         |    - |
| pause  |                        暂停倒计时                         |    - |
| reset  | 重设倒计时，若 auto-start 为 true，重设后会自动开始倒计时 |    - |



## css变量

```css
  --uv-count-down-font-size: 14px;
  --uv-count-down-color: #323233;
  --uv-count-down-line-height: 1.5;
```
