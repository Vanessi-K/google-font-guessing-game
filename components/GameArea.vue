<template>
  <ClientOnly>
    <WordDisplay :font="guessFont" :text="randomWord"></WordDisplay>
    <div class="d-flex flex-row justify-content-center gap-5 flex-wrap">
      <ButtonChoseFont @choseFont="dissolveFonts" v-for="guessOption in guessOptions" :font="guessOption" :isCorrect="guessOption === guessFont" :dissolve="dissolve"></ButtonChoseFont>
    </div>
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
      startTime: new Date(),
      dissolve: false
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
    dissolveFonts(chosenFont) {
      const endTime = new Date();

      this.dissolve = true;
      setTimeout(_ => {
        this.verifyChoseFont(chosenFont, endTime)}, 2000, chosenFont, endTime);

    },
    verifyChoseFont(chosenFont, endTime) {
      console.log(this.guessFont)
      console.log(chosenFont)
      if(chosenFont === this.guessFont) {
        console.log("Correct!")
        const timespan = endTime - this.startTime;

        let bonusTimePoints = Math.floor((this.config.public.guessFontBonusPointsTimeInMilliSeconds - timespan) / 1000);
        if(bonusTimePoints > 0) {
          let points = this.config.public.basisPoints + bonusTimePoints
          this.$emit('correctGuess', points)
        } else {
          this.$emit('correctGuess', this.config.public.basisPoints)
        }
      } else {
        console.log("wrong guess")
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