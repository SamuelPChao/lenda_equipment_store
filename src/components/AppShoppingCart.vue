<script>
import { mapState, mapActions } from "pinia";
import AppCartItem from "./AppCartItem.vue";
import useShoppingCartStore from "../stores/shoppingCart";
export default {
  name: "AppShoppingCart",
  components: {
    AppCartItem,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  computed: {
    ...mapState(useShoppingCartStore, {
      isOpen: "isOpen",
      cart: "cart",
      totalPrice: "totalPrice",
    }),
  },
  methods: {
    ...mapActions(useShoppingCartStore, ["toggleModal", "deleteItem"]),
    disableScroll() {
      this.scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop ||
        0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${this.scrollPosition}px`;
    },
    resetScroll() {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, this.scrollPosition);
    },
  },
  watch: {
    isOpen: {
      handler(newValue, oldValue) {
        if (newValue) {
          return this.disableScroll();
        }
        this.resetScroll();
      },
    },
  },
};
</script>

<template>
  <div class="appShoppingCart" v-show="isOpen" @click="toggleModal">
    <div class="cartBox" v-show="isOpen" @click.stop>
      <svg
        @click.prevent="toggleModal"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        style="fill: lightgray"
        class="bi bi-x-circle cancelBtn"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <div class="cartItemBox">
        <app-cart-item
          v-for="(product, i) in cart"
          :product="{ ...product, notForEdit: false }"
          :index="i"
          @delete-item="deleteItem(i)"
        ></app-cart-item>
      </div>
      <div class="cartInfoBox">
        <div class="sumInfoBox">NT$ {{ totalPrice }} / 天</div>
        <div class="checkoutBtnBox">
          <router-link class="checkoutBtn" :to="{ name: 'cart' }"
            >去疊車
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appShoppingCart{
  position: fixed;
  top:0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.75);
  .cartBox{
    position: fixed;
    top:15vh;
    left:50vw;
    transform:translateX(-50%);
    width: 32rem;
    height: 32rem;
    background-color: $component-bg-color;
    border: solid 0.1rem $border-color;
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem 0.1rem $box-shadow-black;
    .cancelBtn{
      position: fixed;
      background-color: $component-bg-color;
      border-radius: 16px;
      right: -0.9rem;
      top:-1.2rem;
      cursor: pointer;
    }
    .cartItemBox{
      width: 100%;
      height: 24rem;
      overflow-y: auto;
    }
    .cartInfoBox{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 8rem;
      position: fixed;
      bottom: 0;
      padding:0.5rem 0;
      .sumInfoBox{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: 0.25rem 0;
      }
      .checkoutBtnBox{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .checkoutBtn{
          width: 50% ;
          display: block ;
          border: solid 0.075rem $font-black;
          border-radius: 0.5rem;
          text-align: center;
          font-size: 1.5rem;
        }
      }
      .checkoutBtn:hover{
        background-color: $font-black;
        color:$font-white;
      }
    }
  }
}
@media(max-width:768px){
  .appShoppingCart{
    .cartBox{
      top:25vh;
      width: 80vw;
      height: 60vh;
      .cartItemBox{
        height: 80%;
      }
      .cartInfoBox{
        height: 20%;
      }
    }
  }
}
</style>
