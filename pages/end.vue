<template>
  <div class="d-flex flex-column align-items-center container">
    <div class="d-flex gap-5 mt-5 flex-wrap">
      <PointDisplay :points="correctFonts" text="Guessed fonts"></PointDisplay>
      <PointDisplay :points="points" text="Total points"></PointDisplay>
    </div>
    <div class="d-flex gap-5 my-5 flex-wrap">
      <NuxtLink to="/"><button class=" btn btn-outline-light">Home</button></NuxtLink>
      <NuxtLink to="/game"><button class=" btn btn-light">Restart Game</button></NuxtLink>
    </div>
    <InfoBox class="mt-4" text="The total points are not only calculated, by how many fonts you guessed correctly, it is also factored in how fast you guessed them."></InfoBox>
  </div>
</template>

<script>

export default {
  name: "end.vue",
  data() {
    return {
      points: 0,
      correctFonts: 0,
    }
  },
  mounted() {
    this.points = localStorage.getItem("points") ? localStorage.getItem("points") : 0;
    this.correctFonts = localStorage.getItem("correctFonts") ? localStorage.getItem("correctFonts") : 0;
  }
}
</script>

<style scoped>

</style>