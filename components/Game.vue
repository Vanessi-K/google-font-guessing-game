<template>
  <h4 class="mt-3">{{gameStore.currentPoints}} Points</h4>
  <br>
  <GameArea v-if="renderGame" v-bind:key="gameAreaKey" @correctGuess="addPoints" @wrongGuess="reloadGameArea" :guess-font=guessFont :option-fonts=optionFonts></GameArea>
  <Loader v-else></Loader>
</template>

<script>
export default {
  name: "Game",
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    const {data, error} = await useFetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=' + runtimeConfig.public.googleApiKey)
    const gameStore = useGameStore()

    return { config: runtimeConfig, fontData:data, fontError:error, gameStore}
  },
  data() {
    return {
      mostPopularFonts: [],
      guessFont: "",
      optionFonts: [],
      counter: 0,
      countCorrectFonts: 0,
      gameAreaKey: 0,
      startTime: null
    }
  },
  mounted() {
    this.gameStore.$reset()

    this.mostPopularFonts = this.fontData.items.slice(0, this.config.public.mostPopularFontsNumber);
    this.reloadGameArea()
    //useLoadGoogleFonts(this.mostPopularFontsFamily, this.config.public.displayFontWeight)
  },
  methods: {
    addPoints(points) {
      this.gameStore.addPoints(points)
      this.gameStore.addGuessedFont()

      this.reloadGameArea()
    },
    reloadGameArea() {
      this.guessFont = "";
      this.optionFonts = [];
      this.optionFonts = this.getUniqueRandomFonts(this.config.public.optionFontsNumber);
      do {
        this.guessFont = this.getRandomFont();
      } while (!this.fontIsUnique(this.guessFont , this.optionFonts));
      this.gameAreaKey++;
    },
    getRandomFont() {
      let randomIndex = Math.random() * (this.mostPopularFonts.length);
      randomIndex = Math.floor(randomIndex);
      return this.mostPopularFonts[randomIndex].family;
    },
    getUniqueRandomFonts(number) {
      let fontsArray = [];
      for(let i = 0; i < number; i++) {
        let randomFont;
        do {
          randomFont = this.getRandomFont();
        } while (!this.fontIsUnique(randomFont, fontsArray));
        fontsArray.push(randomFont)
      }
      return fontsArray;
    },
    fontIsUnique(validationFont, fontGroup) {
      return !fontGroup.includes(validationFont);
    }
  },
  computed: {
    renderGame() {
      return this.guessFont !== "" && this.optionFonts?.length > 0;
    }
  }
}
</script>

<style scoped>

</style>