<template>
  <div id='registration'>
    <div class="alert alert-danger" v-if="errors">
      <strong>Validation failed</strong>
      {{ error_messages }}
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Name</span>
      <input v-model="name" class="form-control" >
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="basic-addon1">Email</span>
      <input v-model="email" class="form-control">
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">Password</span>
          <input type="password" v-model="password" class="form-control">
        </div>
      </div>
      <div class="col-lg-6">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">Password Confirmation</span>
          <input type="password" v-model="password_confirmation" class="form-control">
        </div>
      </div>
    </div>
    <button class="btn btn-info" @click="create_user">Create!</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        errors: false,
        error_messages: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },

    methods: {
      create_user: function(){
        var user = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation
        };

          this.$http.post('/users', { user }, {
            headers: {
              'X-CSRF-Token': document.getElementsByName('csrf-token')[0].getAttribute('content')
            }
          }).then(response => {
              var errors = response.data.errors;
              if(errors){
                this.errors = true;
                this.error_messages = errors;
              } else {
                this.$session.start();
                this.$session.set('jwt', response.body.token);
                this.$store.commit('setMsg', 'Now you can enjoy this blog=)');
                this.$router.push('/posts');
              }
          });
      }
    }
  }
</script>