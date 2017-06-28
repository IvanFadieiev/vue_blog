<template>
  <div id="index" class="col-md-12" >
    <div class="container">
      <div class="jumbotron row">
        <div id="header" class="col-md-8">
          <h1>Vue Blog</h1>
          {{ this.$store.getters.getMsg }}
        </div>
        <div v-if='check_session()' class="posts_navigation col-md-2">
          <router-link class='btn btn-danger ' to="/posts">Posts list</router-link><br />
          <router-link class='btn btn-danger ' to="/new_posts">New post</router-link><br />
        </div>
        <div v-if='check_session()' class="delete_sess_button col-md-2">
          <button class="log_out" @click="delete_vue_session">Log Out</button>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
      }
    },

    beforeCreate: function(){
      function getCookie(name) {
          var matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
      };
      var token = getCookie('token');
      if (token){
          this.$session.start();
          this.$session.set('jwt', token);
          this.$store.commit('toggle', true)
          this.$router.push('/posts')
      } else {
          if (!this.$session.exists()) {
              this.$router.push('/')
          };
      }
    },

    created: function() {
    },

    methods: {
        delete_vue_session: function(){
            this.$http.post('/logout', { token: this.$session.get('jwt') }, {
                headers: {
                    'X-CSRF-Token': document.getElementsByName('csrf-token')[0].getAttribute('content')
                }
            });
            this.$session.destroy();
            this.$router.push('/')
        },
        check_session: function() {
            return this.$session.exists()
        }
    }
  }
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
  }
</style>
