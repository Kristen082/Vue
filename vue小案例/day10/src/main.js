import Vue from 'vue'
import App from './App'
import router from './router'

import plugins from './plugins'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.min.css'


Vue.config.productionTip = false


Vue.use(plugins,{
  aa:'1701A'
});

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/timg.gif'),
  attempt: 1
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
