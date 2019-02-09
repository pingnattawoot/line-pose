import createArrayFilterFunction from './createArrayFilterFunction'
import getSubTotalPrice from './getSubTotalPrice'
import getDiscountAmount from './getDiscountAmount'

const getThaiBahtText = (n: number | string) => {
  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
  return `฿${n.toLocaleString('en', options)}`
}

export {
  createArrayFilterFunction,
  getThaiBahtText,
  getSubTotalPrice,
  getDiscountAmount,
}
