<template>
  <div class="visibilityBar d-flex justify-content-center align-items-center">
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

div {
  font-size: 4rem;
  min-height: 7rem;
  color: black;
  margin:6rem 0;
}

.visibilityBar {
  background: linear-gradient(to right, white 50%, black 50%);
  display: inline-block;
  animation: gradient 5s linear;
  background-size: 210% 100%;
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