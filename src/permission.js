import router from './router'
import store from './store/index'
import Vue from 'vue'
import ViewUI from 'view-design'
import { getToken } from '@/untils/auth'

Vue.use(ViewUI)

const whiteList = ['/login']

router.beforeEach((to, form, next) => {
    ViewUI.LoadingBar.start()
    if (getToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            ViewUI.LoadingBar.finish()
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next({ path: '/login' })
            ViewUI.LoadingBar.finish()
        }

    }

})
router.afterEach(to => {
    ViewUI.LoadingBar.finish()
})