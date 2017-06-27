<template>
  <div id="index">
    <h1>Vue Blog</h1>
    {{ message ? message : '' }}
    <router-view></router-view>
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
