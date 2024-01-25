<template>
  <div>
    <h1>неделя назад</h1>
{{ date }}<br/>
{{ price }}
  </div>
</template>

<script>
export default {
  name: 'weekPage',
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1');
      const prices = response.data.prices;
      const date = prices.map(function (data) {
      return new Date(data[0]).toLocaleDateString();
    });
    const price = prices.map(date => date[1]);
      return { date, price };
    } catch (error) {
      console.error('Ошибка при получении данных о цене биткойна:', error);
    }
  }
}
</script>
