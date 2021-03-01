<template>
  <div class="sortPage">
    <div class="head">
      <router-link to="/">
        <van-icon name="arrow-left" size="1.2rem" />
      </router-link>
      <input type="text" class="search" />
    </div>
    <div class="main">
      <div class="navBar">
        <van-sidebar class="insetNav" v-model="activeKey" @change="onChange">
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
          <van-sidebar-item title="标签名1" />
          <van-sidebar-item title="标签名2" />
          <van-sidebar-item title="标签名3" />
        </van-sidebar>
      </div>
      <div class="infoArea">
        <!-- 每个分类下的内容 -->
        <div class="info-item" v-for="(item, index) in 3" :key="index">
          <h4 class="item-title">推荐</h4>
          <div class="item-area">
            <ul>
              <!-- 小选项 -->
              <li v-for="(item, index) in 20" :key="index">
                <a href="javascript:;" class="item-center">
                  <div class="item-center" style="width: 100%">
                    <van-image
                      round
                      width="4rem"
                      height="4rem"
                      :src="require('@/assets/bg1.jpg')"
                      style="margin-bottom: 8px;"
                    />
                  </div>游戏
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeKey: 0,
    };
  },
  methods: {
    // 开关IsAppShow
    changeIsAppShow (data, path) {
      this.$store.commit("setIsAppShow", data)
      this.$router.push(path)
    },
    onChange (index) {
      console.log(index);
    },
  },
}
</script>

<style scoped>
/* 搜索栏和返回键头部 */
.head {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(197, 197, 197);
}
/* 返回键 */
.head a {
  margin: 12px 10px 5px;
}
/* 搜索框 */
.head input {
  border-radius: 25px;
  border: none;
  padding: 5px 12px;
  width: 85%;
  background-color: #e4e7ee;
}

/* 主要信息区域 */
.main {
  height: calc(100vh - 50px);
  display: flex;
}
/* 分类导航条的大小高度 */
.navBar {
  height: 100%;
  width: 20%;
  overflow: hidden;
}
/* 通过计算导航条的高度来隐藏滚动条 */
.insetNav {
  width: calc(100% + 20px);
  height: 100%;
  overflow-y: scroll;
}

/* 右侧信息区域 */
.infoArea {
  padding: 10px;
  width: 80%;
  overflow-y: scroll;
}
/* 每个选项的小标题 */
.item-title {
  margin: 10px 10px;
}
/* 每个小选项的布局 */
.item-area ul {
  display: flex;
  flex-wrap: wrap;
}
.item-area ul li {
  width: 33.3%;
  border: 8px solid transparent;
}
</style>