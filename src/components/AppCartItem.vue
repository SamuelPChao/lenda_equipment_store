<script>
import { mapActions } from "pinia";
import useShoppingCartStore from "../stores/shoppingCart";
export default {
  name: "AppCartItem",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onQuantityChange(event) {
      this.$emit("quantity-change", Number(event.target.value));
    },
  },
};
</script>

<template>
  <div class="appCartItem">
    <div class="deleteItemBtnBox" v-if="!product.notForEdit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-x deleteItemBtn"
        viewBox="0 0 16 16"
        @click.prevent="$emit('delete-item', index)"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div
      class="productImgBox"
      :style="{
        'background-image': 'url(' + product.imageSRC + ')',
      }"
    ></div>
    <div class="productInfoBox">
      <div class="productNameBox">
        <span class="productNameField">{{
          product.brand ? product.brand.toUpperCase() : ""
        }}</span>
        <span class="productNameField">
          {{ product.model ? product.model.toUpperCase() : "" }}</span
        >
      </div>
      <div class="productPriceBox">NT$ {{ product.price }}</div>
    </div>
    <div class="prodQuantityBox">
      <select
        v-model="product.quantity"
        class="select"
        :disabled="product.quantityDisabled"
        @change="$emit('quantityChange', Number($event.target.value))"
      >
        <option
          v-for="(inventory, i) in product.inventory"
          :value="i + 1"
          class="option"
        >
          {{ i + 1 }}
        </option>
      </select>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appCartItem{
  display: flex;
  width: 100%;
  height: 8rem;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.05rem solid $border-color-black;
  padding:0 1rem;
  .deleteItemBtnBox{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    .deleteItemBtn{
      width: 75%;
      margin:0 auto;
      height: auto;
      cursor: pointer;
    }
  }
  .productImgBox{
    width:15%;
    height: auto;
    aspect-ratio: 3/2;
    background-size: 120%;
    background-position: center center;
  }
  .productInfoBox{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .productNameBox{
      display:flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      .productNameField{
        padding:0.25rem 0.25rem;
        text-align: center;
      }
    }
    .productPriceBox{
      width:100%;
      padding:0.25rem 0;
      text-align: center;
    }
  }
  .prodQuantityBox{
    display: flex;
    width: 10%;
    justify-content: center;
    align-items: center;
    .select{
      width: 100%;
      height: 40%;
      appearance: none;
      padding: 0.25rem;
      text-align: center;
      font-size: 1rem;
      border: 0.1rem solid $border-color;
      border-radius: 0.5rem;
      background-color: $component-bg-color;
    }
  }
}
@media(max-width:768px){
  .appCartItem{
    padding:0 0.5rem;
    .deleteItemBtnBox{
      width: 10%;
      .deleteItemBtn{
        width: 100%;
        height: auto;
      }
    }
    .productImgBox{
      aspect-ratio: 1/1;
      background-size: 150%;
    }
    .productInfoBox{
      .productNameBox{
        padding: 0.25rem 0;
      }
    }
  }
}
</style>
