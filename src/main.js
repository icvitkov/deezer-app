import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueIziToast from 'vue-izitoast'
import 'izitoast/dist/css/iziToast.min.css'

Vue.use(VueIziToast, {
  position: 'topRight'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
