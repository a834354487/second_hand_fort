<template>
  <div class="messagePage">
    <div class="header item-center">
      <h4>消息</h4>
    </div>
    <!-- 通知栏 -->
    <div class="notice">
      <div class="meassgeLab">
        <van-image
          round
          width="3.5rem"
          height="3.5rem"
          :src="require('@/assets/message/notice.png')"
        />
        <div class="info">
          <h4>通知消息</h4>
          <small>公告（二十七）</small>
        </div>
      </div>
      <div class="meassgeLab">
        <van-image
          round
          width="3.5rem"
          height="3.5rem"
          :src="require('@/assets/message/interaction.png')"
        />
        <div class="info">
          <h4>互动消息</h4>
          <small>Hymm赞了你的宝贝</small>
        </div>
      </div>
    </div>
    <!-- 聊天区域 -->
    <div class="main">
      <div class="meassgeLab" v-for="(item, index) in 7" :key="index">
        <!-- 头像 -->
        <van-image round width="3.5rem" height="3.5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
        <!-- 文本内容 -->
        <div class="info">
          <h4>用户名称</h4>
          <small>聊天信息</small>
          <small>4天前</small>
        </div>
        <!-- 聊天标签的图片 -->
        <van-image
          radius="10px"
          width="3.5rem"
          height="3.5rem"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          class="infoImg"
        />
      </div>
    </div>
    <!-- 底部导航条 -->
    <BottomNav :active="2" />
  </div>
</template>

<script>
import BottomNav from '@/component/BottomNav'

export default {
  components: { BottomNav },

}
</script>

<style scoped>
/* 头部 */
.header {
  padding: 10px 0 15px;
}
/* 通知区域 */
.notice {
  padding: 0px 20px;
  margin-bottom: 20px;
  border-bottom: 8px solid #e4e7ee;
}
.notice > div {
  display: flex;
}
/* 每个标签样式 */
.meassgeLab {
  height: 80px;
  display: flex;
  position: relative;
}
/* 每个聊天标签的文字布局 */
.info {
  margin: 6px 16px;
  display: flex;
  flex-direction: column;
}
/* 聊天标签区 */
.main {
  padding: 0px 20px;
  margin-bottom: 50px;
}
/* 聊天标签中的图片 */
.infoImg {
  position: absolute;
  right: 10px;
}
</style>