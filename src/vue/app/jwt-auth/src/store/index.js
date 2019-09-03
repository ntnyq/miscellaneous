import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { apiLogin, apiRegist, apiLogout } from '@/services/auth'

Vue.use(Vuex)

const isLogin = () => {
  const token = getToken()

  if (token) {
    let payload = JSON.parse(window.atob(token.split('.')[1]))

    if (payload.exp > Date.now() / 1000) {
      return token
    } else {
      return false
    }
  } else {
    return false
  }
}

const state = {
  token: isLogin() || null,
}

const getters = {
  token: state => state.token,
  username: state => {
    let username = ''

    if (state.token) {
      const payload = JSON.parse(window.atob(state.token.split('.')[1])) || {}

      username = payload.username
    }

    return username
  },
}

const actions = {
  login({ commit }, params) {
    return new Promise((resolve, reject) => {
      apiLogin(params)
        .then(res => {
          commit('LOGIN', res)
          resolve(res)
        })
        .catch(reject)
    })
  },

  logout({ commit }, params) {
    return new Promise((resolve, reject) => {
      apiLogout(params)
        .then(() => {
          commit('LOGOUT')
          resolve()
        })
        .catch(reject)
    })
  },

  regist({ commit }, params) {
    return new Promise((resolve, reject) => {
      apiRegist(params)
        .then(res => {
          commit('REGIST', res)
          resolve(res)
        })
        .catch(reject)
    })
  },
}

const mutations = {
  LOGIN(state, data) {
    const { token } = data

    state.token = token
    token && setToken(token)
  },

  LOGOUT(state) {
    getToken() && removeToken()
    state.token = null
  },

  REGIST(state, data) {
    const { token } = data

    state.token = token
    token && setToken(token)
  },
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})

export default store
