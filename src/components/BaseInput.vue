<template>
  <div>
    <input
      v-focus
      class="base-input"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
      @blur="blur"
      @keyup.enter="enter"
    />
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      },
    },
  },
  props: {
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
    blur(event) {
      this.$emit('blur')
    },
    enter() {
      this.$emit('enter')
    },
  },
}
</script>

<style lang="stylus" scoped>
.base-input {
  outline: none;
  text-align: center;
  background: #fff;
  display: flex;
  border-radius: 2px;
  border: none;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 3;
  height: 36px;
  margin: 0 auto;
  width: 360px;

  &:focus {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
}

.error {
  .base-input {
    border: 1px solid red;
  }
}
</style>
