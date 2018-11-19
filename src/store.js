import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state, value) {
      state.count -= value;
    }
  },
  getters: {
    optCount: function (state) {
      return "current count is: " + state.count;
    }
  },
  actions: {}
});
