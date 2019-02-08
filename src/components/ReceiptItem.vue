<template>
  <div class="table-row">
    <div class="table-cell">{{ item.quantity }}</div>
    <div class="table-cell">{{ book.title }}</div>
    <div class="table-cell">{{ totalPrice }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GetterType } from '@/store/modules/book'
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('book', [GetterType.getBookById]),
    book() {
      return this.getBookById(this.item.bookId)
    },
    priceText() {
      return getThaiBahtText(this.book.price)
    },
    totalPrice() {
      return this.book.price * this.item.quantity
    },
  },
}
</script>

<style scoped></style>
