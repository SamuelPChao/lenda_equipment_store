<script>
import { mapActions } from "pinia";
import useUserStore from "../stores/user";

export default {
  name: "SignUpView",
  methods: {
    ...mapActions(useUserStore, {
      signupUser: "signupUser",
    }),
    async onSubmit(values, actions) {
      try {
        const res = await this.signupUser(values, actions);
        if (res) this.$router.push({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div class="signUpView">
    <div class="signupFormBox">
      <Form class="signupForm" @submit="onSubmit">
        <h3 class="fieldSectionLine">驗證</h3>
        <div class="fieldBox">
          <h3 class="fieldTitle">身份證號碼</h3>
          <Field
            name="identification"
            type="text"
            rules="required|length:10"
            class="inputField"
            placeholder="Please Enter Identification"
          ></Field>
          <ErrorMessage name="identification" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">密碼</h3>
          <Field
            name="password"
            type="password"
            rules="required|min:10"
            class="inputField"
            placeholder="Please Enter Password"
          />
          <ErrorMessage name="password" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">請確認密碼</h3>
          <Field
            name="passwordConfirm"
            type="password"
            rules="required|passwords_match:@password"
            class="inputField"
            placeholder="Please Confirm Password"
          />
          <ErrorMessage name="passwordConfirm" class="errorMessage" />
        </div>
        <h3 class="fieldSectionLine">會員資料</h3>
        <div class="fieldBox">
          <h3 class="fieldTitle">姓名</h3>
          <Field
            name="name"
            type="text"
            class="inputField"
            rules="required|min:1|max:40"
          ></Field>
          <ErrorMessage name="name" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">電子信箱</h3>
          <Field
            name="email"
            type="email"
            rules="required|email"
            class="inputField"
          ></Field>
          <ErrorMessage name="email" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">地址</h3>
          <Field
            name="address"
            type="text"
            rules="required|min:1"
            class="inputField"
            placeholder="Please Enter Address"
          ></Field>
          <ErrorMessage name="address" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">手機號碼</h3>
          <Field
            name="phone"
            type="text"
            rules="required|digits:10"
            class="inputField"
            placeholder="Please Enter Phone Number"
          ></Field>
          <ErrorMessage name="phone" class="errorMessage" />
        </div>
        <div class="actionBtnBox">
          <button type="submit" class="actionBtn">註冊會員</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.signUpView{
  margin: auto;
  .signupFormBox{
    width: 100%;
    margin: 6rem auto 6rem auto;
    .signupForm{
      width: 60%;
      padding: 2rem;
      border: 0.1rem $border-color solid;
      border-radius: 0.25rem;
      margin: 0 auto;
      box-shadow: 0 0 1rem 0.1rem $box-shadow-black;
      background-color: $component-bg-color;
      .fieldSectionLine{
        margin: 0 auto;
        padding:2rem 0 0 0;
        border-bottom: solid 0.1rem $border-color;
        font-size:1.5rem;
      }
      .fieldBox{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        padding:2rem 0.5rem;
        border-bottom: 0.1rem solid $border-color;
        .fieldTitle{
          font-size:1.25rem;
          text-align: center;
          padding:0 0 1rem 0;
        }
        .inputField{
          width:90%;
          height: 2.5rem;
          font-size: 1.25rem;
          border: 0.1rem solid $border-color;
          border-radius: 0.5rem;
        }
        .errorMessage{
          width: 90%;
          display: block;
          color:$error-msg-color;
          text-align: center;
        }
      }
      .actionBtnBox{
        width: 100%;
        padding:2rem 0 0 0;
        display: flex;
        justify-content: center;
        .actionBtn{
          width: 25%;
          font-size: 1.25rem;
          border: 0.1rem solid $font-black;
          border-radius: 0.5rem;
          transition: all 0.2s linear;
        }
        .actionBtn:hover{
          background-color:$font-black;
          color:$font-white
        }
      }
    }
  }
}
@media(max-width:768px){
  .signUpView{
    .signupFormBox{
      .signupForm{
        width: 90%;
        .fieldBox{
          .errorMessage{
            width: 100%;
            font-size:0.75rem;
          }
        }
        .actionBtnBox{
          .actionBtn{
            width: 60%;
          }
        }
      }
    }
  }
}
</style>
