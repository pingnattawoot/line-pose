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

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

h2.header {
  text-align: center;
}

#app {
  height: 100%;
  // font-family: 'Sukhumvit Set', 'Thai Sans Neue', sans-serif;
  font-family: 'Thai Sans Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444;
}

.monospace {
  font-family: Lucida Console, Courier, monospace;
  font-size: 0.7em;
}

.bold {
  font-weight: bold;
}

.align-right {
  text-align: right;
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
