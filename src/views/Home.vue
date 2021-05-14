<template>
<div class = "h-screen">
  <HomeView/>
</div>
</template>

<script>
// @ is an alias to /src
import HomeView from '../components/HomeView.vue'
export default {
  name: 'home',
  components: {
    HomeView
  }
}
</script>