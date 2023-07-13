<script>
import { mapActions } from "pinia";
import useShoppingCartStore from "../stores/shoppingCart";
export default {
  name: "AppProductBox",
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(useShoppingCartStore, {
      addToCart: "addToCart",
    }),
  },
};
</script>

<template>
  <div class="appProductBox">
    <div
      class="productImgBox"
      :style="{
        'background-image': 'url(' + product.imageSRC + ')',
      }"
    ></div>
    <div class="productInfoBox">
      <div class="productNameBox">
        <span class="productName">{{ product.name.toUpperCase() }}</span>
      </div>
      <div class="productPrice">${{ product.price }}</div>
    </div>
    <div class="actionBtnsBox">
      <svg
        @click.stop="addToCart(product)"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-cart carticon actionBtn"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appProductBox{
  position: relative;
  margin: 0 0.5rem 0.5rem 0.5rem;
  border: solid 1px $not-that-grey;
  background-color: white;
  box-shadow: 0 0 0.5rem 0.1rem $not-that-black-shadow;
  .productImgBox{
    width: 100%;
    height: 50%;
    background-size: contain;
    background-position: center center;
    background-color: $not-that-white;
  }
  .productInfoBox{
    .productNameBox{
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      padding: 0 0.25rem;
      .productName{
        padding: 0 0.25rem;
        color:$not-that-black;
        font-size:1rem
        }
    }
    .productPrice{
      padding: 0 0.5rem;
      text-align: left;
    }
  }


  .actionBtnsBox{
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: right;
    padding:0.25rem 0.25rem;
    .actionBtn{
      cursor: pointer;
      color:$not-that-black
    }
  }
}
@media(max-width:1024px) and (min-width: 768px){
  .appProductBox{
    margin: 0 0.25rem 0.25rem 0.25rem;
    .productImgBox{
      width: 100%;
      height: 45%;
    }
    .productInfoBox{
      .productNameBox{
        .productName{
          font-size:0.8rem;
        }
      }
    }
  }
}
@media(max-width:768px){
  .appProductBox{
    margin:0.25rem;
    margin: 0 0.125rem;
    .productImgBox{
      width:100%;
    }
  }
}
</style>
