import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    agreement: false,
    msg: 'Greeting!!!',
    posts: [],
  },

  mutations: {
    toggle (state, bool) {
      state.agreement = bool;
    },
    setMsg (state, text) {
      state.msg = text;
    },
    setPosts (state, post) {
      state.posts.unshift(post);
    },
    setNewPosts (state, post) {
        state.posts[0].unshift(post);
    },
  },

  getters: {
    get_agre (state) {
      return state.agreement
    },
    getMsg (state) {
      return state.msg
    },
    getPosts (state) {
      return state.posts
    }
  }
});
