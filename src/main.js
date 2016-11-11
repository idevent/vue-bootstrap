//样式加载
import 'assets/style/app.less'
import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes'
import App from './App'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
})

/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
  router: router,
  template: '<App/>',
  components: {
      App
  }
})
