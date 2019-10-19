import Vue from 'vue'
import shop from './components/pages/shop'
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
import vuescroll from 'vuescroll'

Vue.use(Button).use(Row).use(Col).use(SwipeItem).use(Swipe).use(List).use(Lazyload).use(VueResource, axios).use(vuescroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { shop },
  template: '<shop/>'
})
