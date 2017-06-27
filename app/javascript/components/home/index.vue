<template>
  <div id="index" class="col-md-12" >
    <div class="container">
      <div class="jumbotron">
        <div id="header">
          <h1>Vue Blog</h1>
          {{ this.$store.getters.getMsg }}
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
        message: "Greetings!!!"
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
