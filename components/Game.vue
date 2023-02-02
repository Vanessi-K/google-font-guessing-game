<template>
  <h4 class="mt-3">{{gameStore.currentPoints}} Points</h4>
  <GameArea v-if="renderGame" v-bind:key="gameAreaKey" @correctGuess="addPoints" @wrongGuess="reloadGameArea" :correct-font=correctFont :wrong-fonts=wrongFonts></GameArea>
  <Loader v-else></Loader>
</template>

<script>
export default {
  name: "Game",
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    const {data, error} = await useFetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=' + runtimeConfig.public.googleApiKey)
    const gameStore = useGameStore()
    const fontStore = useGoogleFontStore()

    return { config: runtimeConfig, fontData:data, fontError:error, gameStore, fontStore}
  },
  data() {
    return {
      mostPopularFonts: [],
      optionFonts: null,
      gameAreaKey: 0,
    }
  },
  mounted() {
    this.gameStore.$reset()
    this.mostPopularFonts = this.fontData.items.slice(0, this.config.public.mostPopularFontsNumber);
    this.reloadGameArea()
  },
  methods: {
    addPoints(points) {
      this.gameStore.addPoints(points)
      this.gameStore.addGuessedFont()

      this.reloadGameArea()
    },
    reloadGameArea() {
      this.optionFonts = null;
      this.optionFonts = this.fontStore.getUniqueRandomFonts(this.mostPopularFonts,this.config.public.optionFontsNumber + 1);
      this.gameAreaKey++;
    },
  },
  computed: {
    renderGame() {
      return this.optionFonts !== null;
    },
    correctFont() {
      return this.optionFonts[0]
    },
    wrongFonts() {
      return this.optionFonts.slice(1)
    }
  }
}
</script>

<style scoped>

</style>