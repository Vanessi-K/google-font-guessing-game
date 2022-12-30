<template>
  <ClientOnly>
    {{randomWord}}
    <ButtonChoseFont v-for="guessOption in guessOptions" :font="guessOption"></ButtonChoseFont>
  </ClientOnly>
</template>

<script>
export default {
  name: "GameArea",
  data() {
    return {
      randomWord: ""
    }
  },
  async mounted() {
    const {data} = await useFetch('https://random-word-api.herokuapp.com/word')
    this.randomWord = data;
    this.randomWord = this.randomWord[0]
  },
  computed: {
    guessOptions() {
      let optionsArray = this.optionFonts;
      let randomIndex = Math.random() * (optionsArray.length + 1);
      randomIndex = Math.floor(randomIndex);
      optionsArray.splice(randomIndex, 0, this.guessFont);
      return optionsArray;
    }
  },
  props: {
    guessFont: {
      type: String,
      required: true
    },
    optionFonts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>