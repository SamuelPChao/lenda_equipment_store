<script>
export default {
  name: "AppDatePicker",
  data() {
    return {
      componentDate: this.date,
    };
  },
  props: {
    date: Array,
  },
  watch: {
    componentDate(newValue, oldValue) {
      this.$emit("updateDate", newValue);
    },
  },
};
</script>

<template>
  <div class="appDatePicker">
    <div class="datePickerBox">
      <h3 class="datePickerTitle">租借日期</h3>
      <VueDatePicker
        class="datePicker"
        v-model="componentDate"
        range
      ></VueDatePicker>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.appDatePicker{
  .datePickerBox{
    width: 100%;
    padding: 2.5rem 0 2.5rem 0;
    .datePickerTitle{
      text-align: center;
      font-size:1.25rem;
    }
    .datePicker{
      width: 75%;
      margin:1rem auto;
      border-radius: 0.25rem;
      border:solid 0.05rem $border-color;
    }
  }
}
</style>
