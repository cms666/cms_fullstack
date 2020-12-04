import Vue from "vue";
import VueRouter from "vue-router";
import goods from "@/views/goods/goods";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "goods",
    component: goods,
  },
  {
    path: "/comment",
    name:'comment',
    component: ()=>import("@/views/comment/comment"),
  },
  {
    path: "/seller",
    name:'seller',
    component: ()=>import("@/views/seller/seller"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
