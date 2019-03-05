import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './icons'

import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  ...App,
}).$mount('#app')
