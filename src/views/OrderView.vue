<script>
import useUserStore from '../stores/user'
import useBookingStore from '../stores/booking'
import { mapActions, mapState } from 'pinia'
import AppBookingItem from '../components/AppBookingItem.vue'
export default {
  name: 'OrderView',
  components: {
    AppBookingItem
  },
  computed: {
    ...mapState(useUserStore, {
      currentUser: 'currentUser'
    }),
    ...mapState(useBookingStore, {
      bookings: 'bookings'
    })
  },
  methods: {
    ...mapActions(useBookingStore, {
      getBookingByUserId: 'getBookingByUserId'
    })
  },
  // beforeMount() {
  //   this.getBookingByUserId(this.currentUser.id)
  // },
  mounted() {
    this.getBookingByUserId(this.currentUser.id)
  }
}
</script>
<template>
  <div>
    <div class="orderView">
      <app-booking-item
        :isDetail="true"
        v-for="(booking, i) in bookings"
        :booking="booking"
      ></app-booking-item>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
