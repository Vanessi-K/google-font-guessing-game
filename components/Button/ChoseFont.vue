<template>
  <button @click="handleClick" class="d-flex justify-content-center align-items-center btn" :class="[{'correct': isCorrect && dissolve}, {'wrong': !isCorrect && dissolve}]">
    <GoogleFont :font="font" :style="{'--family': font}" :text="font"></GoogleFont>
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
    },
    isCorrect: {
      type: Boolean,
      default: false
    },
    dissolve: {
      type: Boolean,
      default: false
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

button {
  font-size: 2rem;
  min-height: 5rem;
  padding: 0 2rem;
}

.btn {
  background: #222;
  border: 1px solid #222;
  color: #f8f9fa;
  box-shadow:  0 0 25px #444
}

.btn:hover {
  background: #333;
  border: #333;
}

.btn.correct {
  box-shadow:  0 0 25px #2aff00;
  border:  1px solid #2aff00;
}

.btn.wrong {
  box-shadow:  0 0 25px #ff0006;
  border:  1px solid #ff0006;
}

</style>