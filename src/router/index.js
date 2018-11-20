import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/index.vue'
import member from '../pages/member/index.vue'
import shopcar from '../pages/shopcar/index.vue'
import search from '../pages/search/index.vue'

export default new Router({
  routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/search',component:search},
      {path:'/shopcar',component:shopcar},
      {path:'/member',component:member}
  ],
  linkActiveClass:'mui-active'
})


