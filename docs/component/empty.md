<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('empty')
})

</script>

## 基本使用

通过 `label`修改提示词

```html
<uvEmpty label="无数据" />
```

## 自定义大小

通过 `image-size` 调整大小

```html
<uvEmpty image-size="80" label="无数据" />
```

## 自定义图片

当传入`image`时会使用image的图片地址

```html
<uvEmpty image-size="80" image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" label="无数据" />
```

## 自定义底部内容

通过默认插槽修改底部内容

```html
<uvEmpty>
  我是自定义内容
  <div style="margin-top: 10px;">
    <uv-button>按钮</uv-button>
  </div>
</uvEmpty>
```

## props

| 属性      |   含义   |       类型       |    默认值 |
| --------- | :------: | :--------------: | --------: |
| image     | 图片地址 |      String      | 'default' |
| imageSize | 图片尺寸 | [String, Number] |       160 |
| label     | 底部文字 |      String      |         - |

## events

| 事件名称 |   含义   | 参数 |
| -------- | :------: | ---: |
| click    | 点击事件 |    - |

## css变量

```css
  --uv-empty-label-margin-top: 16px;
  --uv-empty-label-font-size: 14px;
  --uv-empty-label-color: #969799;
```
