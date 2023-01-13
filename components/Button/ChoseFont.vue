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
  font-size: 3rem;
  padding: 0 2rem;
}

.btn {
  background: #f8f9fa;
  color: #222;
  border-radius: 0;
  min-height:8rem;
  height: 15vw;
  border-top: 10px solid #f8f9fa;
  border-bottom: 10px solid #f8f9fa;
}

.btn:hover {
  background: #e1e1e1;
  border-top: 10px solid #e1e1e1;
  border-bottom: 10px solid #e1e1e1;
}

.btn.correct {
  border-top: 10px solid #00f500;
  background-color: #bbffbb;
  border-bottom: 10px solid #bbffbb;
}

.btn.wrong {
  border-top: 10px solid #ff0000;
  background-color: #ffbaba;
  border-bottom: 10px solid #ffbaba;
}

</style>