<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-09 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-14 23:25:47
-->
<template>
  <layout />
</template>
<script>
import { defineComponent } from 'vue'
import layout from './layout/index.vue'

export default defineComponent({
  components: {
    layout,
  },
  setup() {
    return {
    }
  },
})
</script>
<style lang="scss">
@import '//at.alicdn.com/t/font_2935447_ww9e535jal.css';
#app-container {
  height: 100vh;
  width: 100%;
  .el-container{
    height: 100%;
    width: 100%;
    .el-aside {
      width: 250px;
      background: pink;
    }
  }
}
</style>
