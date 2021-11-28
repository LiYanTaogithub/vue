/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-01 17:24:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-28 11:28:39
 */
const microApps = [
  {
    name: 'micro_vue',
    entry: '//localhost:4001/micro_vue',
    activeRule: '/micro_vue',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/micro_vue', // 下发路由给子应用，子应用根据该值去定义qiankun环境下的路由
    },
  },
  {
    name: 'micro_react',
    entry: '//localhost:4002/micro_react',
    activeRule: '/micro_react',
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: '/micro_react',
    },
  },
]
export default microApps
