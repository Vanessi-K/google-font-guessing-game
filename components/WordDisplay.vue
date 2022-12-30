<template>
  <GoogleFont :style="{'--family': font}" :text="text"></GoogleFont>
</template>

<script>
export default {
  name: "WordDisplay",
  props: {
    text: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>