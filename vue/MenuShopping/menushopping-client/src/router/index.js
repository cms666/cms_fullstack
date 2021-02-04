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
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;