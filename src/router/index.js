import Vue from 'vue'
import Router from 'vue-router'
import shoppingMall from '../pages/shoppingMall'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: shoppingMall
    }
  ]
})
