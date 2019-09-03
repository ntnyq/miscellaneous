/**
 * @file GA 统计服务
 * @module plugins/analytics
 */
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

import { isBrowser, isProdMode } from '~/env/esm'

if (isBrowser) {
  window.onNuxtReady((app) => {
    Vue.use(VueAnalytics, {
      id: 'UA-144489350-2',
      router: window.$nuxt.$router,
      // https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/custom-analytics.md
      // customResourceURL: `/scripts/analytics.js`,
      autoTracking: {
        exception: true,
        screenview: true
      },
      debug: {
        sendHitTask: isProdMode
      },
      onReady() {
        Vue.$ga.require('displayfeatures')
      }
    })
  })
}
