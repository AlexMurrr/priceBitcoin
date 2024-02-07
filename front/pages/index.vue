<template>
  <div>
    <h1>сейчас</h1>
   <p>bitoc  {{ bitcoinPrice }}$</p>
    <!-- <p> cap {{ marketCapBitcoin }}$</p> -->
   <p>etherium {{ ethereumPrice }}$</p>
   <p>tron {{ tronPrice }}$</p>
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
      const nano = await response1.json();
      const responseEth = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const eth = await responseEth.json();
      const resTron = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=usd');
      const tron = await resTron.json();

      // const resBicoinCap = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
      // const bitcoinCap = await resBicoinCap.json();

      // const marketCapBitcoin = bitcoinCap.market_data.market_cap.usd;

      const bitcoinPrice = data.bitcoin.usd;
      const ethereumPrice = eth.ethereum.usd;
      const nanoPrice = nano.nano.usd;
      const tronPrice = tron.tron.usd;

      return {
        bitcoinPrice, nanoPrice, ethereumPrice, tronPrice
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
