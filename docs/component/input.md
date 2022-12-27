<script setup>
import useCompStore from '../store/copname.js'
import { onMounted } from 'vue'
const compStore =useCompStore()

onMounted(()=>{
  compStore.updateName('input')
})

</script>

## 基本使用

```html
<uv-input v-model="value"/>
```

##  是否开启边框

通过 `border` 设置

```html
<uv-input border v-model="value"/>
```

##  禁用输入框

通过 `readonly` 设置只读，通过  `disabled` 设置禁止填写

 ```html
<uv-input readonly v-model="value2"/>

<uv-input disabled v-model="value1"/>
 ```

##  是否显示关闭按钮

通过 `clearable` 设置

 ```html
<uv-input clearable v-model="value1"/>
 ```

##  自定义右边内容

通过插槽名称 `right` 设置

 ```html
<uv-input v-model="value1">
  <template #right>
    <div class="diy">
      m
    </div>
  </template>
</uv-input>
 ```

##  格式化

通过 `formatter` 传入格式化函数，通过 `formatTrigger` 修改在何时格式化，可选值为 `change`在输入框改变时，`blur`在失去焦点时

 ```vue
 <template>
    <uv-input
      :formatter="formatterF"
      format-trigger="change"
      v-model="value3"
    />

    <uv-input
      :formatter="formatterF"
      format-trigger="blur"
      v-model="value4"
    />
</template>

<script setup>
const formatterF = (test) => {
  return `$ ${test}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
</script>
 ```

##  类型

通过 `type` 设置,有 `password` `number` `textarea`

 ```html
<uv-input type="password" v-model="value5"/>

<uv-input type="number" v-model="value5"/>
 ```

##  输入框内容对齐方式

通过 `inputAlign` 设置,有 `left` `center` `right`

 ```html
<uv-input input-align="center" v-model="value5"/>

<uv-input input-align="right" v-model="value5"/>
 ```

##  自动高度

通过 `autosize` 设置,只对类型为 `textarea` 有效,可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px

 ```html
<uv-input type="textarea" autosize v-model="value6"/>

<uv-input type="textarea" :autosize="{maxHeight:100,minHeight:50}" v-model="value7"/>
 ```

##  显示字数统计

通过 `showWordLimit` 设置,需要传入 `maxlength` 属性设置最大字数限制

 ```html
<uv-input
  type="textarea"
  show-word-limit
  :maxlength="90"
  autosize
  v-model="value8"
/>
 ```

## props

| 属性          |                        含义                        |       类型        |   默认值 |
| ------------- | :------------------------------------------------: | :---------------: | -------: |
| modelValue    |                    双向绑定的值                    | [String, Number]  |        - |
| type          | input类型，有'text','password','number','textarea' |      String       |   'text' |
| placeholder   |                   默认显示的内容                   |      String       | '请输入' |
| disabled      |                   是否禁用input                    |      Boolean      |    false |
| readonly      |                      是否只读                      |      Boolean      |    false |
| clearable     |                  是否显示清除按钮                  |      Boolean      |    false |
| border        |                    是否显示边框                    |      Boolean      |    false |
| formatter     |                     格式化函数                     |     Function      |        - |
| formatTrigger |       格式化函数的触发时机，'change'或'blur'       |      String       | 'change' |
| inputAlign    |     input的文字位置,'left'、'center'、'right'      |      String       |   'left' |
| autosize      |                      自动高度                      | [Boolean, Object] |    false |
| maxlength     |                    文字最大长度                    |      Number       |        - |
| showWordLimit |                  显示文字字数统计                  |      Boolean      |    false |

## events
| 事件名称 |    含义    |   参数 |
| -------- | :--------: | -----: |
| change   | 内容改变时 | 当前值 |
| blur     | 失去焦点时 |      - |
| focus    | 获取焦点时 |      - |
| keydown  | 键盘按下时 |  事件e |

## css变量
```css
  --uv-input-wrap-font-size: 14px;
  --uv-input-wrap-padding: 0 10px;
  --uv-input-word-limit-font-size: 12px;
  --uv-input-word-limit-padding-bottom: 5px;
  --uv-input-word-limit-color: #646566;
  --uv-input-padding: 5px 0;
  --uv-input-border-radius: 4px;
  --uv-input-bg-color: #ffffff;
  --uv-input-height: 32px;
  --uv-input-placeholder-color: #d3c9d6;
  --uv-input-disabled-color: #d3c9d6;
```