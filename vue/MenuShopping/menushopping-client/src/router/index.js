import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: "/home",
    name: "home",
    component: home,
  },

  {
    path: "/login",
    name: "login",
    component: () => import("../views/login"),
  },
  {
    path: "/materialdetail/:id",
    name: "materialdetail",
    component: () => import("../views/materialdetail"),
  },
  {
    path: "/fooddetail/:id",
    name: "fooddetail",
    component: () => import("../views/fooddetail"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart"),
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/video"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account"),
  },
  {
    path: "/address",
    name: "address",
    component: () => import("../views/address"),
  },
  {
    path: "/addAddress",
    name: "addAddress",
    component: () => import("../views/addAddress"),
  },
  {
    path: "/orderdetail",
    name: "orderdetail",
    component: () => import("../views/orderdetail"),
  },
  {
    path: "/myorder",
    name: "myorder",
    component: () => import("../views/myorder"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
