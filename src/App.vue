<template>
  <navBar />
  <landingPage />
  <newCollection />
  <bestSellers />
</template>

<script>
//components müssen importiert werden und im export defeulat{} benannt werden, erst dann können sie im template genutzt werden
import landingPage from "./components/landingPage.vue";
import navBar from "./components/navBar.vue";
import newCollection from "./components/newCollection.vue";
import bestSellers from "./components/bestSellers.vue";
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

<style>
@font-face {
  font-family: Cedarville Cursive;
  src: url(/src/fonts/Cedarville\ Cursive.ttf);
}
@font-face {
  font-family: Charmonman;
  src: url(/src/fonts/Charmonman.ttf);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  height: 100vh;
  color: white;
}
</style>
