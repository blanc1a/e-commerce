<template>
  <navBar />
  <landingPage />
  <newCollection />
  <bestSellers />
</template>
<script>
//components müssen importiert werden und im export defeulat{} benannt werden, erst dann können sie im template genutzt werden
import landingPage from "./landingPage.vue";
import navBar from "./navBar.vue";
import newCollection from "./newCollection.vue";
import bestSellers from "./bestSellers.vue";
export default {
  name: "App",
  components: {
    landingPage,
    navBar,
    newCollection,
    bestSellers,
  },
};
//!!! um zwischen verschiedenen Seiten oder Komponenten zu navigieren, benutzt man den vue router => ermöglicht reibungslose Navigation ohne das Neuladen der gesamten Seite
//Step1: npm install vue-router
//Step2: router.js erstellen, um die Routen zu konfigurieren
</script>
<style scoped></style>
