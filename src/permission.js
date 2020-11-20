import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

NProgress.configure({ showSpinner: false })

router.beforeEach((to, form, next) => {
    NProgress.start()
    next()
})
router.afterEach(to => {
    NProgress.done()
})