<template>
  <div>
    <h2 class="header">Shopping Cart</h2>
    <div class="cart-container" v-if="cart.length > 0">
      <div class="table cart-table">
        <div class="table-header">
          <div class="table-row">
            <div class="table-cell">Product</div>
            <div class="table-cell">Unit Price</div>
            <div class="table-cell">Quantity</div>
            <div class="table-cell">Total Price</div>
            <div class="table-cell">Action</div>
          </div>
        </div>
        <div class="table-body">
          <CartItem v-for="item in cart" :key="item.id" :item="item" />
        </div>
      </div>
      <CartFooter />
    </div>
    <div v-else>Show Empty State</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import { GetterType } from '@/store/modules/cart'
import CartItem from '@/components/CartItem.vue'
import CartFooter from '@/components/CartFooter.vue'

export default {
  components: {
    CartItem,
    CartFooter,
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', [GetterType.allItemQuantity]),
  },
}
</script>

<style lang="stylus" scoped>
.header {
  text-align: center;
}

.cart-container {
  display: flex;
  justify-content: center;
  padding-bottom: 180px;

  .cart-table {
    .table-header {
      background: #444;
      color: #fff;

      .table-cell {
        font-weight: bold;
        padding: 4px 8px;
        text-align: center;
      }
    }
  }
}
</style>
