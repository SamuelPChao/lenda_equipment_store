<script>
export default {
  name: 'AppPaymentMethod'
}
</script>

<template>
  <div class="appPaymentMethod">
    <div class="paymentMethodBox">
      <h1>付款方式</h1>
      <div class="methodBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/method_cash.svg"
          alt="cash"
        />
        <h3>現金</h3>
      </div>
      <div class="methodBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/method_creditcard.svg"
          alt="credit"
        />
        <h3>信用卡</h3>
      </div>
      <div class="methodBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/method_transfer.svg"
          alt="wire"
        />
        <h3>匯款</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paymentMethodBox{
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-bottom: 0.1rem solid $not-that-grey-blacker;
  padding: 6rem 0;
  h1{
    width: 100%;
    text-align: center;
    color:$not-that-black-font;
  }
  .methodBox{
    width:30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img{
      width:60%;
    }
    h3{
      width: 100%;
      text-align: center;
      font-size:1.5rem;
    }
  }
}
</style>
