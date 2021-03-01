<template>
  <div class="myselfPage">
    <div class="head">
      <!-- 设置按钮 -->
      <div class="setButton">
        <router-link href="javascript:;" to="/set">
          <van-icon name="setting-o" size="1.5rem" />
        </router-link>
      </div>
      <!-- 头像 -->
      <div class="headImg">
        <a href="javascript:;">
          <div>
            <van-image round width="5rem" height="5rem" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
          </div>
          <div>
            <h3>{{$store.state.user.userName}}</h3>
            <small>会员ID: {{$store.state.user.userId}}</small>
          </div>
          <div>
            <van-icon name="arrow" />
          </div>
        </a>
      </div>
      <!-- 个人数据 -->
      <div class="info">
        <ul class="item-center">
          <li>
            <a href="javascript:;">收藏</a>
          </li>
          <li>
            <a href="javascript:;">历史浏览</a>
          </li>
          <li>
            <a href="javascript:;">关注</a>
          </li>
          <li>
            <a href="javascript:;">粉丝</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 个人订单区域 -->
    <div class="myOrder">
      <div class="item-center">
        <div>
          <h3>我的交易</h3>
        </div>
        <div>在这赚了。。。元</div>
      </div>
      <ul class="item-center">
        <li>
          <a href="javascript:;">
            <van-image
              radius="10px"
              width="3rem"
              height="3rem"
              :src="require('@/assets/myself-img/release.png')"
            />
            <small>我发布的 0</small>
          </a>
        </li>
        <li>
          <router-link :to="{name: 'MyProduct'}">
            <van-image
              radius="10px"
              width="3rem"
              height="3rem"
              :src="require('@/assets/myself-img/sell.png')"
            />
            <small>我卖出的 6</small>
          </router-link>
        </li>
        <li>
          <a href="javascript:;">
            <van-image
              radius="10px"
              width="3rem"
              height="3rem"
              :src="require('@/assets/myself-img/buy.png')"
            />
            <small>我买到的 0</small>
          </a>
        </li>
      </ul>
      <div class="tip item-center">
        <img :src="require('@/assets/bg3.jpg')" />
        <p>交易已成功, 给对方一个评价吧</p>
        <a href="javascript:;">去评价</a>
      </div>
      <span></span>
    </div>
    <!-- 更多 -->
    <div class="more">
      <div class="infoArea">
        <!-- 每个分类下的内容 -->
        <div class="info-item">
          <h4 class="item-title">更多</h4>
          <div class="item-area">
            <ul>
              <!-- 小选项 -->
              <!-- 我的帖子 -->
              <li>
                <a href="javascript:;" class="item-center">
                  <div class="item-center" style="width: 100%">
                    <van-image
                      round
                      width="4rem"
                      height="4rem"
                      :src="require('@/assets/myself-img/article.png')"
                      style="margin-bottom: 8px"
                    />
                  </div>我的贴子
                </a>
              </li>
              <!--  -->
              <li>
                <a href="javascript:;" class="item-center">
                  <div class="item-center" style="width: 100%">
                    <van-image
                      round
                      width="4rem"
                      height="4rem"
                      :src="require('@/assets/myself-img/aboutMe.png')"
                      style="margin-bottom: 8px"
                    />
                  </div>关于我们
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航条 -->
    <BottomNav :active="3" />
  </div>
</template>

<script>
import BottomNav from '@/component/BottomNav'

export default {
  components: { BottomNav },
};
</script>

<style scoped>
/* 头部的底部边框 */
.head {
  border-bottom: 8px solid #e4e7ee;
}
/* 设置按钮 */
.setButton {
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0;
}
/* 头像列 */
.headImg a {
  display: flex;
  margin-left: 10px;
  position: relative;
}
/* 头像链接  中间的文字 */
.headImg a div:nth-child(2) {
  margin: 20px;
}
/* 头像链接  右边的箭头图标 */
.headImg a div:nth-child(3) {
  position: absolute;
  right: 20px;
  top: 40%;
}
/* 收藏, 历史浏览, 关注, 粉丝 */
.info ul {
  justify-content: space-around;
  height: 50px;
}

/* 我的交易, 赚了多少 小标题 */
.myOrder > div:first-child {
  justify-content: space-between;
  padding: 0px 8px;
  margin-top: 20px;
}
/* 我的发布, 我卖出的, 我买到的 */
.myOrder > ul {
  justify-content: space-around;
  height: 120px;
}
/* 我的发布, 我卖出的, 我买到的 */
.myOrder > ul li a {
  display: flex;
  /* 当行变列时, 思想也要转变, align-item即为左右居中 */
  flex-direction: column;
  align-items: center;
}
/* 小提示, 评价 */
.tip {
  margin: 0px 12px;
  padding: 5px 10px;
  justify-content: space-between;
  background: #e4e7ee;
  border-radius: 10px;
}
.tip img {
  height: 32px;
  width: 32px;
  border-radius: 10px;
}
/* 分割线 */
.myOrder span {
  display: block;
  border: 1px solid #80808070;
  width: 90%;
  height: 1px;
  margin: 20px 0px 0px 5%;
}

/* 更多区域 */
.infoArea {
  padding: 10px;
}
/* 每个选项的小标题 */
.item-title {
  margin: 10px 10px;
}
/* 每个小选项的布局 */
.item-area ul {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.item-area ul li {
  width: 25%;
  border: 8px solid transparent;
}
</style>