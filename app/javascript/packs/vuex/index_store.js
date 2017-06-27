import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    agreement: false
  },
  mutations: {
    toggle (state) {
      state.agreement = !state.agreement
    }
  },
  getters: {
    get_agre (state) {
      return state.agreement
    }
  }
});
