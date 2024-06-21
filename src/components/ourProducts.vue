<template>
  <navBar />
  <productRange />
</template>
<script>
import navBar from "./navBar.vue";
import productRange from "./productRange.vue";
export default {
  components: {
    navBar,
    productRange,
  },
};
</script>
<style scoped>
p {
  color: pink;
}
</style>
