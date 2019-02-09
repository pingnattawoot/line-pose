import { getDiscountAmount } from '@/utils'
import { Book } from '@/store/modules/book'
import { CartItem } from '@/store/modules/cart'

describe('[Util] Get Discount Price :', () => {
  const books: Book[] = [
    {
      id: 'harry1',
      title: 'Harry Potter A',
      price: 100,
      cover: 'url-to-image',
    },
    {
      id: 'harry2',
      title: 'Harry Potter B',
      price: 200,
      cover: 'url-to-image',
    },
    {
      id: 'harry3',
      title: 'Harry Potter C',
      price: 300,
      cover: 'url-to-image',
    },
    {
      id: 'harry4',
      title: 'Harry Potter D',
      price: 400,
      cover: 'url-to-image',
    },
    {
      id: 'harry5',
      title: 'Harry Potter E',
      price: 500,
      cover: 'url-to-image',
    },
    {
      id: 'harry6',
      title: 'Harry Potter F',
      price: 600,
      cover: 'url-to-image',
    },
    {
      id: 'harry7',
      title: 'Harry Potter G',
      price: 700,
      cover: 'url-to-image',
    },
    {
      id: 'not-harry',
      title: 'This is a book',
      price: 1000,
      cover: 'url-to-image2',
    },
  ]

  it('should return 0 if the cart is empty', () => {
    const result = getDiscountAmount(books, [])
    const expectedResult = 0
    expect(result).toEqual(expectedResult)
  })

  it('should return 0 if in the cart does not has any Harry Potter book', () => {
    const items: CartItem[] = [
      {
        bookId: 'not-harry',
        quantity: 5,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = 0
    expect(result).toEqual(expectedResult)
  })

  it('should return 0 if in the cart has only 1 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry5',
        quantity: 20,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = 0
    expect(result).toEqual(expectedResult)
  })

  it('should discount 10% if in the cart has 2 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry5',
        quantity: 20,
      },
      {
        bookId: 'harry6',
        quantity: 100,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (500 + 600) * 0.1
    expect(result).toEqual(expectedResult)
  })

  it('should discount 11% if in the cart has 3 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry1',
        quantity: 20,
      },
      {
        bookId: 'harry2',
        quantity: 100,
      },
      {
        bookId: 'harry3',
        quantity: 1,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (100 + 200 + 300) * 0.11
    expect(result).toEqual(expectedResult)
  })

  it('should discount 12% if in the cart has 4 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry1',
        quantity: 20,
      },
      {
        bookId: 'harry2',
        quantity: 100,
      },
      {
        bookId: 'harry3',
        quantity: 1,
      },
      {
        bookId: 'harry4',
        quantity: 500,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (100 + 200 + 300 + 400) * 0.12
    expect(result).toEqual(expectedResult)
  })

  it('should discount 13% if in the cart has 5 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry1',
        quantity: 20,
      },
      {
        bookId: 'harry2',
        quantity: 100,
      },
      {
        bookId: 'harry3',
        quantity: 1,
      },
      {
        bookId: 'harry4',
        quantity: 500,
      },
      {
        bookId: 'harry5',
        quantity: 2,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (100 + 200 + 300 + 400 + 500) * 0.13
    expect(result).toEqual(expectedResult)
  })

  it('should discount 14% if in the cart has 6 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry1',
        quantity: 20,
      },
      {
        bookId: 'harry2',
        quantity: 100,
      },
      {
        bookId: 'harry3',
        quantity: 1,
      },
      {
        bookId: 'harry4',
        quantity: 500,
      },
      {
        bookId: 'harry5',
        quantity: 2,
      },
      {
        bookId: 'harry6',
        quantity: 72,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (100 + 200 + 300 + 400 + 500 + 600) * 0.14
    expect(result).toEqual(expectedResult)
  })

  it('should discount 15% if in the cart has 7 unique series of Harry Potter books', () => {
    const items: CartItem[] = [
      {
        bookId: 'harry1',
        quantity: 20,
      },
      {
        bookId: 'harry2',
        quantity: 100,
      },
      {
        bookId: 'harry3',
        quantity: 1,
      },
      {
        bookId: 'harry4',
        quantity: 500,
      },
      {
        bookId: 'harry5',
        quantity: 2,
      },
      {
        bookId: 'harry6',
        quantity: 72,
      },
      {
        bookId: 'harry7',
        quantity: 28500,
      },
    ]
    const result = getDiscountAmount(books, items)
    const expectedResult = (100 + 200 + 300 + 400 + 500 + 600 + 700) * 0.15
    expect(result).toEqual(expectedResult)
  })
})
