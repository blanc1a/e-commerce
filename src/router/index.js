import home from "@/components/home.vue";
import ourProducts from "@/components/ourProducts.vue";
import contactOverview from "@/components/contactOverview.vue";

import { createWebHistory, createRouter } from "vue-router";
const routes = [
  { path: "/", name: "home", component: home },
  { path: "/products", name: "products", component: ourProducts },
  { path: "/contact", name: "contact", component: contactOverview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
