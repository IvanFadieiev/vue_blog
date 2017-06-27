<template>
  <div id='registration'>
    <div class="alert alert-danger" v-if="errors">
      <strong>Validation failed</strong>
      {{ error_messages }}
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Email</span>
      <input v-model="email" class="form-control">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Password</span>
      <input type="password" v-model="password" class="form-control">
    </div>
    <button class="btn btn-info" @click="user_login">Login</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        errors: false,
        error_messages: '',
        email: '',
        password: ''
      }
    },

    methods: {
      user_login: function(){
        this.$http.post('/login', { email: this.email, password: this.password }, {
          headers: {
            'X-CSRF-Token': document.getElementsByName('csrf-token')[0].getAttribute('content')
          }
        }).then(response => {
          var auth_error = response.data.auth_error;
          if(auth_error){
            this.errors = true;
            this.error_messages = auth_error;
          } else {
            this.$router.push('/posts');
          }
        });
      }
    }
  }
</script>