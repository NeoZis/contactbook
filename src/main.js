import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import store from './store'
// import  router from './router'



new Vue({
  el: '#app',
  render: h => h(App),
  // router,
  store
})
