<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2022-03-26 17:05:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-31 10:39:45
-->
<template>
  <div
    class="micro-container"
    v-loading="$store.state.app.isLoadingMicro"
    element-loading-text="Loading..."
  >
    <div id="subapp1"></div>
    <div id="subapp2"></div>
  </div>
</template>

<script>
import {
  onMounted, watch, reactive, onUnmounted,
} from 'vue'
import { loadMicroApp, addGlobalUncaughtErrorHandler } from 'qiankun'

import { useRoute } from 'vue-router'
import { microApps, registerApps } from '@/micro/micro-app'

export default {
  name: 'MicroApp',
  setup() {
    const microList = reactive({})
    const route = useRoute()
    const activationHandleChange = async (path) => {
      console.log('加载当前子应用')
      const activeRules = microApps.map((app) => app.activeRule)
      const isMicro = activeRules.some((rule) => path.startsWith(rule))
      if (!isMicro) return
      const microItem = microApps.find((app) => path.startsWith(app.activeRule.toString()))
      if (!microItem) return
      // 如果已经加载过一次，则无需再次加载
      const current = microList[microItem.activeRule.toString()]
      if (current) return

      // 缓存当前子应用
      const micro = loadMicroApp({ ...microItem })
      microList[microItem.activeRule.toString()] = micro
      try {
        await micro.mountPromise
      } catch (e) {
        console.error('=======', e)
      }
    }
    // qiankun全局异常捕获
    addGlobalUncaughtErrorHandler((event) => console.log(event))
    watch(() => route.path, async (newValue) => {
      activationHandleChange(newValue)
    })
    onMounted(async () => {
      // window.qiankunStarted = true
      console.log('主应用**********MicroApp ======> 进入')
      console.log('子应用加载之前window.qiankunStarted', window.qiankunStarted)
      if (window.qiankunStarted) return
      window.qiankunStarted = true
      console.log('子应用加载之后window.qiankunStarted', window.qiankunStarted)
      registerApps()
      // activationHandleChange(route.path)
    })
    onUnmounted(() => {
      console.log('卸载onUnmounted')
      window.qiankunStarted = false
      Object.values(microList).forEach((mic) => {
        mic.unmount()
      })
    })
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.micro-container{
  height: inherit;
}
</style>
