<template>
  <section class="logo-area">
    <img class="logo" :src="logo" alt="" />
    <div class="slogan">
      <p>Discover our unique Jewlery that resonates with your soul.</p>
      <img :src="navLogo" alt="" />
    </div>
  </section>
</template>

<script>
import logo from "@/assets/images/logo-no-background.png";
import navLogo from "@/assets/images/soulstones-favicon-color.png";
export default {
  name: "landingPage",
  data() {
    return {
      logo,
      navLogo,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-area {
  background-color: black;
  padding: 1rem 10%;
  margin-top: 5rem;
}

.logo {
  width: 350px;
}

.slogan {
  margin-top: 2rem;
  display: flex;
  font-family: Cedarville Cursive;
  font-size: 35px;
}

.slogan img {
  width: 80px;
  position: relative;
  right: -15px;
  top: 0px;
  transform: rotate(15deg);
}
</style>
