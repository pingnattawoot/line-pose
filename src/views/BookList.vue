<template>
  <div class="book-list-container">
    <BaseInput v-model="seachingText" placeholder="Search books" />
    <ul class="book-list">
      <li v-for="book in filteredBooks" :key="book.id">
        <BookCard :book="book"></BookCard>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'
import { ActionType } from '@/store/modules/book'
import BookCard from '@/components/BookCard.vue'
import { createArrayFilterFunction } from '@/utils'

export default {
  components: {
    BookCard,
  },
  mounted() {
    this.fetchBooks()
  },
  data() {
    return {
      seachingText: '',
    }
  },
  methods: mapActions('book', [ActionType.fetchBooks]),
  computed: {
    filteredBooks() {
      const queryableFields = ['title', 'price']
      const filterBooks = createArrayFilterFunction(queryableFields)
      return filterBooks(this.books, this.seachingText.trim())
    },
    ...mapState('book', ['books']),
  },
}
</script>

<style scoped lang="stylus">
.book-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0;
}

ul.book-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  >li {
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 0 1px #444444;
    border-radius: 4px;
    width: 200px;
  }
}
</style>
