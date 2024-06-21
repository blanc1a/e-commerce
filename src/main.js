import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; //hinzufügen, um router zu nutzen

createApp(App).use(router).mount("#app"); //use(router) für router
