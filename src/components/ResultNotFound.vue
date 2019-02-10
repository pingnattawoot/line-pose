<template>
  <div class="empty-state">
    <div class="icon-container">
      <BaseIcon name="times-circle" />
    </div>
    <div class="text-container">
      <div>No Results Found</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.empty-state {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

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
