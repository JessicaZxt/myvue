import router from './router'
import store from './store/index'
import Vue from 'vue'
import ViewUI from 'view-design'

Vue.use(ViewUI)

router.beforeEach((to, form, next) => {
    ViewUI.LoadingBar.start()
    next()
})
router.afterEach(to => {
    ViewUI.LoadingBar.finish()
})