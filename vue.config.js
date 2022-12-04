/*
 * @Descripttion:
 * @version:
 * @Author: chunwen (chunwen.zou@caibeitv.com)
 * @Date: 2021-04-07 18:04:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 23:22:15
 */
const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/projectA/' : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
      alias: {
        '@/': path.resolve(__dirname, 'src/'),
      },
    },
  },
  devServer: {
    port: 4000,
    // historyApiFallback: true,
    proxy: {
      '/insurance-sys-web': {
        target: 'http://manage-system-dev.test.shiqiao.com',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/insurance-sys-web': '',
        // },
      },
    },
    // proxy: {
    //   '/insurance-sys-web': {
    //     ws: false,
    //     target: 'http://manage-system-dev.test.shiqiao.com',
    //     // target: 'http://10.20.7.174:8080' // 老得请求地址需要ip换域名 废弃ip配置
    //   },
    // },
  },
}
