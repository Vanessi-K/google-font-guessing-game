<template>
  <ClientOnly>
    <WordDisplay :font="correctFont" :text="randomWord"></WordDisplay>
    <div class="row w-100">
      <ButtonChoseFont class="col-12 col-sm-6 col-md-3" @choseFont="resolveFonts" v-for="guessOption in guessOptions" :font="guessOption" :isCorrect="guessOption === correctFont" :resolve="resolve"></ButtonChoseFont>
    </div>
  </ClientOnly>
</template>

<script>

export default {
  name: "GameArea",
  emits: ['correctGuess', 'wrongGuess'],
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    return { config: runtimeConfig}
  },
  data() {
    return {
      randomWord: "",
      startTime: new Date(),
      resolve: false
    }
  },
  async mounted() {
    const {data} = await useFetch('https://random-word-api.herokuapp.com/word')
    this.randomWord = data;
    this.randomWord = this.randomWord[0]
  },
  computed: {
    guessOptions() {
      let optionsArray = this.wrongFonts.slice();
      let randomIndex = Math.floor(Math.random() * (optionsArray.length + 1));
      optionsArray.splice(randomIndex, 0, this.correctFont);
      return optionsArray;
    }
  },
  methods: {
    resolveFonts(chosenFont) {
      const endTime = new Date();

      this.resolve = true;
      setTimeout(_ => {
        this.verifyChoseFont(chosenFont, endTime)}, 2000, chosenFont, endTime);
    },
    verifyChoseFont(chosenFont, endTime) {
      if(chosenFont === this.correctFont) {
        const timespan = endTime - this.startTime;

        let bonusTimePoints = Math.floor((this.config.public.guessFontBonusPointsTimeInMilliSeconds - timespan) / 1000);
        bonusTimePoints = bonusTimePoints > 0 ? bonusTimePoints : 0;

        this.$emit('correctGuess', this.config.public.basisPoints + bonusTimePoints)

      } else {
        this.$emit('wrongGuess')
      }
    }
  },
  props: {
    correctFont: {
      type: String,
      required: true
    },
    wrongFonts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>