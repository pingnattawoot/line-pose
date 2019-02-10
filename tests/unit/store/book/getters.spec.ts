import { getters, GetterType } from '@/store/modules/book'

describe('[BOOKS] Getter :', () => {
  it('should return correct book when run GetBookById', () => {
    const state = {
      books: [
        {
          id: 'id1',
          cover: 'url-aaa',
          title: 'title1',
          price: 200,
        },
        {
          id: 'id2',
          cover: 'url-bbb',
          title: 'title2',
          price: 300,
        },
      ],
    }

    const result = getters[GetterType.getBookById](state)('id2')
    const expectedResult = {
      id: 'id2',
      cover: 'url-bbb',
      title: 'title2',
      price: 300,
    }

    expect(result).toEqual(expectedResult)
  })
})
