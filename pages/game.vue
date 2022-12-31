<template>
  <div class="my-5 d-flex flex-column align-items-center">
    <h1 class="mt-5">Guess the Google-Font</h1>
    <Game></Game>
    <button class="big-margin btn btn-outline-light">End game</button>
  </div>

</template>

<script>

export default {
  name: "game"
}
</script>

<style scoped>
.big-margin {
  margin-top: 10rem;
}
</style>