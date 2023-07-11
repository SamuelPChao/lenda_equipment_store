import { defineStore } from "pinia";

export default defineStore("shoppingCart", {
  state: () => ({
    isOpen: false,
    cart: [],
  }),
  getters: {
    totalPrice: (state) =>
      state.cart.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0),
    cartItemQuantity: (state) => state.cart.length,
  },
  actions: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    addToCart(item) {
      const existingItem = this.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return (this.cart.find(
          (cartItem) => cartItem.id === item.id
        ).quantity += 1);
      }
      item.quantity = 1;
      this.cart.push(item);
    },
    clearCart() {
      this.cart = [];
    },
    deleteItem(index) {
      this.cart.splice(index, 1);
    },
    modifyItemQuantity(index, event) {
      this.cart[index].quantity = event;
    },
  },
});
