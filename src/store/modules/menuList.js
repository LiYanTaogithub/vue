/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-10 18:15:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 16:44:56
 */

const data = () => ({
  menu: [],
})

// getters
const getters = {
  getMenus(state) {
    return state.menu
  },
}

// mutations
const mutations = {
  insertMenu(state, item) {
    const hasMenu = state.menu.some((obj) => obj.path === item.path)
    // eslint-disable-next-line no-unused-expressions
    !hasMenu && state.menu.push(item)
  },
  resetMenu(state, item) {
    state.menu = [item]
  },
  deleteOne(state, index) {
    const menus = state.menu
    menus.splice(index, 1)
    state.menu = menus
  },
}

// actions
const actions = {

}

export default {
  namespaced: true,
  state: data,
  actions,
  getters,
  mutations,
}
