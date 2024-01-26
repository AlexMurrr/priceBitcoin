<template>
  <div>
    <h1>сейчас</h1>
   <p>bitoc  {{ bitcoinPrice }}$</p>
   <p>nano {{ nanoPrice }}$</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      const response1 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=nano&vs_currencies=usd');
      const data1 = await response1.json();
      const bitcoinPrice = data.bitcoin.usd;
      const nanoPrice = data1.nano.usd;
      return {
        bitcoinPrice, nanoPrice
      };
    } catch (error) {
      console.error(error);
      return {
        bitcoinPrice: null
      };
    }
  }
}
</script>
