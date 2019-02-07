<template>
  <div>
    <input :value="value" v-bind="$attrs" @input="updateValue" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style scoped></style>
