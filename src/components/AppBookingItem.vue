<script>
export default {
  name: 'AppBookingItem',
  computed: {
    startDate() {
      return this.booking.date[0]
    },
    endDate() {
      return this.booking.date[1]
    }
  },
  props: {
    booking: Object,
    isDetail: Boolean
  },
  methods: {
    dateToLocaleString(date) {
      return new Date(date).toLocaleString('ch-tw', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit'
      })
    }
  }
}
</script>

<template>
  <div class="appBookingItem">
    <div class="bookingInfoBox">
      <div class="bookingDateBox">
        <h3 class="bookingId">Order ID {{ booking.id }}</h3>
        <span class="bookingDate"
          >訂單日期:
          {{ dateToLocaleString(booking.createAt) }}
        </span>
        <span class="bookingDate">
          租借日期:
          {{
            booking.date
              ? dateToLocaleString(booking.date[0])
              : ''
          }}</span
        >
        <span class="bookingDate">
          歸還日期:
          {{
            booking.date
              ? dateToLocaleString(booking.date[1])
              : ''
          }}</span
        >
      </div>
      <div class="bookingPriceInfoBox">
        <span
          class="bookingCompanyTitle"
          v-if="booking.companyTitle"
          >公司名稱:
          {{
            booking.companyTitle ? booking.companyTitle : ''
          }}</span
        >
        <span
          class="bookingCompanyVatId"
          v-if="booking.companyVatId"
          >公司統編:
          {{
            booking.companyVatId ? booking.companyVatId : ''
          }}</span
        >
        <span class="bookingPrice"
          >器材總價: NT${{ booking.totalPrice }}</span
        >
      </div>
      <div class="bookingStatusBox">
        <span
          class="bookingStatus"
          v-if="!booking.canceled"
          >{{ booking.checked ? '已確認' : '未確認' }}</span
        >
        <span v-if="booking.canceled" class="bookingStatus"
          >已取消</span
        >
        <router-link
          v-if="isDetail"
          class="routerLink"
          :to="{
            name: 'order-detail',
            params: { orderId: booking.id }
          }"
        >
          訂單詳情</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appBookingItem{
  .bookingInfoBox{
    width: 85%;
    padding: 1rem;
    border: 0.1rem $not-that-grey-blacker solid;
    margin:1rem auto;
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color:$not-that-black;
    box-shadow: 0 0 0.5rem 0.1rem $not-that-black-shadow;
    .bookingDateBox{
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      .bookingId{
        width: 100%;
      }
      .bookingDate{
        width: 100%;
      }
    }
    .bookingPriceInfoBox{
      width: 35%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color:black;
      .bookingPrice, .bookingCompanyTitle, .bookingCompanyVatId{
        width: 100%;
      }
    }
    .bookingStatusBox{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 25%;
        .routerLink{
          padding:0.25rem 0.5rem;
          border: 0.075rem solid $not-that-black;
          border-radius: 0.25rem;
          background-color: $not-that-white;
          box-shadow: 0 0 0.1rem 0.01rem $not-that-black-shadow;
        }
        .routerLink:hover{
          background-color: $not-that-grey-blacker;
          color:$not-that-white;
        }
    }
  }
}

@media(max-width:768px){
  .appBookingItem{
    .bookingInfoBox{
      .bookingDateBox{
        .bookingId{
          border-bottom: 0.1rem solid $not-that-grey-blacker;
        }
        width: 100%;
        border-bottom: 0.1rem solid $not-that-grey-blacker;
      }
      .bookingPriceInfoBox{
        width: 100%;
        border-bottom: 0.1rem solid $not-that-grey-blacker;
      }
      .bookingStatusBox{
        width: 100%;
        flex-wrap:wrap;
        justify-content: center;
        .bookingStatus{
          width: 100%;
          padding: 0 0 0.5rem 0;
        }
        .routerLink{
          padding:0.125rem 0.25rem;
        }
      }
    }
  }
}
</style>
