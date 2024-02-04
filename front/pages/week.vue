<template>
  <div>
    <h1>неделя назад</h1>
 {{ priceUniqDay }} <br><br>
 {{ dateU }} <br><br>
 {{ price }}
  </div>
</template>

<script>
export default {
  name: 'weekPage',

  data(){
    return{
      priceDay: [1],
    }
  },

  async asyncData({ $axios, store }) {
    try {
      const response = await $axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
      const prices = response.data.prices;

      const date = prices.map(function (data) {
      return [new Date(data[0]).toLocaleDateString(), data[1]]
    });

    function uniqueFirstValue(arr){
    let uniqueFirstValues = [];
    let uniqueFirstKeys = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueFirstKeys.includes(arr[i][0])) {
        uniqueFirstKeys.push(arr[i][0]);
        uniqueFirstValues.push(arr[i]);
      }
    }
    return uniqueFirstValues;
  }

      const priceUniqDay = uniqueFirstValue(date);

      const dateU = priceUniqDay.map(function (data) {
      return data[0];
    });
      const price = priceUniqDay.map(date => date[1].toFixed(1));

      return { priceUniqDay, dateU, price};
    } catch (error) {
      console.error('Ошибка при получении данных о цене биткойна:', error);
    }
  }

}
</script>
