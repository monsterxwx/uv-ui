<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('slider')
})

</script>

## 基本使用

```html
<uv-slider v-model="test" />
```

## 进度条激活态和非激活态颜色

通过 `activeColor` 设置

```html
<uv-slider active-color="red" v-model="test" />
```

## 进度条高度和按钮大小

通过 `barHeight` 和 `buttonSize` 设置

```html
<uv-slider bar-height="6" button-size="28" v-model="test" />
```

## 禁用滑块

通过 `disabled` 设置

```html
<uv-slider disabled v-model="test" />
```

## 最大最小值

通过 `max` 和 `min` 设置

```html
<uv-slider :max="60" :min="30" v-model="test" />
```

## 自定义滑块按钮

通过插槽名 `button` 设置

```html
<uv-slider v-model="test">
  <template #button>
    <div class="diyButton">{{ test }}</div>
  </template>
</uv-slider>
```

## props

| 属性          |      含义      |       类型       |    默认值 |
| ------------- | :------------: | :--------------: | --------: |
| modelValue    |  双向绑定的值  |      Number      |         0 |
| inactiveColor | 不活跃时的颜色 |      String      | '#ebedf0' |
| activeColor   |  活跃时的颜色  |      String      | '#1989fa' |
| barHeight     |   进度条高度   | [String, Number] |         3 |
| buttonSize    |    按钮大小    | [String, Number] |        24 |
| disabled      |    是否禁用    |     Boolean      |     false |
| min           |    是否禁用    |      Number      |         0 |
| max           |    是否禁用    |      Number      |       100 |

## events

| 事件名称   |        含义        |     参数 |
| ---------- | :----------------: | -------: |
| change     | 绑定的值发生改变时 | 当前的值 |
| drag-start |     开始拖动时     |        - |

## css 变量

```css
--uv-slider-height: 3px;
--uv-slider-border-radius: 50px;
--uv-slider-circle-content-size: 24px;
--uv-slider-circle-content-bg-color: #ffffff;
--uv-slider-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
--uv-slider-value-disabled-bg-color: #88c0fa !important;
--uv-slider-disabled-circle-content-box-shadow: 0 1px 2px rgb(0 0 0 / 40%);
```
