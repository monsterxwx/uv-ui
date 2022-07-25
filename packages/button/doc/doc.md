
<script setup>
    import demo1 from "./demo1.vue";
    import demo2 from "./demo2.vue";
    import demo3 from "./demo3.vue";
    import preview from '@/components/preview.vue'
</script>



## Button 组件

### 基本用法
<demo1></demo1>

<preview compName='button' demoName='demo1'  ></preview>

### 禁用状态
<demo2></demo2>

<preview compName='button' demoName='demo2'  ></preview>

### 其他配置

<demo3></demo3>

<preview compName='button' demoName='demo3' ></preview>

#### props

|参数|说明|类型|默认值|
|-|-|-|-|
|type|按钮状态|string|'default'|
|disabled|禁用状态|boolean|false|
|color|文字颜色|string|''|
|bgColor|背景色|string|''|
|square |方形按钮|boolean|false|
|round |圆形按钮|boolean|false|
|size|按钮尺寸|string|'normal '|
|block |块级元素|boolean|false|


