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

<script>
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
  text-align: center;
}

.error {
  .base-input {
    border: 1px solid red;
  }
}
</style>
