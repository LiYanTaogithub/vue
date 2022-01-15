/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-09 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-15 15:51:09
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'element-plus/theme-chalk/display.css' // 引入基于断点的隐藏类
import 'normalize.css' // css初始化
import '@/assets/style/common.scss' // 公共css
import { registerMicroApps, start } from 'qiankun'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import microApps from '@/micro-app'

const instance = createApp(App)
instance.use(ElementPlus)
instance.use(store)
instance.use(router)
instance.mount('#app')

registerMicroApps(microApps, {
  beforeLoad: (app) => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    (app) => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    },
  ],
  afterMount: [
    (app) => {
      store.commit('app/microChange', true)
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name, store.state.app.isMicroApps)
    },
  ],
  afterUnmount: [
    (app) => {
      store.commit('app/microChange', false)
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name, store.state.app.isMicroApps)
    },
  ],

})

start({
  sandbox: {
    // qiankun提供的样式隔离方法（严格模式）
    strictStyleIsolation: true,
  },
})
