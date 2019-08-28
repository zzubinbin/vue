// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import shoppingMall from './pages/shoppingMall'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  List
} from 'vant'
import 'vant/lib/index.css'

Vue.use(Button).use(Row).use(Col).use(SwipeItem).use(Swipe).use(List).use(Lazyload).use(VueResource, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { shoppingMall },
  template: '<shoppingMall/>'
})
