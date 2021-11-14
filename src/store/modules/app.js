/*
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-10 14:48:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-14 15:52:21
 */
const data = () => ({
  isMicroApps: false,
  isCollapse: false, // 侧边栏是否收缩展示
  contentFullScreen: false, // 内容是否可全屏展示
  showLogo: true, // 是否显示Logo
  fixedTop: false, // 是否固定顶部, todo，暂未使用
  showTabs: true, // 是否显示导航历史
  expandOneMenu: true, // 一次是否只能展开一个菜单
  elementSize: 'mini', // element默认尺寸，支持官网四个大小参数
  lang: '', // 默认采用的国际化方案,初次进入，采用浏览器当前设置的语言，默认采用中文
  theme: {
    state: {
      style: 'default',
      primaryColor: '#409eff',
      menuType: 'side',
    },
  },
  menuList: [
    {
      path: '/home',
      name: 'Home',
      meta: { title: '首页', icon: 'icon-Mechanical_lock' },
    },
    {
      path: '/about',
      name: 'About',
      meta: { title: '关于', icon: 'icon-Intelligent_lock' },
    },
    {
      path: '/directive',
      redirect: '/directive/copy',
      meta: { title: '指令集合', icon: 'icon-door' },
      children: [
        {
          path: 'dragable',
          name: 'dragable',
          meta: { title: '拖拽', icon: 'icon-wall-11' },
        },
        {
          path: 'copy',
          name: 'copy',
          meta: { title: '复制', icon: 'icon-electric' },
        },
        {
          path: 'waterMarker',
          name: 'waterMarker',
          meta: { title: '水印', icon: 'icon-Washstand' },
        },
        {
          path: 'longpress',
          name: 'longpress',
          meta: { title: '长按', icon: 'icon-Scenery' },
        },
        {
          path: 'debounce',
          name: 'debounce',
          meta: { title: '防抖', icon: 'icon-window' },
        },
        {
          path: 'scroll',
          name: 'scroll',
          meta: { title: '无限滚动', icon: 'icon-Video_room' },
        },
        {
          path: 'clickOutside',
          name: 'clickOutside',
          meta: { title: '点外', icon: 'icon-paint' },
        },
      ],
    },
    {
      path: '/micro_vue',
      meta: {
        title: 'vue微应用',
        icon: 'icon-wallpaper',
      },
      children: [
        {
          path: 'home',
          meta: {
            title: 'vue子应用',
            icon: 'icon-wallpaper',
            cache: true,
          },
        },
        {
          path: 'about',
          meta: {
            title: 'vue子应用',
            icon: 'icon-wallpaper',
            cache: true,
          },
        },
      ],
    },
    {
      path: '/micro_react/home',
      meta: {
        title: 'react微应用',
        icon: 'icon-bed',
        cache: true,
      },
    },
  ],
})

// mutations
const mutations = {
  isCollapseChange(state, type) {
    state.isCollapse = type
  },
  contentFullScreenChange(state, type) {
    state.contentFullScreen = type
  },
  menuListChange(state, arr) {
    state.menuList = arr
  },
  stateChange(state, option) {
    state[option.name] = option.value
  },
  microChange(state, option) {
    state.isMicroApps = option
  },
}

// actions
const actions = {}

export default {
  namespaced: true,
  state: data,
  actions,
  mutations,
}
