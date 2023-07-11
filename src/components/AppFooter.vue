<script>
export default {
  name: 'AppFooter'
}
</script>

<template>
  <div class="appFooter">
    <div class="storeInfoBoxs">
      <div class="storeInfoBox"></div>
      <div class="storeInfoBox">
        <span
          >地址: 100台灣台北市中正區市民大道一段100號</span
        >
      </div>
      <div class="storeInfoBox">
        <span>電話: 02 - 6666 - 6666</span>
      </div>
      <div class="storeInfoBox">
        <span>營業時間: 12:00 A.M. - 12:00 P.M.</span>
      </div>
      <div class="storeInfoBox">
        Copyright © 2023 Shih Ping Chao. All rights
        reserved.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appFooter{
  margin: 0 auto;
  height: 12rem;
  width: 100%;
  background-color: $not-that-grey-lighter;
  border-top:0.05rem solid $not-that-grey;
  .storeInfoBoxs{
    padding:1rem 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .storeInfoBox{
      padding: 0.25rem 0;
      width:100%;
      text-align:center;
      span{
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
}
@media(max-width:768px){
  .appFooter{
    .storeInfoBoxs{
      .storeInfoBox{
        span{
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
