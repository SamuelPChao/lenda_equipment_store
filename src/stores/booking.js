import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("booking", {
  state: () => ({
    bookings: [],
    bookingDetail: {},
  }),
  actions: {
    totalPriceCalculator(cart) {
      return cart.reduce((accumulator, item) => {
        return accumulator + item.product.price;
      }, 0);
    },
    durationCalculator(dateStart, dateEnd) {
      const startDate = new Date(dateStart);
      const endDate = new Date(dateEnd);
      let duration;
      const dayInt = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      const dayFloat = (endDate - startDate) / (1000 * 60 * 60 * 24) - dayInt;
      if (dayFloat > 0.5) duration = dayInt + 1;
      if (0.5 >= dayFloat > 0) duration = dayInt + 0.5;
      if (dayFloat === 0) duration = dayInt;
      return duration;
    },
    async sendBooking(shoppingCart, bookingInfo) {
      const checkoutCart = [];
      const duration = this.durationCalculator(
        bookingInfo.date[0],
        bookingInfo.date[1]
      );
      let totalPrice = 0;
      shoppingCart.forEach((item) => {
        const checkoutCartItem = {
          product: item.id,
          documentType: item.documentType,
          quantity: item.quantity,
        };
        totalPrice += item.price * item.quantity * duration;
        checkoutCart.push(checkoutCartItem);
      });
      try {
        const res = await axios.post(
          `https://lenda-server.onrender.com/api/v1/bookings/`,
          {
            cart: checkoutCart,
            ...bookingInfo,
            duration,
            totalPrice,
          }
        );
        if (res.status === 201) {
          alert("booking successfully created");
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getBookingByUserId(currentUserId) {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/users/${currentUserId}/bookings`
        );
        this.bookings = res.data.data.doc;
      } catch (err) {
        console.log(err);
      }
    },
    async getBookingDetail(bookingId) {
      try {
        const res = await axios.get(
          `https://lenda-server.onrender.com/api/v1/bookings/${bookingId}`
        );
        this.bookingDetail = res.data.data.doc;
      } catch (err) {
        console.log(err);
      }
    },
    async cancelBooking(bookingId) {
      const cancelCheck = confirm("Are you sure?");
      if (cancelCheck) {
        const res = await axios.delete(
          `https://lenda-server.onrender.com/api/v1/bookings/${bookingId}`
        );
        if (res.status === 204) {
          alert("Booking is canceled");
          return true;
        }
      }
      return alert("Booking was not canceled");
    },
    async updateBooking(updatedBooking) {
      const updatedBookingCart = [];
      const duration = this.durationCalculator(
        updatedBooking.date[0],
        updatedBooking.date[1]
      );
      let updatedTotalPrice = 0;
      updatedBooking.cart.forEach((item) => {
        const updatedCartItem = {
          product: item.product.id,
          documentType: item.documentType,
          quantity: item.quantity,
        };
        //calculate item price and quantity and duration
        updatedTotalPrice += item.product.price * item.quantity * duration;
        updatedBookingCart.push(updatedCartItem);
      });
      try {
        const res = await axios.patch(
          `https://lenda-server.onrender.com/api/v1/bookings/${updatedBooking.id}`,
          {
            cart: updatedBookingCart,
            totalPrice: updatedTotalPrice,
            date: updatedBooking.date,
            duration,
            companyTitle: updatedBooking.companyTitle,
            companyVatId: updatedBooking.companyVatId,
          }
        );
        if (res.status === 200) {
          alert("Booking is updated");
          return true;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
