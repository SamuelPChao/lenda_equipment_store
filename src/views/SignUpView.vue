<script>
import { mapActions } from 'pinia'
import useUserStore from '../stores/user'

export default {
  name: 'SignUpView',
  methods: {
    ...mapActions(useUserStore, {
      signupUser: 'signupUser'
    }),
    async onSubmit(values, actions) {
      try {
        const res = await this.signupUser(values, actions)
        if (res) this.$router.push({ name: 'home' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
  <div class="signUpView">
    <div class="signupFormBox">
      <Form class="signupForm" @submit="onSubmit">
        <h3 class="fieldSectionLine">
          Identification And Password
        </h3>
        <div class="fieldBox">
          <h3 class="fieldTitle">Identification</h3>
          <Field
            name="identification"
            type="text"
            rules="required|length:10"
            class="inputField"
            placeholder="Please Enter Identification"
          ></Field>
          <ErrorMessage
            name="identification"
            class="errorMessage"
          />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">Password</h3>
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
          <h3 class="fieldTitle">Confirm Password</h3>
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
        <h3 class="fieldSectionLine">
          Personal Information
        </h3>
        <div class="fieldBox">
          <h3 class="fieldTitle">Name</h3>
          <Field
            name="name"
            type="text"
            class="inputField"
            rules="required|min:1|max:40"
          ></Field>
          <ErrorMessage name="name" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">Email</h3>
          <Field
            name="email"
            type="email"
            rules="required|email"
            class="inputField"
          ></Field>
          <ErrorMessage name="email" class="errorMessage" />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">Address</h3>
          <Field
            name="address"
            type="text"
            rules="required|min:1"
            class="inputField"
            placeholder="Please Enter Address"
          ></Field>
          <ErrorMessage
            name="address"
            class="errorMessage"
          />
        </div>
        <div class="fieldBox">
          <h3 class="fieldTitle">Phone Number</h3>
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
          <button type="submit" class="actionBtn">
            Submit
          </button>
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
    background-color: $not-that-white;
    margin: 6rem auto 6rem auto;
    .signupForm{
      width: 60%;
      padding: 2rem;
      border: 0.1rem $not-that-grey-blacker solid;
      border-radius: 0.25rem;
      margin: 0 auto;
      box-shadow: 0 0 1rem 0.1rem $not-that-black-shadow;
      .fieldSectionLine{
        margin: 0 auto;
        padding:2rem 0 0 0;
        border-bottom: solid 2px $not-that-grey-blacker;
        color:$not-that-black;
      }
      .fieldBox{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        padding:2rem 0.5rem;
        border-bottom: 1px solid $not-that-grey-blacker;
        .fieldTitle{
          text-align: center;
          padding:0 0 1rem 0;
          color:$not-that-black;
        }
        .inputField{
          width:90%;
          height: 2.5rem;
          font-size: 1.25rem;
          border: 0.1rem solid $not-that-grey-blacker;
          border-radius: 0.5rem;
        }
        .errorMessage{
          width: 90%;
          display: block;
          color:red;
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
          color:$not-that-black;
          border: 0.1rem solid $not-that-grey-blacker;
          border-radius: 0.5rem;
          transition: all 0.2s linear;
        }
        .actionBtn:hover{
          background-color:$not-that-grey-blacker;
          color:$not-that-white
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
      }
    }
  }
}
</style>
