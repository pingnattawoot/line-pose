<template>
  <div>
    Cart Page ({{ allItemQuantity }} items)
    <ul>
      <li v-for="book in cart" :key="book.id">
        {{ book.bookId }} ({{ book.quantity }})
        <button @click="removeBook(book.bookId)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { ActionType, GetterType } from '@/store/modules/cart'

export default {
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', [GetterType.allItemQuantity]),
  },
  methods: mapActions('cart', [ActionType.removeBook]),
}
</script>

<style scoped></style>
