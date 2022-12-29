<template>
  <span>{{text}}</span>
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
    },
    text: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
  span {
    font-family: var(--family);
  }
</style>