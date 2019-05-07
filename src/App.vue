<template>
  <div id="app" class="fillcontain">
    <topBar></topBar>
    <div class="container fillcontain">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import topBar from "./components/topBar";
export default {
  name: "App",
  components: {
    topBar
  }
};
</script>

<style lang="less">
@import "./style/common.less";
@import "./style/mixin.less";
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: #eeeeee;
}
.container {
  box-sizing: border-box;
  padding-top: 61px;
}
</style>
