export type State = {
  cash: number
}

const MutationType = {
  SET_CASH_AMOUNT: 'SET_CASH_AMOUNT',
}

const state: State = {
  cash: 0,
}

export const mutations = {
  [MutationType.SET_CASH_AMOUNT]: (state: State, newAmount: number) => {
    state.cash = newAmount
  },
}

export const ActionType = {
  setCash: 'setCash',
}

const actions = {
  [ActionType.setCash]: ({ commit }, newAmount: number) => {
    commit(MutationType.SET_CASH_AMOUNT, newAmount)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
