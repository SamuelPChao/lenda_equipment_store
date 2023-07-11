import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import useUserStore from "../stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/news/:newsId",
      name: "news-detail",
      component: () => import("../views/NewsDetail.vue"),
    },
    {
      path: "/must-know",
      name: "must-know",
      component: () => import("../views/MustKnowView.vue"),
    },
    {
      path: "/:type/:brand",
      name: "category-brand",
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/account",
      name: "account",
      component: () => import("../views/AccountView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/info",
      name: "user-info",
      component: () => import("../views/UserInfoView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/info-edit",
      name: "user-info-edit",
      component: () => import("../views/UserInfoEditView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/order",
      name: "order",
      component: () => import("../views/OrderView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/order/:orderId",
      name: "order-detail",
      component: () => import("../views/OrderDetailView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/order-edit/:orderId",
      name: "order-edit",
      component: () => import("../views/OrderEditView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/update-password",
      name: "update-password",
      component: () => import("../views/UpdatePasswordView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/account/cart",
      name: "cart",
      component: () => import("../views/CartView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpView.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const store = useUserStore();
  await store.getUserStatus();
  console.log("router");

  return next();
});

export default router;
