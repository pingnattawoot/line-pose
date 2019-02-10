<template>
  <div>
    <h2 class="header">Select the books and add to the cart</h2>
    <div class="book-list-container">
      <div class="search-book-input-container">
        <BaseInput v-model="seachingText" placeholder="Search books" />
      </div>

      <div v-if="filteredBooks.length > 0" class="book-list">
        <div
          class="book-item"
          v-for="book in filteredBooks"
          :key="book.id"
          @click="selectBook(book, $event)"
        >
          <BookCard :book="book"></BookCard>
        </div>
      </div>
      <SearchNotFound v-else />
      <AddToCartModal
        v-if="showBookModal"
        :book="selectedBook"
        @close="showBookModal = false"
      />
      <CartFloatingLink />
    </div>
  </div>
</template>

<script lang="ts">
import NProgress from 'nprogress'
import { mapActions, mapState } from 'vuex'
import store from '@/store/store'
import BookCard from '@/components/BookCard.vue'
import AddToCartModal from '@/components/AddToCartModal.vue'
import { createArrayFilterFunction } from '@/utils'
import CartFloatingLink from '@/components/CartFloatingLink.vue'
import SearchNotFound from '@/components/SearchNotFound.vue'

export default {
  components: {
    BookCard,
    AddToCartModal,
    CartFloatingLink,
    SearchNotFound,
  },
  data() {
    return {
      seachingText: '',
      currentSelectedBookId: 0,
      showBookModal: false,
    }
  },
  methods: {
    selectBook(book) {
      this.currentSelectedBookId = book.id
      this.showBookModal = true
    },
  },
  computed: {
    ...mapState('book', ['books']),
    filteredBooks() {
      const queryableFields = ['title', 'price']
      const filterBooks = createArrayFilterFunction(queryableFields)
      return filterBooks(this.books, this.seachingText.trim())
    },
    selectedBook() {
      return this.books.find(b => b.id === this.currentSelectedBookId)
    },
  },
  async beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start()
    try {
      await store.dispatch('book/fetchBooks').then(() => {
        NProgress.done()
        next()
      })
    } catch (error) {
      NProgress.done()
      next({ name: 'network-issue' })
    }
  },
}
</script>

<style scoped lang="stylus">
.book-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0;

  .search-book-input-container {
    padding-bottom: 16px;
  }
}

.book-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;

  .book-item {
    margin: 12px;
  }
}
</style>
