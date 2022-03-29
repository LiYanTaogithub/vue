/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-09 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-29 16:01:01
 */
import { createStore } from 'vuex'

import app from './modules/app'
import user from './modules/user'
import keepAlive from './modules/keepAlive'
import menuList from './modules/menuList'

export default createStore({
  modules: {
    app,
    user,
    keepAlive,
    menuList,
  },
  strict: true,
})
