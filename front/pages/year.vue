<template>
  <div>
    <h1>год назад</h1>
    {{ pricesYear.prices }}
  </div>
</template>

<script>
export default {
  name: 'monthPage',
  data(){
    return {

    }
  },

  async fetch (){
    await this.$store.dispatch('getPriceYear');
  },

  methods: {

  },
  
  computed: {
    pricesYear (){
      return this.$store.getters.getPriceYear;
    }
  }
}
</script>
