<template>
  <div id="app" class="fillcontain">
    <router-link to="/basics/html/">Go to html</router-link>
    <br>
    <router-link to="/basics/css/">Go to css</router-link>
    <br>
    <router-link to="/basics/js/">Go to js</router-link>
    <br>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import "./style/common.less";
@import "./style/mixin.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
