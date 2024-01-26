<template>
  <div>
    <h1>сейчас</h1>
   bitoc  {{ bitcoinPrice }}$
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      const bitcoinPrice = data.bitcoin.usd;
      return {
        bitcoinPrice
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
