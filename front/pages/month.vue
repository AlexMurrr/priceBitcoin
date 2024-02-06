<template>
  <div>
    <h1>месяц назад</h1>
<p>{{ pricesMonth }}</p>
  </div>
</template>

<script>
export default {
  name: 'monthPage',
  data(){
    return {
      priceForMonth: [],
    }
  },

  async fetch (){
    await this.$store.dispatch('getPriceMonth');
  },

  methods: {

  },
  computed: {
    pricesMonth (){
      return this.$store.getters.getPriceMonth.prices;
    }
  }
}
</script>
