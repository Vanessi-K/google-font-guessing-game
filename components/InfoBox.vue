<template>
  <div class="p-4 m-5" :class="[style]">
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
    style: {
      type: String,
      default: "outline"
    }
  }
}
</script>

<style scoped>

div {
  border: 1px solid #f8f9fa;
  box-shadow:  0 0 25px #444;
  max-width: 500px;
}

div.filled {
  color: black;
  background: #f8f9fa;
}

div.outline {
  color: #f8f9fa;
}

p {
  margin: 0;
}

</style>