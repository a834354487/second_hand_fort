<template>
  <div class="home">
    <div class="header">
      <!-- 导航 -->
      <div class="nav">
        <ul class="navUl">
          <li>
            <a href="#">关注</a>
          </li>
          <li>
            <a href="#">推荐</a>
          </li>
          <li>
            <a href="#">福州</a>
          </li>
        </ul>
      </div>
      <!-- 搜索框区域 -->
      <div class="search">
        <div class="searchInput">
          <input type="text" placeholder="提示文字" />
          <a href="#">搜索</a>
        </div>
        <router-link to="/sort">分类</router-link>
      </div>
      <!-- 打折区域 -->
      <div class="sale">
        <div class="area">
          <h3>无忧购</h3>
          <span style="color: #FD9500; line-height: 30px; font-weight: bold">包真 · 包退 · 包邮</span>
        </div>
        <span></span>
        <div class="area">
          <h3>省心卖</h3>
          <span style="color: #FF5959; line-height: 30px; font-weight: bold">高价回收 48小时必卖</span>
        </div>
      </div>
    </div>
    <div class="main">
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
    </div>
    <!-- 底部导航条 -->
    <BottomNav :active="0" />
  </div>
</template>

<script>
import BottomNav from '@/component/BottomNav'

export default {
  components: { BottomNav },
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
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
}
</script>

<style scoped>
/* 主容器 */
.home {
  padding: 0px 10px;
  width: 100%;
  box-sizing: border-box;
}
/* 导航栏 */
.nav {
  display: flex;
  justify-content: space-around;
}
/* 将ul标签类的元素变成横向排布 */
.nav li {
  float: left;
  padding: 10px 10px 20px 10px;
}
/* 搜索框 */
.search {
  display: flex;
  justify-content: space-evenly;
}
/* 搜索按钮组 */
.searchInput {
  width: 70%;
  position: relative;
}
/* 搜索框输入框 */
.searchInput input {
  border: 3px solid #fed802;
  border-right: none;
  box-sizing: border-box;
  padding: 6px 20px;
  border-radius: 25px 0px 0px 25px;
  width: calc(100% - 30px);
}
/* 搜索按钮, 组成按钮组 */
.searchInput a {
  position: absolute;
  right: -25px;
  background-color: #fed802;
  border-radius: 25px;
  padding: 8px 20px;
}
/* 分类按钮 */
.search > a {
  margin-left: 10px;
  line-height: 40px;
}
/* 打折区域 */
.sale {
  display: flex;
  justify-content: space-evenly;
  margin-top: 8px;
  border-radius: 10px;
  height: 150px;
  background-color: #f5f5f6;
}
/* 打折中间的那条线 */
.sale > span {
  border: 1px solid gray;
  height: 130px;
  margin-top: 10px;
}
/* 分为两块 */
.area {
  width: 50%;
  padding: 16px;
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