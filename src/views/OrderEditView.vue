<script>
import useBookingStore from "../stores/booking";
import { mapActions, mapState } from "pinia";
import AppCartItem from "../components/AppCartItem.vue";
import AppBookingItem from "../components/AppBookingItem.vue";
import AppCompanyInfo from "../components/AppCompanyInfo.vue";
import AppDatePicker from "../components/AppDatePicker.vue";
export default {
  name: "OrderEditView",
  data() {
    return {
      bookingVModel: {},
    };
  },
  components: {
    AppCartItem,
    AppBookingItem,
    AppCompanyInfo,
    AppDatePicker,
  },
  methods: {
    ...mapActions(useBookingStore, {
      getBookingDetail: "getBookingDetail",
      updateBooking: "updateBooking",
      totalPriceCalculator: "totalPriceCalculator",
      durationCalculator: "durationCalculator",
    }),
    deleteItem(index) {
      if (this.bookingVModel && this.bookingVModel.cart)
        return this.bookingVModel.cart.splice(index, 1);
    },
    updateValue(value, target) {
      this.bookingVModel[target] = value;
    },
    async onUpdateBooking() {
      try {
        const res = await this.updateBooking(this.bookingVModel);
        if (res)
          return this.$router.push({
            name: "order-detail",
            params: { orderId: this.$route.params.orderId },
          });
        alert("Something went wrong, order is not edited correctly");
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(useBookingStore, {
      bookingDetail: "bookingDetail",
    }),
    totalPrice() {
      return this.totalPriceCalculator(this.bookingVModel.cart);
    },
    duration() {
      return this.durationCalculator(
        this.bookingVModel.date[0],
        this.bookingVModel.date[1]
      );
    },
  },
  beforeMount() {
    this.getBookingDetail(this.$route.params.orderId);
    if (this.bookingDetail) {
      this.bookingVModel = this.bookingDetail;
    }
  },
};
</script>
<template>
  <div class="orderEditView">
    <div class="bookingDetailBox">
      <h3 class="cartTitle">請確認您的器材</h3>
      <div class="cartItemsBox">
        <app-cart-item
          @quantityChange="this.bookingVModel.cart[i].quantity = $event"
          @delete-item="deleteItem(i)"
          v-for="(cartItem, i) in bookingVModel.cart"
          :index="i"
          :product="{
            notForEdit: false,
            ...cartItem.product,
            quantity: cartItem.quantity,
          }"
        ></app-cart-item>
      </div>
      <div class="cartInfoBox">
        <app-company-info
          :companyVatId="bookingVModel.companyVatId"
          @updateCompanyTitle="updateValue($event, 'companyTitle')"
          :companyTitle="bookingVModel.companyTitle"
          @updateCompanyVatId="updateValue($event, 'companyVatId')"
        ></app-company-info>
        <app-date-picker
          :date="bookingVModel.date"
          @updateDate="updateValue($event, 'date')"
        ></app-date-picker>
        <div class="totalPriceBox">
          Total Price: NT$
          {{ totalPrice * duration }}
        </div>
      </div>
    </div>
    <div class="actionBtnsBox">
      <button class="actionBtn" @click="onUpdateBooking">修改完成</button>
      <router-link
        class="actionBtn"
        :to="{
          name: 'order-detail',
          params: { orderId: this.$route.params.orderId },
        }"
        >回訂單詳情</router-link
      >
      <router-link
        class="actionBtn"
        :to="{
          name: 'order',
        }"
        >回訂單列表</router-link
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.orderEditView{
  width: 100%;
  margin: auto;
  .bookingDetailBox{
    width:60%;
    margin: 5rem auto 0 auto;
  }
  .cartTitle{
    text-align: center;
    font-size: 1.5rem;
    border-bottom:  0.1rem solid $border-color-black;
  }
  .cartItemsBox{
    width: 100%;
  }
  .cartInfoBox{
    width: 100%;
    .totalPriceBox{
      width: 100%;
      font-size: 1.5rem;
      padding: 2.5rem 0 2.5rem 0;
      text-align: center;
      border-top: 0.1rem solid $border-color-black;
      border-bottom: 0.1rem solid $border-color-black;
    }
  }
  .actionBtnsBox{
    width: 50%;
    display: flex;
    margin:0 auto;
    padding: 2.5rem 0 2.5rem 0;
    justify-content: space-evenly;
    .actionBtn{
      width: 30%;
      font-size: 1rem;
      text-align: center;
      margin: 0.5rem 0;
      padding:0.25rem 0.25rem;
      border-radius: 0.5rem;
      border: 0.1rem solid $font-black;
      transition: all 0.2s linear;
    }
    .actionBtn:hover{
      background-color: $font-black;
      color:$font-white
    }
  }
}
@media(max-width:768px){
  .orderEditView{
    .bookingDetailBox{
      width: 100%;
    }
    .actionBtnsBox{
      width: 100%;
      flex-wrap: wrap;
      .actionBtn{
        width: 60%;
      }
    }
  }
}
</style>
