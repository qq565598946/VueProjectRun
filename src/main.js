// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store/store'
import common from './common/common'
import BaiduMap from 'vue-baidu-map'
import echarts from 'echarts'
import '../static/css/layui.css'
import '../static/css/projectManagement.css'

Vue.prototype.$echarts = echarts
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'YOUR_APP_KEY'
})
Vue.prototype.COMMON = common
Vue.use(store)
Vue.use(Vuex)
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
