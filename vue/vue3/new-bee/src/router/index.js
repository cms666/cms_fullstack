import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:Home,
    meta:{
      index: 1
    }
  },
  {
    path: '/login',
    name:'login',
    component:() => import('../views/Login')
  },
  {
    path: '/product/:id',
    name:'product',
    component:() => import('../views/ProductDetail')
  },
  {
    path: '/cart',
    name:'cart',
    component:() => import('../views/Cart')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
