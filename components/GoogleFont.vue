<template>
  <span>{{font.family}}</span>
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
      return this.font + ":" + this.weight
    }
  },
  props: {
    font: {
      type: String,
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
  span {
    font-family: var(--family);
  }
</style>