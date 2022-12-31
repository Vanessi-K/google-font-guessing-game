<template>
  <div class="visibilityBar">
    <GoogleFont :font="font" :style="{'--family': font}" :text="text"></GoogleFont>
  </div>
</template>

<script>
export default {
  name: "WordDisplay",
  props: {
    text: {
      type: String,
      required: true
    },
    font: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.visibilityBar {
  background: linear-gradient(to right, white 50%, black 50%);
  display: inline-block;
  animation: gradient 5s linear;
  background-size: 200% 100%;
  background-position: left;
}

@keyframes gradient {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}


</style>