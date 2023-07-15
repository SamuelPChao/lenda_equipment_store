import { defineStore } from "pinia";
import axios from "axios";
export default defineStore("product", {
  state: () => ({
    productModalOpen: false,
    currentModalProduct: {},
    allProducts: [],
    productTypeBrand: [],
  }),
  actions: {
    toggleProductModal() {
      this.productModalOpen = !this.productModalOpen;
    },
    setCurrentProduct(product) {
      if (!this.productModalOpen) {
        this.currentModalProduct = product;
        this.toggleProductModal();
        return;
      }
      this.toggleProductModal();
    },
    closeProductModal(event) {
      if (this.productModalOpen) {
        this.toggleProductModal();
      }
    },
    async getAllProducts() {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/products/camera`
        );
        const doc = res.data.data.doc;
        this.allProducts = doc;
      } catch (error) {
        console.log(error);
      }
    },
    async getProductsByTypeAndBrand(type, brand) {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/products/${type}/${brand}`
        );
        const doc = res.data.data.doc;
        this.productTypeBrand = doc;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
