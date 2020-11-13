import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index'
import RetrievePassword from '@/views/RetrievePassword'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/retrievePassword',
      name: 'retrievePassword',
      component: RetrievePassword
    },
  ]
})
