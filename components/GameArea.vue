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
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    return { config: runtimeConfig}
  },
  data() {
    return {
      randomWord: "",
      startTime: new Date()
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
      const endTime = new Date();
      if(chosenFont === this.guessFont) {
        const timespan = endTime - this.startTime;

        let bonusTimePoints = Math.floor((this.config.public.guessFontBonusPointsTimeInMilliSeconds - timespan) / 1000);
        if(bonusTimePoints > 0) {
          let points = this.config.public.basisPoints + bonusTimePoints
          this.$emit('correctGuess', points)
        } else {
          this.$emit('correctGuess', this.config.public.basisPoints)
        }
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