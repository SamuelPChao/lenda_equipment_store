<script>
import useUserStore from "../stores/user";
import { mapState, mapActions } from "pinia";
import "../includes/validation";
export default {
  name: "UserInfoEditView",
  data() {
    return {
      user: this.currentUser,
    };
  },
  computed: {
    ...mapState(useUserStore, {
      currentUser: "currentUser",
    }),
  },
  methods: {
    ...mapActions(useUserStore, {
      updateUserInfo: "updateUserInfo",
    }),
    async onSubmit(values, actions) {
      const res = await this.updateUserInfo(values, actions);
      if (res) this.$router.push({ name: "user-info" });
    },
  },
};
</script>
<template>
  <div class="userInfoEditView">
    <div class="formBox">
      <Form
        class="userInfoForm"
        :initial-values="currentUser"
        @submit="onSubmit"
      >
        <div class="fieldBox">
          <span class="infoField">電子信箱</span>
          <Field
            name="email"
            type="email"
            rules="required|email"
            class="inputField"
          ></Field>
          <ErrorMessage name="email" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <span class="infoField">手機號碼</span>
          <Field
            name="phone"
            type="text"
            rules="required|digits:10"
            class="inputField"
            placeholder="Please Enter Phone Number"
          ></Field>
          <ErrorMessage name="phone" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <span class="infoField">地址</span>
          <Field
            name="address"
            type="text"
            rules="required|min:1"
            class="inputField"
            placeholder="Please Enter Address"
          ></Field>
          <ErrorMessage name="address" class="errorMessage" />
        </div>
        <div class="actionBtnsBox">
          <button type="submit" class="actionBtn">確認修改</button>
          <router-link :to="{ name: 'user-info' }" class="routerLink">
            <button class="actionBtn">取消修改</button></router-link
          >
        </div>
      </Form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userInfoEditView{
  margin: auto;
  .formBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    .userInfoForm{
      width:100%;
      display: flex;
      flex-wrap: wrap;
      .fieldBox{
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: solid $border-color 0.075rem;
        font-size: 1rem;
        margin:0.5rem auto;
        .infoField{
          width: 25%;
        }
        .inputField{
          width: 75%;
          border: solid $border-color 0.075rem;
          border-radius: 0.25rem;
          text-align: left;
          margin:0.25rem 0
        }
        .errorMessage{
          width: 100%;
          text-align: center;
          color:$error-msg-color;
        }
      }
      .actionBtnsBox{
        width: 80%;
        display: flex;
        margin:0.5rem auto;
        justify-content: space-evenly;
        .actionBtn{
          width: 10rem;
          font-size: 1rem;
          text-align: center;
          border-radius: 0.5rem;
          border: 0.1rem solid $border-color-black;
          transition: all 0.2s linear;
          padding: 0.25rem 0;
          margin: 0.5rem 0;
        }
        .actionBtn:hover{
          background-color: $font-black;
          color:$font-white;
        }
      }
    }
  }
}
@media(max-width:768px){
  .userInfoEditView{
    .formBox{
      .userInfoForm{
        .fieldBox{
          width: 80%;
          justify-content: center;
          border: none;
          padding: 0.5rem 0;
          .infoField{
            text-align: center;
            width: 50%;
          }
          .inputField{
            width: 100%;
          }
          .errorMessage{
            font-size:0.75rem;
          }
        }
        .actionBtnsBox{
          width: 100%;
          flex-wrap: wrap;
          .routerLink{
            width: 100%;
            text-align: center;
          }
          
          .actionBtn{
            width: 60%;
          }
        }
      }
    }
  }
}
</style>
