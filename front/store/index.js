export const state = () => ({
  price: 0,
})

export const mutations = {
  setPrice(state, load){
    state.price=load
  }
}

export const actions = {
  async getPriceAc({ commit }){
  const data = await this.$axios.$get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30')
  commit('setPrice', data)
  }
}

export const getters = {
  getPrice (store){
    return store.price
  }
}
