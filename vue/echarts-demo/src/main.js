import Vue from 'vue'
import App from './App'
import './plugins/echarts'

Vue.config.productionTip = false

new Vue({
  ...App,
}).$mount('#app')
