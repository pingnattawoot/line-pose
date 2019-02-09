import { getSubTotalPrice } from '@/utils'
import { Book } from '@/store/modules/book'
import { CartItem } from '@/store/modules/cart'

describe('[Util] Sub Total Price :', () => {
  const books: Book[] = [
    {
      id: 'id1',
      title: 'book1',
      price: 20,
      cover: 'url-to-image1',
    },
    {
      id: 'id2',
      title: 'book2',
      price: 30,
      cover: 'url-to-image2',
    },
  ]
  it('should return 0 if the cart is empty', () => {
    const result = getSubTotalPrice(books, [])
    const expectedResult = 0
    expect(result).toEqual(expectedResult)
  })

  it('should return correct total price', () => {
    const items: CartItem[] = [
      {
        bookId: 'id2',
        quantity: 5,
      },
      {
        bookId: 'id1',
        quantity: 2,
      },
    ]
    const result = getSubTotalPrice(books, items)
    const expectedResult = 190
    expect(result).toEqual(expectedResult)
  })
})
