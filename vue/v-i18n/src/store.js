import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: Cookies.get('language') || 'zh',
  },
  mutations: {
    SET_LANGUAGE(state, lang) {
      state.language = lang
      Cookies.set('language', lang)
    },
  },
  actions: {
    setLanguage({ commit }, lang) {
      commit('SET_LANGUAGE', lang)
    },
  },
})
