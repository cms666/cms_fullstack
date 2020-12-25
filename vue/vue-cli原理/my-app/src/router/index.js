import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home.vue'
import Login from '../view/login.vue'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes:[
    {
      path: '/',
      component:Home
    },
    {
      path: '/login',
      component:Login
    }
  ]
})

export default router