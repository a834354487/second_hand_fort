<template>
  <div>
    <div class="header item-center">
      <a href="javascript:;">
        <van-icon name="search" size="1.5rem" />
      </a>
      <h4>爱玩</h4>
      <a href="javascript:;">发帖子</a>
    </div>
    <div class="nav">
      <van-tabs @click="onClick" color="transparent">
        <van-tab title="推荐"></van-tab>
        <van-tab title="数码"></van-tab>
        <van-tab title="衣服"></van-tab>
        <van-tab title="奢侈品"></van-tab>
        <van-tab title="5G"></van-tab>
        <van-tab title="运动户外"></van-tab>
        <van-tab title="二手车"></van-tab>
        <van-tab title="手办"></van-tab>
      </van-tabs>
    </div>
    <div class="infoDiv">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="info"
      >
        <div class="info-cell" v-for="item in list" :key="item">
          <div>{{item}}</div>
        </div>
      </van-list>
    </div>
    <!-- 底部导航条 -->
    <BottomNav :active="1" />
  </div>
</template>

<script>
import BottomNav from '@/component/BottomNav'

export default {
  components: { BottomNav },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    // 当标签导航被点击 
    onClick (name, title) {
      console.log(name, title);
    },
    // 当数据拉到底部, 重新加载数据
    onLoad () {
      // 改变状态
      this.loading = true;
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  }
}
</script>

<style scoped>
/* 头部 */
.header {
  padding: 12px 12px;
  position: relative;
}
/* 搜索按钮 */
.header a:first-child {
  position: absolute;
  left: 10px;
}
/* 发帖子按钮 */
.header a:last-child {
  border: 1px solid #e4e7ee;
  border-radius: 25px;
  padding: 5px 10px;
  position: absolute;
  right: 10px;
  top: 8px;
}

/* 图片信息区域 */
.infoDiv {
  padding: 0px 10px;
}
/* 标签导航下的内容 */
.info {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: wrap;
}
/* 每个小方块 */
.info-cell {
  display: flex;
  border: 5px solid transparent;
  width: 50%;
  height: 240px;
  box-sizing: border-box;
}
/* 测试代码 */
.info-cell div {
  background-color: gray;
  width: 100%;
}
</style>