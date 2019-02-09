<template>
  <div class="monospace">
    <h2 class="header">Receipt</h2>
    <div class="receipt-container" v-if="cart.length > 0">
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
            <div class="table-cell align-right">Subtotal</div>
            <div class="table-cell align-right">
              {{ getThaiBahtText(subTotalPrice) }}
            </div>
          </div>
          <div class="table-row" v-show="discountAmount > 0">
            <div class="table-cell"></div>
            <div class="table-cell align-right">Discount</div>
            <div class="table-cell align-right">
              -{{ getThaiBahtText(discountAmount) }}
            </div>
          </div>
          <div class="table-row bold">
            <div class="table-cell"></div>
            <div class="table-cell align-right">Total</div>
            <div class="table-cell align-right">
              {{ getThaiBahtText(netPrice) }}
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell align-right">Cash</div>
            <div class="table-cell align-right">
              {{ getThaiBahtText(cash) }}
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell align-right">Change</div>
            <div class="table-cell align-right">
              {{ getThaiBahtText(cash - netPrice) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Show Empty State</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { getThaiBahtText } from '@/utils'
import { GetterType } from '@/store/modules/cart'
import ReceiptItem from '@/components/ReceiptItem.vue'

export default {
  components: {
    ReceiptItem,
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
  },
  methods: {
    getThaiBahtText,
  },
}
</script>

<style lang="stylus" scoped>
.header {
  text-align: center;
}

.receipt-container {
  display: flex;
  justify-content: center;

  .table-row {
    height: 20px;

    &.with-border-top {
      .table-cell {
        border-top: solid 2px #444;
        padding: 16px 8px 4px;
      }
    }
  }

  .table-cell {
    padding: 4px 8px;
  }
}
</style>
