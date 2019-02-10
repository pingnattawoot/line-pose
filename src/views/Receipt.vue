<template>
  <div class="receipt-page">
    <div class="receipt-container" v-if="shouldShowPage">
      <div class="receipt monospace">
        <h2 class="header">Receipt</h2>
        <div class="table receipt-table">
          <div class="table-body">
            <ReceiptItem v-for="item in cart" :key="item.id" :item="item" />
            <!-- empty row -->
            <div class="table-row">
              <div class="table-cell" />
              <div class="table-cell" />
              <div class="table-cell align-right" />
            </div>
            <div class="table-row with-border-top">
              <div class="table-cell"></div>
              <div class="table-cell label align-right">Subtotal</div>
              <div class="table-cell align-right">
                {{ getThaiBahtText(subTotalPrice) }}
              </div>
            </div>
            <div class="table-row" v-show="discountAmount > 0">
              <div class="table-cell"></div>
              <div class="table-cell label align-right">Discount</div>
              <div class="table-cell align-right">
                -{{ getThaiBahtText(discountAmount) }}
              </div>
            </div>
            <div class="table-row bold">
              <div class="table-cell"></div>
              <div class="table-cell label align-right">Total</div>
              <div class="table-cell align-right">
                {{ getThaiBahtText(netPrice) }}
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell"></div>
              <div class="table-cell label align-right">Cash</div>
              <div class="table-cell align-right">
                {{ getThaiBahtText(cash) }}
              </div>
            </div>
            <div class="table-row">
              <div class="table-cell"></div>
              <div class="table-cell label align-right">Change</div>
              <div class="table-cell align-right">
                {{ getThaiBahtText(cash - netPrice) }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="thank-you-and-go-back">
        <div class="thank-you-text bold">Thank you!</div>
        <router-link class="link" :to="{ name: 'home' }">
          <BaseButton buttonClass="primary">Next Order</BaseButton>
        </router-link>
      </div>
    </div>
    <ReceiptEmptyState v-else />
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters, mapActions } from 'vuex'
import { getThaiBahtText } from '@/utils'
import { GetterType, ActionType as CartActions } from '@/store/modules/cart'
import { ActionType as CashActions } from '@/store/modules/cash'
import ReceiptItem from '@/components/ReceiptItem.vue'
import ReceiptEmptyState from '@/components/ReceiptEmptyState.vue'

export default {
  components: {
    ReceiptItem,
    ReceiptEmptyState,
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapState('cash', ['cash']),
    ...mapGetters('cart', [
      GetterType.allItemQuantity,
      GetterType.subTotalPrice,
      GetterType.discountAmount,
      GetterType.netPrice,
    ]),
    shouldShowPage() {
      return this.cart.length > 0 && this.cash > this.netPrice
    },
  },
  methods: {
    getThaiBahtText,
    ...mapActions('cash', [CashActions.setCash]),
    ...mapActions('cart', [CartActions.emptyCart]),
  },
  beforeRouteLeave(to, from, next) {
    this.setCash(0)
    this.emptyCart()
    next()
  },
}
</script>

<style lang="stylus" scoped>
.receipt-page {
  height: 100%;
  display: flex;
  flex-direction: column;

  .receipt {
    border: 1px solid #44;
    padding: 20px 12px;
    margin: 20px;
    border-radius: 2;

    .header {
      text-align: center;
    }
  }

  .receipt-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .table-row {
      height: 20px;

      .table-cell.label {
        padding-right: 48px;
      }

      &.with-border-top {
        .table-cell {
          border-top: solid 2px #444;
          padding-top: 16px;
        }
      }
    }

    .table-cell {
      padding: 4px 8px;
    }
  }

  .thank-you-and-go-back {
    .thank-you-text {
      font-size: 1.2em;
      text-align: center;
      padding: 12px;
    }
  }

  .link {
    text-decoration: none;
  }
}
</style>
