<script>
export default {
  name: 'AppCompanyInfo',
  props: {
    companyTitle: String,
    companyVatId: String
  }
}
</script>

<template>
  <div class="appCompanyInfo">
    <div class="companyInfo">
      <Form class="companyInfoForm">
        <div class="companyInfoFieldBox">
          <h3 class="companyInfoTitle">Company Title</h3>
          <Field
            class="companyInfoInputField"
            name="companyTitle"
            type="text"
            placeholder="Please Enter Company Title"
            :value="companyTitle"
            @input="
              $emit(
                'updateCompanyTitle',
                $event.target.value
              )
            "
          ></Field>
          <ErrorMessage name="companyTitle" />
        </div>
        <div class="companyInfoFieldBox">
          <h3 class="companyInfoTitle">Company Vat Id</h3>
          <Field
            class="companyInfoInputField"
            name="companyVatId"
            type="text"
            placeholder="Please Enter 8-digit Company Vat Id"
            :value="companyVatId"
            @input="
              $emit(
                'updateCompanyVatId',
                $event.target.value
              )
            "
          ></Field>
          <ErrorMessage name="companyVatId" />
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.companyInfo{
  width: 100%;
  padding: 2.5rem 0 2.5rem 0;
  .companyInfoForm{
    .companyInfoFieldBox{
      width: 100%;
      padding: 1.5rem 0 1.5rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .companyInfoTitle{
        width: 75%;
        text-align: center;
        padding:0.5rem 0 0.5rem 0;
      }
      .companyInfoInputField{
        width: 75%;
        height: 2rem;
        border: 1px solid $not-that-black;
        border-radius: 0.25rem;
      }
    }
  }
}
</style>
