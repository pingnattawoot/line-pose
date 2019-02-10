<template>
  <div class="table-row receipt-row">
    <div class="table-cell">{{ item.quantity }}</div>
    <div class="table-cell">
      <div class="title">{{ titleWithPrice }}</div>
    </div>
    <div class="table-cell align-right">{{ getThaiBahtText(totalPrice) }}</div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import { getThaiBahtText } from '@/utils'
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
    titleWithPrice() {
      return `${this.book.title} ${
        this.item.quantity > 1 ? `(${getThaiBahtText(this.book.price)})` : ''
      }`
    },
  },
  methods: {
    getThaiBahtText,
  },
}
</script>

<style lang="stylus" scoped>
.receipt-row {
  .table-cell {
    padding: 4px 8px;

    .title {
      max-width: 300px;
    }
  }
}
</style>
