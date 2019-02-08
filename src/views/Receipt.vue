<template>
  <div>
    <h2 class="header">Receipt</h2>
    <div class="receipt-container" v-if="cart.length > 0">
      <div class="table receipt-table">
        <div class="table-header">
          <div class="table-row">
            <div class="table-cell">Q.</div>
            <div class="table-cell">P</div>
            <div class="table-cell">T.</div>
          </div>
        </div>
        <div class="table-body">
          <ReceiptItem v-for="item in cart" :key="item.id" :item="item" />
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell">SubTotal</div>
            <div class="table-cell">{{ subTotalPrice }}</div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell">Discount</div>
            <div class="table-cell">{{ discountAmount }}</div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell">Total</div>
            <div class="table-cell">{{ netPrice }}</div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell">Cash</div>
            <div class="table-cell">{{ cash }}</div>
          </div>
          <div class="table-row">
            <div class="table-cell"></div>
            <div class="table-cell">change</div>
            <div class="table-cell">{{ cash - netPrice }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Show Empty State</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
}
</script>

<style lang="stylus" scoped>
.header {
  text-align: center;
}

.receipt-container {
  display: flex;
  justify-content: center;
}
</style>
