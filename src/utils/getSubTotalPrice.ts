import _ from 'lodash'
import { Book } from '@/store/modules/book'
import { CartItem } from '@/store/modules/cart'

export default function getSubTotalPrice(books: Book[], items: CartItem[]) {
  const totalPrice = items.reduce((acc, item) => {
    const book = books.find(book => book.id === item.bookId)
    return acc + book.price * item.quantity
  }, 0)

  return totalPrice
}
