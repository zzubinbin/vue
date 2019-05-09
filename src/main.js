// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'


Vue.use(router)
Vue.config.productionTip = false

let app = Vue.extend(App)

let router = new router({
  linkActiveClass: 'active'
})

//路由map方法
router.map({
  '/goods': {
    component: goods
  },
  'ratings':{
    component: ratings
  },
  'seller':{
    component: seller
  }
})

//路由绑定
router.start(app,'#app')
//设置默认跳转地址
router.go('/goods')
