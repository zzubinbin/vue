import Vue from 'vue'
import shoppingMall from './components/shoppingMall/shoppingMall'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import { Button, Row, Col } from 'vant'
import 'vant/lib/index.css'

Vue.use(Button).use(Row).use(Col).use(VueResource, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { shoppingMall },
  template: '<shoppingMall/>'
})
