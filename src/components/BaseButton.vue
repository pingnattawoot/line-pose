<template>
  <button class="button" v-on="$listeners" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
    },
  },
}
</script>

<style lang="stylus" scoped>
.button {
  color: #444;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 20px;
  background: transparent;
  box-shadow: 0 0 0 1px #00b900;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    background: #00b900;
    color: #fff;
  }

  &.primary:active {
    background: #00a800;
  }

  &:active {
    background: #ecffec;
  }
}
</style>
