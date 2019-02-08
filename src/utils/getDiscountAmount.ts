import _ from 'lodash'
import { Book } from '@/store/modules/book'
import { CartItem } from '@/store/modules/cart'

export default function getDiscountPrice(
  books: Book[],
  items: CartItem[]
): number {
  const HarryBooks = books.filter(book => book.title.startsWith('Harry Potter'))
  const itemToDiscount = items.filter(item => {
    return HarryBooks.some(book => book.id === item.bookId)
  })

  if (itemToDiscount.length > 1) {
    const subTotalOfItemToDiscount = itemToDiscount.reduce((acc, item) => {
      const book = books.find(book => book.id === item.bookId)
      return acc + book.price * 1 // discount only unique Harry Potter book
    }, 0)

    switch (itemToDiscount.length) {
      case 2:
        return subTotalOfItemToDiscount * 0.1
      case 3:
        return subTotalOfItemToDiscount * 0.11
      case 4:
        return subTotalOfItemToDiscount * 0.12
      case 5:
        return subTotalOfItemToDiscount * 0.13
      case 6:
        return subTotalOfItemToDiscount * 0.14
      case 7:
        return subTotalOfItemToDiscount * 0.15
      default:
        return 0
    }
  }
  return 0
}
