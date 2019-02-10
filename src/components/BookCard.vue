<template>
  <div class="book-card">
    <div
      class="book-card__cover-image"
      :style="`background-image: url(${book.cover});`"
    />
    <div class="book-card__title bold">{{ book.title }}</div>
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

  &__cover-image {
    height: 220px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &__title {
    margin-top: 8px;
  }

  &__price {
    color: #00b900;
  }
}
</style>
