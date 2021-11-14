/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-10 18:15:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-11 17:30:41
 */
import { loginApi, getInfoApi, loginOutApi } from '@/api/user'

const data = () => ({
  token: '', // 登录token
  info: {}, // 用户信息
})

// getters
const getters = {
  token(state) {
    return state.token
  },
}

// mutations
const mutations = {
  tokenChange(state, token) {
    state.token = token
  },
  infoChange(state, info) {
    state.info = info
  },
}

// actions
const actions = {
  // login by login.vue
  login({ commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      loginApi(params)
        .then((res) => {
          commit('tokenChange', res.data.token)
          dispatch('getInfo', { token: res.data.token }).then(() => {
            resolve(res.data.token)
          })
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  // get user info after user logined
  getInfo({ commit }, params) {
    return new Promise((resolve) => {
      getInfoApi(params).then((res) => {
        commit('infoChange', res.data.info)
        resolve(res.data.info)
      })
    })
  },

  // login out the system after user click the loginOut button
  loginOut() {
    loginOutApi()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        localStorage.removeItem('tabs')
        localStorage.removeItem('vuex')
        window.location.reload()
      })
  },
}

export default {
  namespaced: true,
  state: data,
  actions,
  getters,
  mutations,
}
