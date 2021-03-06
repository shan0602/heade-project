import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
// 路由懒加载
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login/Login.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
