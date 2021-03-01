<template>
  <div class="loginPage">
    <!-- 背景图 -->
    <div class="backgroundImg"></div>
    <!-- 登录信息 -->
    <div class="loginInfo">
      <div class="header">
        <router-link to="/">
          <van-icon name="arrow-left" color="white" />
        </router-link>
        <!-- 标题 -->
        <h4>登录</h4>
        <!-- logo 图标 -->
        <div class="logo item-center">
          <van-image round width="5rem" height="5rem" :src="require('@/assets/bg2.jpg')" />
        </div>
      </div>
      <div class="main item-center">
        <!-- 登入信息框 -->
        <div class="loginForm">
          <div class="phone">
            <van-icon name="manager" color="white" size="1.5rem" />
            <input type="text" placeholder="手机号" v-model="phone" />
          </div>
          <div class="code">
            <van-icon name="lock" color="white" size="1.5rem" />
            <input type="text" placeholder="验证码" v-model="code" />
            <a href="javascript:;">获取验证码</a>
          </div>
          <!-- 登录按钮 -->
          <div class="loginButton item-center">
            <input type="submit" value="登录" @click="loginButton" />
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    /**
     * 登录按钮
     */
    loginButton () {
      this.$axios.get("/user/findUserByPhoneForLogin", {
        params: {
          phone: this.phone,
          code: this.code
        }
      }).then(res => {
        if (res.data) {
          // 将用户数据存储到储存箱和vuex
          sessionStorage.setItem("user", res.data)
          this.$store.commit('setUser', res.data)
          // 跳转到原跳转页面
          this.$router.push(this.$store.state.toPage)
        } else {
          Toast({
            message: '请确认手机号或者验证码!',
            position: 'top',
          });
        }
      })
    }
  }
}
</script>

<style scoped>
.loginPage {
  height: 100vh;
}
small,
a {
  color: white;
}

/* 背景模糊图片 */
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../../assets/bg3.jpg') no-repeat;
  background-size: cover;
  /* 模糊 */
  filter: blur(6px);
  /* 类似图层, 设置背景图到最底层 */
  z-index: -1;
}

/* 标题返回键 */
.header {
  text-align: center;
  padding-top: 15px;
}
/* 返回按钮 */
.header a {
  position: absolute;
  left: 15px;
  top: 20px;
}
.header h4 {
  color: white;
  pointer-events: none;
}
/* 设置高度, 除了标题栏外的所有区域 */
.loginInfo {
  height: calc(100% - 40px);
}
/* logo图标 */
.logo {
  padding: 100px 0px 50px 0px;
}

/* 账号, 密码框 */
.loginForm,
.loginForm input {
  border: none;
}
/* 登录表单 */
.loginForm {
  width: 70%;
  max-width: 400px;
  color: white;
}
/* 需要对手机验证码的输入框区域定义宽度 */
.code {
  position: relative;
}
.code input {
  width: 50%;
}
.code a {
  position: absolute;
  right: 0;
}

/* 登录表单中, 用户输入框和密码输入框的div样式 */
.phone,
.password,
.code {
  margin-top: 20px;
  border-bottom: 1px solid white;
  display: flex;
}
/* input的样式 */
.loginForm input {
  background: transparent;
  padding: 2px 0px 10px 10px;
}

/* 登入按钮 */
.loginButton input {
  padding: 0;
  margin-top: 50px;
  background: linear-gradient(to right, #686a6f, #25353f);
  border-radius: 25px;
  width: 70%;
  height: 50px;
  box-shadow: inset 0px 0px 1px gray;
}
</style>