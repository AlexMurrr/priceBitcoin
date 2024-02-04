<template>
  <div>
    <h1>месяц назад</h1>
<p>{{ naam.prices }}</p>
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
    await this.$store.dispatch('getPriceAc');
  },

  methods: {

  },
  computed: {
    naam (){
      return this.$store.getters.getPrice;
    }
  }
}
</script>
