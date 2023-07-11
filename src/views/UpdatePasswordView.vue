<script>
import useUserStore from '../stores/user'
import { mapActions } from 'pinia'
export default {
  name: 'UpdatePasswordView',
  methods: {
    ...mapActions(useUserStore, {
      updateUserPassword: 'updateUserPassword'
    }),
    onSubmit() {}
  }
}
</script>
<template>
  <div class="updatePasswordView">
    <div class="formBox">
      <Form
        class="updatePasswordForm"
        @submit="updateUserPassword"
      >
        <div class="fieldBox">
          <span>Current Password</span>
          <Field
            name="passwordCurrent"
            type="password"
            rules="required|min:10"
            class="inputField"
            placeholder="Please Enter Password"
          />
          <ErrorMessage
            name="passwordCurrent"
            class="errorMessage"
          />
        </div>
        <div class="fieldBox">
          <span>Password</span>
          <Field
            name="password"
            type="password"
            rules="required|min:10"
            class="inputField"
            placeholder="Please Enter Password"
          />
          <ErrorMessage
            name="password"
            class="errorMessage"
          />
        </div>
        <div class="fieldBox">
          <span>Confirm Password</span>
          <Field
            name="passwordConfirm"
            type="password"
            rules="required|passwords_match:@password"
            class="inputField"
            placeholder="Please Confirm Password"
          />
          <ErrorMessage
            name="passwordConfirm"
            class="errorMessage"
          />
        </div>
        <div class="actionBtnsBox">
          <button type="submit" class="actionBtn">
            Submit
          </button>
          <router-link
            :to="{ name: 'user-info' }"
            class="routerLink"
          >
            <button class="actionBtn">
              Cancel Edit
            </button></router-link
          >
        </div>
      </Form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.updatePasswordView{
  margin: auto;
  .formBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    .updatePasswordForm{
      width:100%;
      display: flex;
      flex-wrap: wrap;
      .fieldBox{
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-bottom: solid grey 1px;
        font-size: 1rem;
        margin:0.5rem auto;
        span{
          width: 25%;
        }
        .inputField{
          width: 75%;
          border: 1px solid grey;
          border-radius: 0.25rem;
          text-align: left;
          margin:0.25rem 0
        }
        .errorMessage{
          width: 100%;
          text-align: center;
          color:red;
        }
      }
      .actionBtnsBox{
        width: 80%;
        display: flex;
        margin:1rem auto;
        justify-content: space-evenly;
        .actionBtn{
          width: 10rem;
          font-size: 1rem;
          text-align: center;
          border-radius: 0.5rem;
          border: 0.1rem solid black;
          transition: all 0.2s linear;
          padding: 0.25rem 0;
          margin: 0.5rem 0;
        }
        .actionBtn:hover{
          background-color: black;
          color:white
        }
      }
    }
  }
}
@media(max-width:768px){
  .updatePasswordView{
    .formBox{
      .updatePasswordForm{
        .fieldBox{
          width: 80%;
          justify-content: center;
          border: none;
          span{
            width: 50%;
            text-align: center;
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
