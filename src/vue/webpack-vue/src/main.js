import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'

import '@/styles/style.scss'
import '@/components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ...App,
}).$mount('#app')
