<template>
  <div class="edit">
    <Header pageName="编辑 / 新增地址" toPage="Address" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      :address-info="addressInfo"
    />
  </div>
</template>

<script>
import Header from '@/component/Header'
import areaData from '@/assets/js/area'

export default {
  components: {
    Header,
  },
  data () {
    return {
      areaList: areaData,
      searchResult: [],
      // 初始值
      addressInfo: this.$route.params.addressInfo,
    };
  },
  methods: {
    onSave () {

    },
    onDelete () {
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
}
</script>

<style scoped>
</style>