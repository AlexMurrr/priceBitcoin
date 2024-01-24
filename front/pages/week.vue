<template>
  <div>
    <h1>неделя назад</h1>
{{ chart}}
  </div>
</template>

<script>
export default {
  name: 'weekPage',
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
      const chart = response.data.prices;
      return { chart };
    } catch (error) {
      console.error('Ошибка при получении данных о цене биткойна:', error);
    }
  }
}
</script>
