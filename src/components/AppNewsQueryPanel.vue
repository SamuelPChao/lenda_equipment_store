<script>
export default {
  name: "AppNewsQueryPanel",
  methods: {
    newsCategorySwitch(queryString) {
      this.$router.push({
        query: {
          category: queryString,
        },
      });
    },
  },
};
</script>
<template>
  <div class="appNewsQueryPanel">
    <div class="queryPanelBox">
      <v-btn size="small" @click="newsCategorySwitch()" class="queryBtn"
        >全部資訊</v-btn
      >
      <v-btn
        size="small"
        @click="newsCategorySwitch('product_info')"
        class="queryBtn"
        >租借新品</v-btn
      >
      <v-btn
        size="small"
        @click="newsCategorySwitch('store_announcement')"
        class="queryBtn"
        >店家公告</v-btn
      >
      <v-btn
        size="small"
        @click="newsCategorySwitch('sales_activity')"
        class="queryBtn"
        >優惠資訊</v-btn
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appNewsQueryPanel{
  .queryPanelBox{
    width: 50%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    .queryBtn{
      width: 20%;
    }
  }
}
@media(max-width:768px){
  .appNewsQueryPanel{
    .queryPanelBox{
      width: 100%;
    }
  }
}
</style>
