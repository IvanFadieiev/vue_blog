<template>
  <div id="router_template">
    <div class="sign" v-if='check_agreements()'>
      <router-link class='sign_in' to="/sign_in">Sign in</router-link><br />
      <router-link class='registration' to="/registration">Registration</router-link><br />
    </div>
    <div class="agree" v-else>
      <router-link class='agreements' to="/text">Agreements!</router-link><br />
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
        check_agreements: function(){
            return this.$store.getters.get_agre
        }
    }
  }
</script>