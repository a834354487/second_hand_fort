<template>
  <div class="mySellPage">
    <Header pageName="我卖出的" toPage="Myself" />
    <div class="main">
      <div v-for="(item, index) in 4" :key="index" class="orderArea">
        <span class="infoTitle">
          订单号：
          <!-- {{ item.orderId }} -->
          <span class="infoTitleState">交易完成</span>
        </span>
        <!-- <div class="goodsList" v-for="(goods, index) in item.goodsList" :key="index"> -->
        <div class="goodsList" v-for="(goods, index) in 1" :key="index">
          <!-- <van-image class="goodsImg" :src="require('../assets/pic/product/' + goods.goodsUrl)"></van-image> -->
          <van-image class="goodsImg" :src="require('@/assets/bg2.jpg')" />
          <span class="goodsName">
            <!-- {{ goods.goodsName }} -->
            1
          </span>
          <div class="goodsPrice">
            <span>
              <!-- ¥ {{ goods.price * goods.num }} -->
              1
              <br />
              <span style="color: #888888">
                <!-- x{{ goods.num }} -->
                2
              </span>
            </span>
          </div>
        </div>

        <div class="goodsTotal">
          <span style="font-size: 12px">
            共
            <!-- {{ item.goodsList.length }} -->
            2 件商品 总价 ¥
            <!-- {{ item.totalPrice }} -->
            22
          </span>
        </div>
        <div class="infoFooter">
          <van-button
            v-if="item.isConfirm == '是'"
            round
            class="footerButton"
            @click="del(item)"
          >删除订单</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Dialog } from 'vant'
import Header from '@/component/Header'

export default {

  components: {
    Header
  },

  data () {
    return {
      active: '0',
      user: {},
      orders: [],
      goods: []
    }
  },

  methods: {
    // onClickLeft () {
    //   this.$router.push("/Center")
    // },

    // del (orders) {
    //   Dialog.confirm({
    //     title: '提示',
    //     message: '确定要删除吗?',
    //   }).then(() => {
    //     this.$axios.delete("/orders/" + orders.orderId).then(res => {
    //       if (res.data) {
    //         location.reload();
    //       }
    //     })
    //   }).catch(() => {
    //   });
    // },

    // confirm (orders) {
    //   Dialog.confirm({
    //     title: '提示',
    //     message: '确定要收货吗?',
    //   }).then(() => {
    //     this.$axios.post("/orders/confirm", orders).then(res => {
    //       location.reload();
    //     })
    //   }).catch(() => {
    //   });
    // }

  },

  created () {
    // this.user = JSON.parse(localStorage.getItem("user"));

    // this.$axios.post('/orders/orderListById', this.user).then(res => {

    //   this.orders = res.data;

    //   for (let i = 0; i < this.orders.length; i++) {
    //     this.goods[i] = JSON.parse(this.orders[i].goodsInfo);
    //     this.orders[i].goodsList = this.goods[i];
    //   }

    //   this.orders = this.orders.sort((a, b) => {
    //     if (a.isConfirm == '是') {
    //       return 1
    //     }
    //   })

    // })
  }

}
</script>

<style scoped>
.orderArea {
  background: #fafafa;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}

.infoTitle {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.infoTitleState {
  color: coral;
  font-size: 13px;
  padding-top: 3px;
}

.goodsList {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.goodsImg {
  width: 80px;
  height: 80px;
}

.goodsName {
  font-size: 15px;
  margin: auto;
}

.goodsPrice {
  padding-top: 24px;
  text-align: right;
}

.goodsTotal {
  padding-top: 10px;
  text-align: right;
}

.infoFooter {
  margin-top: 10px;
  text-align: right;
}

.footerButton {
  width: 100px;
  height: 30px;
}
</style>