<template>
  <div class="row container mt-5">
    <div class="col-12 col-md-6 mt-1 mb-5 order-md-2">
      <p>In this game you can test your knowledge, about one of the biggest public font libraries.</p>
      <p>You will be shown a random word, than you have to guess (or know 😉), in which font-family (from three provided-ones) the word is written in. The available fonts to guess are always the 100 most popular-fonts at that time.</p>
      <p>You get points for each correctly guessed font-family. The game has no ending. You yourself decide for how long you want to continue to play.</p>
      <NuxtLink to="/game"><button class="btn btn-light mt-3">Start Guessing ⁉</button></NuxtLink>
    </div>
    <div class="col-12 col-md-6 d-flex flex-column order-md-1">
      <InfoBox text="This game (as the name says) uses Google-Fonts. The to-be-guessed-fonts are always based on the currently most popular fonts. Therefore, the Google-Fonts-API is used, and font files are always loaded dynamically from Google. When playing this game you agree that data is being sent to Google." cardStyle="filled"></InfoBox>
      <InfoBox class="mt-5" text="The total points are not only calculated, by how many fonts you guessed correctly, it is also factored in how fast you guessed them."></InfoBox>
    </div>
  </div>

</template>

<script>

export default {
  name: "index"
}
</script>

<style scoped>

</style>