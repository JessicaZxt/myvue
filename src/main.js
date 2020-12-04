import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import md5 from 'md5'
import store from './store/index'
import './styles/index.scss'
import './permission'
import directive from '@/untils/directive'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.prototype.$md5 = md5
Vue.use(BaiduMap, {
  ak: 'UGPWnVg04UmCPhi8HsEBdlKGdfFoXTuB'
})

for (const key in directive) {
  if (directive.hasOwnProperty(key)) {
    console.log(key, directive[key]);
    Vue.directive(key, directive[key])
  }
}

console.log(Vue);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
