<template>
  <button @click="handleClick" class="d-flex justify-content-center align-items-center btn" :class="[{'correct': isCorrect && resolve}, {'wrong': !isCorrect && resolve}]">
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
    resolve: {
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
  background: black;
  color: white;
  border-radius: 0;
  min-height:8rem;
  height: 15vw;
  border-top: 10px solid black;
  border-bottom: 10px solid black;
}

.btn:hover {
  background: #2f2f2f;
  border-top: 10px solid #2f2f2f;
  border-bottom: 10px solid #2f2f2f;
}

.btn.correct {
  border-top: 10px solid #23ce23;
  /*background-color: #bbffbb;*/
  /*border-bottom: 10px solid #bbffbb;*/
}

.btn.wrong {
  border-top: 10px solid #da1d1d;
  /*background-color: #ffbaba;*/
  /*border-bottom: 10px solid #ffbaba;*/
}

</style>