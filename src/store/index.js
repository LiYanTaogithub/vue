/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-09 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-12 18:35:43
 */
import { createStore } from 'vuex'

import app from './modules/app'
import user from './modules/user'
import keepAlive from './modules/keepAlive'

export default createStore({
  modules: {
    app,
    user,
    keepAlive,
  },
  strict: true,
})
