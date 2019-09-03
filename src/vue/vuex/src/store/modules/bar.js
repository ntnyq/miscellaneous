const state = {
  name: 'bar',
  num: Math.floor(Math.random() * 100),
}

const actions = {
  barAdd({ commit }) {
    commit('BAR_ADD')
  },

  barReduce({ commit }) {
    commit('BAR_REDUCE')
  },
}

const mutations = {
  BAR_ADD(state) {
    state.num += 1
  },
  BAR_REDUCE(state) {
    state.num -= 1
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
