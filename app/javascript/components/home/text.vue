<template>
  <div id="text">
    <p>
      Access to the electronic resources listed on the EUI Library website and catalogue is restricted to current members of the EUI, and in some cases, to on-site users of EUI, for the purposes of research, teaching, and private study.

Under EUI Library's license agreements for electronic resources, users may not:

Allow anyone other than an authorized user to use the licensed materials
Modify or create a derivative work of the licensed materials without the permission of the licensor
Remove, obscure or modify any copyright or other proprietary notices included in the licensed materials
Use the licensed materials for commercial purposes
Systematically download, distribute, or retain substantial portions of information (more information below)
Additional details may be found in the Library Catalogue under the heading 'Terms of Use', and on the providers' website or database.
    </p>
    <p>
      <input type="checkbox" id="checkbox" v-model="checked" v-on:click='redirect'>
      <label for="checkbox">{{ checked ? 'Agree' : 'Think well' }}</label>
    </p>
  </div>
</template>

<script>
export default {
   data: function () {
     return {
       checked: false
     }
   },

   methods: {
     tog: function(state){
       this.$store.commit('toggle')
     },

     checked: function(){
       this.checked = !this.checked
     },

     redirect: function(){
       this.tog();
       this.checked ?
        this.$router.push('/')
        :
       ''
     }
   }
 }
</script>
