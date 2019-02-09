import _ from 'lodash'
import { getSubTotalPrice, getDiscountAmount } from '@/utils'

export type CartItem = {
  bookId: string
  quantity: number
}

type State = {
  cart: CartItem[]
}

const MutationType = {
  ADD_NEW_BOOK_TO_CART: 'ADD_NEW_BOOK_TO_CART',
  SET_QUANTITY_OF_BOOK: 'SET_QUANTITY_OF_BOOK',
  REMOVE_BOOK_FORM_CART: 'REMOVE_BOOK_FORM_CART',
  EMPTY_CART: 'EMPTY_CART',
}

const state: State = {
  cart: [],
}

const mutations = {
  [MutationType.ADD_NEW_BOOK_TO_CART]: (state: State, newItem: CartItem) => {
    state.cart.push(newItem)
  },
  [MutationType.SET_QUANTITY_OF_BOOK]: (
    state: State,
    itemToChange: CartItem
  ) => {
    state.cart.forEach((item, index) => {
      if (item.bookId === itemToChange.bookId) {
        state.cart[index].quantity = itemToChange.quantity
      }
    })
  },
  [MutationType.REMOVE_BOOK_FORM_CART]: (state: State, bookId: string) => {
    state.cart = state.cart.filter(item => item.bookId !== bookId)
  },
  [MutationType.EMPTY_CART]: (state: State) => {
    state.cart = []
  },
}

export const ActionType = {
  addToCart: 'addToCart',
  setQuantityInCart: 'setQuantityInCart',
  removeItem: 'removeItem',
  emptyCart: 'emptyCart',
}

const actions = {
  [ActionType.addToCart]: (
    { commit, state }: { commit: any; state: State },
    newItem: CartItem
  ) => {
    const itemInCart = state.cart.find(item => item.bookId === newItem.bookId)
    if (itemInCart) {
      commit(MutationType.SET_QUANTITY_OF_BOOK, {
        bookId: itemInCart.bookId,
        quantity: itemInCart.quantity + newItem.quantity,
      })
    } else {
      commit(MutationType.ADD_NEW_BOOK_TO_CART, newItem)
    }
  },
  [ActionType.setQuantityInCart]: ({ commit }, itemToChange: CartItem) => {
    commit(MutationType.SET_QUANTITY_OF_BOOK, itemToChange)
  },
  [ActionType.removeItem]: ({ commit }, bookId: string) => {
    commit(MutationType.REMOVE_BOOK_FORM_CART, bookId)
  },
  [ActionType.emptyCart]: ({ commit }) => {
    commit(MutationType.EMPTY_CART)
  },
}

export const GetterType = {
  allItemQuantity: 'allItemQuantity',
  subTotalPrice: 'subTotalPrice',
  discountAmount: 'discountAmount',
  netPrice: 'netPrice',
  getBooksInCartById: 'getBooksInCartById',
}

const getters = {
  [GetterType.allItemQuantity]: (state: State) =>
    _.sumBy(state.cart, 'quantity'),
  [GetterType.subTotalPrice]: (state: State, _, rootState) => {
    const books = rootState.book.books
    const items = state.cart
    return getSubTotalPrice(books, items)
  },
  [GetterType.discountAmount]: (state: State, _, rootState) => {
    const books = rootState.book.books
    const items = state.cart
    return getDiscountAmount(books, items)
  },
  [GetterType.netPrice]: (_, getters) => {
    return (
      getters[GetterType.subTotalPrice] - getters[GetterType.discountAmount]
    )
  },
  [GetterType.getBooksInCartById]: (state: State) => id => {
    return state.cart.find(item => item.bookId === id)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
