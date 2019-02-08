<template>
  <div class="select-quantity">
    <button
      class="change-quantity-btn"
      @click="$emit('decrease')"
      :disabled="this.value <= 0"
    >
      -
    </button>
    <input
      class="quantity-input"
      type="number"
      :min="min"
      :max="max"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
      @keyup.enter="$emit('enter')"
    />
    <button class="change-quantity-btn" @click="$emit('increase')">
      +
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      min: 1,
      max: 100,
    }
  },
  methods: {
    updateValue(event) {
      // prefered one-way data binding
      this.$emit('change', parseInt(event.target.value || 0))
    },
  },
}
</script>

<style lang="stylus" scoped>
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.select-quantity {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 8px;

  .change-quantity-btn {
    box-sizing: border-box;
    background: none;
    width: 28px;
    height: 28px;
    border: 1px solid #ccc;
    cursor: pointer;

    &:disabled {
      background-color: #ddd;
      color: #aaa;
      cursor: not-allowed;
    }
  }

  .quantity-input {
    box-sizing: border-box;
    height: 28px;
    width: 40px;
    line-height: 28px;
    text-align: center;
    border-top: 1px solid #ccc;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
}
</style>
