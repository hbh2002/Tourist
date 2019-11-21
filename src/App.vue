<template>
  <div id="app">
    <keep-alive exclude="Details">
      <!-- 根据当前路由地址显示对应的页面内容 -->
      <!-- exclude 设置某一页面不缓存 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #eee;
}
</style>
