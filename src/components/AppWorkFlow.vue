<script>
export default {
  name: 'AppWorkFlow'
}
</script>

<template>
  <div class="appWorkFlow">
    <div class="workFlowBox">
      <h1>租借流程</h1>
      <div class="stepBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/flow1.svg"
          alt=""
        />
        <h3>電話或網路預約</h3>
      </div>
      <div class="stepBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/flow2.svg"
          alt=""
        />
        <h3>等待客服確認</h3>
      </div>
      <div class="stepBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/flow3.svg"
          alt=""
        />
        <h3>取件及簽約付款</h3>
      </div>
      <div class="stepBox">
        <img
          src="https://www.mgrstore.net/assets/main/img/flow4.svg"
          alt=""
        />
        <h3>歸還</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.workFlowBox{
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
  .stepBox{
    width:20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h3{
      width: 100%;
      font-size:1.5rem;
      color:$not-that-black-font;
      text-align: center;
    }
    img{
      width:80%;
    }
  }
}
</style>
