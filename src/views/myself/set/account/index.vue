<template>
  <div class="accountPage">
    <Header toPage="Set" pageName="账号" />
    <div class="main">
      <div class="setLink">
        <router-link :to="{name: item.path}" v-for="(item, index) in AccountItem" :key="index">
          <p>{{item.name}}</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
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
      AccountItem: [
        { name: '手机号码', path: 'ChangePhone' },
        { name: '修改密码', path: 'ChangePassword' }
      ]
    }
  }
}
</script>

<style scoped>
.main {
  border-top: 8px solid #f3f4f8;
}
</style>