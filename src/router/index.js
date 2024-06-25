import home from "@/components/home.vue";
import ourProducts from "@/components/ourProducts.vue";
import contactOverview from "@/components/contactOverview.vue";
import productPage from "@/components/productPage.vue";

import { createWebHistory, createRouter } from "vue-router";
const routes = [
  { path: "/", name: "home", component: home },
  { path: "/products", name: "products", component: ourProducts },
  { path: "/contact", name: "contact", component: contactOverview },
  { path: "/product/:id", name: "product", component: productPage },
  //id muss angesprochen werden, um das richtige produkt auszuwählen
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
