import Vue from 'vue';
import Vuex from 'vuex';

const core = {
  namespaced: true,
  state: {
    pendingNetworkRequest: 0,
  },
  mutations: {
    addPendingRequest(state) {
      // eslint-disable-next-line
      state.pendingNetworkRequest += 1;
    },
    removePendingRequest(state) {
      // eslint-disable-next-line
      state.pendingNetworkRequest -= 1;
    },
  },
  getters: {
    showNetworkProgressBar: state => state.pendingNetworkRequest > 0,
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
  },
});
