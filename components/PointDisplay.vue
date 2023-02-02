<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-3">
    <p class="highlight-number bg-black text-white py-2 px-4 ">{{points}}</p>
    <p v-if="text" class="mt-3 h3">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "PointDisplay",
  props: {
    points: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>

.highlight-number {
  font-size: 5rem;
  font-weight: 700;
}

</style>