<template>
  <navBar />
  <section class="contact-container">
    <h2>Contact Us</h2>
    <p>
      Welcome to SoulStones, where we craft unique jewelry pieces that speak to
      the soul. We value your feedback and are here to assist you with any
      inquiries, orders, or concerns. Please feel free to reach out to us
      through any of the following methods:
    </p>
    <h2>Customer Support</h2>
    <div class="customer-support">
      <h3>Email:</h3>
      <p>
        For general inquiries, order status, and support, please email us at:
      </p>
      <span>support@soulstones.com</span>
    </div>
    <div class="phone">
      <h3>Phone</h3>
      <p>To speak with our customer service team, please call:</p>
      <span>+1 (800) 123-4567 </span>
      <p>Our phone lines are open Monday to Friday, 9:00 AM - 6:00 PM (EST).</p>
    </div>
    <h2>Visit Us</h2>
    <div class="address">
      <h3>Address</h3>
      <p>
        If you would like to visit our showroom or send us mail, please use the
        following address:
      </p>
      <span>SoulStones Jewelry Boutique </span>
      <span>123 Gemstone Avenue </span>
      <span>New York, NY 10001 </span>
      <span>United States </span>
      <p>Our boutique is open Monday to Saturday, 10:00 AM - 7:00 PM (EST).</p>
    </div>
    <h2>Social Media</h2>
    <div class="social-media">
      <p>
        Stay connected with us through our social media channels for the latest
        updates, new arrivals, and special promotions:
      </p>
      <ul>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Facebook</li>
      </ul>
    </div>
  </section>
</template>

<script>
import navBar from "./navBar.vue";

export default {
  components: {
    navBar,
  },
};
</script>

<style scoped>
.contact-container {
  padding: 1rem 10%;
  margin-top: 5rem;
  margin-bottom: 10rem;
}

h2 {
  font-family: Charmonman;
  margin: 1rem 1rem 1rem 0;
  color: #906847;
}

h3 {
  margin: 1rem 0.5rem 0.5rem 0;
  font-style: italic;
  color: #5c432e;
}

.customer-support,
.phone,
.address,
.social-media {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.social-media {
  margin-bottom: 1rem;
}
.social-media li {
  list-style: none;
  margin-top: 0.5rem;
}
</style>
