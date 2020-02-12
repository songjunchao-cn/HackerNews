import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as api from './api/api'
import * as imgUrls from './components/imgurls'
import './assets/global/init.scss'
import './assets/global/index.scss'

Vue.config.productionTip = false
Vue.prototype.$imgUrls = imgUrls
Vue.prototype.$api = api
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
