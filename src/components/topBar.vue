<template>
  <div class="topBar">
    <!-- <div class="line"></div> -->
    <el-menu
      class="topBar"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="/basics/">
        <template slot="title">基础知识</template>
        <el-menu-item index="/basics/html/">HTML</el-menu-item>
        <el-menu-item index="/basics/css/">CSS</el-menu-item>
        <el-menu-item index="/basics/js/">JS</el-menu-item>
      </el-submenu>
      <el-menu-item index="/error/" disabled>消息中心</el-menu-item>
      <el-menu-item>
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data () {
    return {

    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.topBar {
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
}
</style>