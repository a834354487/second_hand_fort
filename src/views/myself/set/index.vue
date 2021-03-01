<template>
  <div class="setPage">
    <!-- 头部标题 -->
    <Header toPage="Myself" pageName="设置" />
    <!-- 个人资料设置, 收货地址, 账号 -->
    <div class="setLink">
      <router-link :to="item.path" v-for="(item, index) in meList" :key="index">
        <p>{{item.name}}</p>
        <van-icon name="arrow" />
      </router-link>
    </div>
    <!-- 退出登录 -->
    <div class="loginOut item-center">
      <a href="javascript:;" @click="loginOut">退出登录</a>
    </div>
  </div>
</template>

<script>
import Header from '@/component/Header'

export default {
  components: {
    Header
  },
  data () {
    return {
      meList: [
        { name: '个人资料设置', path: '/set/myInfoSet' },
        { name: '收货地址', path: '/set/address' },
        { name: '账号', path: '/set/account' },
      ],
    }
  },
  methods: {
    loginOut () {
      sessionStorage.removeItem("user")
      this.$store.commit("setUser", null)
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
/* 退出按钮的背景颜色和高度 */
.loginOut {
  background-color: #e4e7ee;
  height: 50px;
}
.loginOut a {
  background-color: red;
  padding: 8px 40%;
  color: white;
}
</style>