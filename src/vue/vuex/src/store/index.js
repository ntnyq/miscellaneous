import Vue from 'vue'
import Vuex from 'vuex'

import foo from './modules/foo'
import bar from './modules/bar'

Vue.use(Vuex)

const state = {
  name: 'root',
  num: Math.floor(Math.random() * 100),
}

const actions = {
  add({ commit }) {
    commit('ADD')
  },

  reduce({ commit }) {
    commit('REDUCE')
  },

  addIfOdd({ commit }) {
    commit('ADD')
  },

  addAsync({ commit }) {
    setTimeout(() => {
      commit('ADD')
    }, 1e3)
  },
}

const mutations = {
  ADD() {
    state.num += 1
  },

  REDUCE() {
    state.num -= 1
  },
}

// 内容过多可以抽出放入文件中维护
const getters = {
  rootNum: state => state.num,
  rootName: state => state.name,
  fooName: state => state.foo.name,
  barName: state => state.bar.name,
  isOdd: state => state.num % 2 !== 0,
  fooNum: state => state.foo.num,
  barNum: state => state.bar.num,
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    foo,
    bar,
  },
})

export default store
