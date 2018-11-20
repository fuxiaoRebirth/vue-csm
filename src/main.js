import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 发送ajax用
// import VueResource from 'vue-resource' 
// Vue.use(VueResource)



import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
