<template>
  <button>
    <GoogleFont :font="font" :style="{'--family': font}" :text="font"></GoogleFont>
  </button>
</template>

<script>
export default {
  name: "ChoseFont",
  props: {
    font: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>