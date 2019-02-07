<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">
      Little Brown Book Shop
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.nav {
  padding: 10px;
  height: 40px;
  background: #444444;
}

.nav > .brand {
  color: #fffbf4;
  font-size: 2em;
  font-weight: 700;
  line-height: 40px;
  text-decoration: none;
}
</style>
