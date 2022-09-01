import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
Vue.config.productionTip = false

Vue.use(Router);

Vue.use(VueToast, {
  position: 'bottom-right',
});

new Vue({
  router,  
  render: h => h(App),
}).$mount('#app')
