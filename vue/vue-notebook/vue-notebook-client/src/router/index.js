import Vue from 'vue'
import VueRouter from 'vue-router'
import StarLogin from '@/views/login/StarLogin'

Vue.use(VueRouter)

const routes = [
 {
   path: '/starLogin',
   name: 'starLogin',
   component: StarLogin,
   meta: {
     title: '登录'
   }
 },
 {
   path: '/register',
   name: 'register',
   component: () => import('@/views/register/Register'),
   meta: {
     title: '注册'
   }
 },
 {
  path: '/noteClass',
  name: 'noteClass',
  component: () => import('@/views/noteClass/index'),
  meta: {
    title: '笔记分类'
  },
},
{
  path: '/noteList',
  name: 'noteList',
  component: () => import('@/views/noteList/index'),
  meta: {
    title: '笔记列表'
  },
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
