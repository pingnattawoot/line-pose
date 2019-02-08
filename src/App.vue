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
::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder { /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}

input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

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

.errorMessage {
  font-size: 0.8em;
  color: red;
}

.table {
  display: table;
}

.table-header {
  display: table-header-group;
}

.table-body {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
}
</style>
