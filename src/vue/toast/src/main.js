import Vue from 'vue'
import App from './App'

import Toast from '@/components/Toast'

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  ...App,
}).$mount('#app')
