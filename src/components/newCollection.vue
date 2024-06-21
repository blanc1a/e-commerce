<template>
  <section class="new-collection">
    <h2>New Collection</h2>
    <div class="new-collection-items">
      <img :src="ringOne" alt="" />
      <img :src="ringTwo" alt="" />
      <img :src="ringThree" alt="" />
      <img :src="ringFour" alt="" />
      <img :src="ringFive" alt="" />
    </div>
  </section>
</template>
<script>
import ringOne from "@/assets/images/ring-1.jpg";
import ringTwo from "@/assets/images/ring-2.jpg";
import ringThree from "@/assets/images/ring-3.jpg";
import ringFour from "@/assets/images/ring-4.jpg";
import ringFive from "@/assets/images/ring-5.jpg";
export default {
  name: "landingPage",
  data() {
    return {
      ringOne,
      ringTwo,
      ringThree,
      ringFour,
      ringFive,
    };
  },
};
</script>
<style scoped>
.new-collection {
  padding: 1rem 10%;
  margin-top: 5rem;
}

.new-collection-items {
  display: flex;
  gap: 1rem;
}

.new-collection-items img {
  max-width: 300px;
  height: auto;
  border: solid white 1px;
  border-radius: 6px;
  margin-top: 0.5rem;
  cursor: pointer;
}

.new-collection-items img:hover {
  transform: scale(1.05); /* Leichte Vergrößerung */
  transition: all 200ms ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
