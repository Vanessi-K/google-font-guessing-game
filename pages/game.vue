<template>
  <Game></Game>
  <div class="footer w-100 py-3 px-5 d-flex gap-5 justify-content-around">
    <NuxtLink to="/">Home 🏡</NuxtLink>
    <NuxtLink to="/end">End Game ❌</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "game"
}
</script>

<style scoped>
.footer {
  background-color: black;
  border-top: 1px solid white;
}

.footer a {
  text-decoration: underline;
  color: white;
}

.footer a:hover {
  font-weight: bold;
}

</style>