// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import './foundation'
import App from './App'
import router from './router'
import './css/_app.scss'
import 'swiper/dist/css/swiper.css'
import SocialSharing from 'vue-social-sharing'

Vue.use(SocialSharing);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
