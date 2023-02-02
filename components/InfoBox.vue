<template>
  <div class="p-4 m-2" :class="[cardStyle]">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    text: {
      type: String,
      required: true
    },
    cardStyle: {
      type: String,
      default: "outline"
    }
  }
}
</script>

<style scoped>

div {
  border: 1px solid black;
  box-shadow:  0 0 25px #cbcbcb;
  max-width: 500px;
}

div.filled {
  color: white;
  background: black;
}

div.outline {
  color: black;
}

p {
  margin: 0;
}

</style>