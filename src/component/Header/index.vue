<template>
  <div class="header item-center">
    <h4>{{pageName}}</h4>
    <router-link :to="{name: toPage}">
      <van-icon name="arrow-left" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
    'pageName',
    'toPage'
  ]
}
</script>

<style scoped>
/* 头部 */
.header {
  position: relative;
  padding: 10px 0 15px;
}
/* 返回 */
.header a {
  position: absolute;
  left: 10px;
  top: 13px;
}
</style>