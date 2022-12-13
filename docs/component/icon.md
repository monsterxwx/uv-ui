## icon 图标

### 图标列表（点击复制）


<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('icon')
})

</script>

## props

| 属性  |      含义      |      类型       | 默认值 |
| ----- | :------------: | :-------------: | -----: |
| name  |    图标名称    |     String      |      - |
| color |    图标颜色    |     String      |      - |
| size  |    图标大小    | [String,Number] |   '14' |
| dot   |  是否显示红点  |     Boolean     |  false |
| badge | 红点显示的数字 | [String,Number] |      - |

## events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 点击事件 |    - |

## css变量

```css
  --uv-icon-info-top: 4px;
  --uv-icon-info-right: 0;
  --uv-icon-info-padding: 0 3px;
  --uv-icon-info-min-width: 16px;
  --uv-icon-info-font-size: 12px;
  --uv-icon-info-font-weight: 500;
  --uv-icon-info-border: 1px solid #ffffff;
  --uv-icon-info-border-radius: 16px;
  --uv-icon-info-color: #ffffff;
  --uv-icon-info-bg-color: #ee0a24;
  --uv-icon-dot-size: 8px;
  --uv-icon-dot-bg-color: #ee0a24;
```