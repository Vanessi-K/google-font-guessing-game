<template>
  <button>
    <GoogleFont @click="handleClick" :font="font" :style="{'--family': font}" :text="font"></GoogleFont>
  </button>
</template>

<script>
export default {
  name: "ChoseFont",
  emits: ['choseFont'],
  props: {
    font: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('choseFont', this.font)
    }
  }
}
</script>

<style scoped>

</style>