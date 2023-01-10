<template>
  <h4 class="mt-3">{{counter}} Points</h4>
  <br>
  <GameArea v-if="renderGame" v-bind:key="gameAreaKey" @correctGuess="addPoints" @wrongGuess="reloadGameArea" :guess-font=guessFont :option-fonts=optionFonts></GameArea>
  <Loader v-else></Loader>
</template>

<script>
import GameArea from "~/components/GameArea.vue";

export default {
  name: "Game",
  components: {GameArea},
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    const {data, error} = await useFetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=' + runtimeConfig.public.googleApiKey)

    return { config: runtimeConfig, fontData:data, fontError:error}
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
    this.mostPopularFonts = this.fontData.items.slice(0, this.config.public.mostPopularFontsNumber);
    this.reloadGameArea()
    //useLoadGoogleFonts(this.mostPopularFontsFamily, this.config.public.displayFontWeight)
  },
  methods: {
    addPoints(points) {
      this.counter += points;
      this.countCorrectFonts++;
      this.reloadGameArea()
    },
    reloadGameArea() {
      this.guessFont = "";
      this.optionFonts = [];
      do {
        this.guessFont = this.getRandomFont();
      } while (!this.fontIsUnique(this.guessFont , this.optionFonts));
      this.optionFonts = this.getUniqueRandomFonts(this.config.public.optionFontsNumber);
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