<script>
export default {
  name: "AppPaymentInfo",
};
</script>

<template>
  <div class="appPaymentInfo">
    <div class="paymentInfoBox">
      <h1>匯款資訊</h1>
      <div class="infoBox">
        <span class="info">銀行: (666) 柬埔寨銀行西港分行</span
        ><span class="info">戶名： 鏡達攝影器材有限公司</span
        ><span class="info">帳號: 6666-6666-6666</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paymentInfoBox{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 6rem 0;
  h1{
    width: 100%;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .infoBox{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border:0.1rem solid $border-color;
    border-radius: 0.5rem;
    padding: 1rem;
    span{
      width: 100%;
      text-align: center;
      padding:0.5rem 0;
      font-size:1.25rem;
    }
  }
}
</style>
