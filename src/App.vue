<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="stylus">
@font-face {
  font-family: 'Thai Sans Neue';
  src: url('assets/fonts/ThaiSansNeue-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  // font-family: 'Sukhumvit Set', 'Thai Sans Neue', sans-serif;
  font-family: 'Thai Sans Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
