
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router' 
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
