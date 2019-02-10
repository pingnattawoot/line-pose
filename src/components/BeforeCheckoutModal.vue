<template>
  <BaseModal class="before-checkout-modal">
    <div slot="header" />
    <div slot="body" class="before-checkout-modal__body">
      <div class="total-price-text">
        Total price is
        <span class="total-price">{{ getThaiBahtText(netPrice) }}</span>
      </div>
      <div>Please receive the cash from customer</div>
      <div class="cash-input-container">
        <BaseInput
          type="number"
          placeholder="Cash amount"
          v-model.number="cashAmount"
          :class="{ error: $v.cashAmount.$error }"
          @blur="$v.cashAmount.$touch"
          @enter="goToPrintReceipt"
        />
      </div>
      <div v-if="$v.cashAmount.$error" class="errorMessage">
        Cash amount must be greater than the total price !
      </div>
    </div>
    <div slot="footer" class="before-checkout-modal__footer">
      <BaseButton
        @click="goToPrintReceipt"
        buttonClass="primary"
        :disabled="$v.cashAmount.$error"
        >Print a bill</BaseButton
      >
      <BaseButton @click="$emit('close')">Cancel</BaseButton>
    </div>
  </BaseModal>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { GetterType } from '@/store/modules/cart'
import { ActionType } from '@/store/modules/cash'
import { getThaiBahtText } from '@/utils'
import { required } from 'vuelidate/lib/validators'

export default {
  validations: {
    cashAmount: {
      required,
      moreThanNetPrice(value) {
        return value >= this.netPrice
      },
    },
  },
  data() {
    return {
      cashAmount: 0,
    }
  },
  computed: {
    ...mapGetters('cart', [GetterType.netPrice]),
  },
  methods: {
    getThaiBahtText,
    ...mapActions('cash', [ActionType.setCash]),
    goToPrintReceipt() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.setCash(this.cashAmount)
        this.$router.replace({ name: 'receipt' })
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.before-checkout-modal {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .total-price-text {
      font-size: 1.2em;

      .total-price {
        font-weight: bold;
        font-size: 1.2em;
        color: #00b900;
      }
    }

    .cash-input-container {
      padding: 8px;
    }
  }

  &__footer {
    display: flex;
    flex-direction: row-reverse;

    >:first-child {
      margin-left: 16px;
    }
  }
}
</style>
