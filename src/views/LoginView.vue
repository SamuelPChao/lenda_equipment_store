<script>
import { mapActions } from "pinia";
import useUserStore from "../stores/user";

export default {
  name: "LoginView",
  methods: {
    ...mapActions(useUserStore, {
      loginUser: "loginUser",
    }),
    async onSubmit(values, actions) {
      try {
        const res = await this.loginUser(values, actions);
        if (res) this.$router.push({ name: "home" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<template>
  <div class="loginView">
    <div class="loginFormBox">
      <Form @submit="onSubmit" class="loginForm">
        <div class="fieldBox">
          <h3 class="fieldTitle">身份證號碼</h3>
          <Field
            name="identification"
            type="text"
            rules="required|length:10"
            class="inputField"
            placeholder="Please Enter ID"
          >
          </Field>
          <ErrorMessage name="identification" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">密碼</h3>
          <Field
            name="password"
            type="password"
            rules="required|min:1"
            class="inputField"
            placeholder="Please Enter Password"
          />
          <ErrorMessage name="password" class="errorMessage" />
        </div>
        <div class="actionBtnBox">
          <button type="submit" class="actionBtn">登入會員</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loginView{
  margin: auto;
  .loginFormBox{
    width: 100%;
    margin: 6rem auto 0 auto;
    .loginForm{
      width: 60%;
      padding: 2rem;
      margin:0 auto;
      border: 0.1rem $border-color solid;
      border-radius: 0.25rem;
      box-shadow: 0 0 1rem 0.1rem $box-shadow-black;
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
          width: 100%;
          text-align: center;
          padding:0 0 1rem 0;
          font-size:1.5rem
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
          padding:1rem 0;
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
          background-color: $font-black;
          color:$font-white
        }
      }
    }
  }
}
@media(max-width:768px){
  .loginView{
    .loginFormBox{
      .loginForm{
        width:90%;
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
