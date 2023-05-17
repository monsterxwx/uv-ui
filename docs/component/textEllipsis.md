<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('text-ellipsis')
})

</script>

## 基本使用

```html
<uvTextEllipsis content="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
```

## 自定义省略文字

```html
<uvTextEllipsis dots="---" content="慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。" />
```

## 展开/收起

```html
<uvTextEllipsis expand-text="展开" collapse-text="收起" content="似水流年是一个人所有的一切，只有这个东西，才真正归你所有。其余的一切，都是片刻的欢娱和不幸，转眼间就已跑到那似水流年里去了。" />
```

## 自定义展示行数，设置3行

```html
<uvTextEllipsis
  rows="3"
  expand-text="展开"
  collapse-text="收起"
  content="那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。"
/>
```

## props

| 属性         |       含义       |       类型       | 默认值 |
| ------------ | :--------------: | :--------------: | -----: |
| content      |  需要展示的文本  |      String      |      - |
| rows         |       行数       | [String, Number] |      1 |
| expandText   |  展开操作的文案  |      String      |      - |
| collapseText |  收起操作的文案  |      String      |      - |
| dots         | 省略号的文本内容 |      String      |  '...' |

## events

| 事件名称    |        含义        |  参数 |
| ----------- | :----------------: | ----: |
| clickAction | 点击展开收起时触发 | event |

## css 变量

```css
  --uv-text-ellipsis-action-text-color: #1989fa;
  --uv-text-ellipsis-line-height: 1.6;
  --uv-text-ellipsis-color: #323233;
  --uv-text-ellipsis-font-size: 14px;
```
