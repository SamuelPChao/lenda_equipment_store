<script>
import AppWorkFlow from '../components/AppWorkFlow.vue'
import AppPaymentMethod from '../components/AppPaymentMethod.vue'
import AppPaymentInfo from '../components/AppPaymentInfo.vue'
export default {
  name: 'MustKnowView',
  components: {
    AppWorkFlow,
    AppPaymentMethod,
    AppPaymentInfo
  }
}
</script>
<template>
  <div class="mustKnowView">
    <app-work-flow></app-work-flow>
    <app-payment-method></app-payment-method>
    <app-payment-info></app-payment-info>
  </div>
</template>
<style lang="scss" scoped></style>
