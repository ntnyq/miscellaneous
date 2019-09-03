// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Global style
import '@/scss/style.scss'

// Global custom components
import Components from './components'

Vue.use(Components)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App,
}).$mount('#app')
