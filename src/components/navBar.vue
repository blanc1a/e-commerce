<template>
  <header>
    <nav class="navigation">
      <!--router-link to verwenden statt <a>-->
      <a class="logo" href="">SoulStones</a>
      <a href="">Home</a>
      <router-link to="/ourProducts">Our Products</router-link>
      <a href="">Contact</a>
    </nav>
  </header>
</template>

<script>
import navLogo from "@/assets/images/soulstones-favicon-color.png";
export default {
  name: "navBar",
  data() {
    return {
      navLogo,
    };
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: black;
}

.navigation {
  padding: 1rem 10%;
  border-bottom: solid white 1px;
}

.navigation a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.logo {
  width: 30px;
  margin-right: auto;
}
</style>
