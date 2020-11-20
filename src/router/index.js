import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index'
import RetrievePassword from '@/views/login/RetrievePassword'
import Layout from '@/views/layout/index'
import HomePage from '@/views/homePage/index'
import Test from '@/views/test/index'

Vue.use(Router)

export default new Router({
  routes: [
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
    {
      path: '/',
      component: Layout,
      redirect: 'home-page',
      children: [{
        path: 'home-page',
        name: '首页',
        component: HomePage
      }, {
        path: 'test',
        name: '测试页',
        component: Test
      }]
    },
  ]
})
