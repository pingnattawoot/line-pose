import { mutations } from '@/store/modules/book'

describe('[Mutations] Cart', () => {
  it('ADD_NEW_BOOK_TO_CART', () => {
    const state = { books: [] }
    const booksFromResponse = [
      {
        id: 'xxx',
        cover: 'url-yyy',
        title: 'titleX',
        price: 200,
      },
      {
        id: 'aaa',
        cover: 'url-bbb',
        title: 'titleA',
        price: 300,
      },
    ]

    mutations.SET_BOOKS(state, booksFromResponse)
    expect(state).toEqual({ books: booksFromResponse })
  })
})
