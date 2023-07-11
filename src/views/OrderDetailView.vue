<script>
import useBookingStore from '../stores/booking'
import { mapActions, mapState } from 'pinia'
import AppCartItem from '../components/AppCartItem.vue'
import AppBookingItem from '../components/AppBookingItem.vue'
export default {
  name: 'OrderDetailView',
  components: {
    AppCartItem,
    AppBookingItem
  },
  methods: {
    ...mapActions(useBookingStore, {
      getBookingDetail: 'getBookingDetail',
      cancelBooking: 'cancelBooking'
    })
  },
  computed: {
    ...mapState(useBookingStore, {
      bookingDetail: 'bookingDetail'
    })
  },
  beforeMount() {
    this.getBookingDetail(this.$route.params.orderId)
  }
}
</script>
<template>
  <div class="orderDetailView">
    <div class="orderDetailBox">
      <h3 class="cartTitle">Confirm Your Equipment</h3>
      <div class="bookingItemBox">
        <app-cart-item
          class="appCartItem"
          v-for="(item, i) in bookingDetail.cart"
          :index="i"
          :product="{
            ...item.product,
            quantity: item.quantity,
            notForEdit: true,
            quantityDisabled: true
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
        v-if="
          !bookingDetail.check && !bookingDetail.canceled
        "
        :to="{
          name: 'order-edit',
          params: { orderId: this.$route.params.orderId }
        }"
        >Edit Order</router-link
      >
      <button
        class="actionBtn"
        v-if="
          !bookingDetail.check && !bookingDetail.canceled
        "
        @click="cancelBooking(this.$route.params.orderId)"
      >
        Cancel Order
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.orderDetailView{
  .orderDetailBox{
    width:60%;
    margin:0 auto;
    padding:5rem 0;
    .cartTitle{
      text-align: center;
      border-bottom: 1px solid $not-that-grey-blacker;
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
      margin: 0.5rem 0;
      padding:0.25rem 0.25rem;
      text-align: center;
      border-radius: 0.5rem;
      border: 0.1rem solid black;
      transition: all 0.2s linear;
    }
    .actionBtn:hover{
      background-color: black;
      color:white
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
