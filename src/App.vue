<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import 'normalize.css'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'Thai Sans Neue';
  src: url('assets/fonts/ThaiSansNeue-Regular.ttf') format('truetype');
}

body {
  font-size: 20px;
}

#app {
  // font-family: 'Sukhumvit Set', 'Thai Sans Neue', sans-serif;
  font-family: 'Thai Sans Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
