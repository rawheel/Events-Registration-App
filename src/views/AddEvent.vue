<template>

<div>
  <div v-if="this.$store.state.login">
  <EventRegister/>
  </div>

  <div v-else>
    <AdminLogin/>
  </div>



</div>


</template>

<script>
// @ is an alias to /src
import AdminLogin from '../components/AdminLogin.vue'
import EventRegister from '../components/EventRegister.vue'
export default {
  name: 'home',
  components: {
    AdminLogin,
    EventRegister
  },
  
}
</script>
