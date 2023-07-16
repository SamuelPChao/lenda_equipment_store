<script>
import useUserStore from "../stores/user";
import { mapState } from "pinia";
export default {
  name: "UserInfoView",
  computed: {
    ...mapState(useUserStore, {
      currentUser: "currentUser",
    }),
  },
};
</script>
<template>
  <div class="userInfoView">
    <div class="bannerBox">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
        fill="currentColor"
        class="bi bi-person-square"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
        />
      </svg>
      <h1 class="bannerTitle">會員資料</h1>
    </div>
    <div class="userInfoBox">
      <div class="fieldBox">
        <span class="userInfoField">姓名</span
        ><span class="userInfoValue">{{ currentUser.name }}</span>
      </div>
      <div class="fieldBox">
        <span class="userInfoField">電子信箱</span
        ><span class="userInfoValue">{{ currentUser.email }}</span>
      </div>
      <div class="fieldBox">
        <span class="userInfoField">手機號碼</span
        ><span class="userInfoValue">{{ currentUser.phone }}</span>
      </div>
      <div class="fieldBox">
        <span class="userInfoField">地址</span
        ><span class="userInfoValue">{{ currentUser.address }}</span>
      </div>
      <div class="fieldBox">
        <span class="userInfoField">身份證</span
        ><span class="userInfoValue">{{ currentUser.identification }}</span>
      </div>
    </div>
    <div class="actionBtnsBox">
      <router-link :to="{ name: 'user-info-edit' }" class="routerLink"
        ><button class="actionBtn">編輯資料</button></router-link
      >

      <router-link class="routerLink" :to="{ name: 'update-password' }"
        ><button class="actionBtn">更改密碼</button></router-link
      >

      <router-link :to="{ name: 'account' }" class="routerLink"
        ><button class="actionBtn">回會員專區</button></router-link
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.userInfoView{
  width: 100%;
  margin: auto;
  .bannerBox{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    justify-content: center;
    align-items: center;
    .bannerTitle{
      width: 100%;
      margin: 1rem auto;
      text-align: center;
    }
  }
  .userInfoBox{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    .fieldBox{
      width: 60%;
      display: flex;
      justify-content: space-between;
      border-bottom: solid $border-color 1px;
      font-size: 1rem;
      margin:0.5rem 0;
      .userInfoField{
        width: 25%;}
      .userInfoValue{
        width: 75%;
      }
    }
  }
  .actionBtnsBox{
    width: 80%;
    display: flex;
    margin: 1rem auto;
    justify-content: space-evenly;
    .routerLink{
      width: 20%;
      .actionBtn{
        width: 100%;
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

@media(max-width:768px){
  .userInfoView{
    .userInfoBox{
      .fieldBox{
        width: 80%;
      }
    }
    .actionBtnsBox{
      width: 100%;
      flex-wrap: wrap;
      .routerLink{
        width: 100%;
        text-align: center;
        .actionBtn{
          width: 60%;
        }
      }
    }
  }
}
</style>
