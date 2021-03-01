<template>
  <div class="adressPage">
    <Header pageName="选择地址" toPage="Set" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
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
      // 标题栏名字
      title: '选择地址',
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          addressDetail: '东方通信大厦 7 楼 501 室',
          areaCode: '711147',
          postalCode: '350000',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
          addressDetail: '东方通信大厦 7 楼 501 室',
          areaCode: '110114',
          postalCode: '350000',
          isDefault: false,
        },
      ],
    };
  },
  methods: {
    onAdd () {
      this.$router.push({ name: 'EditAddress' })
    },
    onEdit (item/* , index */) {
      this.$router.push({
        name: 'EditAddress', params: {
          addressInfo: item
        }
      })
    },
  },
}
</script>

<style scoped>
</style>