<template>
  <navBar />
  <section class="product-info">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Product Image" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
  </section>
</template>
<script>
import navBar from "./navBar.vue";

export default {
  default() {
    return {
      product: {},
    };
  },
  created() {
    const productID = this.$route.params.id;
    this.fetchProduct(productID);
  },
  components: {
    navBar,
  },
  method: {
    fetchProduct(productID) {},
  },
};
</script>

<style scoped></style>
