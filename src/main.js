import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-cycle
import router from './router';
// eslint-disable-next-line import/no-cycle
import store from './store';
import './registerServiceWorker';

import '@/plugins/buefy';
import '@/plugins/vee-validate';
import '@/plugins/html2canvas';

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
