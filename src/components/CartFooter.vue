<template>
  <div class="cart-footer">
    <div class="total-price-container">
      <div class="subtotal-text">Total price ({{ allItemQuantityText }}) :</div>
      <div class="subtotal-amount">{{ totalPriceText }}</div>
    </div>
    <div class="button-container">
      <BaseButton class="primary">Check out</BaseButton>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'
import { getThaiBahtText } from '@/utils'

export default {
  computed: {
    ...mapGetters('cart', [GetterType.allItemQuantity, GetterType.totalPrice]),
    allItemQuantityText() {
      return `${this.allItemQuantity} item${
        this.allItemQuantity > 1 ? 's' : ''
      }`
    },
    totalPriceText() {
      return getThaiBahtText(this.totalPrice)
    },
  },
}
</script>

<style lang="stylus" scoped>
.cart-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0px;
  height: 80px;
  background: white;

  &::before {
    content: '';
    position: absolute;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.06));
    height: 20px;
    top: -20px;
    width: 100%;
  }

  .total-price-container {
    display: flex;
    align-items: center;

    .subtotal-text {
      font-weight: bold;
    }

    .subtotal-amount {
      font-size: 1.5em;
      font-weight: bold;
      color: #00b900;
      padding: 4px;
    }
  }

  .button-container {
    padding: 16px 32px 16px 16px;
  }
}
</style>
