<template>
  <section class="best-sellers">
    <h2>Best Sellers</h2>
    <div class="best-seller-collection-items">
      <img :src="ringSeven" alt="" />
      <img :src="ringNine" alt="" />
      <img :src="ringEleven" alt="" />
      <img :src="ringSixteen" alt="" />
      <img :src="ringFour" alt="" />
    </div>
  </section>
</template>

<script>
import ringOne from "@/assets/images/ring-1.jpg";
import ringNine from "@/assets/images/ring-9.jpg";
import ringEleven from "@/assets/images/ring-11.jpg";
import ringFour from "@/assets/images/ring-4.jpg";
import ringSixteen from "@/assets/images/ring-16.jpg";
import ringSeven from "@/assets/images/ring-7.jpg";
export default {
  name: "landingPage",
  data() {
    return {
      ringOne,
      ringNine,
      ringEleven,
      ringFour,
      ringSixteen,
      ringSeven,
    };
  },
};
</script>
<style>
.best-sellers {
  padding: 1rem 10%;
  margin-top: 5rem;
  margin-bottom: 10rem;
}

.best-seller-collection-items {
  display: flex;
  gap: 1rem;
}

.best-seller-collection-items img {
  max-width: 300px;
  height: auto;
  border: solid white 1px;
  border-radius: 6px;
  margin-top: 0.5rem;
  cursor: pointer;
}

.best-seller-collection-items img:hover {
  transform: scale(1.05); /* Leichte Vergrößerung */
  transition: all 200ms ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
