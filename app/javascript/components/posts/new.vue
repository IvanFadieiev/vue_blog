<template>
  <div class="new_post">
    <div class="alert alert-danger" v-if="errors">
      <strong>Validation failed</strong>
      {{ error_messages }}
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Title</span>
      <input v-model="title" class="form-control">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Body</span>
      <textarea rows="5" type="body" v-model="body" class="form-control"></textarea>
    </div>
    <button class="btn btn-info" @click="user_login">Create Post</button>
    <posts_index v-bind:child_posts_list="this.$store.getters.getPosts[0]"/>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        errors: false,
        error_messages: '',
        title: '',
        body: ''
      }
    },

    beforeCreate: function () {
      if (!this.$session.exists()) {
        this.$router.push('/')
      }
    },

    methods: {
      user_login: function() {
        var post = { title: this.title, body: this.body };
        this.$http.post('/posts', { post }, {
          headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].getAttribute('content'),
            'Access-Token': this.$session.get('jwt')
          }
        }).then(response => {
          var post_error = response.data.errors;
            if(post_error){
              this.errors = true;
              this.error_messages = post_error;
            } else {
              this.$store.commit('setNewPosts', response.body.new_post);
              this.errors = false;
              this.error_messages = '';
              this.title = '';
              this.body = '';
            }
        });
      }
    }
  }
</script>