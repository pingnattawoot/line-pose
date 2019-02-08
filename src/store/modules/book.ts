import BookService from '@/services/BookService'

export type Book = {
  id: string
  cover: string
  title: string
  price: number
}

type State = {
  books: Book[]
}

export const MutationType = {
  SET_BOOKS: 'SET_BOOKS',
}

export const ActionType = {
  fetchBooks: 'fetchBooks',
}

export const GetterType = {
  getBookById: 'getBookById',
}

const state: State = {
  books: [],
}

const mutations = {
  [MutationType.SET_BOOKS]: (state: State, books: Book[]) => {
    state.books = books
  },
}

const actions = {
  [ActionType.fetchBooks]: async ({ commit }) => {
    const response = await BookService.getBooks()
    if (response.data.books) {
      const books = response.data.books.map(({ id, title, cover, price }) => ({
        id,
        title,
        cover,
        price: parseFloat(price),
      }))
      commit(MutationType.SET_BOOKS, books)
    }
  },
}

const getters = {
  [GetterType.getBookById]: (state: State) => id =>
    state.books.find(book => book.id === id),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
