import createArrayFilterFunction from './createArrayFilterFunction'
import getTotalPrice from './getTotalPrice'

const getThaiBahtText = (n: number | string) => `฿${n.toLocaleString('en')}`

export { createArrayFilterFunction, getThaiBahtText, getTotalPrice }
