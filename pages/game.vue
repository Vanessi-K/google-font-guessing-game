<template>
  <GameArea guess-font="Open Sans" :option-fonts="['Roboto','Noto Sans']"></GameArea>
  <GoogleFont v-for="font in mostPopularFontsFamily" :font="font" :style="{'--family': font}"></GoogleFont>
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
      mostPopularFonts: []
    }
  },
  mounted() {
    this.mostPopularFonts = this.fontData.items.slice(0, this.config.public.mostPopularFontsNumber);
    //useLoadGoogleFonts(this.mostPopularFontsFamily, this.config.public.displayFontWeight)
  },
  computed: {
    mostPopularFontsFamily() {
      return this.mostPopularFonts.reduce((acc, font) => {
        acc.push(font.family)
        return acc
      }, [])
    }
  }
}
</script>

<style scoped>

</style>