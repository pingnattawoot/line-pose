import { mutations } from '@/store/modules/cash'

describe('SET_CASH_AMOUNT', () => {
  it('set the cash correctly', () => {
    const state = { cash: 0 }
    const newAmount = 100
    mutations.SET_CASH_AMOUNT(state, newAmount)
    expect(state).toEqual({ cash: 100 })
  })
})
