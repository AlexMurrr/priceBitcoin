export const state = () => ({
  priceMonth: {},
  priceYear: {},
})

export const mutations = {
  setPriceMonth(state, load){
    state.priceMonth=load
  },
  getPriceYear(state, load){
    state.priceYear=load
  },
}

export const actions = {
  async getPriceMonth({ commit }){
    const data = await this.$axios.$get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30')
    commit('setPriceMonth', data)
  },
  async getPriceYear({ commit }){
    const data = await this.$axios.$get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365')
    commit('getPriceYear', data)
    },
}

export const getters = {
  getPriceMonth (store){
    return store.priceMonth
  },
  getPriceYear(store){
    return store.priceYear
  },
}
