import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutUs from './about-us.vue'
import News from './news.vue'
import Home from './home'
import SpecificNews from './specific-news.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/about-us', component: AboutUs },
  { path: '/news', component: News },
  { path: '/', component: Home },
  { path: '/pages/609cffdff247c3001c56cfa7', component: SpecificNews }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

import 'materialize-css/dist/css/materialize.min.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
