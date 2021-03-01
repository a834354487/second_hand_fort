<template>
  <!-- 底部导航条 -->
  <van-tabbar
    v-model="navIndex"
    active-color="#FED802"
    v-if="$store.state.isAppShow"
  >
    <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" replace to="/IPlay">爱玩</van-tabbar-item>
    <van-tabbar-item icon="chat-o" replace to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="setting-o" replace to="/myself"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      navIndex: this.active,
    };
  },
};
</script>

<style>
</style>