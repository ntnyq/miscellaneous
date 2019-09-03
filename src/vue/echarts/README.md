# v-echarts

**VueEcharts** 按需导入使用示例。

## 配置修改

> Vue-CLI 3.0 与 Vue-CLI 2.0修改配置的方法不同。

[参考文档](https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md)

## 按需引入

先安装 Vue-echarts 依赖。

``` js
$ yarn add vue-echarts
```

在 `src` 目录下创建 `plugins` 文件夹，创建文件 `src/plugins/echarts.js`。

``` js
import Vue from 'vue'
import Echarts from 'vue-echarts/components/ECharts'

// 引入需要引入的图表和组件
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'

// 注册 Vue-charts 并命名。
Vue.component('v-echart', Echarts) // 可以在vue中以 <v-charts></v-echarts> 来使用
```

所有可引入的模块，可参考[Echarts的所有模块](https://github.com/apache/incubator-echarts/blob/master/index.js)

## 常用模块功能

|             模块路径              |    模块功能    |
| :-------------------------------: | :------------: |
|      'echarts/lib/chart/bar'      |     条形图     |
|     'echarts/lib/chart/line'      |     折线图     |
|      'echarts/lib/chart/pie'      |      饼图      |
|    'echarts/lib/chart/scatter'    |     散点图     |
|      'echarts/lib/chart/map'      |      地图      |
| 'echarts/lib/chart/effectScatter' | 带特效的散点图 |
|   'echarts/lib/component/polar'   |    极坐标系    |
|   'echarts/lib/component/grid'    |      栅格      |
|  'echarts/lib/component/tooltip'  |    图表提示    |
|    'echarts/lib/component/geo'    |   地理坐标系   |
|   'echarts/lib/component/title'   |    图标标题    |
|  'echarts/lib/component/toolbox'  |     工具箱     |
| 'echarts/lib/component/visualMap' |  视觉映射组件  |
|  'echarts/lib/component/legend'   |      图例      |

## 扩展导入

``` js
// 安装 echarts-gl 扩展
$ yarn add echarts-gl

// 引入
import 'echarts-gl'
```

## 注册地图

``` js
import Echarts from 'vue-echarts/components/ECharts'
import chinaMap from './china.json'

ECharts.registerMap('china', chinaMap)
```

## 注册主题

``` js
import Echarts from 'vue-echarts/components/ECharts'
// custom theme
import theme from './theme.json'

// registering custom theme
ECharts.registerTheme('ovilia-green', theme)
```

## 创建图表

``` vue
<template>
	<div class="echarts-wrapper">
    <v-echarts :option="option" 
       :theme="themeName"  
     		auto-resize />
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    data () {
      let option = {}
      // 配置option
      return {
        option,
        themeName: 'theme'
      }
    }
  }
</script>

<style lang="scss">
  .echarts-wrapper {
    position: relative;
    width: 600px;
    height: 400px;
    
    .echarts {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
```
