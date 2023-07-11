<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppShoppingCart from "./components/AppShoppingCart.vue";
import { mapActions, mapState } from "pinia";
import useUserStore from "./stores/user";
import { handleError } from "vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { AppHeader, AppShoppingCart, AppFooter },
  computed: {
    ...mapState(useUserStore, {
      isLoggedIn: "isLoggedIn",
    }),
  },
  methods: {
    ...mapActions(useUserStore, {
      getUserStatus: "getUserStatus",
    }),
  },
  // watch: {
  //   $route: {
  //     immediate: true,
  //     async handler(newValue, oldValue) {
  //       try {
  //         if (this.$cookies.get("jwt"))
  //           await this.getUserStatus(this.$cookies.get("jwt"));
  //         if (newValue.meta.requiresAuth && !this.isLoggedIn)
  //           return this.$router.push({ name: "login" });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //   },
  // },
};
</script>

<template>
  <app-header></app-header>
  <RouterView class="viewbody" v-slot="{ Component }">
    <transition name="fade"><component :is="Component" /></transition>
  </RouterView>
  <app-shopping-cart> </app-shopping-cart>
  <app-footer></app-footer>
</template>

<style lang="scss" scoped>
.viewbody {
  width: 100%;
  margin: 0 auto;
  max-width: 1280px;
  min-height: calc(100vh - 12rem);
  padding-top: 6rem;
  padding-bottom: 6rem;
}
@media(max-width:768px){
  .viewbody{
    max-width: 768px;
  }
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.1s linear;
}
.fade-leave-to {
  opacity: 0;
}
</style>
