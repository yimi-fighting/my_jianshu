import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 引入router
import routes from '@/router/router'
// 引入store
import store from '@/store'
import '@/assets/reset.css'
// 引入iconfont图标
import '@/assets/fonts/iconfont/iconfont.css'

// 引入element-ui
// import { Button } from 'element-ui'
// Vue.use(Button)


// 按需引入element-ui组件
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
