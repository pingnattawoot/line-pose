<template>
  <div class="book-card">
    <img class="book-card__cover-image" :src="book.cover" />
    <div class="book-card__title">{{ book.title }}</div>
    <div class="book-card__price">{{ getThaiBahtText(book.price) }}</div>
  </div>
</template>

<script>
import { getThaiBahtText } from '@/utils'

export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getThaiBahtText,
  },
}
</script>

<style scoped lang="stylus">
.book-card {
  cursor: pointer;
  text-align: center;
  padding: 10px;
  box-shadow: 0 0 0 1px #dfe1e5;
  border-radius: 4px;
  width: 200px;

  &__title {
    font-weight: bold;
  }

  &__price {
    color: #00b900;
  }
}
</style>
