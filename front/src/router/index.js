import Vue from 'vue'
import Router from 'vue-router'
import LoginR from '@/views/LoginR.vue'
import RegisterL from '@/views/RegisterL.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'registro',
      component: RegisterL,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginR,
    },
  ]
})
