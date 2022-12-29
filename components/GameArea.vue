<template>
 {{guessOptions}}
</template>

<script>
export default {
  name: "GameArea",
  computed: {
    guessOptions() {
      let optionsArray = this.optionFonts;
      let randomIndex = Math.random() * (optionsArray.length + 1);
      randomIndex = Math.floor(randomIndex);
      optionsArray.splice(randomIndex, 0, this.guessFont);
      return optionsArray;
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