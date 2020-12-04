import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPage/404')
  },
  {
    path: '/retrievePassword',
    name: 'retrievePassword',
    component: () => import('@/views/login/RetrievePassword')
  },
  {
    path: '/',
    component: () => import('@/views/layout/index'),
    redirect: 'home-page',
    children: [{
      path: 'home-page',
      name: '首页',
      component: () => import('@/views/homePage/index')
    }, {
      path: 'test',
      name: '测试页',
      component: () => import('@/views/test/index')
    }]
  },
]

const createRouter = () =>
  new Router({
    routes: constantRouter
  })

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
