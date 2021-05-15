<template>
<div class="bg-gray-900 pt-2">
  

<div >
  <HomeView/>
</div>
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