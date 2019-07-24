import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-cycle
import router from './router';
import store from './store';
import './registerServiceWorker';

import '@/plugins/buefy';
import '@/plugins/vee-validate';

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
