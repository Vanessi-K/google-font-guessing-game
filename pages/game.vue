<template>
  {{counter}}
  <br>
  <GameArea v-if="renderGame" v-bind:key="gameAreaKey" @correctGuess="addPoints" @wrongGuess="reloadGameArea" :guess-font=guessFont :option-fonts=optionFonts></GameArea>
</template>

<script>
import GameArea from "~/components/GameArea.vue";

export default {
  name: "game",
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
      gameAreaKey: 0,
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
      this.reloadGameArea()
    },
    reloadGameArea() {
      this.guessFont = this.getRandomFont();
      this.optionFonts = this.getRandomFonts(this.config.public.optionFontsNumber);
      this.gameAreaKey++;
    },
    getRandomFont() {
      let randomIndex = Math.random() * (this.mostPopularFonts.length);
      randomIndex = Math.floor(randomIndex);
      return this.mostPopularFonts[randomIndex].family;
    },
    getRandomFonts(number) {
      let fontsArray = [];
      for(let i = 0; i < number; i++) {
        fontsArray.push(this.getRandomFont())
      }
      return fontsArray;
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