import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '../pages/home/index.vue'
import member from '../pages/member/index.vue'
import shopcar from '../pages/shopcar/index.vue'
import search from '../pages/search/index.vue'
import newsListComponent from '../pages/newsList/index.vue'
import newsInfoComponent from '../pages/newsInfo/'
import photoListComponent from '../pages/photoList/'
import photoInfoComponent from '../pages/photoInfo/'
export default new Router({
  routes: [
      {path:'/',redirect:'/home'},
      {path:'/home',component:home},
      {path:'/search',component:search},
      {path:'/shopcar',component:shopcar},
      {path:'/member',component:member},
      {path:'/home/newsList',component:newsListComponent},
      {path:'/home/newsInfo/:id',component:newsInfoComponent},
      {path:'/home/photoList/',component:photoListComponent},
      {path:'/home/photoInfo/:imgid',component:photoInfoComponent}
  ],
  linkActiveClass:'mui-active'
})


