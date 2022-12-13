<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('notice-bar')
})

</script>

## 基本使用


```html
<uv-notice-bar text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" />
```

## 是否滚动

通过 `scrollable` 设置

 ```html
<uv-notice-bar text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。" :scrollable="false"/>
 ```

 ## 插槽

自定义左侧图标插槽名 `icon` ,自定义内容，默认插槽

```html
<uv-notice-bar :scrollable="false">
  test
</uv-notice-bar>
```

## 通知栏模式

通过 `mode` 设置,可选值为 `close` 和 `link`

```html
<uv-notice-bar
  class="bottom"
  mode="close"
  speed="90"
  :show-left-icon="false"
  text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
  @close="close"
/>
<uv-notice-bar
  mode="link"
  text="米袋虽空——樱花开哉！"
  @click="test"
/>
```



 ## props

| 属性           |            含义             |       类型       |    默认值 |
| -------------- | :-------------------------: | :--------------: | --------: |
| speed          |            速度             | [String, Number] |        60 |
| delay          |          延迟时间           | [String, Number] |         1 |
| scrollable     |        是否开启滚动         |     Boolean      |     false |
| text           |         显示的文字          |      String      |         - |
| color          |          文字颜色           |      String      | '#ed6a0c' |
| bgColor        |          背景颜色           |      String      | '#fffbe8' |
| showLeftIcon   |   是否显示左边的播放图标    |     Boolean      |      true |
| iconProps      |          图标配置           |      Object      |         - |
| mode           | 通知栏模式，可选close和link |      String      |         - |
| rightIconProps |       右边icon的配置        |      Object      |         - |

## events

| 事件名称 |    含义    | 参数 |
| -------- | :--------: | ---: |
| click    |   点击时   |    - |
| close    |   关闭时   |    - |
| replay   | 滚动结束时 |    - |

## css变量

```css
  --uv-notice-bar-padding: 0 16px;
  --uv-notice-bar-height: 40px;
  --uv-notice-bar-line-height: 24px;
  --uv-notice-bar-icon-padding: 10px;
  --uv-notice-bar-content-text-font-size: 14px;
```