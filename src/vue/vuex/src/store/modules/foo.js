const state = {
  name: 'foo',
  num: Math.floor(Math.random() * 100),
}

const actions = {
  fooAdd({ commit }) {
    commit('FOO_ADD')
  },

  fooReduce({ commit }) {
    commit('FOO_REDUCE')
  },
}

const mutations = {
  FOO_ADD(state) {
    state.num += 1
  },
  FOO_REDUCE(state) {
    state.num -= 1
  },
}

export default {
  state,
  actions,
  mutations,
}
