import Vue from 'vue'
import App from './App'
import '@/styles/style.scss'
import '@/plugins/element'

Vue.config.productionTip = false

new Vue({
  ...App,
}).$mount('#app')
