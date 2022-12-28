<template>
  <p v-for="font in mostPopularFonts">{{font.family}}</p>
</template>

<script>
export default {
  name: "game",
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
  },
  created() {
    console.log(this.data)
  }
}
</script>

<style scoped>

</style>