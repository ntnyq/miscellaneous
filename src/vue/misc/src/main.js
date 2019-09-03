import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './styles/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  ...App,
}).$mount('#app')
