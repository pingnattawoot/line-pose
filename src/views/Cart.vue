<template>
  <div class="root-page">
    <div class="cart-container" v-if="cart.length > 0">
      <h2 class="header">Shopping Cart</h2>
      <div class="table cart-table">
        <div class="table-header">
          <div class="table-row">
            <div class="table-cell">Product</div>
            <div class="table-cell unit-price">Unit Price</div>
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
    <CartEmptyState v-else />
  </div>
</template>

<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/cart'
import CartItem from '@/components/CartItem.vue'
import CartFooter from '@/components/CartFooter.vue'
import CartEmptyState from '@/components/CartEmptyState.vue'

export default {
  components: {
    CartItem,
    CartFooter,
    CartEmptyState,
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', [GetterType.allItemQuantity]),
  },
}
</script>

<style lang="stylus" scoped>
.root-page {
  height: 100%;
}

.unit-price {
  @media (max-width: 600px) {
    display: none;
  }
}

.cart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 120px;

  .cart-table {
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;

    @media (max-width: 600px) {
      padding: 0;
    }

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
