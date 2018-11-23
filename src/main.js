import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


// 发送ajax用
import VueResource from 'vue-resource' 
Vue.use(VueResource)
// 配置全局域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/';

//mint-ui
import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.use(Lazyload)

// mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 公共样式
import './css/common.less'

// 导入格式化时间
import  moment  from 'moment'
//注册全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD hh:mm:ss"){
   return moment(dateStr).format(pattern)
})

//缩略图
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
