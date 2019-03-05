import Vue from 'vue'
import Echarts from 'vue-echarts/components/ECharts'
// import Echarts from 'vue-echarts'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'

Vue.component('v-echart', Echarts)
