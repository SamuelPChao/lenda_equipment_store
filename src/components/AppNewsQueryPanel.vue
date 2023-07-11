<script>
export default {
  name: 'AppNewsQueryPanel',
  methods: {
    newsCategorySwitch(queryString) {
      this.$router.push({
        query: {
          category: queryString
        }
      })
    }
  }
}
</script>
<template>
  <div class="appBox">
    <div class="queryPanelBox">
      <v-btn @click="newsCategorySwitch()" class="queryBtn"
        >全部資訊</v-btn
      >
      <v-btn
        @click="newsCategorySwitch('product_info')"
        class="queryBtn"
        >租借新品</v-btn
      >
      <v-btn
        @click="newsCategorySwitch('store_announcement')"
        class="queryBtn"
        >店家公告</v-btn
      >
      <v-btn
        @click="newsCategorySwitch('sales_activity')"
        class="queryBtn"
        >優惠資訊</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.queryPanelBox{
  width: 50%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  .queryBtn{
    width: 20%;
  }
}
</style>
