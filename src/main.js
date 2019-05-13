import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Axios from 'axios'

Vue.use(VueResource, Axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
