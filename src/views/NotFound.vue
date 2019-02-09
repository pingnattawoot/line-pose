<template>
  <div class="empty-state">
    <div class="icon-container">
      <BaseIcon name="exclamation-triangle" />
    </div>
    <div class="text-container">
      <div>The page you're looking for is not here.</div>
      <router-link class="link bold" :to="{ name: 'home' }"
        >Go to shopping</router-link
      >
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.empty-state {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .link {
    text-decoration: none;
    color: #00b900;

    &:hover {
      text-decoration: underline;
    }
  }

  .icon-container {
    font-size: 4em;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
}
</style>
