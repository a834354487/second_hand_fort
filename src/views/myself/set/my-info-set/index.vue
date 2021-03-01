<template>
  <div>
    <Header pageName="我的资料" toPage="Set" />
    <div class="main">
      <!-- 基础信息 -->
      <div class="blockDiv">
        <small>基本信息</small>
        <div class="basicInfo">
          <!-- 头像 -->
          <a href="javascript:;" class="item-between">
            <span>头像</span>
            <van-uploader>
              <div class="item-center">
                <!-- 用户已上传头像 -->
                <van-image
                  radius="10px"
                  width="3rem"
                  height="3rem"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
                <van-icon class="arrowIcon" style="display: block" name="arrow" />
              </div>
            </van-uploader>
          </a>
          <!-- 昵称 -->
          <a href="javascript:;" class="item-between" @click="popupState('昵称')">
            <span>昵称</span>
            <div class="item-center">
              <span>Hym</span>
              <van-icon class="arrowIcon" style="display: block" name="arrow" />
            </div>
          </a>
          <!-- 性别 -->
          <a href="javascript:;" class="item-between" @click="popupState('性别')">
            <span>性别</span>
            <div class="item-center">
              <span>男</span>
              <van-icon class="arrowIcon" style="display: block" name="arrow" />
            </div>
          </a>
          <!-- 生日 -->
          <a href="javascript:;" class="item-between" @click="popupState('生日')">
            <span>生日</span>
            <div class="item-center">
              <span>时间</span>
              <van-icon class="arrowIcon" style="display: block" name="arrow" />
            </div>
          </a>
          <!-- 院校 -->
          <a href="javascript:;" class="item-between" @click="popupState('院校')">
            <span>院校</span>
            <div class="item-center">
              <span>闽江学院</span>
              <van-icon class="arrowIcon" style="display: block" name="arrow" />
            </div>
          </a>
          <!-- 简介 -->
          <a href="javascript:;" class="item-between" @click="popupState('简介')">
            <span>简介</span>
            <div class="item-center">
              <span></span>
              <van-icon class="arrowIcon" style="display: block" name="arrow" />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="popup">
      <van-popup v-model="popupShow" round position="bottom">
        <!-- 生日弹出框 -->
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="popupCancel"
          @confirm="timeConfirm"
          v-if="clickName == '生日'"
        />
        <!-- 性别弹出框 -->
        <van-picker
          title="性别"
          @cancel="popupCancel"
          show-toolbar
          :columns="birthdayColumns"
          v-if="clickName == '性别'"
        />
        <!-- 常住弹出框 -->
        <van-picker
          title="常住"
          @cancel="popupCancel"
          show-toolbar
          :columns="birthdayColumns"
          v-if="clickName == '常住'"
        />
        <!-- 院校弹出框 -->
        <van-picker
          title="院校"
          @cancel="popupCancel"
          show-toolbar
          :columns="schoolColumns"
          v-if="clickName == '院校'"
        />
        <!-- 昵称弹出框 -->
        <van-field v-model="nickName" label="昵称" placeholder="请输入昵称" v-if="clickName == '昵称'" />
        <!-- 简介弹出框 -->
        <van-field
          v-model="message"
          rows="6"
          autosize
          label="简介"
          type="textarea"
          maxlength="200"
          placeholder="请输入简介"
          show-word-limit
          v-if="clickName == '简介'"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import Header from '@/component/Header'

export default {
  components: {
    Header,
  },
  data () {
    return {
      // 弹窗是否显示， true 显示， false 不显示
      popupShow: false,
      // 时间弹窗， 最小可选时间
      minDate: new Date(1950, 0, 1),
      // 时间弹窗， 最大可选时间
      maxDate: new Date(),
      // 时间弹窗， 当前选择时间
      currentDate: new Date(),
      // 当前点击的是那个按钮
      clickName: '',
      // 性别弹出框
      birthdayColumns: ['男', '女'],
      // 院校弹出框
      schoolColumns: ['闽江学院', '福建工程学院', '厦门理工学院', '合肥理工大学', '福州大学', '浙江大学', '华南女子学院', '哈佛大学'],
      // 简介信息 
      message: '',
      // 昵称
      nickName: ''
    };
  },
  methods: {
    popupState (clickName) {
      // 当前选择的按钮
      this.clickName = clickName;
      // 弹出弹出框
      this.popupShow = true
    },
    // // 时间弹窗， 当点击取消时
    popupCancel () {
      this.popupShow = false
    },
    // 时间弹窗， 当点击确定时
    timeConfirm (value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
/* 背景颜色, 以及边距 */
.main {
  padding: 0 20px 20px;
  background-color: #e4e7ee;
  height: calc(100vh - 46px);
}
.blockDiv {
  padding-top: 20px;
}

/* 基础信息 */
.basicInfo {
  background-color: #f7f7f7;
  border-radius: 5px;
  margin-top: 10px;
}
/* 基础信息选项 */
.basicInfo a {
  padding: 10px 16px;
  min-height: 50px;
}
/* 基础信息链接的右侧文字颜色 */
.basicInfo a div span {
  color: grey;
  padding-right: 5px;
}
/* 箭头Icon图标 */
.arrowIcon {
  color: grey;
  padding: 5px 0px 0px 5px;
}
</style>