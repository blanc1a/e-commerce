<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: Cedarville Cursive;
  src: url(/src/fonts/Cedarville\ Cursive.ttf);
}
@font-face {
  font-family: Charmonman;
  src: url(/src/fonts/Charmonman.ttf);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  height: 100vh;
  color: white;
}
</style>
