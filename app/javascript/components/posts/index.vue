<template>
  <div id="posts_index">
    <ul id="posts_list">
      <li v-for="obj in return_posts()">
        <div class="show_post row">
          <div class="col-md-2 author">
            <div class="author_name">
              {{ obj.author.name }}
            </div>
            <div class="author_email">
              {{ obj.author.email }}
            </div>
          </div>
          <div class="col-md-10 post">
            <div class="post_title">
              {{ obj.post.title }}
              <button class="btn btn-outline-danger update_post" v-if='auth(obj.author.token)' @click="delete_post(obj.post.id)">Delete</button>
              <button class="btn btn-info update_post">Update</button>
            </div>
            <div class="post_body">
              {{ obj.post.body }}
            </div>
            <div class="post_created">
              {{ obj.post.created_at }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        posts_list: []
      }
    },

    props: ['child_posts_list'],

    beforeCreate: function () {
      function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      };
      var token = getCookie('token');
      if (!this.$session.exists() || this.$session.get('jwt') != token) {
        this.$session.destroy();
        this.$router.push('/')
      };
      this.$http.get('/posts').then(response => {
        this.$store.commit('setPosts', response.data);
        this.posts_list = this.$store.getters.getPosts[0];
      });
    },

    methods: {
      auth: function(token) {
        var result = (this.$session.exists() && this.$session.get('jwt') == token ? true : false);
        return result;
      },
      delete_post: function(id) {
        this.$http.post('/delete_post/' + id, {}, {
          headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].getAttribute('content')
          }
        }).then(function(response){
          if (response.data.success) {
            this.$store.commit('deletePost', id)
          }
        })
      },
      posts: function() {
        return this.$store.getters.getPosts[0]
      },
      return_posts: function() {
        if(this.child_posts_list) {
          return this.child_posts_list;
        } else {
          return this.posts_list;
        }
      }
    }
  }
</script>