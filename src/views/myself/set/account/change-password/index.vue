<template>
  <div class="changePasswordPage">
    <Header toPage="Account" pageName="修改密码" />
    <div class="main">
      <p style="margin: 10px 20px 10px; font-size: 14px; pointer-events: none">输入正确的密码来重置密码</p>
      <van-form validate-first @failed="onFailed">
        <!-- 用户名 -->
        <van-field v-model="username" readonly label="用户名" placeholder="用户名" />
        <!-- 旧密码 -->
        <van-field
          v-model="password"
          label="旧密码"
          placeholder="旧密码"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 新密码 -->
        <van-field
          v-model="newPassword"
          label="新密码"
          placeholder="新密码"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <!-- 确认新密码 -->
        <van-field
          v-model="reNewPassword"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Header from '@/component/Header'
import { Toast } from 'vant'

export default {
  components: {
    Header
  },

  data () {
    return {
      username: '18506007056',
      password: '',
      newPassword: '',
      reNewPassword: '',
      pattern: /\d{6}/,
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator (val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...');

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo);
    },
  },
}
</script>

<style scoped>
</style>