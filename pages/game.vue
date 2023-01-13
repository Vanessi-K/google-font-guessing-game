<template>
  <div class="d-flex flex-column align-items-center w-100">
    <Game></Game>
    <NuxtLink to="/end"><button class="big-margin btn btn-outline-light mb-5">End game</button></NuxtLink>
  </div>
</template>

<script>
export default {
  name: "game",
}
</script>

<style scoped>

</style>