import createArrayFilterFunction from './createArrayFilterFunction'
import getSubTotalPrice from './getSubTotalPrice'
import getDiscountAmount from './getDiscountAmount'

const getThaiBahtText = (n: number | string) => `฿${n.toLocaleString('en')}`

export {
  createArrayFilterFunction,
  getThaiBahtText,
  getSubTotalPrice,
  getDiscountAmount,
}
