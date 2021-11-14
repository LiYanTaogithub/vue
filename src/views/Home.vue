<!--
 * @Descripttion:
 * @version:
 * @Author: chunwen
 * @Date: 2021-11-09 22:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-11 17:31:53
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
