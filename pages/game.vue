<template>
  <GoogleFont v-for="font in mostPopularFonts" :font="font" :style="{'--family': font.family}"></GoogleFont>
  <GoogleFont v-for="font in mostPopularFonts" :font="font" :style="{'--family': font.family}"></GoogleFont>
</template>

<script>
export default {
  name: "game",
  async setup() {
    const runtimeConfig = useRuntimeConfig()
    console.log(runtimeConfig)
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