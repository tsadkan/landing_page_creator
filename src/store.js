import Vue from 'vue';
import Vuex from 'vuex';

// eslint-disable-next-line import/no-cycle
import PageStore from '@/page.store';

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

const layout = {
  namespaced: true,
  state: {
    isRightModalActive: false,
    childComponent: null,
  },
  getters: {},
  mutations: {
    toggleModal(state, childComponent) {
      // eslint-disable-next-line
      state.isRightModalActive = !state.isRightModalActive;
      state.childComponent = childComponent;
    },
    setChildComponent(state, component) {
      state.childComponent = component;
    },
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core,
    layout,
    PageStore,
  },
});
