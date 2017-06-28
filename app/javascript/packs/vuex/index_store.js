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
    deletePost (state, id) {
      var array = state.posts[0];
      var i;
      array.map(function(post){
          if (post.post.id == id) {
              i = array.indexOf(post);
              array.splice(i, 1);
          }
      })
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
