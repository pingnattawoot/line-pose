import BookService from '@/services/BookService'

type State = {
  books: object[]
}

const MutationType = {
  SET_BOOK: 'SET_BOOK',
}

export const ActionType = {
  fetchBooks: 'fetchBooks',
}

const state: State = {
  books: [],
}

const mutations = {
  [MutationType.SET_BOOK]: (state: State, books: object[]) => {
    state.books = books
  },
}

const actions = {
  [ActionType.fetchBooks]: async ({ commit }) => {
    const response = await BookService.getBooks()
    if (response.data.books) {
      commit(MutationType.SET_BOOK, response.data.books)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
