<template>
  <div class="d-flex flex-column align-items-center container">
    <div class="d-flex gap-5 mt-5 flex-wrap">
      <PointDisplay :points="gameStore.guessedFonts" text="Guessed fonts"></PointDisplay>
      <PointDisplay :points="gameStore.currentPoints" text="Total points"></PointDisplay>
    </div>
    <InfoBox class="mt-4" text="The total points are not only calculated, by how many fonts you guessed correctly, it is also factored in how fast you guessed them."></InfoBox>
    <div class="d-flex gap-5 my-5 flex-wrap">
      <NuxtLink to="/"><button class=" btn c-btn-light">Home 🏡</button></NuxtLink>
      <NuxtLink to="/game"><button class=" btn c-btn-light">Restart Game 🔄</button></NuxtLink>
    </div>
  </div>
</template>

<script>

export default {
  name: "end.vue",
  setup() {
    const gameStore = useGameStore()
    return {gameStore}
  }
}
</script>

<style scoped>

</style>