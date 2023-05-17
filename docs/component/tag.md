<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('tag')
})

</script>

## 基本使用

```html
<uvTag>标签</uvTag>
<uvTag type="success">
  标签
</uvTag>
<uvTag type="danger">
  标签
</uvTag>
<uvTag type="warning">
  标签
</uvTag>
```

## 样式风格

```html
<uvTag plain>
  标签
</uvTag>
<uvTag plain type="success">
  标签
</uvTag>
<uvTag plain type="danger">
  标签
</uvTag>
<uvTag plain type="warning">
  标签
</uvTag>
<uvTag round>
  标签
</uvTag>
<uvTag round plain>
  标签
</uvTag>
<uvTag mark>
  标签
</uvTag>
<uvTag mark plain>
  标签
</uvTag>
<uvTag :show="show" closeable @close="close">
  标签
</uvTag>
<uvTag
  :show="show1"
  plain
  color="#1989fa"
  closeable
  @close="close1"
>
  标签
</uvTag>
```

## 标签大小

```html
<uvTag>标签</uvTag>
<uvTag size="medium">
  标签
</uvTag>
<uvTag size="large">
  标签
</uvTag>

```

## 自定义颜色

```html
<uvTag bg-color="#7232dd">
  标签
</uvTag>
<uvTag color="#ad0000" bg-color="#ffe1e1">
  标签
</uvTag>
<uvTag color="green" plain>
  标签
</uvTag>

```

 ## props

| 属性      |                     含义                      |  类型   |  默认值 |
| --------- | :-------------------------------------------: | :-----: | ------: |
| show      |                 是否展示标签                  | Boolean |    true |
| closeable |               是否为可关闭标签                | Boolean |   false |
| type      | 类型，可选值为 primary success danger warning | String  | primary |
| size      |          大小, 可选值为 large medium          | String  |       - |
| color     |                   标签颜色                    | String  |       - |
| bgColor   |                 标签背景颜色                  | String  |       - |
| plain     |                是否为空心样式                 | Boolean |   false |
| round     |                是否为圆角样式                 | Boolean |   false |
| mark      |                是否为标记样式                 | Boolean |   false |

## events

| 事件名称 |    含义    | 参数 |
| -------- | :--------: | ---: |
| close    | 关闭标签时 |    - |

## css变量

```css
  --uv-tag-primary-color: #1989fa;
  --uv-tag-success-color: #07c160;
  --uv-tag-danger-color: #ee0a24;
  --uv-tag-warning-color: #ff976a;
  --uv-tag-plain-bg-color: #ffffff;
  --uv-tag-mini-padding: 0 4px;
  --uv-tag-mini-font-size: 12px;
  --uv-tag-medium-padding: 2px 6px;
  --uv-tag-large-padding: 4px 8px;
  --uv-tag-large-font-size: 14px;
  --uv-tag-line-height: 1.5;
  --uv-tag-border-radius: 0;
  --uv-tag-round-border-radius: 999px;
  --uv-tag-transition-time: 0.3s;
  --uv-tag-text-color: #ffffff;
```