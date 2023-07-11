<script>
import { mapActions, mapState } from "pinia";
import useShoppingCartStore from "../stores/shoppingCart";
import useUserStore from "../stores/user";
export default {
  name: "AppHeader",
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  computed: {
    ...mapState(useUserStore, {
      isLoggedIn: "isLoggedIn",
    }),
    ...mapState(useShoppingCartStore, {
      cartItemQuantity: "cartItemQuantity",
    }),
  },
  methods: {
    ...mapActions(useShoppingCartStore, {
      toggleModal: "toggleModal",
    }),
    ...mapActions(useUserStore, {
      logoutUser: "logoutUser",
    }),
    async onLogout() {
      await this.logoutUser();
      // this.$router.go(0)
    },
  },
};
</script>

<template>
  <header class="navheader">
    <div class="logoBox">
      <RouterLink :to="{ name: 'home' }" class="logoLink"
        ><a class="logo">Lenda</a></RouterLink
      >
    </div>
    <div class="linkBox">
      <RouterLink :to="{ name: 'product' }"
        ><v-btn variant="text"> Product </v-btn></RouterLink
      >
      <RouterLink :to="{ name: 'news' }"
        ><v-btn variant="text"> News </v-btn></RouterLink
      >
    </div>
    <div class="cartBox">
      <svg
        @click.prevent="toggleModal"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-cart carticon"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <span class="cartItemQuantity" v-show="cartItemQuantity > 0">{{
        cartItemQuantity
      }}</span>
    </div>
    <div class="authBox">
      <RouterLink v-if="!isLoggedIn" :to="{ name: 'login' }" class="routerLink"
        ><v-btn variant="text"> Login </v-btn></RouterLink
      >
      <RouterLink v-if="!isLoggedIn" :to="{ name: 'signup' }" class="routerLink"
        ><v-btn variant="text"> Sign Up </v-btn></RouterLink
      >
      <RouterLink v-if="isLoggedIn" :to="{ name: 'account' }" class="routerLink"
        ><v-btn variant="text"> My Account </v-btn></RouterLink
      >
      <RouterLink
        v-if="isLoggedIn"
        :to="{ name: 'home' }"
        @click="onLogout"
        class="routerLink"
        ><v-btn variant="text"> Logout </v-btn></RouterLink
      >
    </div>
  </header>
  <header class="mobileNavHeader">
    <div class="logoBox">
      <RouterLink :to="{ name: 'home' }" class="logoLink"
        ><a class="logo">Lenda</a></RouterLink
      >
    </div>
    <div class="cartBox">
      <svg
        @click.prevent="toggleModal"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="currentColor"
        class="bi bi-cart carticon"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </svg>
      <span class="cartItemQuantity" v-show="cartItemQuantity > 0">{{
        cartItemQuantity
      }}</span>
    </div>
    <div class="mobileNavMenuBtnBox">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
        @click.prevent="mobileMenuOpen = !mobileMenuOpen"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </div>
  </header>
  <div
    class="mobileNavMenuBox"
    v-if="mobileMenuOpen"
    :class="{ mobileNavMenuBoxOpen: mobileMenuOpen }"
    @click.prevent="mobileMenuOpen = !mobileMenuOpen"
  >
    <div class="linkBox">
      <RouterLink :to="{ name: 'product' }" class="routerLink">
        Product
      </RouterLink>
      <RouterLink :to="{ name: 'news' }" class="routerLink"> News </RouterLink>
      <RouterLink v-if="!isLoggedIn" :to="{ name: 'login' }" class="routerLink">
        Login
      </RouterLink>
      <RouterLink
        v-if="!isLoggedIn"
        :to="{ name: 'signup' }"
        class="routerLink"
      >
        Sign Up
      </RouterLink>
      <RouterLink
        v-if="isLoggedIn"
        :to="{ name: 'account' }"
        class="routerLink"
      >
        My Account
      </RouterLink>
      <RouterLink
        v-if="isLoggedIn"
        :to="{ name: 'home' }"
        @click="onLogout"
        class="routerLink"
      >
        Logout
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navheader, .mobileNavHeader{
  background-color: rgb(35, 35, 35);
  z-index: 1000 !important;
  color:$not-that-white;
  display: flex;
  position: fixed;
  align-items: center;
  left: 0;
  top: 0;
}
@media (min-width: 1024px){
  .navheader {
  width: 100%;
  height: 5rem;
  box-shadow: 0 0 0.5rem 0.5rem $not-that-black-shadow;
  justify-content: center;
    .logoBox {
      width: 10%;
      display: flex;
      .logoLink {
        display: flex;
        .logo {
          width: 4rem;
          height: 4rem;
          background-color: red;
          border-radius: 100%;
          font-style: italic;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.25rem;
        }
      }
    }

    .linkBox{
      width: 40%;
      display: flex;
      justify-content: space-evenly;
    }

    .cartBox{
      position: relative;
      display: flex;
      justify-content: center;
      padding: 0 2rem;
      .carticon{
        cursor: pointer;
      }
      .carticon:hover{
        background-color: $not-that-grey;
        border-radius:0.25rem;
      }
      .cartItemQuantity{
        position: absolute;
        right:0.75rem;
        bottom: 1rem;
        background-color: red;
        padding: 0.2rem 0.75rem;
        border-radius: 5rem;
      }
    }
    .authBox{
      display:flex;
      width:20%;
      justify-content: center;
      align-items: center;
      .routerLink{
      margin:0 1rem;
      }
    }
  }
  .mobileNavHeader{
    display: none;
  }
  .mobileNavMenuBox{
    display: none;
  }
}
@media (max-width:768px){
  .navheader{
    display: none;
  }
  .mobileNavHeader{
    width: 100vw;
    height: 6rem;
    justify-content: space-evenly;
    .logoBox {
      width: 50%;
      display: flex;
      .logoLink {
        display: flex;
        .logo {
          width: 4rem;
          height: 4rem;
          background-color: red;
          border-radius: 100%;
          font-style: italic;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.25rem;
        }
      }
    }
    .cartBox{
      width: 10%;
      display:flex;
      justify-content: right;
    }
    .mobileNavMenuBtnBox{
      width:10%;
      display: flex;
      justify-content: left;
    }
  }
  .mobileNavMenuBox{
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15rem;
    z-index: 1000 !important;
    background-color:$mobile-menu;
    top:6rem;
    border: 0.1rem solid $not-that-black;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    .linkBox{
      width:100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      flex-direction: column;
      align-items: center;
      .routerLink{
        width: 50%;
        text-align: center;
        font-size: 1.25rem;
        padding: 0.25rem;
        border: 0.1rem solid $not-that-black;
        border-radius: 0.5rem;
      }
      
    }
  }
}
</style>
