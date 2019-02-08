<template>
  <div>
    Cart Page ({{ allItemQuantity }} items)
    <ul>
      <li v-for="item in cart" :key="item.id">
        <CartItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import { GetterType } from '@/store/modules/cart'
import CartItem from '@/components/CartItem.vue'

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', [GetterType.allItemQuantity]),
  },
}
</script>

<style scoped></style>
