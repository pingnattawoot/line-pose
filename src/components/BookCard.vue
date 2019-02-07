<template>
  <div class="book-card">
    <img class="book-card__cover-image" :src="book.cover" />
    <div class="book-card__title">{{ book.title }}</div>
    <div class="book-card__price">{{ book.price }} THB.</div>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
.book-card {
  text-align: center;

  &__title {
    font-weight: bold;
  }
}
</style>
