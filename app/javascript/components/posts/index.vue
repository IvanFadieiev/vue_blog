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
      if (!this.$session.exists()) {
        this.$router.push('/')
      };
      this.$http.get('/posts').then(response => {
        this.$store.commit('setPosts', response.data);
        this.posts_list = this.$store.getters.getPosts[0];
      });
    },

    methods: {
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