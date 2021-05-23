import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import News from './news.vue'
// import Home from './home'
// import SpecificNews from './specific-news.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/pages/about-us",
      components: require("./about-us.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    }
  ]
});

import 'materialize-css/dist/css/materialize.min.css'

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
