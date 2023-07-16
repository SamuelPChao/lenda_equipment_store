<script>
import useBookingStore from "../stores/booking";
import { mapActions, mapState } from "pinia";
import AppCartItem from "../components/AppCartItem.vue";
import AppBookingItem from "../components/AppBookingItem.vue";
export default {
  name: "OrderDetailView",
  components: {
    AppCartItem,
    AppBookingItem,
  },
  methods: {
    ...mapActions(useBookingStore, {
      getBookingDetail: "getBookingDetail",
      cancelBooking: "cancelBooking",
    }),
    async onCancelBooking(orderId) {
      try {
        const res = await this.cancelBooking(orderId);
        if (res) {
          this.$router.go(0);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapState(useBookingStore, {
      bookingDetail: "bookingDetail",
    }),
  },
  beforeMount() {
    this.getBookingDetail(this.$route.params.orderId);
  },
};
</script>
<template>
  <div class="orderDetailView">
    <div class="orderDetailBox">
      <h3 class="cartTitle">您的訂單內容</h3>
      <div class="bookingItemBox">
        <app-cart-item
          class="appCartItem"
          v-for="(item, i) in bookingDetail.cart"
          :index="i"
          :product="{
            ...item.product,
            quantity: item.quantity,
            notForEdit: true,
            quantityDisabled: true,
          }"
        ></app-cart-item>
      </div>
    </div>
    <div class="bookingInfoBox">
      <app-booking-item
        :isDetail="false"
        :booking="bookingDetail"
      ></app-booking-item>
    </div>
    <div class="actionBtnsBox">
      <router-link
        class="actionBtn"
        v-if="!bookingDetail.check && !bookingDetail.canceled"
        :to="{
          name: 'order-edit',
          params: { orderId: this.$route.params.orderId },
        }"
        >修改訂單</router-link
      >
      <router-link
        class="actionBtn"
        :to="{
          name: 'order',
        }"
        >回訂單列表</router-link
      >
      <button
        class="actionBtn cancelBtn"
        v-if="!bookingDetail.check && !bookingDetail.canceled"
        @click="onCancelBooking(this.$route.params.orderId)"
      >
        取消訂單
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.orderDetailView{
  width: 100%;
  .orderDetailBox{
    width:60%;
    margin:0 auto;
    padding:5rem 0;
    .cartTitle{
      font-size:1.5rem;
      text-align: center;
      border-bottom:  0.1rem solid $border-color-black;
    }
    .bookingItemBox{
      width: 100%;
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
      border: 0.1rem solid $border-color-black;
      transition: all 0.2s linear;
    }
    .actionBtn:hover{
      background-color: $font-black;
      color:$font-white
    }
    .cancelBtn{
      background-color: rgba(255, 0, 0, 0.75);
      color: $font-white;
      border: 0.1rem solid $border-color-black;
    }
  }
}
@media(max-width:768px){
  .orderDetailView{
    .orderDetailBox{
      width: 100%;
    }
    .actionBtnsBox{
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      .actionBtn{
        width: 60%;
      }
    }
  }
}
</style>
