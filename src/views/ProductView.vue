<script>
import AppProductBox from "../components/AppProductBox.vue";
import AppSideMenu from "@/components/AppSideMenu.vue";
import AppProductModal from "../components/AppProductModal.vue";
import useProductStore from "@/stores/product";
import useShoppingCartStore from "@/stores/shoppingCart";
import { mapState, mapActions } from "pinia";
export default {
  name: "ProductView",
  components: {
    AppProductBox,
    AppSideMenu,
    AppProductModal,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapState(useProductStore, {
      productModalOpen: "productModalOpen",
      allProducts: "allProducts",
      productTypeBrand: "productTypeBrand",
      currentModalProduct: "currentModalProduct",
    }),
    ...mapState(useShoppingCartStore, {
      cartModalOpen: "isOpen",
    }),
  },
  methods: {
    ...mapActions(useProductStore, {
      setCurrentProduct: "setCurrentProduct",
      getAllProducts: "getAllProducts",
      getProductsByTypeAndBrand: "getProductsByTypeAndBrand",
      closeProductModal: "closeProductModal",
    }),
    ...mapActions(useShoppingCartStore, {
      toggleCartModal: "toggleModal",
    }),
    onProductModal(product) {
      if (this.cartModalOpen) this.toggleCartModal();
      this.setCurrentProduct(product);
    },
  },
  watch: {
    "$route.params": {
      immediate: true,
      async handler(newValue, oldValue) {
        try {
          if (newValue.type && newValue.brand) {
            await this.getProductsByTypeAndBrand(
              this.$route.params.type,
              this.$route.params.brand
            );
            if (this.productTypeBrand)
              return (this.products = this.productTypeBrand);
          }
          await this.getAllProducts();
          if (this.allProducts) this.products = this.allProducts;
        } catch (err) {
          console.log(err);
        }
      },
    },
  },
};
</script>

<template>
  <div class="productView">
    <app-side-menu class="appSideMenu"></app-side-menu>
    <div class="productsBox">
      <div class="wrapper">
        <template v-for="(product, i) in products">
          <app-product-box
            :product="product"
            :index="i"
            class="productBox"
            @click.stop="onProductModal(product)"
          >
          </app-product-box>
        </template>
      </div>
    </div>
    <div
      class="productModalBox"
      v-show="productModalOpen"
      @click="closeProductModal"
    >
      <app-product-modal
        v-show="productModalOpen"
        :product="currentModalProduct"
        class="appProductModal"
      ></app-product-modal>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productView{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin:0 auto;
  .appSideMenu{
    width: 20%;
  }
  .productsBox{
    .wrapper{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      height: auto;
      .productBox{
        width:15rem;
        height: 15rem;
      }
    }
  }
  .productModalBox{
    position: fixed;
    top:0;
    width:100vw;
    height: 100vh;
    background-color: $modal-bg-pad-color;
  }
}
@media(max-width:1024px) and (min-width: 768px){
  .productView{
    justify-content: space-between;
    .appSideMenu{
      width: 30%;
    }
    .productsBox{
      width: 70%;
      .wrapper{
        grid-template-columns: 1fr 1fr 1fr;
        .productBox{
          width: 11rem;
          height: 11rem;
        }
      }
    }
  }
}
@media(max-width:768px){
  .productView{
    .appSideMenu{
      width:85%
    }
    .productsBox{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 2rem;
      .wrapper{
        grid-template-columns: 1fr 1fr;
        .productBox{
          width: 11rem;
          height: 16rem;
        }
      }
    }
  }
}
</style>
