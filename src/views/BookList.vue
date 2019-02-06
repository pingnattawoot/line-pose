<template>
  <div class="home">
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} ({{ book.price }})
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'
import { ActionType } from '@/store/modules/book'

export default {
  mounted() {
    this.fetchBooks()
  },
  methods: mapActions('book', [ActionType.fetchBooks]),
  computed: mapState('book', ['books']),
}
</script>
