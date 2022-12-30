<template>
  <ClientOnly>
    <WordDisplay :font="guessFont" :text="randomWord"></WordDisplay>
    <ButtonChoseFont @choseFont="verifyChoseFont" v-for="guessOption in guessOptions" :font="guessOption"></ButtonChoseFont>
  </ClientOnly>
</template>

<script>
import WordDisplay from "~/components/WordDisplay.vue";

export default {
  name: "GameArea",
  components: {WordDisplay},
  emits: ['correctGuess', 'wrongGuess'],
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
      let optionsArray = this.optionFonts.slice();
      let randomIndex = Math.random() * (optionsArray.length + 1);
      randomIndex = Math.floor(randomIndex);
      optionsArray.splice(randomIndex, 0, this.guessFont);
      return optionsArray;
    }
  },
  methods: {
    verifyChoseFont(chosenFont) {
      if(chosenFont === this.guessFont) {
        this.$emit('correctGuess', 1)
      } else {
        this.$emit('wrongGuess')
      }
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