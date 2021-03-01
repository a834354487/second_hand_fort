<template>
  <div class="changePhonePage">
    <Header toPage="Account" pageName="手机号换绑" />
    <div class="main">
      <p style="margin: 10px 20px 10px; font-size: 14px; pointer-events: none">完成短信验证进行换绑手机号</p>
      <van-form validate-first @failed="onFailed">
        <!-- 电话号码 -->
        <van-field v-model="phone" readonly label="当前手机号" placeholder="手机号" />
        <!-- 通过验证码检验 -->
        <van-field
          v-model="code"
          label="验证码"
          placeholder="验证码"
          :rules="[{ pattern, message: '请输入正确内容' }]"
        >
          <template #button>
            <van-button size="small" type="info">发送验证码</van-button>
          </template>
        </van-field>
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
      phone: '18506007056',
      code: '',
      pattern: /\d{4}/,
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

<style>
</style>