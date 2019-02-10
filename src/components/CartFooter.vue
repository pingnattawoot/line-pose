<template>
  <div class="cart-footer">
    <div class="total-price-container">
      <div class="subtotal-text">Total price ({{ allItemQuantityText }}) :</div>
      <div v-if="discountAmount === 0">
        <div class="net-amount">{{ getThaiBahtText(netPrice) }}</div>
      </div>
      <div v-else class="with-discount">
        <div class="subtotal-and-discount">
          <div class="subtotal-amount">
            {{ getThaiBahtText(subTotalPrice) }}
          </div>
          <div class="discount-amount">
            - {{ getThaiBahtText(discountAmount) }}
          </div>
          <div class="discount-description">
            (Discount on Harry Potter book)
          </div>
        </div>
        <div class="net-amount">= {{ getThaiBahtText(netPrice) }}</div>
      </div>
    </div>
    <div class="button-container">
      <BaseButton class="primary" @click="showCheckoutModal = true"
        >Check out</BaseButton
      >
    </div>
    <BeforeCheckoutModal
      v-if="showCheckoutModal"
      @close="showCheckoutModal = false"
    />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'
import { getThaiBahtText } from '@/utils'
import BeforeCheckoutModal from '@/components/BeforeCheckoutModal.vue'

export default {
  components: {
    BeforeCheckoutModal,
  },
  data() {
    return {
      showCheckoutModal: false,
    }
  },
  computed: {
    ...mapGetters('cart', [
      GetterType.allItemQuantity,
      GetterType.subTotalPrice,
      GetterType.discountAmount,
      GetterType.netPrice,
    ]),
    allItemQuantityText() {
      return `${this.allItemQuantity} item${
        this.allItemQuantity > 1 ? 's' : ''
      }`
    },
  },
  methods: {
    getThaiBahtText,
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

      @media (max-width: 600px) {
        display: none;
      }
    }

    .net-amount {
      font-size: 1.5em;
      font-weight: bold;
      color: #00b900;
      padding: 4px;
    }

    .with-discount {
      display: flex;
      align-items: center;

      .subtotal-and-discount {
        display: flex;
        font-size: 1em;
        font-weight: bold;

        @media (max-width: 600px) {
          flex-direction: column;
        }

        .subtotal-amount {
          padding: 0 8px;

          @media (max-width: 600px) {
            text-decoration: line-through;
          }
        }

        .discount-amount {
          color: red;
          padding: 0 8px;
        }

        .discount-description {
          color: #777;
          top: 15px;
          font-size: 0.5em;
          position: absolute;
          height: 20px;
          text-align: center;

          @media (max-width: 600px) {
            display: none;
          }
        }

        .operator {
          &.equal {
            color: #00b900;
          }
        }
      }
    }
  }

  .button-container {
    padding: 16px 32px 16px 16px;

    @media (max-width: 600px) {
      padding: 8px;
    }
  }
}
</style>
