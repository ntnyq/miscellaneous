import Vue from 'vue'
import filters from '~/utils/filters'

// import i18nConfig from '~/config/i18n.config'
// import { i18nTransfer } from '~/transformers/i18n'

// const i18nData = i18nTransfer(i18nConfig)

// Vue.prototype.cdnUrl = cdnUrl
// Vue.prototype.proxyUrl = proxyUrl
// Vue.prototype.$apiConfig = apiconfig

// Filters
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))

// Components

Vue.mixin({
  computed: {
    // $i18n () {
    //   return i18nData[this.$store.state.global.language]
    // }
  }
})
