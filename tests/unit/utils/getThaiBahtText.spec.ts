import { getThaiBahtText } from '@/utils'

describe('[Util] Get Thai Baht Text :', () => {
  it('should contain Thai baht sign (฿)', () => {
    const value = 123
    const result = getThaiBahtText(value)
    expect(result).toMatch(/฿/)
  })
  it('should render comma if value >= 1000', () => {
    const value = 1000
    const result = getThaiBahtText(value)
    expect(result).toMatch(/,/)
  })
  it('should not render comma if value < 1000', () => {
    const value = 999
    const result = getThaiBahtText(value)
    expect(result).not.toMatch(/,/)
  })
})
