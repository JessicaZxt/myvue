import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import md5 from 'md5'
import store from './store/index'
import './styles/index.scss'
import './permission'

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.prototype.$md5 = md5

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
