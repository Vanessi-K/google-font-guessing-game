<template>
  <p >{{font.family}}</p>
</template>

<script>


export default {
  name: "GoogleFont",
  mounted() {
    WebFont.load({
      google: {
        families: [this.fontToLoad]
      }
    });
  },
  computed: {
    fontToLoad() {
      return this.font.family + ":" + this.weight
    }
  },
  props: {
    font: {
      type: Object,
      required: true
    },
    weight: {
      type: String,
      default: 'regular'
    }
  },
}
</script>

<style scoped lang="scss">

  p {
    font-family: var(--family);
  }
</style>