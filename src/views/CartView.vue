<script>
import { mapState, mapActions } from 'pinia'
import useShoppingCartStore from '../stores/shoppingCart'
import useBookingStore from '../stores/booking'
import useUserStore from '../stores/user'
import AppCartItem from '../components/AppCartItem.vue'
import AppCompanyInfo from '../components/AppCompanyInfo.vue'
import AppDatePicker from '../components/AppDatePicker.vue'
export default {
  name: 'CartView',
  data() {
    const startDate = new Date()
    const endDate = new Date(
      startDate.getTime() + 24 * 60 * 60 * 1000
    )
    return {
      bookingInfo: {
        companyTitle: null,
        companyVatId: null,
        date: [startDate, endDate]
      }
    }
  },
  components: {
    AppCartItem,
    AppCompanyInfo,
    AppDatePicker
  },
  computed: {
    ...mapState(useShoppingCartStore, {
      cart: 'cart',
      totalPrice: 'totalPrice'
    }),
    ...mapState(useUserStore, {
      currentUser: 'currentUser'
    }),
    duration() {
      return this.durationCalculator(
        this.bookingInfo.date[0],
        this.bookingInfo.date[1]
      )
    }
  },
  methods: {
    ...mapActions(useBookingStore, {
      sendBooking: 'sendBooking',
      durationCalculator: 'durationCalculator'
    }),
    ...mapActions(useShoppingCartStore, {
      modifyItemQuantity: 'modifyItemQuantity',
      deleteItem: 'deleteItem',
      clearCart: 'clearCart'
    }),
    updateValue(value, target) {
      this.bookingInfo[target] = value
    },
    async onSubmit(cart, bookingObject) {
      const res = await this.sendBooking(
        cart,
        bookingObject
      )
      if (res) {
        this.clearCart()
        alert('Booking Sent')
      }
    }
  }
}
</script>
<template>
  <div class="cartView">
    <div v-if="cart.length > 0" class="cart">
      <h3 class="cartTitle">Confirm Your Equipment</h3>
      <div class="cartItemsBox">
        <app-cart-item
          @quantityChange="modifyItemQuantity(i, $event)"
          @delete-item="deleteItem(i)"
          v-for="(product, i) in cart"
          :index="i"
          :product="{ ...product, notForEdit: false }"
        ></app-cart-item>
      </div>
      <div class="cartInfoBox">
        <app-company-info
          class="appCompanyInfo"
          :companyTitle="bookingInfo.companyTitle"
          @updateCompanyTitle="
            updateValue($event, 'companyTitle')
          "
          :companyVatId="bookingInfo.companyVatId"
          @updateCompanyVatId="
            updateValue($event, 'companyVatId')
          "
        ></app-company-info>
        <app-date-picker
          class="appDatePicker"
          :date="bookingInfo.date"
          @updateDate="updateValue($event, 'date')"
        ></app-date-picker>
        <div class="totalPriceBox">
          Total Price: NT$ {{ totalPrice * duration }}
        </div>
      </div>
      <div class="actionBtnsBox">
        <button
          class="actionBtn"
          @click.prevent="
            onSubmit(cart, {
              ...bookingInfo,
              user: currentUser.id
            })
          "
        >
          Send Booking
        </button>
      </div>
    </div>
    <div class="cartStatusBox" v-if="!cart.length > 0">
      <img
        class="cartStatusImg"
        src="https://www.mgrstore.net/assets/main/img/cart_empty_img.svg"
        alt="emptyCart"
      />
      <h1 class="cartStatusTitle">Cart Is Empty</h1>
      <div class="actionBtnsBox">
        <router-link :to="{ name: 'product' }"
          ><button class="actionBtn">
            Check Out Equipment
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cartView{
  margin: auto;
  .cart{
    width:60%;
    margin: 5rem auto 0 auto;
    .cartTitle{
      text-align: center;
    }
    .cartItemsBox{
      border-top: 1px solid $not-that-black;
      width: 100%;
    }
    .cartInfoBox{
      width: 100%;
      .appCompanyInfo{
        border-bottom: 0.05rem solid $not-that-black;
      }
      .appDatePicker{
        border-bottom: 0.05rem solid $not-that-black;
      }
      .totalPriceBox{
        padding:2.5rem 0;
        text-align: center;
      }
    }
  }
  .cartStatusBox{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    .cartStatusImg{
      width:20%
    }
    .cartStatusTitle{
      width:100%;
      margin: 1rem auto;
      text-align: center;;
    }
  }
  .actionBtnsBox{
      width: 60%;
      display: flex;
      margin:0 auto;
      padding: 2.5rem 0 2.5rem 0;
      justify-content: space-evenly;
      .actionBtn{
        width: 15rem;
        font-size: 1rem;
        text-align: center;
        padding:0.25rem 0.25rem;
        border: 0.1rem solid black;
        border-radius: 0.5rem;
        transition: all 0.2s linear;
      }
      .actionBtn:hover{
        background-color: black;
        color:white
      }
    }
}

@media(max-width:768px){
  .cartView{
    .cart{
      width: 100%;
    }
  }
}
</style>
