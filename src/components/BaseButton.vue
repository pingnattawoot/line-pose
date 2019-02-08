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
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 20px;
  background: transparent;
  border: 2px solid saddlebrown;
  border-radius: 4px;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s linear;

  &:disabled {
    cursor: not-allowed;
  }

  &.primary {
    background: saddlebrown;
    color: #fff;
  }

  &.primary:active {
    background: #5e2f0e;
  }

  &:active {
    background: rgba(139, 69, 19, 0.2);
  }
}
</style>
