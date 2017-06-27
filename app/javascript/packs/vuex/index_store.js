import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    agreement: false,
    msg: 'Greeting!!!',
  },
  mutations: {
    toggle (state, bool) {
      state.agreement = bool;
    },

    setMsg (state, text) {
        state.msg = text
    }
  },
  getters: {
    get_agre (state) {
      return state.agreement
    },

    getMsg (state) {
      return state.msg
    }
  }
});
